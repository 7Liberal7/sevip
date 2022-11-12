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
const reviewsSlider = document.querySelector('.reviews__slider')
let slideIndex = 0
reviewsSlider.addEventListener('touchstart', handleTouchStart, false)
reviewsSlider.addEventListener('touchmove', handleTouchMove, false)

let x1ReviewsTop = null
let y1ReviewsTop = null

function handleTouchStart(event) {
  const fisrtTouch = event.touches[0]
  x1ReviewsTop = fisrtTouch.clientX
  y1ReviewsTop = fisrtTouch.clientY
}

function handleTouchMove(event) {
  if (!x1ReviewsTop || !y1ReviewsTop) {
    return false
  }
  let x2 = event.touches[0].clientX
  let y2 = event.touches[0].clientY
  console.log(x2, y2)
  let xDiff = x2 - x1ReviewsTop
  let yDiff = y2 - y1ReviewsTop

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      let elem = eval(`reviews__item${slideIndex + 1 - 1}.onclick`)
      console.log(elem)
      elem()
    }

    if (xDiff < 0) {
      let elem = eval(`reviews__item${slideIndex + 1 + 1}.onclick`)
      console.log(elem)
      elem()

    }
  }
  x1ReviewsTop = null
  y1ReviewsTop = null
}
let Imageslsit = document.querySelector('.reviews__list')
let x1ReviewsBot = null
let y1ReviewsBot = null
Imageslsit.addEventListener('touchstart', handleTouchStart, false)
Imageslsit.addEventListener('touchmove', handleTouchMove, false)

function handleTouchStart(event) {
  const fisrtTouch = event.touches[0]
  x1ReviewsBot = fisrtTouch.clientX
  y1ReviewsBot = fisrtTouch.clientY
}

