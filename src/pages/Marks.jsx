import MarksComp from '../components/Marks';
import studentData from '../data/studentData';

export default function MarksPage() {
  return (
    <div>
      <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '24px', paddingBottom: '10px', borderBottom: '3px solid var(--accent)', display: 'inline-block' }}>Marks</h2>
      <MarksComp data={studentData.marks} subjects={studentData.subjects} />
    </div>
  );
}
