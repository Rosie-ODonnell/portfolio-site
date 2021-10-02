import Typewriter from "typewriter-effect";

function Script() {
  return (
    <div className="script">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Act 1 ")
            .start()
            .pauseFor(1000)
            .typeString("<br><br><br> Scene 1:")
            .pauseFor(1000)
            .typeString(" London.")
            .pauseFor(1000)
            .typeString(" A home office.")
            .pauseFor(1000)
            .typeString(
              "<br><br><br><span class='italic'>(Enter Rosie O'Donnell)</span>"
            )
            .pauseFor(1000)
            .typeString("<br><br><br> ROSIE:")
            .pauseFor(1000)
            .typeString("<br><br><br> Hey,")
            .pauseFor(1000)
            .typeString(" I'm a fullstack developer");
        }}
      />
    </div>
  );
}

export default Script;
