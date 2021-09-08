import Button from "./Button"

const Display = ({textData}) => {
  let homeTitle = ""
  let buttonContent = ""

  if (textData["type"] === "home-screen"){
    homeTitle = textData.content.h1
    buttonContent = textData.content.button
  }

  return (
    <div className="display col-11 col-md-9 col-lg-7 mx-auto">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto">
          <h1 className="home-title">{homeTitle}</h1>
        </div>
      </div>
      <Button buttonContent={buttonContent}/>
    </div>
  )
}

export default Display
