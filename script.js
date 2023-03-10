const number = Math.floor(Math.random() * 11)
const input = document.querySelector('.input')
const button = document.querySelector('.btn')
console.log(number)

button.addEventListener('click', () => {
    const inputValue = input.value
    const inputNumber = Number(inputValue)
    const paragraphbigger = document.querySelector('#bigger')
    const paragraphsmaller = document.querySelector('#smaller')
    const numberMystery = document.querySelector('#numberMystery')
    if (number === inputNumber){
        numberMystery.classList.toggle('correct')

    } else if (number < inputNumber) {
        paragraphbigger.classList.toggle('bigger')
        console.log('O número que você inseriu é menor do que o número misterioso')
    } else {
        paragraphsmaller.classList.toggle('smaller')
        console.log('O número que você inseriu é maior do que o número misterioso')
    }
})