import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">🎓</div>
        <h1 className="login-title">Student Portal</h1>
        <p className="login-sub">Sign in to continue</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Enrollment No.</label>
            <input type="text" defaultValue="24IT1234" placeholder="Enter enrollment no." />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" defaultValue="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}
