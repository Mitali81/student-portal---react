import AssignmentsComp from '../components/Assignments';
import studentData from '../data/studentData';

export default function AssignmentsPage() {
  return (
    <div>
      <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '24px', paddingBottom: '10px', borderBottom: '3px solid var(--accent)', display: 'inline-block' }}>Assignments & Announcements</h2>
      <AssignmentsComp data={studentData.assignments} subjects={studentData.subjects} />
    </div>
  );
}
