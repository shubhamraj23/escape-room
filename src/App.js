import {useState} from "react";

import {repeatPages} from "./componentStatus";
import Background from "./components/Background";
import MuteButton from "./components/MuteButton";
import Page from "./components/Page";

function App() {
  const [pageTitle, update] = useState('home-page')
  const [sound, changeSound] = useState(true)
  const [background, changeBackground] = useState('')

  const updateApp = (page) => {
    update(page)
    if (repeatPages.includes(page)){
      localStorage.setItem(page, Number(localStorage.getItem(page)) + 1)
    }
  }
  
  return (
    <div>
      <Background page={pageTitle} soundState={sound} changeBackground={changeBackground}/>
      <Page updateApp={updateApp} pageBackground={background}/>
      {pageTitle !== "home-page"? <MuteButton changeSound={changeSound}/> : ""}
    </div>
  );
}

export default App;
