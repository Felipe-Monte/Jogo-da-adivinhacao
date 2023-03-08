const input = document.querySelector('input')
const btn = document.querySelector('#btnTry')
const btn2 = document.querySelector('#btnReset')

let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')

let randonNumber = Math.ceil(Math.random() * 10)
let counter = 1

btn.addEventListener('click', btnTry)
btn2.addEventListener('click', btnReset)
document.addEventListener('keydown', enterPress)

function btnTry(e) {
  e.preventDefault()

  let userValue = input.value
  if (userValue == 0 || userValue < 0) return
  if (userValue == randonNumber) {
    toogleClick()
    document.querySelector('.screen2 h1').innerHTML = `Acertou em ${counter} tentativas!`
  }

  input.value = ""
  counter++
}

function btnReset(e) {
  toogleClick()
  input.focus()
  randonNumber = Math.ceil(Math.random() * 10)
  counter = 1

}

function enterPress(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    toogleClick()
    input.focus()
    randonNumber = Math.ceil(Math.random() * 10)
    counter = 1
  }
}

function toogleClick() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}



