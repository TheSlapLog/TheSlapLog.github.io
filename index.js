const h1One = document.getElementById('h1One')
const dateShow = document.getElementById('date-show') // Date show H3
const buttonOne = document.getElementById('buttonOne')
const body = document.getElementById('body')
const h4One = document.getElementById('h4One')

const currentDate = new Date()

dateShow.innerHTML = `Today is <a id="date">${currentDate}</a>`

function onClick() {
    body.classList.toggle('backgroundBlack')
    h1One.classList.toggle('colorWhite')
    dateShow.classList.toggle('colorWhite')
    h4One.classList.toggle('colorWhite')
}
