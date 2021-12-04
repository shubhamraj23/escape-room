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
    "room-5": "room-6",
    "room-6": "room-17",
    "room-7": "room-4",
    "room-8": "room-7",
    "room-9": "room-10",
    "room-10": "room-11",
    "room-11": "room-12",
    "room-12": "room-17",
    "room-13": "room-11",
    "room-14": "room-12",
    "room-15": "room-16",
    "room-16": "room-9",
    "room-17": "room-18",
    "room-18": "room-20",
    "room-20": "winner"
}

const leftButtonTraversal = {
    "room-3": "room-4",
    "room-18": "room-19"
}

const wrongAnswer = {
    "room-4": "room-7",
    "room-5": "room-7",
    "room-6": "room-7",
    "room-7": "room-8",
    "room-8": "end-1",
    "room-9": "room-15",
    "room-10": "room-15",
    "room-11": "room-13",
    "room-12": "room-14",
    "room-13": "end-4",
    "room-14": "end-5",
    "room-15": "end-2",
    "room-16": "end-3",
    "room-17": "end-5"
}

const backTraversal = {
    "room-19": "room-18",
    "room-20": "room-18"
}

export {correctAnswer, leftButtonTraversal, wrongAnswer, backTraversal};