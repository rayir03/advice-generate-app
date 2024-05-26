import React, {useState, useEffect} from 'react'
import dividerDesktop from "./images/pattern-divider-desktop.svg"
import dividerMobile from "./images/pattern-divider-mobile.svg"
import dice from "./images/icon-dice.svg"
import axios from "axios"

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async ()=> {
    const response = await axios.get("https://api.adviceslip.com/advice");
    
    const advise = await response.data.slip;
    setAdvice(advise)
    
  }
  useEffect(() => {
    getAdvice();
  },[])

  return (
    <div className="card">
      <p> Advice #{advice.id}</p>
      <h3>{advice.advice}</h3>
      <img className="divider-desk" src={dividerDesktop} alt="divider" />
      <img className="divider-mob" src={dividerMobile} alt="divider" />
      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  )
}

export default AdviceCard
