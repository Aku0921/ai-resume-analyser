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
