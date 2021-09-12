const Back = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let textSize = ''
  if(height > width){
    textSize = "small"
  }

  return (
    <div>
      <h5 className={`${textSize}`} id="back">
        BACK
      </h5>
    </div>
  )
}

export default Back
