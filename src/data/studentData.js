const today = new Date();

const currentDate = today.toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const currentDay = today.toLocaleDateString("en-IN", {
  weekday: "long",
});
const studentData = {
  
  name: "Mitali",
  enrollmentNo: "24IT1234",
  semester: 3,
  feesStatus: "Paid",
  subjects: [
    {
      id: 1,
      name: "Operating System",
      code: "OS",
      description: "Manage your attendance, marks and assignments efficiently.",
      color: "#7C6BC9",
      bgColor: "#EDE9FF",
      icon: "💻",
      gradient: "linear-gradient(135deg, #EDE9FF 0%, #D8D1F5 100%)",
    },
    {
      id: 2,
      name: "Software Engineering",
      code: "SE",
      description: "Track your academic progress and activities.",
      color: "#E86B4F",
      bgColor: "#FFEEE9",
      icon: "</>",
      gradient: "linear-gradient(135deg, #FFEEE9 0%, #FFD9CF 100%)",
    },
    {
      id: 3,
      name: "Frontend Development",
      code: "FD",
      description: "Explore your coursework and updates.",
      color: "#4A90C4",
      bgColor: "#E8F4FF",
      icon: "⊞",
      gradient: "linear-gradient(135deg, #E8F4FF 0%, #C8E4F8 100%)",
    },
    {
      id: 4,
      name: "Universal Human Values",
      code: "UHV",
      description: "Learn and grow with essential values.",
      color: "#4CAF7D",
      bgColor: "#E8F8EF",
      icon: "👥",
      gradient: "linear-gradient(135deg, #E8F8EF 0%, #C8EDD8 100%)",
    },
    {
      id: 5,
      name: "Design & Analysis of Algorithms",
      code: "DAA",
      description: "Strengthen your problem solving skills.",
      color: "#E8A020",
      bgColor: "#FFF5E0",
      icon: "Σ",
      gradient: "linear-gradient(135deg, #FFF5E0 0%, #FFE4A0 100%)",
    },
    {
      id: 6,
      name: "Cloud Computing",
      code: "CC",
      description: "Understand cloud concepts and technologies.",
      color: "#E05A7A",
      bgColor: "#FFE8EF",
      icon: "☁",
      gradient: "linear-gradient(135deg, #FFE8EF 0%, #FFD0DC 100%)",
    },
  ],
  attendance: {
    OS: { present: 38, total: 45 },
    SE: { present: 40, total: 45 },
    FD: { present: 42, total: 45 },
    UHV: { present: 35, total: 45 },
    DAA: { present: 39, total: 45 },
    CC: { present: 41, total: 45 },
  },
  marks: {
    OS: { internal: 28, external: 70, total: 98 },
    SE: { internal: 25, external: 65, total: 90 },
    FD: { internal: 30, external: 72, total: 102 },
    UHV: { internal: 22, external: 60, total: 82 },
    DAA: { internal: 27, external: 68, total: 95 },
    CC: { internal: 29, external: 71, total: 100 },
  },
  assignments: {
    OS: [
      { title: "Process Scheduling", due: "2026-07-05", submitted: true },
      { title: "Memory Management", due: "2026-07-15", submitted: false },
    ],
    SE: [
      { title: "SRS Document", due: "2026-07-08", submitted: true },
      { title: "UML Diagrams", due: "2026-07-20", submitted: false },
    ],
    FD: [
      { title: "React Portfolio", due: "2026-07-10", submitted: false },
      { title: "CSS Animations", due: "2026-07-22", submitted: true },
    ],
    UHV: [
      { title: "Values Essay", due: "2026-07-03", submitted: true },
    ],
    DAA: [
      { title: "Sorting Algorithms", due: "2026-07-12", submitted: false },
      { title: "Graph Problems", due: "2026-07-25", submitted: false },
    ],
    CC: [
      { title: "AWS Setup", due: "2026-07-07", submitted: true },
      { title: "Cloud Architecture", due: "2026-07-18", submitted: false },
    ],
  },
  announcements: [
    {
      id: 1,
      subject: "OS",
      title: "Mid-term Exam Schedule Released",
      date: "2026-06-25",
      content: "Mid-term exams for Operating System will be held on July 10th.",
    },
    {
      id: 2,
      subject: "FD",
      title: "Assignment 1 Deadline Extended",
      date: "2026-06-24",
      content: "The React Portfolio assignment deadline has been extended to July 15th.",
    },
    {
      id: 3,
      subject: "DAA",
      title: "Extra Class on Saturday",
      date: "2026-06-23",
      content: "Extra class for Graph Algorithms will be held this Saturday at 10 AM.",
    },
  ],
};

export default studentData;
