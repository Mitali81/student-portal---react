import './Summary.css';

export default function Summary({ attendance, marks }) {
  const attendancePct = Math.round((attendance.present / attendance.total) * 100);

  return (
    <div className="summary-cards">
      <div className="summary-card">
        <h3 className="summary-title">Attendance</h3>
        <div className="summary-circle">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${attendancePct}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="21" className="percentage">{attendancePct}%</text>
          </svg>
        </div>
        <p className="summary-sub">{attendance.present}/{attendance.total} classes</p>
      </div>
      <div className="summary-card">
        <h3 className="summary-title">Marks</h3>
        <div className="marks-breakdown">
          <div className="marks-row">
            <span>Internal</span>
            <strong>{marks.internal}/30</strong>
          </div>
          <div className="marks-row">
            <span>External</span>
            <strong>{marks.external}/100</strong>
          </div>
          <div className="marks-row marks-total">
            <span>Total</span>
            <strong>{marks.total}/130</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
