import $ from 'jquery';

let resultMessage;
let question;
let answerInput;
let panel;
let score;
let restartBtn;
const wait = ms => new Promise( resolve => setTimeout(resolve, ms) );



function renderInput() {
    answerInput = document.createElement('div');
    answerInput.innerHTML = '<input type="number" autofocus>';
    answerInput.className += 'answer-input';

    panel.appendChild(answerInput);
}

function renderQuestion(symbol, questionNumber) {
    question;
    question = document.createElement('div');
    question.className += 'question-message';
    question.innerHTML = `<span data-symbol='${symbol}'>${questionNumber}</span><span> = ?</span>`;

    $('.panel').prepend(question);
}


function removeResult() {
    $(resultMessage).remove();
}

function removeQuestion() {
    $(question).remove();
}

function removeInput() {
    $(answerInput).remove();
}

function showScore(totalScore){
    score = document.createElement('div');
    score.className += 'score';
    score.innerText += totalScore;

    restartBtn = document.createElement('div');
    restartBtn.className += 'restart';
    restartBtn.innerHTML = '<button>RECOMECAR</button>';

    panel.appendChild(score);
    panel.appendChild(restartBtn);
}

function removeAll(){
    $(score).remove();
    $(restartBtn).remove();
    $(panel).remove();
}

export default{
    // createPanel,
    renderQuestion,
    renderInput,
    // showResult,
    removeQuestion,
    showScore,
    removeInput,
    removeAll
};