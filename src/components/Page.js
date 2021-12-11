import {useState, useEffect} from "react"

import Button from "./Button"
import Input from "./Input"
import Instructions from "./Instructions"
import Back from "./Back"
import Timer from "./Timer"
import LeftButton from "./LeftButton"

import {pageContent} from '../pageContent'
import {errorMessage, noMessage} from '../buttonContent'
import {parser} from '../parser'
import {rollPages, noInput, noHeader, backButton, choicePages, noBottom} from "../componentStatus"

import roll from '../images/parchment-paper.png'
import paper from '../images/parchment-paper.jpg'

const Page = ({updateApp, pageBackground}) => {
  const [pageTitle, update] = useState("home-page")
  const [bgVisible, bgVisibility] = useState("")
  const [textVisible, textVisibility] = useState("")
  const [background, updateBackground] = useState(roll)
  const [inputBox, changeBox] = useState("remove")
  const [divWidth, changeWidth] = useState("12")
  const [userInput, changeUserInput] = useState("")
  const [missing, updateMissing] = useState("remove")
  const [error, updateError] = useState("remove")
  const [divContent, changeContent] = useState(parser(pageContent[pageTitle]))
  const [header, updateHeader] = useState("hide")
  const [instructions, updateInstructions] = useState("hide")
  const [backPage, updateBack] = useState("d-none")
  const [backPress, informButton] = useState(false)
  const [leftButton, updateLeftButton] = useState("remove")
  const [leftPress, informLeftButton] = useState(false)
  const [bottomBar, updateBottom] = useState("")
  const [timerOut, informTimer] = useState(false)

  const width = window.innerWidth;
  const height = window.innerHeight;
  let textSize = ''
  if(height > width){
    textSize = "small"
  }

  useEffect(() => {
    changeBack()
    changeBackground()
    changeHeader()
    changeBottom()
    changeInput()
    changeContent(parser(pageContent[pageTitle]))
  }, [pageTitle]); 

  useEffect(() => {
    if (instructions === "show"){
      bgVisibility("hide")
      textVisibility("hide")
    }
    else{
      bgVisibility("show")
      textVisibility("show")
    }
  }, [instructions])

  const changeBackground = () => {
    if (rollPages.includes(pageTitle)){
      updateBackground(roll)
    }
    else{
      updateBackground(paper)
    }
  }

  const changeHeader = () => {
    if (noHeader.includes(pageTitle)){
      updateHeader("hide")
    }
    else{
      updateHeader("show")
    } 
  }

  const changeBottom = () => {
    if (noBottom.includes(removeRepeat(pageTitle))){
      updateBottom("remove")
    }
    else{
      updateBottom("")
    }
  }

  const changeInput = () => {
    if (noInput.includes(removeRepeat(pageTitle))){
      changeBox("remove")
      if (choicePages.includes(removeRepeat(pageTitle))){
        changeWidth("6")
        updateLeftButton("")
      }
      else{
        updateLeftButton("remove")
        changeWidth("12")
      }
    }
    else{
      changeBox("")
      updateLeftButton("remove")
      changeWidth("6")
    }
  }

  const changeBack = () => {
    if (backButton.includes(removeRepeat(pageTitle))){
      updateBack("d-block")
    }
    else{
      updateBack("d-none")
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

  const toggleInstructions = (visibilty) => {
    updateInstructions(visibilty)
  }

  const removeRepeat = (page) => {
    if (page.includes("repeated")){
      return page.replace("repeated-", "")
    }
    return page
  }

  return (
    <div>
      <div className={`col-12 top-section ${header}`}
        style={{
          backgroundImage: `url(${pageBackground})`,
        }}
      >
        <div className="row my-auto">
          <div className="col-4 my-auto">
              <Back backStatus={backPage} informButton={informButton}/>
            </div>

            <div className="col-4 my-auto">
              <Timer start={header} informTimer={informTimer}/>
            </div>

            <div className="col-4 my-auto">
              <Instructions toggleInstructions={toggleInstructions}/>
            </div>
        </div>
      </div>

      <div className="col-11 col-md-9 col-lg-7 mx-auto">
        <div className="row">
          <div className={`col-11 col-md-10 mx-auto`}>
            <div className={`instructions ${instructions}`}>
              <h2 className="instructions-heading">INSTRUCTIONS</h2>
              <ul className={textSize}>
                <li>Please ensure that you have sufficient time to finish this game in one seating.</li>
                <li>The timer is visible on the top middle section of your screen and will not pause.</li>
                <li>The back button will be visible on the top-left of the screen in some rooms to allow navigation
                    back to the previous room.</li>
                <li>Do not press the back button of your browser at any point. Doing so will end the game.</li>
                <li>Use the sound button on the bottom left of the screen to mute/unmute the music.</li>
              </ul>
              <p className={`instructions-bottom ${textSize}`}>Click again on the instructions button to return to the game.</p>
            </div>
          </div>
        </div>
      </div>

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
            <div className={`row ${bottomBar}`}>
              <div className={`col-6 ${inputBox} p-0`}>
                <Input page={pageTitle} changeUserInput={changeUserInput}/>
              </div>

              <div className={`col-6 ${leftButton} p-0`}>
                <LeftButton page={pageTitle} informLeftButton={informLeftButton}/>
              </div>
              
              <div className={`col-${divWidth} p-0`}>
                <Button 
                  textInput={userInput}
                  updateApp={updateApp} updatePage={updatePage}
                  updateError={updateError} updateMissing={updateMissing}
                  backStatus={backPress} informButton={informButton}
                  leftStatus={leftPress} informLeftButton={informLeftButton}
                  timerOut={timerOut}
                />
              </div>
            </div>
            
            <div className="row">
              <div className={`col-12 ${missing} ${textSize} px-2`}>
                <p id="error">{noMessage[removeRepeat(pageTitle)]}</p>
              </div>
              <div className={`col-12 ${error} ${textSize} px-2`}>
                <p id="error">{errorMessage[removeRepeat(pageTitle)]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
