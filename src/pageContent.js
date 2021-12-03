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
      "id": "remove-bottom",
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
      "id": "",
      "text": 
        `You conclude that it is best to turn on the lights to see what is inside. If there is anything fearsome, 
        all five of you will immediately leave the building.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "remove-bottom",
      "text": `@name: There is no choice but to move forward.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "",
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
      "id": "remove-bottom",
      "text": `@name: We need to solve this riddle to proceed forward.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "remove-bottom",
      "text": `@name: I found one. And I think it is sufficient to get us through.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "remove-bottom",
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
      "class": "col-10 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room4_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: I think this is sufficient to pass through.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "remove-bottom",
      "text": `@randomFriend: What is this supposed to mean?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: I think somehow combining the top and the bottom rows might give us something.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "remove-bottom",
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
      "id": "remove-bottom",
      "text": `@name: Decoding the cypher should tell us how to move forward.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "remove-bottom",
      "text": `@randomFriend: I can't understand what all this is supposed to mean.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
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
      "id": "",
      "text": `You move forward to check the door. It has a five digit combination lock.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: We need a five digit number to open the door.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct key and click on the button to open the door.`
    }

  ],

  "room-9": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `Hesitantly, you follow the right path. While moving forward, you hear your friends discuss whether they
        should have chosen the less deadly path or not. The same thought comes to your mind. You think you can choose
        the other way if you go back to the diverging section. While walking, you see a small door in front of you,
        and you enter the room. As soon as you enter the room, the door locks automatically. Your decision is
        irreversible.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Now that we are here, let's focus all our attention on moving out of here.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text":
        `You have a look around the room. It is very bright inside. As a result, you can see lots of strange symbols
        engraved on the wall. You decide to collect all of them in one place and see what they mean.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text":
        `@name: Everyone, please note down all the symbols on the walls in one place. It might contain the clue that
        we need.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `After gathering all the mysterious symbols on the wall, you come up with the following.`
    },

    {
      "tag": "img",
      "class": "col-12 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room9_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text":
        `Suddenly, you come up with a thought. You rush towards the door to check the lock. You find a padlock with
        that needs a code containing 5 numeric digits. And just below the padlock, you find the following.`
    },

    {
      "tag": "img",
      "class": "col-10 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room9_img2.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Each symbol represents a number. We need to decipher the symbols.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct code and click on the button to open the door.`
    }

  ],

  "room-10" : [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens and leads you into a passage. Do you feel happy about it? It's unclear to you. This way may
        lead you into a trap and kill you. But you are confident that you have cracked the code. As you walk, a sound
        suddenly appears behind you. It makes you all jump. Looking back, you find that the passage behind you is no
        longer visible. You sense that you have entered another room, and the sound was of the door closing. A single
        candle near the exit door is lighting the room. The lighting is so faint that you can barely see your feet.
        You keep on stumbling, but somehow you manage to reach the exit door and figure out that it needs a password
        to open.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend3: Hey! You just stood on my foot.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend1: Sorry, I can't see anything. Someone, please find a way to turn on the lights.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `Meanwhile, you start examining the segment of the wall visible by the light of the candle. The tiles on
        the wall seem strange. As you knock on one, you discover that it is hollow. Somehow, you manage to remove
        the tile. Behind it is a small handle. You grasp the handle and try to pull it. Nothing happens. You try
        again with more effort. This time the handle comes out with a small chunk of the wall with it. Suddenly,
        the room lightens up. Your friends cheer with joy. You have a look at the handle and find the following
        engraved on it.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `H Q Z O T F E T`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You start to wonder about its meaning when your friends ask you to look at the walls. You glance around
        the room to find lots of engravings on the wall. You decide to collect them all in one place to analyze them.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `A -> K`,
          `K -> R`,
          `R -> D`,
          `D -> M`,
          `M -> Z`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: This doesn't make any sense.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@randomFriend: I think I found the missing clue. Check this.`
    },

    {
      "tag": "img",
      "class": "col-12 col-md-10 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room10_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: I think I know how to crack this.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "room-11": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `Once again, the door opens. You rush through it and wham! You're on the ground,
        hurt yet fine to stand up and walk.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Hey @name! Are you alright?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Yes, I am fine. Just be careful while you move through.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You recognise that you fell from the top. You expected another passage similar to the previous ones. But
        instead, there was a trough where you are lying. After recovering from the sudden impact, you have a look
        around the room. It is unlike any other room you've seen so far. You find furniture, vases, art and other
        decoration items lying here and there. In the middle of the room, there is an empty table. Uncertain of
        what to do, you look at the exit door. It needs a password to open. You find a couple of pieces of paper
        nearby. You pick up and have a look at them.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `78 73 80 124 72 88 109 56, 66 111 131 125 57 129 95.`,
          `109 93 115 59 90 103 35 28 121 119.`,
          `116 64 132 109 56, 1 21 17 29 117 103 105 138 13 95.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: @friend2, come here. What do you think this is supposed to mean?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend2: Not sure, let's search the room for something else.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You search around the room for clues. You carefully look at all the decoration items present in the
        room, but to your annoyance, you find nothing there. Suddenly, the table in the middle of the room catches
        your eye. It is empty, but a book lies under the table's legs. You carefully remove it and have a glance
        through it. To your surprise, you find that all the pages are blank except for one, which reads the following.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The sky was pitch black as if engulfed in black ink. But the darkness did not last more than a second.
          A multitude of stars filled the length of the sky. A distinct patch of crimson slowly made its way through
          the night sky. Dawn had arrived. The first rays of sunlight lit up my room. The morning contains some magic
          that would safely make you forget all your troubles and move you off reality. But even if I want, I cannot forget
          the events of the past day. Several people had decoded the password of my social media account. Mark my words;
          they will pay heavily for this. I need to send a message to such useless characters. Those six people need to
          provide me with the correct explanation to exit from their misery. They cannot be forgiven.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: This page must have the key behind the message.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "room-12": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You don't rush through it this time. The fall you encountered the last time has left you
        sceptical, and you don't want to get hurt again. Your friends walk through the door first, and you follow
        them. You walk through the passage behind them, and moments later, you enter another room. Suddenly, the
        door shuts behind you. Your eyes scan the room, which looks like a short junkyard. There are newspapers
        stacked everywhere. In the middle of the room lies a small table containing more newspapers. You move
        across the room to look at the exit door, and for a change, you find that it requires a date to open.
        Above the door, you find a small metal plaque with the following words written on it.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `RESCUE DATE`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": 
        `@randomFriend: So, we need to enter a rescue date here to move past this room. But who has been rescued?
        And from whom?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: That's what we need to figure out. Let's have a look at the table.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You turn back to look at the table. You find many newspapers stacked in heaps above and below the table.
        But to your surprise, you can see something shiny between them, like a light source. You quickly remove the
        newspapers and find a mobile phone hidden. The screen of the mobile phone is turned on and shows a
        conversation between two people.`
    },

    {
      "tag": "img",
      "class": "col-12 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room12_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You try to explore the mobile phone to find more information, but the screen has frozen, and nothing is
        happening. Frustrated, you slam the mobile phone on the newspapers, whose back cover opens and reveals a
        piece of paper with a short message.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The baby was rescued on the Friday after his kidnap.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `Suddenly, everything becomes clear to you. An idea comes to you that will help you crack the code.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": 
        `@name: Everyone, search the newspapers. Look for any headline that says anything about a baby kidnapped or
        rescued. The date of the newspaper will help us.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `You start searching among the newspaper. After a while, @friend2 calls you.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend2: I found something. Look here is the newspaper.`
    },

    {
      "tag": "img",
      "class": "col-12 col-md-9 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room12_img2.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: But it doesn't have any date on it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: Let's continue searching for more papers.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `You keep on searching but find nothing.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: I think these are the only clues that we have got.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the date in DDMMYYYY format and click on the button to open the door.`
    }

  ],

  "room-13": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You are still a bit sore from your fall, so you do not rush through the room. Your friends
        take the lead this time. You follow them slowly in the passage, cautiously trying to avoid another risky
        encounter. After a while, you enter another room quite different from other rooms you have visited so far.
        You find three tables in three different corners of the room and one in the middle. You go and look at the
        table in the middle while your friends examine the other tables. You find an unusual digital balance placed
        on top of the table. This device doesn't give a reading but has a numeric pad below the pan that lets you
        enter a value. You find some marbles of different colours placed on the pan. There are three red, two green,
        one yellow and three blue marbles present. The balance is placed inside a small glass box frame, such that
        you can only access the keypad.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `After examining this closely, you go and have a look at the other tables. You find see-saw balances on them,
        with different marbles and weights placed on either side. Again, the entire apparatus is covered inside a glass
        box frame. Hence, you cannot move around the different marbles and weights. The see-saw balances are shown below.`
    },

    {
      "tag": "img",
      "class": "col-12 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room13_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@randomFriend: Where is the exit door in this room? I can't see it anywhere.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You suddenly notice that there is no exit door in the room. But a thought comes into your mind. There is
        one corner of the room which doesn't have any table. You go over there and tap the ground with your feet.
        Immediately, you realise that the ground below it is hollow, and there might be a route beneath it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: I think this is trap door. It might open if we enter the correct key.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: But there do we enter the key. There is no door and no digital lock.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: The digital balance. That is the only place where we can enter a key`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct key and click on the button to open the door.`
    }
  ],

  "room-14": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You are confident that your answer was correct, and you hustle quickly through it. Having
        lost so much time, being slow isn't an option. So, you move through the passage, enter the next room and
        start searching for clues. First, you go and have a look at the door. You find a digital lock that needs a
        password to open. On one of the walls, next to the door, you find a sticky note with the following message.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `1 CAR 2 PARROT 2 AMBULANCE 5 PHONE 4 TABLE = CAMEL`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend3: Is this another cipher?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Seems like it. Let's search for some clues to decipher it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: I found something. Come here.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `You look at the clue that @friend1 shows you. You find the following engraving on the wall.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The frog has icecube and chair as its neighbours.`,
          `The door is at one of the extremes.`,
          `Icecube is next to the door.`,
          `The cat lies at the end.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Seems like some order.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: Do you think it is sufficient to move us out of this room?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: I think we need something more.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: @name, come here. I found something relevant here.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend4 shows you a picture stuck on the wall.`
    },

    {
      "tag": "img",
      "class": "col-10 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room14_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: I still can't figure out the meaning.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "repeated-room-4": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens and leads you into a passage. Moments later, you see a small door in front of you. You
        rush through it, and it closes behind you. Upon entering, you are surprised to find yourself in a room you
        have already visited before.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: I can't believe it. We are back here.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Let's quickly have a relook at the clues and move out of this room.`
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
      "tag": "img",
      "class": "col-10 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room4_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct code and click on the button to open the door.`
    }

  ],

  "repeated-room-5": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You quickly walk through the passage. The door leading to it closes behind you as you rush
        through it. You find yourself in a room you have already visited before, again.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Is this a joke?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: We must have got something wrong somewhere earlier. Let's try again.`
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
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "repeated-room-6": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens, and you quickly make your way through the passageway. You realise that you have lost a lot
        of time circling through the already visited rooms. This time, hopefully, you will find a new one. But to
        your disappointment, you find another room that you have entered before. You can believe your eyes. You start
        thinking what has gone wrong, and where?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: We are circling the same rooms again and again.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: This is a trick.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text":
        `@name: No. If you remember, the message on the board said that a correct answer will always lead us forward.
        We have gone wrong, at least once before. But where?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend1: Let us give another it try here, and then see what happens.`
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
      "id": "remove-bottom",
      "text": `Enter the correct password (single word answer in English script) and click on the button to open the door.`
    }

  ],

  "repeated-room-7": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You start walking through the passage behind it. As you walk, you hope the path will lead
        you to something good. After walking for a while, you see another door in front of you. Entering the room,
        you are surprised to find that it was previously visited by you. You can't believe it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: You have got to be kidding me. How are we back here?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend1: We have gone wrong somewhere. Let's have a look again quickly. We don't have much time.`
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
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "repeated-room-8": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You quickly walk through the passage. Moments later, you find yourself in a room you have
        already visited before, again.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: Not again, please. I am sick of this now.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend1: @friend2, you can't lose hope so easily. We have to get out of this.`
    },

    {
      "tag": "img",
      "class": "col-10 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room8_img1.png"
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
      "text": `Enter the correct key and click on the button to open the door.`
    }

  ],

  "repeated-room-9": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You walk through the passage, and moments later you see a small door in front of you.
        You rush through it, and it closes behind you. Upon entering, you are surprised to find yourself in a room
        you have already visited before.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Why are we here again?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Let's have a look at the clues again.`
    },

    {
      "tag": "img",
      "class": "col-12 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room9_img1.png"
    },

    {
      "tag": "img",
      "class": "col-10 col-md-6 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room9_img2.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct code and click on the button to open the door.`
    }

  ],

  "repeated-room-10" : [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You walk through the passage, and moments later you see a small door in front of you.
        You rush through it, and it closes behind you. Upon entering, you find yourself in a room you have visited
        before, again.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Can't believe we are back here again?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Let us quickly have a look at the clues again.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `H Q Z O T F E T`
        ]
      }
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `A -> K`,
          `K -> R`,
          `R -> D`,
          `D -> M`,
          `M -> Z`
        ]
      }
    },

    {
      "tag": "img",
      "class": "col-12 col-md-10 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room10_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "repeated-room-11": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `As you expected, there was a trap door present. It opens and leads to a tunnel. Your friends are a
        little scared of going through it. You also give it a second thought before sliding down. So far, you've
        encountered passages, but this time there's a tunnel. Hence, you are a bit sceptical of sliding down it.
        But then, you look at your watch and realise that time is running out. You will anyways die if you stay
        there. So, hoping for the best, you take a deep breath and jump into the tunnel. Your friends follow you.
        You slide, twist and turn and after a while, wham! You're on the ground. You have fallen again, and you
        are surprised to find that it is the same room where you had fallen earlier.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: You have got to be kidding me.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@randomFriend: Are you saying this because you fell over again or because we are back in this room again?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Both, to be precise.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@randomFriend: We are back here again. Let's have a relook at the clues.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `78 73 80 124 72 88 109 56, 66 111 131 125 57 129 95.`,
          `109 93 115 59 90 103 35 28 121 119.`,
          `116 64 132 109 56, 1 21 17 29 117 103 105 138 13 95.`
        ]
      }
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The sky was pitch black as if engulfed in black ink. But the darkness did not last more than a second.
          A multitude of stars filled the length of the sky. A distinct patch of crimson slowly made its way through
          the night sky. Dawn had arrived. The first rays of sunlight lit up my room. The morning contains some magic
          that would safely make you forget all your troubles and move you off reality. But even if I want, I cannot forget
          the events of the past day. Several people had decoded the password of my social media account. Mark my words;
          they will pay heavily for this. I need to send a message to such useless characters. Those six people need to
          provide me with the correct explanation to exit from their misery. They cannot be forgiven.`
        ]
      }
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "repeated-room-12": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You start walking through the passage behind it. As you walk, you hope the path will lead
        you to something good. After walking for a while, you see another door in front of you. Entering the room,
        you are surprised to find that it was previously visited by you. You can't believe it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: You have got to be kidding me. How are we back here?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend1: We have gone wrong somewhere. Let's have a look again quickly. We don't have much time.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `RESCUE DATE`
        ]
      }
    },

    {
      "tag": "img",
      "class": "col-12 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room12_img1.png"
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The baby was rescued on the Friday after his kidnap.`
        ]
      }
    },

    {
      "tag": "img",
      "class": "col-12 col-md-9 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room12_img2.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the date in DDMMYYYY format and click on the button to open the door.`
    }

  ],

  "repeated-room-13": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You and your friends move through the passage.  After a while, you enter another room,
        and to your surprise, you find that you have visited it previously.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: I can't believe that we are here again.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend3: Well, we need to get past this room again. Let's look at the clues.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `You go and have a look at the table in the middle. You find an unusual digital balance placed on top of
        the table. This device doesn't give a reading but has a numeric pad below the pan that lets you enter a
        value. There are three red, two green, one yellow and three blue marbles present on the pan. After this,
        you look at the see-saw balances on the remaining tables.`
    },

    {
      "tag": "img",
      "class": "col-12 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room13_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct key and click on the button to open the door.`
    }
  ],

  "repeated-room-14": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens. You and your friends move through the passage.  After a while, you enter another room,
        and to your surprise, you find that you have visited it previously.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: I can't believe that we are here again.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: This is really depressing. The time is running out. What do we do?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@friend2: We need to get past this room again. Let's look at the clues.`
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `1 CAR 2 PARROT 2 AMBULANCE 5 PHONE 4 TABLE = CAMEL`
        ]
      }
    },

    {
      "tag": "div",
      "class": `riddle my-2 ${textSize}`,
      "id": "",
      "text": {
        "class": "riddle-text",
        "id": "remove-bottom",
        "text": [
          `The frog has icecube and chair as its neighbours.`,
          `The door is at one of the extremes.`,
          `Icecube is next to the door.`,
          `The cat lies at the end.`
        ]
      }
    },

    {
      "tag": "img",
      "class": "col-10 col-md-8 mx-auto",
      "id": "",
      "text": "",
      "file": "game_images/room14_img1.png"
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `Enter the correct password and click on the button to open the door.`
    }

  ],

  "end-1": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `You enter the key, but the door doesn't open. Suddenly you start hearing some strange noises from the
        suspicious ceiling above you. And in an instant, the room begins flooding with water. The water hits @friend3
        and @friend1 with great force. Their heads strike the wall, and they die on the spot. You can't believe your
        eyes. The people you loved died in front of you, and you couldn't do anything about it. The water level rises
        to your chest. You move towards the door and try different combinations to open it, but the lock seems to have
        become inactive. The water level has risen to your head now. You try your best to float in the water. You hear
        the cries of your friends who don't know what to do. Soon you realise that @friend2 and @friend4 do not know
        how to swim. They drown before you can reach them for assistance. You can't believe your eyes. Moments later,
        your head touches something above it. You realise that water has almost filled the entire room, and your head
        is right next to the ceiling. You know that you cannot do anything now. As your await your death, you start
        thinking, should you have entered this house?`
    },

    {
      "tag": "h2",
      "class": "",
      "id": "",
      "text": `GAME OVER`
    },

    {
      "tag": "h6",
      "class": "",
      "id": "",
      "text": `Refresh the page to restart the game.`
    }

  ],

  "end-4": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `As you expected, there was a trap door present. It opens and leads to a tunnel. You realize that time is
        running out. Hence, you and your friends do not hesitate to jump inside it. You are confident about your
        answer, and you jump after your friends. You slide, twist and turn. After a while, you see an opening. Just
        as you pass through it, you realize that something is wrong. A deep ditch filled with hard rocks awaits you
        below it. Just near the opening, you grasp a large stone to keep yourself from falling. You look down, and
        to your horror, you find that all your friends have hit the rocks and are dead. You cannot believe what you
        are seeing. You start to feel strain in your arms and realize that you cannot hold on for long. You try to
        pull yourself up but are unable to do that. Finally accepting your fate, you let yourself go off the stone
        and start falling. As you await your death, you start thinking, should you have entered this house in the
        first place?`
    },

    {
      "tag": "h2",
      "class": "",
      "id": "",
      "text": `GAME OVER`
    },

    {
      "tag": "h6",
      "class": "",
      "id": "",
      "text": `Refresh the page to restart the game.`
    }

  ],

  "end-5": [
    {
      "tag": "p",
      "class": `${textSize} first-content`,
      "id": "",
      "text": 
        `The door opens, and you rush through the passage. You are confident about your answer, and you lead
        the way, with your friends following you. After a while, you start feeling a bit warmer than usual.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@name: Does anyone else feel that it is getting warmer as we are moving?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend1: Yes, it seems like it.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend4: Don't you feel that we have been walking a bit longer than usual?`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "remove-bottom",
      "text": `@friend2: You are scaring me now.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": `@name: Don't worry. I feel that we are safe.`
    },

    {
      "tag": "p",
      "class": `${textSize}`,
      "id": "",
      "text": 
        `As you say that, large rocks begin to fall from the top. Realizing the danger, you try to evade them.
        But the rocks hit @friend3 and @friend2 on the head, who died on the spot. You can't believe your eyes.
        The people you loved died in front of you, and you couldn't do anything about it. Suddenly, the ground
        starts shaking. Cracks appear on the steps you are standing. You jump forward to avoid getting sucked
        into the ground as it splits. The floor opens up and reveals a large pool of burning hot magma. @friend1
        and @friend4 lose the ground beneath their feet, get sucked into the magma and die. The ground starts
        trembling beneath you. Moments later, you are hanging on one of the rocks, just evading your death. You
        cannot believe what you are seeing. You start to feel strain in your arms and realize that you cannot
        hold on for long. You try to pull yourself up but are unable to do that. Finally accepting your fate,
        you let yourself go off the rock and start falling. As you await your death, you start thinking, should
        you have entered this house in the first place?`
    },

    {
      "tag": "h2",
      "class": "",
      "id": "",
      "text": `GAME OVER`
    },

    {
      "tag": "h6",
      "class": "",
      "id": "",
      "text": `Refresh the page to restart the game.`
    }

  ]

}

export {pageContent}