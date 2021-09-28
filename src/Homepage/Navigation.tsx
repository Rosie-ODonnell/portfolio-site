import "./homepage.css";

function Navigation() {
  return (
    <div className="navigation">
      <a href="https://www.linkedin.com/in/rosie-o-39a374a8/">
        <img src="./LI.png" alt="linked in logo" id="li" />
      </a>

      <a href="https://github.com/Rosie-ODonnell">
        <img src="./GitHub.png" alt="github logo" />
      </a>
      <a href="https://twitter.com/_roseodonnell" id="twitter">
        <img src="./Twitter.png" alt="twitter logo" id="twitter" />
      </a>
    </div>
  );
}

export default Navigation;
