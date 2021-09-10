import {useState} from "react"
import Button from "./Button"
import {pageContent} from '../pageContent'
import {parser} from '../parser'
import roll from '../images/parchment-paper.png'
import paper from '../images/parchment-paper.jpg'

const Page = ({updateApp}) => {
  const [pageTitle, update] = useState('home-page')
  const [bgVisible, bgVisibility] = useState("")
  const [textVisible, textVisibility] = useState("")
  const [background, updateBackground] = useState(roll)
  
  const rollPages = ["home-page"]

  const changeBackground = () => {
    if (rollPages.includes(pageTitle)){
      updateBackground(roll)
    }
    else{
      updateBackground(paper)
    }
    console.log(background)
  }

  const updatePage = (page) => {
    bgVisibility("hide")
    textVisibility("hide")
    setTimeout(() => {
      changeBackground()
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
        <div className={`col-10 col-md-8 mx-auto ${textVisible}`}>
          {divContent}
        </div>
      </div>
      <Button updateApp={updateApp} updatePage={updatePage}/>
    </div>
  )
}

export default Page
