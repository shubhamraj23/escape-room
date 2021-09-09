import {useState} from "react"
import {buttonContent} from '../content'

const Button = ({updateApp, updatePage}) => {
  const [pageTitle, updateButton] = useState("home-page")
  const verifyResults = () => {
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
    updateButton(page)
  }

  return (
    <div>
      <button className="button" onClick={verifyResults}>
        {buttonContent[pageTitle]}
      </button>
    </div>
  )
}

export default Button
