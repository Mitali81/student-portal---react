import './Assignments.css';

export default function Assignments({ data, subjects }) {
  return (
    <div className="assignments-wrap">
      <h3 className="table-title">Assignments</h3>
      <div className="assignments-list">
        {subjects.map((subject) =>
          (data[subject.code] || []).map((a, i) => (
            <div className="assignment-item" key={`${subject.code}-${i}`}>
              <div className="assignment-left">
                <span
                  className="assignment-badge"
                  style={{ background: subject.bgColor, color: subject.color }}
                >
                  {subject.code}
                </span>
                <div>
                  <p className="assignment-title">{a.title}</p>
                  <p className="assignment-due">Due: {a.due}</p>
                </div>
              </div>
              <span className={`assignment-status ${a.submitted ? 'submitted' : 'pending'}`}>
                {a.submitted ? '✓ Submitted' : '⏳ Pending'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
