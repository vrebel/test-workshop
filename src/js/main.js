import '../scss/main.scss';
import * as renderer from './modules/renderer';
import $ from 'jquery';
import gameLogic from './modules/gameLogic';

const wait = ms => new Promise( resolve => setTimeout(resolve, ms) );

setUp();

function setUp(){
    gameLogic.resetState();
    createBoard();
    listenToInput();
    startTurn();
}

function startTurn(){
    let question = gameLogic.generateQuestion();
    renderer.renderQuestion( question.symbol , question.number );
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
        $('.answer-input input').attr('disabled', 'true');
        let isCorrect = gameLogic.checkAnswer($(this).val().trim());
        renderer.showResult(isCorrect);
        wait(1500).then( cleanUp );
    }    
}

function cleanUp(){
    $('.answer-input input').val('').removeAttr('disabled').focus();
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
    renderer.removeInput();
    let totalScore = gameLogic.getTotalScore();
    renderer.showScore( totalScore );
    $('.restart').on('click', restartGame);
}

function restartGame(){
    renderer.removeAll();
    setUp();
}



