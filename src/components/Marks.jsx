import './Marks.css';

export default function Marks({ data, subjects }) {
  return (
    <div className="marks-table-wrap">
      <h3 className="table-title">Marks Overview</h3>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Internal (30)</th>
            <th>External (100)</th>
            <th>Total (130)</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => {
            const m = data[subject.code];
            const pct = Math.round((m.total / 130) * 100);
            const grade = pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : 'C';
            return (
              <tr key={subject.code}>
                <td>
                  <span className="subject-badge" style={{ background: subject.bgColor, color: subject.color }}>
                    {subject.code}
                  </span>
                  {subject.name}
                </td>
                <td>{m.internal}</td>
                <td>{m.external}</td>
                <td><strong>{m.total}</strong></td>
                <td>
                  <span className="grade-badge" style={{ background: subject.bgColor, color: subject.color }}>
                    {grade}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
