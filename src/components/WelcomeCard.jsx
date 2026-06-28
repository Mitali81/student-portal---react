import './WelcomeCard.css';

export default function WelcomeCard({ student }) {
  return (
    <div className="welcome-card">
      <div className="welcome-left">
        <div className="welcome-avatar">
          <svg width="48" height="48" fill="none" stroke="#C8A882" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="welcome-text">
          <p className="welcome-greeting">Welcome back,</p>
          <h1 className="welcome-name">
            {student.name} <span className="wave">👋</span>
          </h1>
          <p className="welcome-enrollment">
            Enrollment No. : <span className="enrollment-id">{student.enrollmentNo}</span>
          </p>
        </div>
      </div>
      <div className="welcome-decoration">
        <div className="wave-1" />
        <div className="wave-2" />
        <div className="paperclip">📎</div>
      </div>
    </div>
  );
}
