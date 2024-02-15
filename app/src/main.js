const div = document.querySelectorAll('div');

const logText = (e) => {
  console.log(e.target.classList.value)
  // e.stopPropagation()
};
document.body.addEventListener('click', logText)
dispatchEvent.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => {
  console.log('click!');
}, {
  once: true
});