import AttendanceComp from '../components/Attendance';
import studentData from '../data/studentData';

export default function AttendancePage() {
  return (
    <div>
      <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '24px', paddingBottom: '10px', borderBottom: '3px solid var(--accent)', display: 'inline-block' }}>Attendance</h2>
      <AttendanceComp data={studentData.attendance} subjects={studentData.subjects} />
    </div>
  );
}
