import {useState, useEffect} from 'react'

import {inputContent} from '../buttonContent'

const Input = ({page, changeUserInput}) => {
  const [userInput, setInput] = useState('')
  
  useEffect(() => {
    changeUserInput(userInput)
  }, [userInput]); 

  useEffect(() => {
    document.getElementById("input-box").value = ""
    setInput("")
  }, [page])

  const updateInput = (e) => {
    setInput(e.target.value)
  }

  const removeRepeat = (page) => {
    if (page.includes("repeated")){
      return page.replace("repeated-", "")
    }
    return page
  }

  return (
    <div>
      <input 
        type="text" className="mx-auto px-2" id="input-box"
        placeholder={`${inputContent[removeRepeat(page)]}`}
        onInput={e => updateInput(e)}  
      >
      </input>
    </div>
  )
}

export default Input
