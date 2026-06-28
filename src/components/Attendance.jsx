import './Attendance.css';

export default function Attendance({ data, subjects }) {
  return (
    <div className="attendance-table-wrap">
      <h3 className="table-title">Attendance Overview</h3>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Present</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => {
            const att = data[subject.code];
            const pct = Math.round((att.present / att.total) * 100);
            const status = pct >= 75 ? 'Safe' : 'Low';
            return (
              <tr key={subject.code}>
                <td>
                  <span className="subject-badge" style={{ background: subject.bgColor, color: subject.color }}>
                    {subject.code}
                  </span>
                  {subject.name}
                </td>
                <td>{att.present}</td>
                <td>{att.total}</td>
                <td>
                  <div className="pct-bar-wrap">
                    <div className="pct-bar" style={{ width: `${pct}%`, background: subject.color }} />
                    <span>{pct}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge status-badge--${status.toLowerCase()}`}>{status}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
