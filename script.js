
// Adivinhe o número

let number = Math.floor(Math.random() * 11)
const input = document.querySelector('#input')
const button = document.querySelector('#btn')
const rebootButton = document.querySelector('#reboot')
console.log(number)

rebootButton.addEventListener('click', () => {
    const paragraph = document.querySelector('#paragraph')
    paragraph.innerText = ''
    number = Math.floor(Math.random() * 11)
    console.log(number)
})

button.addEventListener('click', () => {
    const inputValue = input.value
    const inputNumber = Number(inputValue)
    const paragraph = document.querySelector('#paragraph')
    if (number === inputNumber){
        paragraph.innerText = 'Acertou, meus parabéns!'
    }else if (inputValue == '') {
        paragraph.innerText = 'Insira um número real ❌'
    }else if (number < inputNumber) {
        paragraph.innerText = 'Seu numero é maior do que o misterioso'
    }else {
        paragraph.innerText = 'Seu numero é menor do que o misterioso'
    }
})

