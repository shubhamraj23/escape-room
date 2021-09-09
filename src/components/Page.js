import {useState} from "react"
import Button from "./Button"

const Page = ({updateApp}) => {
  const [pageTitle, update] = useState('home-page')

  const updatePage = (page) => {
    update(page)
  }

  const data = {
    "home-page": "lols",
    "welcome": "hums"
  }

  return (
    <div className="display col-11 col-md-9 col-lg-7 mx-auto">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto">
          <h1 className="home-title">{data[pageTitle]}</h1>
        </div>
      </div>
      <Button updateApp={updateApp} updatePage={updatePage}/>
    </div>
  )
}

export default Page
