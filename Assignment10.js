import React, { useState } from "react";

function App() {

  const [mood, setMood] = useState("😊");

  const changeMood = (newMood) => {
    setMood(newMood);
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px", fontFamily:"Arial"}}>

      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <button onClick={() => changeMood("😊")}>Happy</button>
      <button onClick={() => changeMood("😢")}>Sad</button>
      <button onClick={() => changeMood("😡")}>Angry</button>
      <button onClick={() => changeMood("😴")}>Tired</button>

    </div>
  );
}

export default App;