import "./homepage.css";
import Github from "./GitHub.png";
import LinkedIn from "./LI.png";
import Twitter from "./Twitter.png";

function Navigation() {
  return (
    <div className="navigation">
      <a href="https://www.linkedin.com/in/rosie-o-39a374a8/">
        <img src={LinkedIn} alt="linked in logo" id="li" />
      </a>
      <a href="https://twitter.com/_roseodonnell">
        <img src={Twitter} alt="twitter logo" id="twitter" />
      </a>
      <a href="https://github.com/Rosie-ODonnell">
        <img src={Github} alt="github logo" />
      </a>
    </div>
  );
}

export default Navigation;
