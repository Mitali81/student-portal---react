import { useParams, useNavigate } from "react-router-dom";
import studentData from "../data/studentData";
import SubjectSelector from "../components/SubjectSelector";
import "./Subject.css";

export default function Subject() {
  const { code } = useParams();
  const navigate = useNavigate();

  const subject =
    studentData.subjects.find((s) => s.code === code) ||
    studentData.subjects[0];

  return (
    <div className="subject-page">
      {/* Header */}
      <div
        className="subject-page-header"
        style={{ borderLeftColor: subject.color }}
      >
        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Back
        </button>

        <div>
          <h2 className="subject-page-title">{subject.name}</h2>
          <span
            className="subject-page-code"
            style={{ color: subject.color }}
          >
            {subject.code}
          </span>
        </div>
      </div>

      {/* Subject Selector */}
      <SubjectSelector
        subjects={studentData.subjects}
        selected={subject.code}
        onSelect={(c) => navigate(`/subject/${c}`)}
      />

      {/* Choose Option */}
      <div className="subject-options-container">
        <h3 className="subject-options-title">
          Choose an option
        </h3>

        <button
          className="subject-option-btn"
          onClick={() => navigate("/attendance")}
        >
          📊 Attendance
        </button>

        <button
          className="subject-option-btn"
          onClick={() => navigate("/assignments")}
        >
          📝 Assignments
        </button>

        <button
          className="subject-option-btn"
          onClick={() => navigate("/marks")}
        >
          📚 Marks
        </button>
      </div>
    </div>
  );
}