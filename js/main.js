const checbox = document.querySelector('.test__form-checkbox')
const checboxLabel = document.querySelector('.test__form-text')
checbox.addEventListener('click', checboxFunc)
checboxLabel.addEventListener('click', checboxFunc)
function checboxFunc() {
  checbox.classList.toggle('test__form-checkbox--active')
}

const checbox2 = document.querySelector('.modal__form-span')
const checboxLabel2 = document.querySelector('.modal__form-label')
checbox2.addEventListener('click', checboxFunc2)
checboxLabel2.addEventListener('click', checboxFunc2)
function checboxFunc2() {
  checbox2.classList.toggle('modal__form-span--active')
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

const arrImages = document.querySelectorAll('.reviews__item-img')
let Imageslsit = document.querySelector('.reviews__list')
console.log(arrImages)
let leftImages = 0
let widthScreen = window.screen.width
let arrImagesWidth = parseInt(getComputedStyle(Imageslsit).width)
reviews__item1.onclick = function () {
  let str = 'reviews__item1'
  leftImages = 0
  Imageslsit.style.left = '0px'
  slider(Number(str[str.length - 1]) - 1)
}

reviews__item2.onclick = function () {
  console.log(leftImages)
  if (leftImages == 0) {
    leftImages += 136
    Imageslsit.style.left = `-${leftImages}px`
  } else {
    if (leftImages >= 136) {
      leftImages = 0
      Imageslsit.style.left = '0px'
    }
  }
  let str = 'reviews__item2'
  slider(Number(str[str.length - 1]) - 1)
}

reviews__item3.onclick = function () {
  console.log(leftImages)
  let str = 'reviews__item3'
  if (leftImages <= 136) {
    leftImages += 197
    Imageslsit.style.left = `-${leftImages}px`
  } else {
    if (leftImages >= 136) {
      leftImages -= 197
      Imageslsit.style.left = `-${leftImages}px`
    }
  }
  slider(Number(str[str.length - 1]) - 1)
}

reviews__item4.onclick = function () {
  console.log(leftImages)
  let str = 'reviews__item4'
  if (leftImages <= 333) {
    leftImages += 177
    Imageslsit.style.left = `-${leftImages}px`
  } else {
    if (leftImages >= 333) {
      leftImages -= 177
      Imageslsit.style.left = `-${leftImages}px`
    }
  }
  slider(Number(str[str.length - 1]) - 1)
}

reviews__item5.onclick = function () {
  if (leftImages <= 510) {
    leftImages += 163
    Imageslsit.style.left = `-${leftImages}px`
  } else {
    if (leftImages >= 510) {
      leftImages -= 163
      Imageslsit.style.left = `-${leftImages}px`
    }
  }
  let str = 'reviews__item5'

  slider(Number(str[str.length - 1]) - 1)
}
reviews__item6.onclick = function () {
  let str = 'reviews__item6'

  slider(Number(str[str.length - 1]) - 1)
}
function slider(currentIndex) {
  if (currentIndex < 0) {
    currentIndex = 0
  }
  if (currentIndex == sliderItems.length) {
    currentIndex = sliderItems.length - 1
  }
  if (currentIndex < slideIndex) {
    sliderItems[slideIndex].classList.remove('reviews__slider-item--active')
    console.log(widthSlider * (slideIndex - currentIndex))
    left += widthSlider * (slideIndex - currentIndex)
    for (let item of sliderItems) {
      item.style.left = `${left}px`
    }

    for (let index = 0; index < arrImages.length; index++) {
      console.log(currentIndex)
      if (currentIndex != index) {
        arrImages[index].src = `images/reviews/${index + 1}/${index + 1}.svg`
      }
      console.log(`images/reviews/${currentIndex + 1}/${currentIndex + 2 + 6}.svg`)
      arrImages[currentIndex].src = `images/reviews/${currentIndex + 1}/${currentIndex + 1 + 6}.svg`
    }

  }
  if (currentIndex > slideIndex) {
    sliderItems[slideIndex].classList.remove('reviews__slider-item--active')
    console.log(-widthSlider * (currentIndex - slideIndex))
    left += -widthSlider * (currentIndex - slideIndex)
    for (let item of sliderItems) {
      item.style.left = `${left}px`
    }
    for (let index = 0; index < arrImages.length; index++) {
      if (currentIndex != index) {
        arrImages[index].src = `images/reviews/${index + 1}/${index + 1}.svg`
      }
      arrImages[currentIndex].src = `images/reviews/${currentIndex + 1}/${currentIndex + 1 + 6}.svg`
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
let fsDs = document.querySelector('.fisrt-display__wrapper')

header.classList.add('header-fixed')
containerHeader.style.width = `${window.screen.width}px`
header.style.width = `${window.screen.width}px`
fsDs.style.position = 'relative'
fsDs.style.top = `${parseInt(getComputedStyle(header).height)}px`

let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal__form-close')
let body = document.querySelector('.body')
let btnsModal = document.querySelectorAll('.btns')
console.log(btnsModal)
btnsModal.forEach(element => {
  element.onclick = function () {
    modal.classList.add('modal--active')
    body.classList.add('body--modal')
  }
});
modalClose.addEventListener('click', modalCloseFunc)
function modalCloseFunc() {
  modal.classList.remove('modal--active')
  body.classList.remove('body--modal')
}

const mobMenuOpen = document.querySelector('.mob-header__open')
const mobMenuClose = document.querySelector('.mob-menu__close')
const mobMenu = document.querySelector('.mob-menu')
let headerBlack = document.querySelector('.header-black')
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
headerBlack.style.height = `${scrollHeight}px`
mobMenuOpen.onclick = function () {
  mobMenu.style.right = '0px'
  body.classList.add('body--modal')
  headerBlack.style.display = 'block'
}
mobMenuClose.onclick = function () {
  mobMenu.style.right = '-300px'
  body.classList.remove('body--modal')
  headerBlack.style.display = 'none'
}

const arrMobLinks = document.querySelectorAll('.mob-menu__link')
arrMobLinks.forEach(element => {
  element.onclick = function () {
    mobMenu.style.right = '-300px'
    body.classList.remove('body--modal')
    headerBlack.style.display = 'none'
  }
});

let sliderBenefits = document.querySelector('.benefits__slider-line')
let thumbBenefits = sliderBenefits.querySelector('.benefits__slider-switch');
let benefitsList = document.querySelector('.benefits__list')
let benefitsWidth = 4 * 210 + 3 * 40
let sliderBenefitsWidth = parseInt(getComputedStyle(sliderBenefits).width)
thumbBenefits.onpointerdown = function (event) {
  event.preventDefault();
  let shiftX = event.clientX - thumbBenefits.getBoundingClientRect().left;

  document.addEventListener('pointermove', onMouseMove);
  document.addEventListener('pointerup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - sliderBenefits.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = sliderBenefits.offsetWidth - thumbBenefits.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    let difference = benefitsWidth - sliderBenefitsWidth
    console.log('benefitsWidth', benefitsWidth)
    console.log('newLeft', newLeft)
    console.log('sliderBenefitsWidth', sliderBenefitsWidth)
    console.log('difference', difference)
    console.log('324242', Math.abs(benefitsWidth - (newLeft + sliderBenefitsWidth) - difference))
    console.log(Math.abs(benefitsWidth - (newLeft + sliderBenefitsWidth) - difference))
    if (newLeft + sliderBenefitsWidth < benefitsWidth) {
      console.log(benefitsWidth / sliderBenefitsWidth)
      benefitsList.style.left = '-' + (Math.abs(benefitsWidth - (newLeft + sliderBenefitsWidth) - difference) * Math.floor(benefitsWidth / sliderBenefitsWidth + 0.3)) + 'px'
    }

    thumbBenefits.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('pointerup', onMouseUp);
    document.removeEventListener('pointermove', onMouseMove);
  }

};

thumbBenefits.ondragstart = function () {
  return false;
};

let sliderPlan = document.querySelector('.plan__slider-line')
let thumbPlan = sliderPlan.querySelector('.plan__slider-switch');
let planList = document.querySelector('.plan__list')
let planWidth = 8 * 210 + 7 * 40
let sliderPlanWidth = parseInt(getComputedStyle(sliderPlan).width)
thumbPlan.onpointerdown = function (event) {
  event.preventDefault();
  let shiftX = event.clientX - thumbPlan.getBoundingClientRect().left;

  document.addEventListener('pointermove', onMouseMove);
  document.addEventListener('pointerup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - sliderPlan.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = sliderPlan.offsetWidth - thumbPlan.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    let difference = planWidth - sliderPlanWidth
    console.log('benefitsWidth', planWidth)
    console.log('newLeft', newLeft)
    console.log('sliderBenefitsWidth', sliderPlanWidth)
    console.log('difference', difference)
    console.log('324242', Math.abs(planWidth - (newLeft + sliderPlanWidth) - difference))
    console.log(Math.abs(planWidth - (newLeft + sliderPlanWidth) - difference))
    if (newLeft + sliderPlanWidth < planWidth) {
      console.log(planWidth / sliderPlanWidth)
      planList.style.left = '-' + (Math.abs(planWidth - (newLeft + sliderPlanWidth) - difference) * (planWidth / sliderPlanWidth + 0.5)) + 'px'
    }

    thumbPlan.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('pointerup', onMouseUp);
    document.removeEventListener('pointermove', onMouseMove);
  }

};

thumbPlan.ondragstart = function () {
  return false;
};

let textsSlider = document.querySelectorAll('.reviews__slider-mixin')
console.log(textsSlider)

textsSlider.forEach(element => {
  element.onclick = function (params) {
    let parent = element.parentNode
    element.style.display = 'none'
    parent.children[3].classList.remove('reviews__slider-text--adaptive')
    parent.children[4].classList.remove('reviews__slider-text--adaptive')
    console.log(parent)
  }
});