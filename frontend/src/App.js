import React, { useState } from "react";

import axios from "axios";

import "./App.css";


function App() {

  const [resume, setResume] = useState(null);

  const [jobDescription, setJobDescription] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("resume", resume);

    formData.append(
      "job_description",
      jobDescription
    );

    try {

      setLoading(true);

      const response = await axios.post(

        "http://127.0.0.1:8000/analyze-resume",

        formData,

        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert("Error analyzing resume.");

    } finally {

      setLoading(false);
    }
  };


  return (

    <div className="container">

      <div className="hero-section">

        <h1 className="hero-title">

          AI Resume Analyzer

        </h1>

        <p className="hero-subtitle">

          Analyze resumes using AI-powered ATS scoring,
          semantic similarity, and skill matching.

        </p>

      </div>


      <form
        className="form"
        onSubmit={handleSubmit}
      >

        <input

          type="file"

          accept=".pdf"

          onChange={(e) =>
            setResume(e.target.files[0])
          }

        />

        <textarea

          rows="10"

          placeholder="Paste Job Description"

          value={jobDescription}

          onChange={(e) =>
            setJobDescription(e.target.value)
          }

        />

        <button type="submit">

          Analyze Resume

        </button>

      </form>


      {loading && (

        <p className="loading">

          Analyzing Resume...

        </p>
      )}


      {result && (

        <div className="results">

          <h2>ATS Analysis Results</h2>

          <div className="metrics-grid">

            <div className="metric-card">

              <h3>TF-IDF Score</h3>

              <p>{result.tfidf_score.toFixed(2)}%</p>

            </div>


            <div className="metric-card">

              <h3>Semantic Score</h3>

              <p>{result.semantic_score.toFixed(2)}%</p>

            </div>


            <div className="metric-card">

              <h3>Skill Match</h3>

              <p>{result.skill_match_score.toFixed(2)}%</p>

            </div>


            <div className="metric-card final-score-card">

              <h3>Final ATS Score</h3>

              <p>{result.final_ats_score.toFixed(2)}%</p>

            </div>

          </div>


          <div className="skills-section">

            <div className="skills-box">

              <h3>✅ Matched Skills</h3>

              {result.matched_skills.length > 0 ? (

                <div className="skill-tags">

                  {result.matched_skills.map(
                    (skill, index) => (

                      <span
                        className="skill-tag matched"
                        key={index}
                      >

                        {skill}

                      </span>
                    )
                  )}

                </div>

              ) : (

                <p className="empty-message">

                  No matched skills identified.

                </p>
              )}

            </div>


            <div className="skills-box">

              <h3>⚠️ Missing Skills</h3>

              {result.missing_skills.length > 0 ? (

                <div className="skill-tags">

                  {result.missing_skills.map(
                    (skill, index) => (

                      <span
                        className="skill-tag missing"
                        key={index}
                      >

                        {skill}

                      </span>
                    )
                  )}

                </div>

              ) : (

                <p className="empty-message">

                  No missing skills identified.

                </p>
              )}

            </div>

          </div>

          <div className="recommendations">

            <h3>💡 Recommendations</h3>

            {result.missing_skills.length > 0 ? (

              <ul>

                {result.missing_skills.map(
                  (skill, index) => (

                    <li key={index}>

                      Learn or improve:
                      {" "}
                      <strong>{skill}</strong>

                    </li>
                  )
                )}

              </ul>

            ) : (

              <p>

                Excellent match for this role.

              </p>
            )}

          </div>

          <div className="feedback-section">

            <div className="feedback-box">

              <h3>🚀 Strong Areas</h3>

              {result.matched_skills.length > 0 ? (

                <ul>

                  {result.matched_skills.map(
                    (skill, index) => (

                      <li key={index}>
                        {skill}
                      </li>
                    )
                  )}

                </ul>

              ) : (

                <p>No major strengths identified.</p>
              )}

            </div>


            <div className="feedback-box">

              <h3>📈 Areas to Improve</h3>

              {result.missing_skills.length > 0 ? (

                <ul>

                  {result.missing_skills.map(
                    (skill, index) => (

                      <li key={index}>
                        {skill}
                      </li>
                    )
                  )}

                </ul>

              ) : (

                <p>No major gaps identified.</p>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;