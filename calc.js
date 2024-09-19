const result = document.querySelector("#result")
const buttons = document.querySelector(".buttons")
const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/"]

let render = ''

function addAndRender () {
    render += event.target.textContent
    result.textContent = render
}

function clear () {
    render = ''
    result.textContent = "0"
}

function calcAndRender () {
    render = String(eval(render)).substring(0,10)
    result.textContent = render
}

buttons.addEventListener('click', function (event) {
    if (symbols.includes(event.target.textContent)) {addAndRender()}
    if (event.target.textContent == 'C') {clear()}
    if (event.target.textContent == '=') {calcAndRender()}
})