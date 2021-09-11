import {useState} from "react"

import {buttonContent} from '../buttonContent'
import {correctAnswer} from "../pageTraversal"
import {verifyResults} from "../verifyResults"

const Button = ({textInput, updateApp, updatePage, updateError}) => {
  const [pageTitle, updateButton] = useState("home-page")
  const [textVisible, textVisibility] = useState("")
  const [disabled, changeClick] = useState(false)
  const [cursor, changeCursor] = useState("pointer")

  const startPages = ["home-page", "welcome", "scenario", "the-adventure-begins"]

  const navigatePage = () => {
    if (startPages.includes(pageTitle)){
      changeCorrectPage()
      return
    }

    if(textInput===""){
      updateError("")
      return
    }
    else{
      updateError("remove")
    }

    const response = verifyResults(pageTitle, textInput)

    if(response === "correct"){
      changeCorrectPage()
    }
  }

  const changeCorrectPage = () => {
    const page = correctAnswer[pageTitle]
    updateApp(page)
    updatePage(page)
    changeButton(page)
  }

  const changeButton = (page) => {
    textVisibility("hide")
    changeClick(true)
    changeCursor("auto")
    setTimeout(() => {
      updateButton(page)
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
      <button className={`button mx-auto`}
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