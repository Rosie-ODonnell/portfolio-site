import "./Homepage.css";

import Twitter from "./Twitter.svg";

function Navigation() {
  return (
    <div className="navigation">
      <a href="https://www.linkedin.com/in/rosie-o-39a374a8/">
        <img src="/images/LI.png" alt="linked in logo" id="li" />
      </a>

      <a href="https://github.com/Rosie-ODonnell">
        <img src="/images/GitHub.png" alt="github logo" />
      </a>
      <a href="https://twitter.com/_roseodonnell" id="twitter">
        <img src={Twitter} alt="twitter logo" id="twitter" />
      </a>
    </div>
  );
}

export default Navigation;
