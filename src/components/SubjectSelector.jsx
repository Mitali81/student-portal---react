import './SubjectSelector.css';

export default function SubjectSelector({ subjects, selected, onSelect }) {
  return (
    <div className="subject-selector">
      {subjects.map((subject) => (
        <button
          key={subject.code}
          className={`selector-btn ${selected === subject.code ? 'selector-btn--active' : ''}`}
          style={selected === subject.code ? { background: subject.color, borderColor: subject.color } : {}}
          onClick={() => onSelect(subject.code)}
        >
          {subject.code}
        </button>
      ))}
    </div>
  );
}
