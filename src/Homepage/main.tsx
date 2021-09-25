import Navigation from "./Navigation";
import "./homepage.css";

function Main() {
  return (
    <div>
      <div className="main__circle outer"></div>
      <div className="main__circle inner"></div>

      <div className="main">
        <h1>ROSIE O'DONNELL</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <Navigation />
      </div>
    </div>
  );
}

export default Main;
