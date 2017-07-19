let correctAnswer;
let turn = 0;


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

export default {
    getTurn,
    getAnswer,
    setAnswer,
    incrementTurn
};