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
        `Grudgingly, you follow the left path that leads you into a similar room. The moment you all enter the room,
        the door locks itself. You realize that your decision is final and cannot be changed.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: Should we have chosen the other way?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: Our choice is locked now. There is nothing we can do about it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Yes, @friend1 is right. We should focus all our attention on passing through this door now.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You move forward to look at the door. As expected, it is locked. But, you find something engraved on the
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
      "text": `@randomFriend: Look here, I found something.`
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
      "text": `@name: I think this is sufficient to pass through.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct code and click on the button to open the door.`
    }

  ],

  "room-5": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens and leads you into a passage. Are you supposed to be happy about it? You aren't sure.
        You know that this passage could lead you into a trap and kill you. But you also have complete faith in the
        way you cracked the code. So, there is a good chance that you will be safe. After walking a few steps, you
        start to see a room in front of you. You pace up your walking as you can sense that you are safe. Moments
        later, you enter the room. As usual, the door closes behind you.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: It looks like we are safe for now.`
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
      "id": "",
      "text": `@friend4: I checked the door. It is locked and needs a password.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You start looking around for bits of paper, but surprisingly you can't find anything. You also search the
        walls to check if there is anything engraved on it. But to your frustration, there is nothing.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Did anyone of you manage to find anything?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `The answer was a collective no. You can feel the morale slipping in the room. Suddenly, you realize that you had
        been trying to search for papers and engravings rather than clues. So you decide to take a step back and have a
        broad view of the room. And to your satisfaction, you manage to find something.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Look there, above the door through which we entered.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend3: There is a shelf above the door. And there is a box lying above it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: It must contain the clue.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: But how will we get there? It is too high.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: It is just about lying up there. If we can somehow tilt it slightly, it will fall.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend4: Let me try throwing my shoe at the box.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `@friend4 moves near the door, jumps in the air and throws a shoe at it. The box shakes a little
        and falls to the ground. You all erupt in joy. You open the box and find a piece of paper inside it.`
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
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "room-6": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens and leads you into another passage. This time, you don't bother to think whether your
        answer was correct or not. You have already lost a lot of time, and you aren't sure how long this will
        continue. So, you quickly move through the passage. You enter the room and rush to have a look at the door.
        As expected, the door is locked and needs a password to open.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend3: How many more rooms are there?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Well, our best hope lies in keeping on moving as fast as we can.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend2: Let's find any clues we can. And let's not waste any more time searching for papers only.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `While searching near the door, you find something engraved on the wall next to it. However, due to the dim
        light, it is hard to read it. You start searching nearby and find a small piece of glass. Somehow, using it,
        you focus the light on the wall to make it readable and note it down.`
    },

    {
      "tag": "div",
      "class": `screen my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "screen-text",
        "id": "remove-bottom",
        "text": [
          `.-- .... .- -`,
          `.. ...`,
          `... ---`,
          `..-. .-. .- --. .. .-.. .`,
          `- .... .- -`,
          `... .- -.-- .. -. --.`,
          `.. - ...`,
          `-. .- -- .`,
          `-... .-. . .- -.- ...`,
          `.. -`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Come here. I found something.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: What on earth does this mean?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: It is some form of cypher. We need its key to decode it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend1: @name, I found something that might help.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1 hands you a small piece of paper. You read it aloud.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `In dots and dashes, I strictly appear,`,
          `The key to the previous room will help you here.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Decoding the cypher should tell us how to move forward.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct password (single word answer in English script) and click on the button to open the door.`
    }

  ],

  "room-7": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens and leads you to another passage. In your opinion, you are reasonably confident about your
        answer, and you proceed. Moments later, you see a room in front of you. You enter it, and the door closes
        behind you. You have a look around the room. You find a similar door at the other end of the room. But it is
        the walls that draw your attention. You find that the four walls of the room have four different portraits
        hanging on them. And you immediately sense that there should be something in those portraits that will lead you
        out of the room.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text":
        `@name: Everyone, choose one of the walls and look at the portraits. I am sure there will be some clues there.
        I will have a look at the door.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You move forward and have a look at the exit door. You look at the door lock and find that it requires a
        password with eight characters to open it. You start looking nearby when @friend2's voice catches you.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text":
        `@friend2: @name, I found something here. Everyone, take a look behind the portrait. You might find
        something, either on the wall or on the back of the portrait.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2 hands you a piece of paper. You open it and read it.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `Cars and cabs, media and press,`,
          `I am present wherever you are careless.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: I found something.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: I also found something.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend3: Same here.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `You have a look at all the clues one after the other. First, you look at the clue that @friend4 gave you.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `Not to be missed, rearranging would work fine,`,
          `The key to this door lies in front of every line.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Next you look at the clue that @friend1 gave you.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `An eight-letter word you would hate to face,`,
          `Cause I am too deadly if you encounter me in case.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `And finally you look at the clue that @friend3 gave you.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `Damage and loss await as I am undercover,`,
          `Easy to mitigate, difficult to recover.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@randomFriend: I can't understand what all this is supposed to mean.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "room-8": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You begin walking through the passage behind it. Moments later, you enter a small room.
        You find the room unusual, as it has a very high ceiling which isn't even visible in the dim lights. But you
        decide to focus all your attention on the things visible in front of you. You find a small table in front of
        you. You walk towards it and take a look at it. On top of the table, you see the following.`
    },

    {
      "tag": "img",
      "class": "col-10 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room8_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: Gummy bears. What are they supposed to be doing here?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: Can I eat some? I am really hungry.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: They can be poisonous. Perhaps they hold a clue.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend3: Only part of the clue. I found something here.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The colour white is at one of the extremes.`,
          `The colour yellow has red and blue as its neighbours.`,
          `The colour green has none to its left.`,
          `The colour blue is next to white.`,
          `If you want to pass this room,`,
          `You need a number from left to right.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `You move forward to check the door. It has a five digit combination lock.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: We need a five digit number to open the door.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Enter the correct key and click on the button to open the door.`
    }
  ]

}

export {pageContent}