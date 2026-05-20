import "../styles/account.css";

function Account() {
  return (
    <div className="account-page">
      <div className="account-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-section">
        <div className="profile-top">
          <div className="profile-image-wrapper">
            <img src="profile.png"alt="profile"/>

            <div className="camera-icon">
             <img src="cam.svg" alt="camera" /> 
            </div>
          </div>

          <div className="profile-info">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur
          Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      
    </div>
    
  );
}

export default Account;