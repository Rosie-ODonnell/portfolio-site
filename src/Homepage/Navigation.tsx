import "./homepage.css";

import Twitter from "./Twitter.svg";

function Navigation() {
  return (
    <div className="navigation">
      <a
        href="https://www.linkedin.com/in/rosie-o-39a374a8/"
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
      <a
        href="https://twitter.com/_roseodonnell"
        id="twitter"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Twitter}
          alt="twitter logo"
          id="twitter"
          className="delayedShow3"
        />
      </a>
    </div>
  );
}

export default Navigation;
