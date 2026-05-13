# AI Resume Analyzer

An AI-powered ATS (Applicant Tracking System) Resume Analyzer built using Python, NLP, and FastAPI.

The system analyzes resumes against job descriptions by:
- extracting text from PDF resumes,
- preprocessing text using NLP techniques,
- calculating ATS similarity scores,
- extracting technical skills,
- identifying missing skills and skill gaps.

---

# Features

## Resume Text Extraction
- Extracts text from PDF resumes using `pdfplumber`
- Supports multi-page resumes
- Performs basic text cleanup

## NLP Preprocessing
- Lowercasing
- Tokenization
- Stop word removal
- Lemmatization
- Text normalization

## ATS Similarity Scoring
- TF-IDF vectorization
- Cosine similarity calculation
- ATS match percentage generation

## Skill Extraction
- Rule-based technical skill extraction
- Predefined skill database
- Resume skill identification

## Missing Skill Detection
- Detects matched skills
- Identifies missing job-required skills
- Generates ATS insights

## FastAPI Backend
- Backend API setup using FastAPI
- REST API architecture
- Swagger API documentation support

---

# Project Architecture

```text
Resume PDF
     ↓
Text Extraction
     ↓
NLP Preprocessing
     ↓
Skill Extraction
     ↓
TF-IDF Vectorization
     ↓
Cosine Similarity
     ↓
ATS Score Generation
     ↓
Missing Skill Detection
     ↓
ATS Insights
```

---

# Project Structure

```text
AI-resume-analyzer/
│
├── backend/
│   │
│   ├── api/
│   │   └── app.py
│   │
│   ├── parser/
│   │   └── extract_text.py
│   │
│   ├── preprocessing/
│   │   ├── preprocess.py
│   │   └── setup_nltk.py
│   │
│   ├── similarity/
│   │   └── similarity.py
│   │
│   ├── skills/
│   │   ├── skills.py
│   │   └── extract_skills.py
│   │
│   ├── insights/
│   │   └── skill_gap.py
│   │
│   ├── resumes/
│   │
│   └── main.py
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

# Technologies Used

## Backend
- Python
- FastAPI
- Uvicorn

## NLP & AI
- NLTK
- scikit-learn

## Resume Processing
- pdfplumber

## Similarity Techniques
- TF-IDF
- Cosine Similarity

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-resume-analyzer.git
```

## Navigate into Project

```bash
cd AI-resume-analyzer
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv
```

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Download NLTK Resources

Run:

```bash
python backend/preprocessing/setup_nltk.py
```

---

# Run ATS Pipeline

```bash
python backend/main.py
```

---

# Run FastAPI Server

```bash
uvicorn backend.api.app:app --reload
```

---

# API Documentation

After starting FastAPI server:

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

# Current Capabilities

- Resume PDF parsing
- NLP preprocessing pipeline
- ATS similarity scoring
- Skill extraction
- Missing skill detection
- FastAPI backend setup

---

# Future Improvements

- Semantic similarity using embeddings
- Sentence Transformers
- LLM-powered ATS feedback
- Resume recommendations
- Job recommendation system
- Database integration
- Frontend integration
- Authentication system
- Deployment

---

# Learning Outcomes

This project helped in understanding:
- NLP preprocessing
- TF-IDF vectorization
- Cosine similarity
- Skill extraction
- Modular backend architecture
- FastAPI backend development
- AI pipeline integration

---

# Author

Akash V Nair

BTech Computer Science Engineering  
SCMS School of Engineering and Technology