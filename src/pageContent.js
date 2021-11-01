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
          `Please ensure that you have sufficient time to finish this game in one seating.`,
          `The timer will be visible on the top middle section of your screen and will not pause.`,
          `The instructions panel will be visible on the top-right section of your screen.`,
          `The back button will be visible on the top-left section of the screen on some rooms to allow navigation
          back to the previous room.`,
          `Do not press the back button of your browser at any point. Doing so will end the game.`,
          `Use the sound button on the bottom left of the screen to mute/unmute the music.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": "Please enter your name and click on the button below to proceed."
    } 

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
          `Courageous you are to enter the house of death.`,
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
    }

  ],

  "the-adventure-begins": [
    {
      "tag": "h2",
      "class": `first-content`,
      "id": "",
      "text": "THE ADVENTURE BEGINS"
    },
    
    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `As soon as you move the lever up, the lights turn on. But the front door through which you entered 
        automatically closes and locks itself. Above the door, on a big digital screen, you find the following written:`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The adventure begins here. The bomb has been activated and will blast off in 90 minutes. If you are capable 
          enough, move forward and exit this building before the timer runs out. Else, wait for your death. There is 
          no turning back.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: What do we do now?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: There is no choice, but to move forward.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Click on the button to proceed.`
    }

  ],

  "room-1": [
    {
      "tag": "h2",
      "class": `first-content`,
      "id": "",
      "text": "Room 1"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You turn around to have a glance at the room. Opposite the front door through which you entered, you find 
        another door which is also locked. You decide to examine that door yourself.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `@name: Everyone, please scan through the room and search for any clues. Look for anything that you think
        is odd or can get us out of here. I will have a look at that door.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You move forward to examine the door and find that it has a digital lock. You immediately understand
        that you need to enter the correct key to open the door and move out of this room. Just beside the door,
        you find a piece of folded paper on the ground.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `I don't like all the colors of the rainbow.`,
          `My favourite ones are red, blue, orange and yellow.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Hey @name, come here. There is something on the wall.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `You go there and find a piece of paper stuck on the wall with something scribbled.`
    },

    {
      "tag": "img",
      "class": "col-8 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room1_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `You remove the paper from the wall and find something written behind it.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `A traditional 9x9 would have killed you.`,
          `So, I challenge you a 4x4.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": 
        `@name: We need to solve this riddle to proceed forward.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct key and click on the button to open the door.`
    },

  ]

}

export {pageContent}