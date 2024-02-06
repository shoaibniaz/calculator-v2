
let values = []

const calculator = document.getElementById('Calculator');


function calculate(event) {
    event.preventDefault()
    const input = document.getElementById('inputBox')
    const buttons = document.querySelectorAll('button').value
    console.log("inputBox", input);
    console.log("buttons", buttons);
    const resultDiv = document.getElementById("resultDiv")
    // if (buttons === "+") {
    //     resultDiv.innerHTML = `placeholder ${Number(buttons) + Number(inputBox)} placeholder`
    // }

    console.log(" ================== IN Calculate --------------------");

}



const enterValue = (event) => {

    console.log('values ====111111111111=================>', values);

    console.log('---------------> ', event.target.innerText, event);

    values.push(event.target.innerText)

    console.log('values ===222222222222222==================>', values);

    const result = values.join('')

    console.log('result ========>', result);

    calculator.value = values.join('')



}