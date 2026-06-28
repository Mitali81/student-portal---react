import './InfoCards.css';

function getDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}

function getDate() {
  return new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function InfoCards({ student }) {
  return (
    <div className="info-cards">
      <div className="info-card">
        <div className="info-icon info-icon--purple">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <div className="info-detail">
          <p className="info-label">Semester</p>
          <p className="info-value">{student.semester}</p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon info-icon--orange">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div className="info-detail">
          <p className="info-label">Date</p>
          <p className="info-value">{getDate()}</p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon info-icon--green">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <text x="12" y="19" textAnchor="middle" fontSize="9" fill="#4CAF7D" fontWeight="700">23</text>
          </svg>
        </div>
        <div className="info-detail">
          <p className="info-label">Day</p>
          <p className="info-value">{getDay()}</p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon info-icon--red">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        </div>
        <div className="info-detail">
          <p className="info-label">Fees Status</p>
          <div className="fees-row">
            <p className="info-value">{student.feesStatus}</p>
            {student.feesStatus === 'Paid' && (
              <span className="fees-check">✅</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
