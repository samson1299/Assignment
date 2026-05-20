import "../styles/register.css";
import { useState } from "react";

function Register() {
  const [answer, setAnswer] = useState("");
  return (
    <div className="register-page">
      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <div className="input-group">
        <label>Full Name*</label>
        <input type="text" value="Marry Doe" readOnly />
      </div>

      <div className="input-group">
        <label>Phone number*</label>
        <input type="text" value="Marry Doe" readOnly />
      </div>

      <div className="input-group">
        <label>Email address*</label>
        <input type="text" value="Marry Doe" readOnly />
      </div>

      <div className="input-group">
        <label>Password *</label>
        <input type="text" value="Marry Doe" readOnly />
      </div>

      <div className="input-group">
        <label>Company name</label>
        <input type="text" value="Marry Doe" readOnly />
      </div>

      <div className="agency-section">
        <p>
          Are you an Agency?<span>*</span>
        </p>

        <div className="radio-group">
          <label>
            <input type="radio"      name="answer" value="yes" checked={answer === "yes"} onChange={(e) => setAnswer(e.target.value)} />
            Yes
          </label>

          <label>
            <input type="radio"   name="answer"value="no"checked={answer === "no"} onChange={(e) => setAnswer(e.target.value)} />
            No
          </label>
        </div>
      </div>

      <button className="create-btn">
        Create Account
      </button>
    </div>
  );
}

export default Register;