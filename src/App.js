import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const drumSounds = [
    {
      key: "Q",
      name: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      name: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      name: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      name: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      name: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      name: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      name: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [display, setDisplay] = useState("");

  const playSound = (key, name) => {
    const audio = document.getElementById(key);
    const pad = document.getElementById(name);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(name);
      if (pad) {
        pad.classList.add("active");
        setTimeout(() => pad.classList.remove("active"), 100);
      }
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const sound = drumSounds.find((s) => s.key === key);
    if (sound) playSound(sound.key, sound.name);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div id="drum-machine" className="container">
      <h1>Drum Machine</h1>
      <div id="display">{display || "Press a key"}</div>
      <div className="drum-container">
        {drumSounds.map((sound) => (
          <div
            key={sound.key}
            className="drum-pad"
            id={sound.name}
            onClick={() => playSound(sound.key, sound.name)}
          >
            {sound.key}
            <audio className="clip" id={sound.key} src={sound.src}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;