import '../scss/main.scss';
import * as calc from './modules/calc';
import * as renderer from './modules/renderer';
import $ from 'jquery';

const SYMBOLS = {
    cube: '³',
    square: '²',
    sqrt: '√'
};
const FUNCTIONS = {
    cube: calc.cube,
    square: calc.square,
    sqrt: calc.sqrt
};
var symbolKeys = Object.keys(SYMBOLS);
let turns = 0;
let correctAnswer;
renderer.createPanel();
renderer.renderInput();
listenToInput();
startTurn();

function startTurn(){
    let questionNumber  = calc.randomInt(1,10);
    let questionFn = symbolKeys[calc.randomInt(0,2)];
    let questionSymbol = SYMBOLS[questionFn];
    renderer.renderQuestion(questionNumber, questionSymbol);
    setCorrectAnswer(questionFn, questionNumber);
}
function setCorrectAnswer(fn, number){
    correctAnswer = FUNCTIONS[fn](number);
}
function endTurn(){
    removeQuestion();
    if(++turns < 10){
        startTurn();
    }
}

function removeQuestion(){
    $('.question-message').remove();
}

function listenToInput(){
    $('.answer-input input').on('keypress', onEnterKey);
}

function showFeedback(isCorrect){
    let message = document.createElement('div');
    message.className += 'answer-feedback';
    if(isCorrect){
        
        message.innerHTML = 'Resposta  correta!';
        message.className += ' correct';
       
    }else{
        message.innerHTML = 'Resposta  errada!';
        message.className += ' wrong';
    }
    $('body').prepend(message);
    setTimeout( cleanUp , 2000 );
    endTurn();
}

function cleanUp(){
    $('.answer-feedback').remove();
    $('.answer-input input').val('');
}
function onEnterKey(e){
    if( e.keyCode === 13 || e.which === 13 ){
        let isCorrect = checkValue($(this).val().trim());
        showFeedback(isCorrect);
    }    
}

function checkValue(value){
    return value == correctAnswer;
}