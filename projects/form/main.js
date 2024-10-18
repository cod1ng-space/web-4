function onButtonClicked(){
    inputName = document.getElementById("name");
    inputSurname = document.getElementById("surname");
    if (inputName.value != "" && inputSurname.value != ""){
        document.querySelector("#answer").innerText = `Ответ: Здравствуйте, ${inputName.value} ${inputSurname.value}!`
    }
    else{
        document.querySelector("#answer").innerText = `Ответ:`
    }
}