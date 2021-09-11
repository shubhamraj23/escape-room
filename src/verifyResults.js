let name = ""
const friends = ["Kaushik", "Ritik", "Vaibhav", "Divya", "Vibhuti", "Shubham", 
    "Namrata", "Arpita", "Shambhavi", "Vaidehi", "Jaya", "Satyam", "Anand", "Rajiv", 
    "Abhishek", "Samyak", "Shreya", "Somil", "Priya", "Smriti"]
let team = {}

const generateNames = (text) => {
  name = text.charAt(0).toUpperCase() + text.slice(1)
  
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
  
  team = {
    "player": name,
    "friends": teammates
  }
  
  return "correct"
}

const verifyResults = (page, userInput) => {
  if (page==="instructions"){
    return generateNames(userInput)
  }
}

export {verifyResults}
export {team}