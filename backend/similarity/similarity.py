from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def calculate_similarity(resume_text, job_description):

    documents = [resume_text, job_description]

    # Convert text into TF-IDF vectors
    vectorizer = TfidfVectorizer()

    tfidf_matrix = vectorizer.fit_transform(documents)

    # Calculate cosine similarity
    similarity_score = cosine_similarity(
        tfidf_matrix[0],
        tfidf_matrix[1]
    )

    # Convert score into percentage
    match_percentage = similarity_score[0][0] * 100

    return match_percentage