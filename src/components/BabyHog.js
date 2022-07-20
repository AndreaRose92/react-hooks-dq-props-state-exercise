import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyeColorArray = {
  sun: SunBaby,
  blue: BlueBaby,
  glowing: GlowingBaby
}

function BabyHog(props) {



  
let [weight, setWeight] = useState(10)



  function handleChangeWeight(e) {
    if (e.target.name ==="+") {
      setWeight(++weight)
    } else if (e.target.name === "-") {
      setWeight(--weight)
    }
  }

  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>{weight}</h3>
      <h3>{props.hobby}</h3>
      <h4>{props.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src= { props.eyeColor ? eyeColorArray[props.eyeColor] : normalBaby}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
