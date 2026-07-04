import { useParams, useNavigate } from 'react-router-dom';
import studentData from '../data/studentData';
import Summary from '../components/Summary';
import AttendanceComp from '../components/Attendance';
import MarksComp from '../components/Marks';
import AssignmentsComp from '../components/Assignments';
import SubjectSelector from '../components/SubjectSelector';
import './Subject.css';

export default function Subject() {
  const { code } = useParams();
  const navigate = useNavigate();
  const subject = studentData.subjects.find((s) => s.code === code) || studentData.subjects[0];

  return (
    <div className="subject-page">
      <div className="subject-page-header" style={{ borderLeftColor: subject.color }}>
        <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back</button>
        <div>
          <h2 className="subject-page-title">{subject.name}</h2>
          <span className="subject-page-code" style={{ color: subject.color }}>{subject.code}</span>
        </div>
      </div>

      <SubjectSelector
        subjects={studentData.subjects}
        selected={subject.code}
        onSelect={(c) => navigate(`/subject/${c}`)}
      />

      <Summary
        attendance={studentData.attendance[subject.code]}
        marks={studentData.marks[subject.code]}
      />

      <div className="subject-tables">
        <AttendanceComp data={studentData.attendance} subjects={[subject]} />
        <MarksComp data={studentData.marks} subjects={[subject]} />
      </div>

      <div style={{ marginTop: 20 }}>
        <AssignmentsComp
          data={{ [subject.code]: studentData.assignments[subject.code] }}
          subjects={[subject]}
        />
      </div>
    </div>
  );
}
