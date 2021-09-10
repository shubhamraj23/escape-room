const width = window.innerWidth;
const height = window.innerHeight;
let textSize = ''
if(height > width){
  textSize = "small"
}

const pageContent = {
  "home-page": [
    {
      "tag": "h1",
      "class": "home-title",
      "id": "",
      "text": "The Lost City of Alexandra"
    }
  ],

  "welcome": [
    {
      "tag": "p",
      "class": `first-content ${textSize}`,
      "id": "",
      "text": 
        `Welcome to the Escape Room. You are about to enter the lost city of Alexandra, a hypothetical, abandoned city
         of the ancient world. Once you enter the escape room, you will have to use your wits to search for clues and 
         solve the puzzles to move forward and get out of the escape room before the timer runs out. Please read the 
         instructions carefully before you start. Once the game starts, you will find the instructions panel on 
         the top right section of your screen which you can refer to at any point in time. However, the timer won’t 
         pause once the game starts. Click on the button below to read the instructions.`
    }
  ],

  "instructions": [
    {
      "tag": "h2",
      "class": `first-content`,
      "id": "",
      "text": "INSTRUCTIONS"
    },

    {
      "tag": "ul",
      "class": `${textSize}`,
      "id": "",
      "text": {
        "class": "",
        "id": "",
        "text": [
          `Please ensure that you have sufficient time to finish this game in one seating`,
          `The timer will be visible on the top middle section of your screen and will not pause.`,
          `The instructions panel is present on the top-right section of your screen.`,
          `The back button on the top-left section of the screen will appear in some room to allow mavigation
          back to the previous room.`,
          `Use the mute button on the bottom left of the screen to mute/unmute the music.`,
          `For some puzzles, the incorrect answer will also open a door and lead you into a trap or loop.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": "Please enter your name and click on the button below to proceed."
    },    

  ],

}

export {pageContent};