import { useNavigate } from 'react-router-dom';
import './SubjectCard.css';

const subjectIcons = {
  OS: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  SE: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  FD: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  UHV: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  DAA: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  CC: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
};

export default function SubjectCard({ subject }) {
  const navigate = useNavigate();

  return (
    <div
      className="subject-card"
      style={{ '--card-gradient': subject.gradient, '--card-color': subject.color }}
      onClick={() => navigate(`/subject/${subject.code}`)}
    >
      <div className="subject-card-top">
        <div className="subject-icon" style={{ background: subject.color }}>
          {subjectIcons[subject.code]}
        </div>
        <div>
          <h3 className="subject-name">{subject.name}</h3>
          <p className="subject-code">{subject.code}</p>
        </div>
      </div>
      <p className="subject-desc">{subject.description}</p>
      <button className="subject-view-btn" style={{ color: subject.color }}>
        View →
      </button>
      <div className="subject-card-bg" />
    </div>
  );
}
