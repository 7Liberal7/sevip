const checbox = document.querySelector('.test__form-checkbox')
const checboxLabel = document.querySelector('.test__form-text')
checbox.addEventListener('click', checboxFunc)
checboxLabel.addEventListener('click', checboxFunc)
function checboxFunc() {
  checbox.classList.toggle('test__form-checkbox--active')
}


let questions = document.querySelectorAll('.answers__item')
let answers = document.querySelectorAll('.answers__item-text2')
console.log(questions)
for (let index = 0; index < questions.length; index++) {
  questions[index].onclick = function () {
    for (let i = 0; i < answers.length; i++) {
      if (i != index) {
        answers[i].classList.remove('answers__item-text2--active')
      }
    }
    for (let i = 0; i < questions.length; i++) {
      if (i != index) {
        questions[i].classList.remove('answers__item--active')
      }
    }
    answers[index].classList.toggle('answers__item-text2--active')
    questions[index].classList.toggle('answers__item--active')
  }
}

let sliderItems = document.querySelectorAll('.reviews__slider-item')
let widthSlider = parseInt(getComputedStyle(sliderReviews).width)
for (let index = 0; index < sliderItems.length; index++) {
  sliderItems[index].style.minWidth = `${widthSlider}px`
  sliderItems[index].style.maxWidth = `${widthSlider}px`
  sliderItems[index].style.position = 'relative'
  sliderItems[index].style.left = `${widthSlider * index}px`
}


let leftArrow = document.querySelector('.reviews__slider-arrow-left')
let rightArrow = document.querySelector('.reviews__slider-arrow-right')
let slideIndex = 0
leftArrow.onclick = function () {
  lastSlideIndex = slideIndex
  slider(lastSlideIndex - 1)
}
rightArrow.onclick = function () {
  lastSlideIndex = slideIndex
  slider(slideIndex + 1)
}

let left = 0

function slider(currentIndex) {
  console.log(sliderItems.length, currentIndex)
  if (currentIndex < 0) {
    currentIndex = 0
  }
  if (currentIndex == sliderItems.length) {
    currentIndex = sliderItems.length - 1
  }
  if (currentIndex < slideIndex) {
    sliderItems[slideIndex].classList.remove('reviews__slider-item--active')
    left += widthSlider
    for (let item of sliderItems) {
      console.log(left)
      item.style.left = `${left}px`
    }
  }
  if (currentIndex > slideIndex) {
    sliderItems[slideIndex].classList.remove('reviews__slider-item--active')
    left -= widthSlider
    for (let item of sliderItems) {
      console.log(left)
      item.style.left = `${left}px`
    }
  }
  sliderItems[currentIndex].classList.add('reviews__slider-item--active')
  slideIndex = currentIndex
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
let header = document.querySelector('.header')
let containerHeader = document.querySelector('.container-header')
// container.style.Width = `${window.screen.width} px`
// container.style.maxWidth = `${parseInt(getComputedStyle(containerHeader).width) - 40} px`
// console.log(parseInt(getComputedStyle(container).width))
window.onscroll = function showHeader() {
  if (window.pageYOffset > parseInt(getComputedStyle(header).height)) {
    header.classList.add('header-fixed')
    containerHeader.style.width = `${window.screen.width}px`
    header.style.width = `${window.screen.width}px`

    // header.style.padding = `0 400px`
  }
} 