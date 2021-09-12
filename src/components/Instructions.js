const Instructions = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let textSize = ''
  if(height > width){
    textSize = "small"
  }

  return (
    <div>
      <h5 className={`${textSize}`} id="instructions">
        INSTRUCTIONS
      </h5>
    </div>
  )
}

export default Instructions
