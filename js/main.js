const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBg = document.querySelector('body');
const hex = document.querySelector('.hex');

// create an addEventListener(the event, the callback function)
hexBtn.addEventListener('click', getHex);


function getHex() {
  // create variable to hold hex color
  let hexCol = '#';

  // iterate over the hexNumbers, run 6 times, tell 'i' to stop at 6;
  for (let i = 0; i < 6; i++) {
    // create a variable to get random numbers
    let random = Math.floor(Math.random() * hexNumbers.length);
    // add the value to the hexCol
    hexCol += hexNumbers[random];
  }
  
  bodyBg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}
