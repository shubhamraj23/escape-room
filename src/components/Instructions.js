import {useState, useEffect} from "react";

const Instructions = ({toggleInstructions}) => {
  const [visibilty, changeVisibility] = useState("hide")
  const [textColor, changeColor] = useState("white")

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
    if (visibilty === "show"){
      changeColor("red")
    }
    else{
      changeColor("white")
    }
  }, [visibilty])

  return (
    <div onClick={updateInstructions}>
      <h5 className={`${textSize}`} id="instructions"
        style={{
          color: `${textColor}`,
        }}
      >
        INSTRUCTIONS
      </h5>
    </div>
  )
}

export default Instructions
