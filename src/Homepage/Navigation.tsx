import React from "react";
import "./homepage.css";


function Navigation() {
  return (
    <div className="navigation">
      <a
        href="https://www.linkedin.com/in/rosieo/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/LI.png"
          alt="linked in logo"
          id="li"
          className="delayedShow"
        />
      </a>

      <a
        href="https://github.com/Rosie-ODonnell"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/GitHub.png"
          alt="github logo"
          className="delayedShow2"
        />
      </a>
    </div>
  );
}

export default Navigation;
