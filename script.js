const black = document.querySelectorAll('.color')[0];
black.style.backgroundColor = 'black';

const pixelQuery = 'pixel-board';

const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const rgb = `rgb(${r}, ${g}, ${b})`;

const red = document.querySelectorAll('.color')[1];
red.style.backgroundColor = rgb;

const r2 = Math.floor(Math.random() * 255);
const g2 = Math.floor(Math.random() * 255);
const b2 = Math.floor(Math.random() * 255);
const rgb2 = `rgb(${r2}, ${g2}, ${b2})`;

const green = document.querySelectorAll('.color')[2];
green.style.backgroundColor = rgb2;

const r3 = Math.floor(Math.random() * 255);
const g3 = Math.floor(Math.random() * 255);
const b3 = Math.floor(Math.random() * 255);
const rgb3 = `rgb(${r3}, ${g3}, ${b3})`;

const blue = document.querySelectorAll('.color')[3];
blue.style.backgroundColor = rgb3;

for (let index = 0; index < 5; index += 1) {
  const lineAdd = document.createElement('div');
  lineAdd.className = 'line';
  const lines = document.getElementById(pixelQuery);
  lines.appendChild(lineAdd);
  for (let index2 = 1; index2 <= 5; index2 += 1) {
    const pixelAdd = document.createElement('div');
    pixelAdd.className = 'pixel';
    const board = document.querySelectorAll('.line')[index];
    board.appendChild(pixelAdd);
  }
}

const colors = document.querySelectorAll('.color');

for (let index3 = 0; index3 < 4; index3 += 1) {
  colors[index3].addEventListener('click', (event1) => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event1.target.classList.add('selected');
    if (event1) {
      sessionStorage.setItem('color', index3);
    }
  });
}

let pixels = document.querySelectorAll('.pixel');

function targets() {
  let targetColor = '';
  if (sessionStorage.getItem('color') === '0') {
    targetColor = 'black';
  } else if (sessionStorage.getItem('color') === '1') {
    targetColor = rgb;
  } else if (sessionStorage.getItem('color') === '2') {
    targetColor = rgb2;
  } else if (sessionStorage.getItem('color') === '3') {
    targetColor = rgb3;
  }
  return targetColor;
}

function colorsFunc() {
  for (let index4 = 0; index4 < pixels.length; index4 += 1) {
    pixels[index4].addEventListener('click', ({ target }) => {
      const getTarget = target;
      getTarget.style.backgroundColor = targets();
    });
  }
}

colorsFunc();

const button = document.getElementById('clear-board');

button.addEventListener('click', () => {
  for (let index5 = 0; index5 < pixels.length; index5 += 1) {
    pixels[index5].style.backgroundColor = 'white';
  }
});

const vqv = document.getElementById('generate-board');

function useIndex6() {
  const classLine = document.querySelectorAll('.line');
  for (let index6 = 0; index6 < classLine.length; index6 += 1) {
    const pixelBoard = document.getElementById(pixelQuery);
    const remove = classLine[index6];
    pixelBoard.removeChild(remove);
  }
}

function useIndex7(inputValue) {
  for (let index7 = 0; index7 < inputValue; index7 += 1) {
    const lineAdd = document.createElement('div');
    lineAdd.className = 'line';
    const lines = document.getElementById(pixelQuery);
    lines.appendChild(lineAdd);
    for (let index8 = 1; index8 <= inputValue; index8 += 1) {
      const pixelAdd = document.createElement('div');
      pixelAdd.className = 'pixel';
      const board = document.querySelectorAll('.line')[index7];
      board.appendChild(pixelAdd);
      pixels = document.querySelectorAll('.pixel');
    }
  }
}

function changeInputValue(inputValue) {
  let number = inputValue;
  if (inputValue < 5) {
    number = 5;
  }
  if (inputValue > 50) {
    number = 50;
  }
  return number;
}

vqv.addEventListener('click', () => {
  if (document.querySelector('input').value > 0) {
    useIndex6();
    let inputValue = Math.floor(document.querySelector('input').value);
    inputValue = changeInputValue(inputValue);
    useIndex7(inputValue);
    colorsFunc();
  } else {
    alert('Board inválido!');
  }
});

sessionStorage.setItem('color', '0');
