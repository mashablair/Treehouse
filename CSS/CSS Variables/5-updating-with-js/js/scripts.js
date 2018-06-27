const body = document.querySelector('body');
const ball = document.querySelector('.ball');

body.addEventListener('click', e => {
  ball.style.setProperty('--pos-x', e.clientX - 80);
  ball.style.setProperty('--pos-y', e.clientY - 80);
  ball.style.setProperty('--ball-bg', randomHex());
});

// set a random hex value
function randomHex() {
  let max = 1 << 24;
  let hex = (max + Math.floor(Math.random() * max)).toString(16).slice(-6);
  return `#${hex}`;
}
