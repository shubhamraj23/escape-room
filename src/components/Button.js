import {useState, useEffect} from "react"

import {buttonContent} from "../buttonContent"
import {correctAnswer, wrongAnswer, backTraversal, leftButtonTraversal} from "../pageTraversal"
import {verifyResults} from "../verifyResults"
import {startPages, wrongSame, choicePages} from "../componentStatus"

const Button = ({textInput, updateApp, updatePage, updateError, updateMissing, backStatus, informButton, leftStatus, informLeftButton}) => {
  const [pageTitle, updateButton] = useState("home-page")
  const [textVisible, textVisibility] = useState("")
  const [disabled, changeClick] = useState(false)
  const [cursor, changeCursor] = useState("pointer")

  useEffect(() => {
    if (backStatus === true){
      informButton(false)
      reversePage()
    }
  }, [backStatus])

  useEffect(() => {
    if (leftStatus === true){
      informLeftButton(false)
      leftPage()
    }
  }, [leftStatus])

  const navigatePage = () => {
    if (startPages.includes(pageTitle)){
      changeCorrectPage()
      return
    }

    if (choicePages.includes(pageTitle)){
      changeCorrectPage()
      return
    }

    if(textInput===""){
      updateMissing("")
      updateError("remove")
      return
    }
    else{
      updateMissing("remove")
    }

    const response = verifyResults(pageTitle, textInput)

    if(response === "correct"){
      changeCorrectPage()
      updateError("remove")
    }
    else if (response === "invalid"){
      updateError("")
    }
    else{
      if (wrongSame.includes(pageTitle)){
        localStorage.setItem("wrongAttempts", Number(localStorage.getItem("wrongAttempts")) + 1)
        updateError("")
      }
      else{
        changeWrongPage()
      }
    }
  }

  const changeCorrectPage = () => {
    const page = correctAnswer[pageTitle]
    updateApp(page)
    updatePage(page)
    changeButton(page)
  }

  const changeWrongPage = () => {
    const page = wrongAnswer[pageTitle]
    updateApp(page)
    updatePage(page)
    changeButton(page)
  }

  const reversePage = () => {
    const page = backTraversal[pageTitle]
    updateApp(page)
    updatePage(page)
    changeButton(page)
  }

  const leftPage = () => {
    const page = leftButtonTraversal[pageTitle]
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