import {useState} from "react"
import Button from "./Button"
import {pageContent} from '../content'

const Page = ({updateApp}) => {
  const [pageTitle, update] = useState('home-page')
  const [bgVisible, bgVisibility] = useState("")
  const [textVisible, textVisibility] = useState("")

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

  return (
    <div className={`display col-11 col-md-9 col-lg-7 mx-auto ${bgVisible}`}>
      <div className="row">
        <div className={`col-10 col-md-8 mx-auto ${textVisible}`}>
          <h1 className={pageContent[pageTitle]["h1-class"]}>
            {pageContent[pageTitle]["h1-content"]}
          </h1>
        </div>
      </div>
      <Button updateApp={updateApp} updatePage={updatePage}/>
    </div>
  )
}

export default Page
