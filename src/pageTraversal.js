const correctAnswer = {
    "home-page": "welcome",
    "welcome": "instructions",
    "instructions": "scenario",
    "scenario": "the-adventure-begins",
    "the-adventure-begins": "room-1",
    "room-1": "room-2",
    "room-2": "room-3",
    "room-3": "room-9",
    "room-4": "room-5",
}

const leftButtonTraversal = {
    "room-3": "room-4",
}

const wrongAnswer = {
    "room-4": "room-7",
}

const backTraversal = {
    
}

export {correctAnswer, leftButtonTraversal, wrongAnswer, backTraversal};