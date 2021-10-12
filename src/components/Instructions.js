import {useState, useEffect} from "react";

const Instructions = ({toggleInstructions}) => {
  const [visibilty, changeVisibility] = useState("hide")

  const width = window.innerWidth;
  const height = window.innerHeight;
  let textSize = ''
  if(height > width){
    textSize = "small"
  }
  
  const updateInstructions = () => {
    if (visibilty === "hide"){
      changeVisibility("show")
    }
    else{
      changeVisibility("hide")
    }
  }

  useEffect(() => {
    toggleInstructions(visibilty)
  }, [visibilty])

  return (
    <div onClick={updateInstructions}>
      <h5 className={`${textSize}`} id="instructions">
        INSTRUCTIONS
      </h5>
    </div>
  )
}

export default Instructions
