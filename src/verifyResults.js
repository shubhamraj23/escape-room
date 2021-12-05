import {correctAnswers} from "./correctAnswers"
import {validateAnswer, repeatPages} from "./componentStatus"

const friends = ["Kaushik", "Ritik", "Vaibhav", "Divya", "Vibhuti", "Shubham", 
    "Namrata", "Arpita", "Shambhavi", "Vaidehi", "Jaya", "Satyam", "Anand", "Rajiv", 
    "Abhishek", "Samyak", "Shreya", "Somil", "Priya", "Smriti"]

const validNames = ["thomas", "amelia", "kevin", "james", "molly"]

const setRepeat = (room) => {
  localStorage.setItem(room, 0)
}

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
  repeatPages.forEach(setRepeat)

  return "correct"
}

const verifyResults = (page, userInput) => {
  if (page === "instructions"){
    return generateNames(userInput)
  }

  if (validateAnswer.includes(page)){
    if (page === "room-4" || page === "room-8" || page === "room-9"){
      if (userInput.length !== 5){
        return "invalid"
      }
      if (userInput.match(/^[0-9]+$/) === null){
        return "invalid"
      }
    }
    else if (page === "room-6"){
      if (userInput.split(" ").length !== 1){
        return "invalid"
      }
    }
    else if (page === "room-7"){
      if (userInput.length !== 8){
        return "invalid"
      }
    }
    else if (page === "room-12"){
      if (userInput.match(/^[0-9]+$/) === null){
        return "invalid"
      }
      if (userInput.length !== 8){
        return "invalid"
      }
      if (Number(userInput.substring(0, 2)) > 31){
        return "invalid"
      }
      if (Number(userInput.substring(2, 4)) > 12){
        return "invalid"
      }
    }
    else if (page === "room-13"){
      if (userInput.match(/^[0-9]+$/) === null){
        return "invalid"
      }
    }
    else if (page === "room-15"){
      if (userInput.length !== 4){
        return "invalid"
      }
      if (userInput.match(/^[0-9]+$/) === null){
        return "invalid"
      }
    }
    else if (page === "room-17"){
      if (!validNames.includes(userInput.toLowerCase())){
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