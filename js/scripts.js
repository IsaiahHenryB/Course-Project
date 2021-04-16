// code to Show the navbar
const navButton = document.querySelector('.dropdown')
// Targets the very first UL element
const navUl = document.querySelector('ul')
// Create the function
showMe = () => {
    navUl.classList.toggle('show')
}
// create event listener
navButton.addEventListener('click', showMe)