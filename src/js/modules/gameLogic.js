import gameState from './gameState';
import * as calc from './calc';

const FUNCTIONS = {
    cube: calc.cube,
    square: calc.square,
    sqrt: calc.sqrt
};

const SYMBOLS = {
    cube: '³',
    square: '²',
    sqrt: '√'
};

let MAX_TURNS = 10;

let symbolKeys = Object.keys(SYMBOLS); // [cube, square, sqrt]


function generateNumber(min, max) {
    return calc.randomInt(min, max);
}

function generateFunction() {
    return symbolKeys[calc.randomInt(0, symbolKeys.length - 1)];
}

function generateQuestion() {
    let questionFunction = generateFunction();
    let questionNumber = generateNumber(0, 10);
    let questionSymbol = SYMBOLS[questionFunction];

    setCorrectAnswer(questionFunction, questionNumber);

    return {
        symbol: questionSymbol,
        number: questionNumber
    };
}

function setCorrectAnswer(questionFunction, questionNumber) {
    gameState.setAnswer(FUNCTIONS[questionFunction](questionNumber));
}

function checkAnswer(answer) {
    gameState.incrementTurn();
    return gameState.getAnswer() == answer;
}

function isGameOver(){
    return gameState.getTurn() > MAX_TURNS;
}

export default {
    generateQuestion,
    checkAnswer,
    isGameOver
};