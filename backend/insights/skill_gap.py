resume_skills = [
    'python',
    'sql',
    'machine learning'
]

job_skills = [
    'python',
    'sql',
    'docker',
    'fastapi'
]

def identify_skill_gaps(resume_skills, job_skills):

    matched_skills = []

    missing_skills = []

    for skill in job_skills:

        if skill in resume_skills:
            matched_skills.append(skill)

        else:
            missing_skills.append(skill)

    return matched_skills, missing_skills

def calculate_skill_match_percentage(
    matched_skills,
    job_skills
):

    if len(job_skills) == 0:
        return 0

    score = (
        len(matched_skills)
        /
        len(job_skills)
    ) * 100

    return score