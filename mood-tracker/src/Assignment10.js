import React, { useState } from "react";

function Assignment10() {

const [mood,setMood]=useState("😊")

return (

<div style={{textAlign:"center",marginTop:"100px"}}>

<h1>Mood Tracker</h1>

<h2>Your Mood: {mood}</h2>

<button onClick={()=>setMood("😊")}>Happy</button>
<button onClick={()=>setMood("😢")}>Sad</button>
<button onClick={()=>setMood("😡")}>Angry</button>
<button onClick={()=>setMood("😴")}>Tired</button>

</div>

)

}

export default Assignment10;