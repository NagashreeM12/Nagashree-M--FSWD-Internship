import React from "react";

function Card(props) {
  return (
    <div style={{border:"1px solid gray", padding:"20px", width:"200px"}}>
      <h3>{props.title}</h3>
      <p>This is a sample product description.</p>
      <button>Buy Now</button>
    </div>
  );
}

export default Card;