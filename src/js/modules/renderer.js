import $ from 'jquery';

function createPanel(){
    let panel;
    panel = document.createElement('div');
    panel.className += 'panel';
    document.body.prepend(panel);
}

function renderInput(){
    let answerInput = document.createElement('div');
    answerInput.innerHTML = '<input type="number" autofocus>';
    answerInput.className += 'answer-input';

    let panel = document.getElementsByClassName('panel')[0];
    panel.appendChild(answerInput);
}

function renderQuestion(questionNumber, symbol){
    let question;
    question = document.createElement('div');
    question.className += 'question-message';
    question.innerHTML = `<span data-symbol='${symbol}'>${questionNumber}</span><span> = ?</span>`;

    $('.panel').prepend(question);
}

export {
    createPanel,
    renderQuestion,
    renderInput
};