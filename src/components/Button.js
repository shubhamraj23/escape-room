import {useState} from "react"

import {buttonContent} from '../buttonContent'
import {correctAnswer} from "../pageTraversal"

const Button = ({updateApp, updatePage}) => {
  const [pageTitle, updateButton] = useState("home-page")
  const [buttonVisible, buttonVisibility] = useState("")
  const [textVisible, textVisibility] = useState("")
  const [disabled, changeClick] = useState(false)
  const [cursor, changeCursor] = useState("pointer")

  const startPages = ["home-page", "welcome", "scenario", "the-adventure-begins"]

  const navigatePage = () => {
    if (startPages.includes(pageTitle)){
      changeCorrectPage()
      return
    } 

    //Verify results and send to either changeCorrectPage or changeIncorrectPage or alertWrongAnswer
  }

  const changeCorrectPage = () => {
    const page = correctAnswer[pageTitle]
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
      <button className={`button ${buttonVisible} mx-auto`}
        id={(pageTitle==="home-page" ? "home-button" : "")}
        style={{
          "cursor": {cursor},
        }}
        disabled={disabled}
        onClick={navigatePage}
      >
        <h1 className={`button-text ${textVisible}`}>
          {buttonContent[pageTitle]}
        </h1>
      </button>
    </div>
  )
}

export default Button
