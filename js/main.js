const checbox = document.querySelector('.test__form-checkbox')
const checboxLabel = document.querySelector('.test__form-text')
checbox.addEventListener('click', checboxFunc)
checboxLabel.addEventListener('click', checboxFunc)
function checboxFunc() {
  checbox.classList.toggle('test__form-checkbox--active')
}