import Display from "./Display"

const Page = () => {
  const data = {
    type: "home-screen",
    content: {
      h1: "The Lost City of Alexandra",
      button: "Click to Continue",
    }
  }

  return (
    <div>
      <Display textData={data}/>
    </div>
  )
}

export default Page
