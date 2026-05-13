from parser.extract_text import extract_text_from_pdf

from preprocessing.preprocess import preprocess_text

from similarity.similarity import calculate_similarity

from skills.extract_skills import extract_skills

from insights.skill_gap import identify_skill_gaps


# Resume PDF path
pdf_path = "backend/resumes/test_resume.pdf"


# Sample Job Description
job_description = """
Looking for a Python developer with FastAPI, SQL,
Machine Learning, Docker, and PostgreSQL experience.
"""


# Step 1 — Extract text from resume
resume_text = extract_text_from_pdf(pdf_path)


# Step 2 — Preprocess text
processed_resume = preprocess_text(resume_text)

processed_job_description = preprocess_text(job_description)


# Convert token lists back into strings
processed_resume_text = " ".join(processed_resume)

processed_job_text = " ".join(processed_job_description)


# Step 3 — Extract skills
resume_skills = extract_skills(processed_resume_text)

job_skills = extract_skills(processed_job_text)


# Step 4 — Calculate ATS similarity score
ats_score = calculate_similarity(
    processed_resume_text,
    processed_job_text
)


# Step 5 — Identify skill gaps
matched_skills, missing_skills = identify_skill_gaps(
    resume_skills,
    job_skills
)


# Final Results
print("\n========== ATS ANALYSIS ==========\n")

print(f"ATS Match Score: {ats_score:.2f}%")

print("\nMatched Skills:")
print(matched_skills)

print("\nMissing Skills:")
print(missing_skills)