import WelcomeCard from '../components/WelcomeCard';
import InfoCards from '../components/InfoCards';
import SubjectGrid from '../components/SubjectGrid';
import studentData from '../data/studentData';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <WelcomeCard student={studentData} />
      <InfoCards student={studentData} />
      <SubjectGrid subjects={studentData.subjects} />
    </div>
  );
}
