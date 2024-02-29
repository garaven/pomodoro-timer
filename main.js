// Buttons
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonConfig = document.querySelector('.config');

// Display / No display
const time = document.querySelector('.timer');
const displayConfig = document.querySelector('.config-timer');
const buttonSave = document.querySelector('.save');

// time
let minutes;
let seconds;

// Start
let iniatilized = false

let disabledColor = '#aeaeb0'
let enabledColor = '#000'

let changeTime;

// Default value
buttonPause.disabled = true;
buttonPause.style.borderColor = disabledColor;



// Formats the time
function formatter(minutes, seconds) {
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
  const secondsFormatted = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutesFormatted}:${secondsFormatted}`;
}


// Change the time
function start() {
  time.textContent = formatter(minutes, seconds);

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  }
  
  seconds--;

  if (seconds === 0 && minutes === 0) {
    pause();
  }
}


// Prepares the execution
function play() {

  // Is only executed once
  if (!iniatilized) {
    
    // Entered time
    const inputMinutes = document.getElementById('minutes').value;
    const inputSeconds = document.getElementById('seconds').value;


    // Default time or Entered time
    minutes = inputMinutes === '' ? 30 : parseInt(inputMinutes);
    seconds = inputSeconds === '' ? 0 : parseInt(inputSeconds);

    iniatilized = true;
  }

  changeTime = setInterval(start, 1000);

  buttonPlay.disabled = true;
  buttonPlay.style.borderColor = disabledColor;
  buttonPause.disabled = false;
  buttonPause.style.borderColor = enabledColor;
  buttonConfig.disabled = true;
  buttonConfig.style.borderColor = disabledColor;


  // Display the time
  displayConfig.style.display = 'none';
  buttonSave.style.display = 'none';
  time.style.display = 'inline-block';
}

function pause() {
  buttonPause.disabled = true;
  buttonPause.style.borderColor = disabledColor;
  buttonConfig.disabled = false;
  buttonConfig.style.borderColor = enabledColor;
  buttonPlay.disabled = false;
  buttonPlay.style.borderColor = enabledColor;
  clearInterval(changeTime);
}

function config() {
  displayConfig.style.display = 'block';
  buttonSave.style.display = 'inline-block';
  time.style.display = 'none';
  iniatilized = false;
}


// Events
buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
buttonConfig.addEventListener('click', config);
buttonSave.addEventListener('click', play)