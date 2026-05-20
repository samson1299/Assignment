import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


        <button
          className="primary-btn"
          onClick={() => navigate("/register")}
        >
          <span className="primary-btn">Create Account</span>
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;