import {useState, useEffect} from "react"

import Button from "./Button"
import Input from "./Input"

import {pageContent} from '../pageContent'
import {errorMessage} from "../buttonContent"
import {parser} from '../parser'
import roll from '../images/parchment-paper.png'
import paper from '../images/parchment-paper.jpg'

const Page = ({updateApp}) => {
  const [pageTitle, update] = useState('home-page')
  const [bgVisible, bgVisibility] = useState("")
  const [textVisible, textVisibility] = useState("")
  const [background, updateBackground] = useState(roll)
  const [inputBox, changeBox] = useState("remove")
  const [divWidth, changeWidth] = useState("12")
  const [userInput, changeUserInput] = useState("")
  const [error, updateError] = useState("remove")

  const rollPages = ["home-page"]
  const noInput = ["home-page", "welcome", "scenario", "the-adventure-begins"]

  const width = window.innerWidth;
  const height = window.innerHeight;
  let textSize = ''
  if(height > width){
    textSize = "small"
  }

  useEffect(() => {
    changeBackground()
    changeInput()
  }, [pageTitle]); 

  const changeBackground = () => {
    if (rollPages.includes(pageTitle)){
      updateBackground(roll)
    }
    else{
      updateBackground(paper)
    }
  }

  const changeInput = () => {
    if (noInput.includes(pageTitle)){
      changeBox("remove")
      changeWidth("12")
    }
    else{
      changeBox("")
      changeWidth("6")
    }
  }

  const updatePage = (page) => {
    bgVisibility("hide")
    textVisibility("hide")
    setTimeout(() => {
      update(page)
      bgVisibility("show")
    }, 2500)
    setTimeout(() => {
      textVisibility("show")
    }, 4500)
  }

  const divContent = parser(pageContent[pageTitle])

  return (
    <div className={`display col-11 col-md-9 col-lg-7 mx-auto ${bgVisible}`}
      style = {
        {
          backgroundImage: `url(${background})`,
        } 
      }>
      <div className="row">
        <div className={`col-11 col-md-10 mx-auto ${textVisible}`}>
          {divContent}
        </div>
      </div>
      <div className="row input-separator">
        <div className="col-11 col-md-10 mx-auto">
          <div className="row">
            <div className={`col-6 ${inputBox} p-0`}>
              <Input page={pageTitle} changeUserInput={changeUserInput}/>
            </div>
            <div className={`col-${divWidth} p-0`}>
              <Button 
                textInput={userInput}
                updateApp={updateApp} updatePage={updatePage} updateError={updateError}
              />
            </div>
          </div>
          <div className="row">
            <div className={`col-12 ${error} ${textSize} px-2`}>
              <p id="error">{errorMessage[pageTitle]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
