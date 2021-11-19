import {correctAnswers} from "./correctAnswers"
import {validateAnswer} from "./componentStatus"

const friends = ["Kaushik", "Ritik", "Vaibhav", "Divya", "Vibhuti", "Shubham", 
    "Namrata", "Arpita", "Shambhavi", "Vaidehi", "Jaya", "Satyam", "Anand", "Rajiv", 
    "Abhishek", "Samyak", "Shreya", "Somil", "Priya", "Smriti"]

const generateNames = (text) => {
  const name = text.charAt(0).toUpperCase() + text.slice(1)
  let teammates = []

  if (friends.includes(name)){
    const index = friends.indexOf(name)
    friends.splice(index, 1)
  }
  
  for(let i=0; i<4; i++){
    let position = Math.floor(Math.random()*friends.length)
    let friend = friends[position]
    teammates.push(friend)
    friends.splice(position, 1)
  }

  localStorage.setItem("name", name)
  localStorage.setItem("friends", teammates.join())
  localStorage.setItem("wrongAttempts", 0)

  return "correct"
}

const verifyResults = (page, userInput) => {
  if (page==="instructions"){
    return generateNames(userInput)
  }

  if (validateAnswer.includes(page)){
    if (page === "room-6"){
      if (userInput.split(" ").length !== 1){
        return "invalid"
      }
    }
  }

  if(userInput.toLowerCase() === correctAnswers[page]){
    return "correct"
  }
  else{
    return "incorrect"
  }
}

export {verifyResults}