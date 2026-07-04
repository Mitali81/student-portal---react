import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Subject from './pages/Subject';
import Attendance from './pages/Attendance';
import Marks from './pages/Marks';
import Assignments from './pages/Assignments';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="app-layout">
              <Sidebar />
              <div className="main-content">
                <Header />
                <div className="page-content">
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/subject/:code" element={<Subject />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/marks" element={<Marks />} />
                    <Route path="/assignments" element={<Assignments />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
