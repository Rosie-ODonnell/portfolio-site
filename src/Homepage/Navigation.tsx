import "./homepage.css";

function Navigation() {
  return (
    <div className="navigation">
      <a href="https://www.linkedin.com/in/rosie-o-39a374a8/">
        <img src="./images/LI.png" alt="linked in logo" id="li" />
      </a>

      <a href="https://github.com/Rosie-ODonnell">
        <img src="./images/GitHub.png" alt="github logo" />
      </a>
      <a href="https://twitter.com/_roseodonnell" id="twitter">
        <img src="images/Twitter.png" alt="twitter logo" id="twitter" />
      </a>
    </div>
  );
}

export default Navigation;
