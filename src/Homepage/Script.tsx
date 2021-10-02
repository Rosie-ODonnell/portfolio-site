import Typewriter from "typewriter-effect";

function Script() {
  return (
    <div className="script">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(90)
            .pauseFor(200)
            .typeString("Act 1 ")
            .start()
            .pauseFor(500)
            .typeString("<br><br><br> Scene 1:")
            .pauseFor(500)
            .typeString(" London.")
            .pauseFor(500)
            .typeString(" A home office.")
            .pauseFor(500)
            .typeString(
              "<br><br><br><span class='italic'>(Enter Rosie O'Donnell)</span>"
            )
            .pauseFor(500)
            .typeString("<br><br><br> ROSIE:")
            .pauseFor(500)
            .typeString("<br><br><br> Hey,")
            .pauseFor(500)
            .typeString(" I'm a fullstack developer");
        }}
      />
    </div>
  );
}

export default Script;
