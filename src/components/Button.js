import {useState} from "react"

const Button = ({updateApp, updatePage}) => {
  const [pageTitle, updateButton] = useState("home-page")
  const verifyResults = () => {
    var page = pageTitle
    if (page == "home-page"){
      page = "welcome"
    }
    updateApp(page)
    updatePage(page)
    updateButton(page)
  }

  const data = {
    "home-page": "clicks",
    "welcome": "no-clicks"
  }

  return (
    <div>
      <button className="button" onClick={verifyResults}>
        {data[pageTitle]}
      </button>
    </div>
  )
}

export default Button
