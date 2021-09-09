import {useState} from "react";
import Background from "./components/Background";
import Page from "./components/Page";

function App() {
  const [pageTitle, update] = useState('home-page')

  const updateApp = (page) => {
    update(page)
  }
  
  return (
    <div>
      <Background page={pageTitle} />
      <Page updateApp={updateApp}/>
    </div>
  );
}

export default App;
