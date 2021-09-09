import {useState} from "react";
import Background from "./components/Background";
import MuteButton from "./components/MuteButton";
import Page from "./components/Page";

function App() {
  const [pageTitle, update] = useState('home-page')
  const [sound, changeSound] = useState(true)

  const updateApp = (page) => {
    update(page)
  }
  
  return (
    <div>
      <Background page={pageTitle} soundState={sound} />
      <Page updateApp={updateApp}/>
      <MuteButton changeSound={changeSound}/>
    </div>
  );
}

export default App;
