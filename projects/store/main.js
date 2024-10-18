sumText = document.getElementsByClassName("sum")[0];
var sumInt = 0;

//этот объект нужен для хранения количества каждого товара
const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

//этот объект нужен для хранения цены каждого товара
//т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

document.querySelectorAll(".checkbox").forEach(item => {
    item.addEventListener("click", function(){
        checkboxEventHandler(item);
    });
})

document.querySelectorAll("[type = number]").forEach(item => {
    item.addEventListener("input", function(){
        changeSumEvent(item);
    });
})


document.getElementById("btn").addEventListener("click", makeOrder);

function checkboxEventHandler(obj){
    outputLabel = document.getElementById(obj.dataset.goods);
    if (obj.checked){
        outputLabel.value = 1;
        countGoods[obj.dataset.goods] = 1;
        choicePriceGoods[obj.dataset.goods] = obj.value;
    }
    else{
        outputLabel.value = 0;
        countGoods[obj.dataset.goods] = 0;
        choicePriceGoods[obj.dataset.goods] = 0;
    }
    updateSum();
}

function updateSum(){
    sumInt = 0;
    for (var key in choicePriceGoods){
        sumInt += choicePriceGoods[key] * countGoods[key];
    }
    sumText.innerText = `${sumInt} р.`
}

function changeSumEvent(obj){
    var valueInt = parseInt(obj.value.toString().replace(/^0+/, ''), 10);
    if (valueInt >= 0){
        countGoods[obj.id] = valueInt;
        obj.value = valueInt;
        updateSum();
    }
    else{
        countGoods[obj.id] = 0;
        obj.value = 0;
        updateSum();
    }
}

function makeOrder(){
    alert(`Заказчик: ${document.querySelector("[name = name]").value} ${document.querySelector("[name = surname]").value}\nСумма: ${sumInt} р.`)
}