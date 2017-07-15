var panel;
function createPanel(){
    panel = document.createpanelent('div');
    panel.innerText = 'Hello from es6!!!';
    panel.className += 'message';
    document.body.prepend(panel);
}

function renderMessage(message){
    return message;
}

export default {
    createPanel,
    renderMessage
};