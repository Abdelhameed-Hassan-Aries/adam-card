import "./App.scss";
import clock from "./assets/3.png";
import project from "./assets/1.png";
import location from "./assets/2.png";
import zoom from "./assets/4.png";
import { Avatar, AvatarGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useWindowSize } from "./hooks/useWindowResize";

function App() {
  const [showBorder, setShowBorder] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [width, height] = useWindowSize();

  const handleShowBorder = () => {
    setShowBorder(!showBorder);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 700) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width, height]);

  return (
    <div className="main-wrapper">
      {showBorder && (
        <div className={`toggler ${mobile ? "toggler-mobile" : ""}`}></div>
      )}
      <div
        className={`card ${mobile ? "card-mobile" : ""}`}
        onClick={handleShowBorder}
      >
        <div className={`top-wrapper ${mobile ? "top-wrapper-mobile" : ""}`}>
          <div>Meeting Title</div>
          <div className="scheduled">Scheduled</div>
        </div>
        <div
          className={`bottom-wrapper ${mobile ? "bottom-wrapper-mobile" : ""}`}
        >
          <div
            className={`left-wrapper ${mobile ? "left-wrapper-mobile" : ""}`}
          >
            <div className="date-wrapper">
              <img src={clock} alt="clock" className="img" />
              <div className="date">
                Monday Feb 16, 11:00 AM - 2:00 PM (2 hrs)
              </div>
            </div>

            <div className="project-wrapper">
              <img src={project} alt="project" className="img" />
              <div className="date">Project</div>
            </div>

            <div className="location-wrapper">
              <img src={location} alt="location" className="img" />
              <div className="date">location</div>
            </div>
          </div>
          <div className="right-wrapper">
            <div className="call-wrapper">
              <img src={zoom} alt="zoom" className="zoom" />
              Join Call
            </div>

            <AvatarGroup className="avatar-group" max={4} spacing={1}>
              <Avatar className="avatar" alt="user-avatar" />
              <Avatar className="avatar" alt="user-avatar" />
              <Avatar className="avatar" alt="user-avatar" />
              <Avatar className="avatar" alt="user-avatar" />
              <Avatar className="avatar" alt="user-avatar" />
              <Avatar className="avatar" alt="user-avatar" />
              <Avatar className="avatar" alt="user-avatar" />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
