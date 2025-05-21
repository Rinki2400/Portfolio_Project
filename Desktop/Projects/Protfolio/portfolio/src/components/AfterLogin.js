import React, { useState } from "react";
import Profile from "./Profile";
import AdContact from "./AdContact";
import AdAbout from "./AdAbout";
import AdIndroduction from "./AdIndroduction";
import AdEducation from "./AdEducation";
import Adcertificate from "./Adcertificate";
import AdProject from "./AdProject";
;

function AfterLogin() {
  const [activeComponent, setActiveComponent] = useState("default");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "contact":
        return <AdContact />;
      case "aboutme":
        return <AdAbout />;
      case "introduction":
        return <AdIndroduction/>;
      case "education":
        return <AdEducation/>;
      case "certificate":
        return <Adcertificate/>;
      case "project":
        return <AdProject/>;
      default:
        return (
          <div className="default-content">
           <div className="contact-container">
           <div className="Adcont Projecttb">
            <h1>ADMIN PANEL</h1>
            </div>
            </div>
          </div>
        );
        
    }
  };


  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Profile setActiveComponent={setActiveComponent} />
      {/* <AdEducation setActiveComponent={setActiveComponent} /> */}

      {/* Main Content */}
      <div >
        {renderActiveComponent()}
      </div>
    </div>
  );
}

export default AfterLogin;
