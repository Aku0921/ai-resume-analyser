from fastapi import FastAPI, UploadFile, File, Form
import shutil

from backend.parser.extract_text import extract_text_from_pdf

from backend.preprocessing.preprocess import preprocess_text

from backend.similarity.similarity import calculate_similarity

from backend.skills.extract_skills import extract_skills

from backend.insights.skill_gap import (
    identify_skill_gaps,
    calculate_skill_match_percentage
)


app = FastAPI()


@app.get("/")
def home():

    return {
        "message": "AI Resume Analyzer API Running"
    }


@app.post("/analyze-resume")
async def analyze_resume(

    resume: UploadFile = File(...),

    job_description: str = Form(...)
):

    # Save uploaded file
    file_path = f"backend/uploads/{resume.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    # Step 1 — Extract resume text
    resume_text = extract_text_from_pdf(file_path)

    # Step 2 — Preprocess
    processed_resume = preprocess_text(resume_text)

    processed_job_description = preprocess_text(job_description)

    processed_resume_text = " ".join(processed_resume)

    processed_job_text = " ".join(processed_job_description)

    # Step 3 — Extract skills
    resume_skills = extract_skills(processed_resume_text)

    job_skills = extract_skills(processed_job_text)

    # Step 4 — Calculate ATS score
    ats_score = calculate_similarity(
        processed_resume_text,
        processed_job_text
    )

    # Step 5 — Skill gap analysis
    matched_skills, missing_skills = identify_skill_gaps(
        resume_skills,
        job_skills
    )
    skill_match_score = calculate_skill_match_percentage(
        matched_skills,
        job_skills
    )
    final_ats_score = (
        (ats_score * 0.7)
        +
        (skill_match_score * 0.3)
    )
    # Final JSON response
    return {

        "ats_score": round(final_ats_score, 2),

        "matched_skills": matched_skills,

        "missing_skills": missing_skills
    }