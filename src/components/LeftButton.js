import {useState, useEffect} from "react"

import {leftButtonContent} from "../buttonContent"

const LeftButton = ({page, informLeftButton}) => {
  const [textVisible, textVisibility] = useState("")
  const [disabled, changeClick] = useState(false)
  const [cursor, changeCursor] = useState("pointer")

  useEffect(() => {
    changeButton(page)
  }, [page])

  const navigatePage = () => {
    informLeftButton(true)
  }

  const changeButton = (page) => {
    textVisibility("hide")
    changeClick(true)
    changeCursor("auto")
    window.scrollTo(0, 0)
    setTimeout(() => {
      textVisibility("show")
    }, 2000)
    setTimeout(() => {
      changeClick(false)
      changeCursor("pointer")
    }, 4000)
  }

  const removeRepeat = (page) => {
    if (page.includes("repeated")){
      return page.replace("repeated-", "")
    }
    return page
  }

  return (
    <div>
      <button className={`button mx-auto`}
        style={{
          "cursor": {cursor},
        }}
        disabled={disabled}
        onClick={navigatePage}
      >
        <h1 className={`button-text ${textVisible}`}>
          {leftButtonContent[removeRepeat(page)]}
        </h1>
      </button>
    </div>
  )
}

export default LeftButton
