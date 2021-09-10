import {useState} from "react"
import {buttonContent} from '../content'

const Button = ({updateApp, updatePage}) => {
  const [pageTitle, updateButton] = useState("home-page")
  const [buttonVisible, buttonVisibility] = useState("")
  const [textVisible, textVisibility] = useState("")
  const [disabled, changeClick] = useState(false)
  const [cursor, changeCursor] = useState("pointer")

  const verifyResults = () => {
    changePage()
  }

  const changePage = () => {
    var page = pageTitle
    if (page === "home-page"){
      page = "welcome"
    }
    else if (page === "welcome"){
      page = "third-page"
    }
    else if (page === "third-page"){
      page = "fourth-page"
    }
    updateApp(page)
    updatePage(page)
    changeButton(page)
  }

  const changeButton = (page) => {
    buttonVisibility("hide")
    textVisibility("hide")
    changeClick(true)
    changeCursor("auto")
    setTimeout(() => {
      updateButton(page)
      buttonVisibility("show")
    }, 2500)
    setTimeout(() => {
      textVisibility("show")
    }, 4500)
    setTimeout(() => {
      changeClick(false)
      changeCursor("pointer")
    }, 6500)
  }

  return (
    <div>
      <button className={`button ${buttonVisible}`} 
        style={{
          "cursor": {cursor},
        }}
        disabled={disabled}
        onClick={verifyResults}
      >
        <h1 className={`button-text ${textVisible}`}>
          {buttonContent[pageTitle]}
        </h1>
      </button>
    </div>
  )
}

export default Button
