import Navigation from "./Navigation";
import "./homepage.css";

function Main() {
  return (
    <div>
      <div className="main__circle outer"></div>
      <div className="main__circle inner"></div>

      <div className="titles">
        <h1>Rosie O'Donnell</h1>
        <h2>Software Engineer</h2>
        <Navigation />
      </div>
    </div>
  );
}

export default Main;
