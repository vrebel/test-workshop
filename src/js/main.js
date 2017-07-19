import '../scss/main.scss';
import * as renderer from './modules/renderer';
import $ from 'jquery';
import gameLogic from './modules/gameLogic';

setUp();

function setUp(){
    createBoard();
    startTurn();
}

function startTurn(){
    let question = gameLogic.generateQuestion();
    renderer.renderQuestion( question.symbol , question.number );
    listenToInput();
}

function createBoard(){
    renderer.createPanel();
    renderer.renderInput();
}

function listenToInput(){
    $('.answer-input input').on('keypress', checkUserInput);
}

function checkUserInput(e){
    if( e.keyCode === 13 || e.which === 13 ){
        let isCorrect = gameLogic.checkAnswer($(this).val().trim());
        renderer.showResult(isCorrect);
        let cleanUpTimeout = setTimeout(cleanUp, 2000);/*** */
    }    
}

function cleanUp(){
    $('.answer-input input').val('');
    renderer.removeQuestion();
    endTurn();
}

function endTurn(){
    if( gameLogic.isGameOver() ){
        endGame();
    }else
    {
        startTurn();
    }
}

function endGame(){
    console.log('game over');
}



