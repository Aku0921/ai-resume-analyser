import React, { useState } from "react";
import axios from "axios";

function App() {

  const [resume, setResume] = useState(null);

  const [jobDescription, setJobDescription] = useState("");

  const [result, setResult] = useState(null);


  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("resume", resume);

    formData.append(
      "job_description",
      jobDescription
    );

    try {

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
    }
  };


  return (

    <div style={{ padding: "40px" }}>

      <h1>AI Resume Analyzer</h1>

      <form onSubmit={handleSubmit}>

        <div>

          <input

            type="file"

            accept=".pdf"

            onChange={(e) =>
              setResume(e.target.files[0])
            }

          />

        </div>

        <br />

        <div>

          <textarea

            rows="10"

            cols="60"

            placeholder="Paste Job Description"

            value={jobDescription}

            onChange={(e) =>
              setJobDescription(e.target.value)
            }

          />

        </div>

        <br />

        <button type="submit">

          Analyze Resume

        </button>

      </form>


      {result && (

        <div style={{ marginTop: "30px" }}>

          <h2>ATS Analysis Results</h2>

          <p>
            <strong>TF-IDF Score:</strong>
            {" "}
            {result.tfidf_score}
          </p>

          <p>
            <strong>Semantic Score:</strong>
            {" "}
            {result.semantic_score}
          </p>

          <p>
            <strong>Skill Match Score:</strong>
            {" "}
            {result.skill_match_score}
          </p>

          <p>
            <strong>Final ATS Score:</strong>
            {" "}
            {result.final_ats_score}
          </p>

          <h3>Matched Skills</h3>

          <ul>

            {result.matched_skills.map(
              (skill, index) => (

                <li key={index}>
                  {skill}
                </li>
              )
            )}

          </ul>

          <h3>Missing Skills</h3>

          <ul>

            {result.missing_skills.map(
              (skill, index) => (

                <li key={index}>
                  {skill}
                </li>
              )
            )}

          </ul>

        </div>
      )}

    </div>
  );
}

export default App;