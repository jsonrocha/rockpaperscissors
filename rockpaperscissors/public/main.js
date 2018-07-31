//Team 1 ROCK

let player1choice

const buttonClickEvent = () => {
  console.log('button was click')
  let currentValue = document.querySelector('.output1').textContent

  console.log(player1choice)

  newValue = document.querySelector('.rock').textContent

  document.querySelector('.output1').textContent = newValue

  player1choice= newValue

}

document.querySelector('.rock').addEventListener('click', buttonClickEvent)


// //Player 1 Paper
let player1choice2

const button2ClickEvent = () => {
  console.log('button was click')
  let currentValue = document.querySelector('.output1').textContent

  console.log(player1choice2)

  newValue = document.querySelector('.paper').textContent

  document.querySelector('.output1').textContent = newValue

  player1choice= newValue

}

document.querySelector('.paper').addEventListener('click', button2ClickEvent)
//
//
//
//
// //Player 1 Scissors
//
let player1choice3

const button3ClickEvent = () => {
  console.log('button was click')
  let currentValue = document.querySelector('.output1').textContent

  console.log(player1choice3)

  newValue = document.querySelector('.scissors').textContent

  document.querySelector('.output1').textContent = newValue

  player1choice3= newValue

}

document.querySelector('.scissors').addEventListener('click', button3ClickEvent)
//
//
//
//
//
// // Player 2 Rock

let player2choice

const p2buttonClickEvent = () => {
  console.log('button was click')
  let currentValue = document.querySelector('.output2').textContent

  console.log(player2choice)

  newValue = document.querySelector('.rock2').textContent

  document.querySelector('.output2').textContent = newValue

  player2choice= newValue

}

document.querySelector('.rock2').addEventListener('click', p2buttonClickEvent)
//
//
//
//
//
//
// //Player 2 Paper
//
let player2choice2

const p2buttonClickEvent2 = () => {
  console.log('button was click')
  let currentValue = document.querySelector('.output2').textContent

  console.log(player2choice2)

  newValue = document.querySelector('.paper2').textContent

  document.querySelector('.output2').textContent = newValue

  player2choice2= newValue

}

document.querySelector('.paper2').addEventListener('click', p2buttonClickEvent2)
//
//
//
//
//
//
// //Player 2 scissors
//
let player2choice3

const p2buttonClickEvent3 = () => {
  console.log('button was click')
  let currentValue = document.querySelector('.output2').textContent

  console.log(player2choice3)

  newValue = document.querySelector('.scissors2').textContent

  document.querySelector('.output2').textContent = newValue

  player2choice3= newValue

}

document.querySelector('.scissors2').addEventListener('click', p2buttonClickEvent3)