function handleTouchMove(event) {
  if (!x1ReviewsBot || !y1ReviewsBot) {
    return false
  }
  let x2 = event.touches[0].clientX
  let y2 = event.touches[0].clientY
  console.log(x2, y2)
  let xDiff = x2 - x1ReviewsBot
  let yDiff = y2 - y1ReviewsBot

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      let elem = eval(`reviews__item${slideIndex + 1 - 1}.onclick`)
      console.log(elem)
      elem()
    }

    if (xDiff < 0) {
      let elem = eval(`reviews__item${slideIndex + 1 + 1}.onclick`)
      console.log(elem)
      elem()

    }
  }
  x1ReviewsBot = null
  y1ReviewsBot = null
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
leftArrow.style.display = 'none'
function slider(currentIndex) {
  if (currentIndex == arrImages.length - 1) {
    rightArrow.style.display = 'none'
  } else {
    rightArrow.style.display = 'block'
  }

  if (currentIndex == 0 || currentIndex == -1) {
    leftArrow.style.display = 'none'
  } else {
    leftArrow.style.display = 'block'
  }
  if (currentIndex < 0) {
    currentIndex = 0
  }
  if (currentIndex == sliderItems.length) {
    currentIndex = sliderItems.length - 1
  }
  if (currentIndex < slideIndex) {
    sliderItems[slideIndex].classList.remove('reviews__slider-item--active')
    left += widthSlider * (slideIndex - currentIndex)
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
containerHeader.style.width = `${document.documentElement.clientWidth}px`
header.style.width = `${document.documentElement.clientWidth}px`
console.log(document.documentElement.clientWidth)
function headerWith() {
  setTimeout(() => {
    containerHeader.style.width = `${document.documentElement.clientWidth}px`
    header.style.width = `${document.documentElement.clientWidth}px`
    headerWith()
  }, 10);
}

headerWith()
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
let benefitsListWidth = parseInt(getComputedStyle(benefitsList).width)
let thumbBenefitsWidth = parseInt(getComputedStyle(thumbBenefits).width)
let benefitsWidth = 4 * 210 + 3 * 40
let sliderBenefitsWidth = parseInt(getComputedStyle(sliderBenefits).width)
let x1Benefits = null
let y1Benefits = null
benefitsList.addEventListener('touchstart', handleTouchStart2, false)
benefitsList.addEventListener('touchmove', handleTouchMove2, false)
function handleTouchStart2(event) {
  const fisrtTouch = event.touches[0]
  x1Benefits = fisrtTouch.clientX
  y1Benefits = fisrtTouch.clientY
}
let BenefitLeft = 0
function handleTouchMove2(event) {
  if (!x1Benefits || !y1Benefits) {
    return false
  }
  let x2 = event.touches[0].clientX
  let y2 = event.touches[0].clientY
  let xDiff = x2 - x1Benefits
  let yDiff = y2 - y1Benefits
  let difference = benefitsWidth - sliderBenefitsWidth
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    console.log(BenefitLeft + 250, benefitsWidth)
    if (BenefitLeft < benefitsWidth) {
      if (xDiff > 0) {
        if (BenefitLeft != 0) {
          if (difference > 250) {
            BenefitLeft -= 250
            benefitsList.style.left = `-${BenefitLeft}px`
          } else {
            BenefitLeft -= difference
            benefitsList.style.left = `-${BenefitLeft}px`
          }
          thumbBenefits.style.left = `${BenefitLeft / (benefitsWidth / sliderBenefitsWidth)}px`
        }
      }
      if (xDiff < 0) {
        if (BenefitLeft + 250 < benefitsWidth) {
          if (difference > 250) {
            BenefitLeft += 250
            benefitsList.style.left = `-${BenefitLeft}px`
          } else {
            BenefitLeft += difference
            benefitsList.style.left = `-${BenefitLeft}px`
          }
          if (BenefitLeft / (benefitsWidth / sliderBenefitsWidth) + thumbBenefitsWidth > sliderBenefitsWidth) {
            thumbBenefits.style.left = `${sliderBenefitsWidth - thumbBenefitsWidth}px`
          } else {
            thumbBenefits.style.left = `${BenefitLeft / (benefitsWidth / sliderBenefitsWidth)}px`
          }
        }
      }
    }
  }
  x1Benefits = null
  y1Benefits = null
}

let newLeft = 0

thumbBenefits.onpointerdown = function (event, xDiff) {
  event.preventDefault();
  let shiftX = event.clientX - thumbBenefits.getBoundingClientRect().left;

  document.addEventListener('pointermove', onMouseMove);
  document.addEventListener('pointerup', onMouseUp);
  function onMouseMove(event) {
    console.log(xDiff)
    newLeft = event.clientX - shiftX - sliderBenefits.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = sliderBenefits.offsetWidth - thumbBenefits.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    let difference = benefitsWidth - sliderBenefitsWidth
    // console.log('benefitsWidth', benefitsWidth)
    // console.log('newLeft', newLeft)
    // console.log('sliderBenefitsWidth', sliderBenefitsWidth)
    // console.log('difference', difference)
    // console.log('324242', Math.abs(benefitsWidth - (newLeft + sliderBenefitsWidth) - difference))
    // console.log(Math.abs(benefitsWidth - (newLeft + sliderBenefitsWidth) - difference))
    // console.log(xDiff)

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
let planTopWidth = parseInt(getComputedStyle(planList).width)
let PlansWidth = parseInt(getComputedStyle(sliderPlan).width)
let thumbPlanWidrh = parseInt(getComputedStyle(thumbPlan).width)
let planWidth = 8 * 210 + 7 * 40
let sliderPlanWidth = parseInt(getComputedStyle(sliderPlan).width)
let x1Plan = null
let y1Plan = null
let PlanLeftTop = 0
planList.addEventListener('touchstart', handleTouchStart3, false)
planList.addEventListener('touchmove', handleTouchMove3, false)
function handleTouchStart3(event) {
  const fisrtTouch = event.touches[0]
  x1Plan = fisrtTouch.clientX
  y1Plan = fisrtTouch.clientY
}
let PlanLeft = 0
function handleTouchMove3(event) {
  if (!x1Plan || !y1Plan) {
    return false
  }
  let x2 = event.touches[0].clientX
  let y2 = event.touches[0].clientY
  let xDiff = x2 - x1Plan
  let yDiff = y2 - y1Plan
  let difference = planTopWidth - PlansWidth
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    console.log(xDiff)
    if (PlanLeftTop < planTopWidth) {
      if (xDiff > 0) {
        if (PlanLeftTop != 0) {
          if (difference > 250) {
            PlanLeftTop -= 250
            planList.style.left = `-${PlanLeftTop}px`
          } else {
            PlanLeftTop -= difference
            planList.style.left = `-${PlanLeftTop}px`
          }
          thumbPlan.style.left = `${PlanLeftTop / (planTopWidth / PlansWidth)}px`
        }
      }
      if (xDiff < 0) {
        if (PlanLeftTop + 250 < planTopWidth) {
          console.log(PlanLeftTop + 250, planTopWidth)
          if (difference > 250) {
            console.log(PlanLeftTop)
            PlanLeftTop += 250
            console.log(PlanLeftTop)
            planList.style.left = `-${PlanLeftTop}px`
          } else {
            PlanLeftTop += difference
            planList.style.left = `-${PlanLeftTop}px`
          }
          if (PlanLeftTop / (planTopWidth / PlansWidth) + thumbPlanWidrh > PlansWidth) {
            thumbPlan.style.left = `${PlansWidth - thumbPlanWidrh}px`
          } else {
            thumbPlan.style.left = `${PlanLeftTop / (planTopWidth / PlansWidth)}px`
          }
        }
      }
    }
  }
  x1Plan = null
  y1Plan = null
}
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