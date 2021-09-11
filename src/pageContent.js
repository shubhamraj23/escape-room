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

  "scenario": [
    {
      "tag": "h2",
      "class": `first-content`,
      "id": "",
      "text": "SCENARIO"
    },
    
    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `Welcome to Alexandra, @name. You and your friends @friend1, @friend2, @friend3 and @friend4 are 
        visiting a mysterious building in this ancient city. The building is supposed to be a haunted one and that 
        makes you very excited.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Are you guys sure that you want to enter this building? I am scared.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Yes, let’s go inside.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `The five of you move inside through the door. You find yourselves in a small room that is dimly lit. Through 
        the lights, you can see that the room is fairly empty, but has some pieces of paper stuck on different walls. 
        You want to read what is written on them, but unfortunately, the light is too dim. So, you start looking around 
        for switches to turn on the remaining lights.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Look here, I found a lever switch. It looks like it might turn on the lights.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Below the lever, was engraved upon the wall.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `Courageous are you to enter the house of death.`,
          `But are you smart enough to exit it alive?`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": 
        `You conclude that it is best to turn on the lights to see what is inside. If there is anything fearsome, 
        all five of you will immediately leave the building.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Click on the button to turn on the lights.`
    },

  ],

}

export {pageContent}