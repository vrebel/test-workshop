import $ from 'jquery';

let resultMessage;
let question;
let answerInput;
let panel;

function createPanel() {
    panel = document.createElement('div');
    panel.className += 'panel';
    document.body.prepend(panel);
}

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

function showResult(isCorrect) {
    resultMessage = document.createElement('div');
    resultMessage.className += 'answer-feedback';
    if (isCorrect) {

        resultMessage.innerHTML = 'Resposta  correta!';
        resultMessage.className += ' correct';

    } else {
        resultMessage.innerHTML = 'Resposta  errada!';
        resultMessage.className += ' wrong';
    }

    $('body').prepend(resultMessage);

    setTimeout(removeResult, 2000);/*** */
}

function removeResult() {
    $('.answer-feedback').remove();
}

function removeQuestion() {
    $(question).remove();
}

export {
    createPanel,
    renderQuestion,
    renderInput,
    showResult,
    removeQuestion
};