import {useState, useEffect} from 'react'

import {inputContent} from '../buttonContent'

const Input = ({page, changeUserInput}) => {
  const [userInput, setInput] = useState('')
  
  useEffect(() => {
    changeUserInput(userInput)
  }, [userInput]); 

  const updateInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input 
        type="text" className="mx-auto px-2"
        placeholder={`${inputContent[page]}`}
        onInput={e => updateInput(e)}  
      >
      </input>
    </div>
  )
}

export default Input
