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
         of the ancient world. Once you enter the escape room, you will have to use your wits to figure out and 
         solve the puzzles to move forward and get out of the escape room before the timer runs out. Please read the 
         instructions carefully before you start. Throughout the game, you can access the instructions panel located
         at the top right corner of your screen. However, the timer won’t pause once the game starts. Click on the
         button below to read the instructions.`
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
          `The instructions panel will be visible on the top-right of your screen.`,
          `The back button will be visible on the top-left of the screen in some rooms to allow navigation
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
        `Welcome to Alexandra, @name. You and your friends @friend1, @friend2, @friend3 and @friend4; are 
        visiting a mysterious building in this ancient city. The building is supposed to be a haunted one which 
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
        `The five of you move inside through the door. There is dim lighting in the small room. Through the lights,
        you can see that it is relatively empty; but has some pieces of paper stuck on different walls. Despite your
        best efforts, it is too dark to read. So, you start looking around for switches to turn on the remaining lights.`
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
      "text": `Below the lever was engraved upon the wall.`
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
        automatically closes and locks itself. Above the door, on a large digital screen, you find the following written:`
    },

    {
      "tag": "div",
      "class": `screen my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "screen-text",
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
      "text": `@name: There is no choice but to move forward.`
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
      "tag": "p",
      "class": `${textSize} first-content`,
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
        you find a piece of folded paper on the ground. You open it and read.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `I don't like all the colours of the rainbow.`,
          `My favourite ones are red, blue, orange, yellow.`
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
          `You see the 9x9 version in a newspaper.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `@name: We need to solve this riddle to proceed forward.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct key and click on the button to open the door.`
    },

  ],

  "room-2": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. Having cracked the code, you are full of joy. You quickly hustle into the next
        room, and the door behind you closes. The room is brightly lit and smaller than the previous room. You see
        another similar door at the other end of the room. @friend3 moves towards the door and tries to open it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend3: It is locked. This time the code is alphabetic instead of numeric.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend2: Let's search the room for clues.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You look around the walls to search for clues. At one of the corners, you find a crumpled piece of paper. You
        straighten it and read.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `Which part of a hand game is a huge stone?`,
          `By a type of music, it is also known.`,
          `Next, tell me what's the end of this riddle?`,
          `The beginning of the end and the end of the middle.`,
          `And finally, give me that English letter,`,
          `Found easily at tea-time, the tastier, the better.`,
          `Now answer me this by combining the three things,`,
          `What is it that flies but has no wings?`,
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: I don't think there are any clues in this room.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: I found one. And I think it is sufficient to get us through.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "room-3": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `You erupt in joy as the door opens. But this time, there is a passage on the other side of the door.
        You start walking through it. It is dark and dimly lit. After walking a few steps, you see that the passage
        diverges into two. On the left wall, you find a large digital screen flashing the following:`
    },

    {
      "tag": "div",
      "class": `screen my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "screen-text",
        "id": "remove-bottom",
        "text": [
          `You have managed to pass two of my rooms. But how far will you go? @wrongText But from now, you won't be
          able to try again. Every passcode will open the door for you. A correct key will safely lead you to the
          next room. But a wrong key can lead you into a trap and kill you. So, be careful before you try opening
          the doors. For now, you have two passages in front of you. Both of them can lead you out. The right one is
          easier but so deadly that a single mistake can cost you your life. The left one is less deadly but challenging
          and tricky enough for you not to finish it in time. The choice is yours. It is only a matter of time before you die.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@randomFriend: Which way should we choose now?`
    }

  ],

  "room-4": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `Reluctantly, you follow the left path and enter into a room. As you enter the room, the door locks itself
        again. You realise that your choice is now final and it cannot be reversed.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: Do you think we should have chosen the other way?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: Our choice is final now. There is nothing we can do about it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Yes, @friend1 is right. We should focus all our attention on moving through this door now.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You move forward to look at the door. As expected, it is locked. But, you find a something engraved on the
        wall near the door.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `A 5 digit numeric code with distinct digits will open the door.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@randomFriend: Look here I found something.`
    },

    {
      "tag": "img",
      "class": "col-8 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room4_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: I think I figured out the answer.`
    }

  ],

  "room-5": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens and leads you into a passage. You aren't sure if you should be happy about it or not. You know
        that this passage could lead you into a trap and kill you. After walking a few steps, you start to see a room
        in front of you. There is a chance that you could be safe for now. You enter the room and the door closes behind
        you.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Looks like we are safe for now.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend3: Let's try to get out of this one quickly.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: I checked the door. It is locked and needs a password.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend1: Look here. I found the clue needed to open the door.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The image behind this paper contains the password to open this door.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `You flip the paper and see the image.`
    },

    {
      "tag": "img",
      "class": "col-8 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room5_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@randomFriend: What is this supposed to mean?`
    }

  ]

}

export {pageContent}