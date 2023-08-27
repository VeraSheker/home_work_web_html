
function hello () {

let name = prompt("Как Вас зовут?")

alert (`Привет, ${name}`)

};

let who = prompt("Вы - преподаватель - yes/no?")
if (who == "yes") {
    alert(`Здравствуйте, уважаемый преподаватель))`)
    alert("Не судите строго, пожалуйста)Я прям с самого нуля. Сделала функцию по д/з - приветствие при нажатии кнопки <<Как тебя зовут>>"
    )
    alert("Спасибо за внимание))")
}
else {
    alert(`Тогда Вам будет не интересно`)
}


//let x = prompt("Введите любое значение")
//const result = x*x
//alert(`Квадрат x = ${result}`)




function send() {
    document.getElementById('name').value = "";
    console.log("Вывести имя в консоль")
    
}