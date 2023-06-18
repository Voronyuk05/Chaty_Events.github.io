//#1
const input = document.querySelector('input')
const img = document.querySelector('img')
input.addEventListener('input', _.debounce(changeImage,100))

function changeImage(event) {
    img.style.width = `${event.target.value}px`
}

//#2
const box = document.getElementById('box')
window.addEventListener('mousemove', _.debounce(moveBox,100))
let i = 0
function moveBox(event) {
    mouseX = event.clientX
    mouseY = event.clientY
    box.style.position = 'absolute'
    box.style.left = `${mouseX}px`;
    box.style.top = `${mouseY}px`;
}


