const Back = ({backStatus, informButton}) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let textSize = ''
  if(height > width){
    textSize = "small"
  }

  const changeStatus = () => {
    informButton(true)
  }

  return (
    <div onClick={changeStatus}>
      <h5 className={`${textSize} ${backStatus}`} id="back">
        BACK
      </h5>
    </div>
  )
}

export default Back
