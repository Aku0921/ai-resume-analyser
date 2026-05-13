from backend.skills.skills import SKILLS_DB


def extract_skills(text):

    text = text.lower()

    extracted_skills = []

    for skill in SKILLS_DB:

        if skill.lower() in text:
            extracted_skills.append(skill)

    return extracted_skills