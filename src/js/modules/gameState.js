let correctAnswer;
let turn = 0;
let score = [];
let MAX_TURNS = 10;


function getMaxTurns(){
    return MAX_TURNS;
}

function reset(){
    turn = 0;
    score = [];
}

function getTurn(){
    return turn;
}

function getAnswer(){
    return correctAnswer;
}

function setAnswer(answer){
    correctAnswer = answer;
}

function incrementTurn(){
    turn++;
}

function addScore(result){
    score.push(result);
}

function getScore(){
    return score;
}

export default {
    getTurn,
    getAnswer,
    setAnswer,
    incrementTurn,
    addScore,
    getScore,
    reset,
    getMaxTurns
};