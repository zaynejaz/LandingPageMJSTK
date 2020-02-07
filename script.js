const content = document.querySelector(".main");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener('mouseEnter', () => {
  content.classList.add('hoverLeft');
})

left.addEventListener('mouseLeave', () => {
  content.classList.remove('hoverLeft');
})

right.addEventListener('mouseEnter', () => {
  content.classList.add('hoverRight');
})

right.addEventListener('mouseLeave', () => {
  content.classList.remove('hoverRight');
})