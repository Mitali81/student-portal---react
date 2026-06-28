import SubjectCard from './SubjectCard';
import './SubjectGrid.css';

export default function SubjectGrid({ subjects }) {
  return (
    <div className="subject-section">
      <h2 className="section-title">Your Subjects</h2>
      <div className="subject-grid">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
