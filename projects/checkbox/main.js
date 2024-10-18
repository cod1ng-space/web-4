btnElement = document.getElementById("button")
resultElement =  document.getElementById("answer");
radioButtons = document.querySelectorAll('[name = "food"]')

btnElement.addEventListener("click", onButtonClicked);

function onButtonClicked(){
    let sum = 0;
    for (i = 0; i < 3; i++){
        if (radioButtons[i].checked){
            sum += parseInt(radioButtons[i].value);
        }
    }
    resultElement.innerText = `Общая стоимость: ${sum} руб`;
}