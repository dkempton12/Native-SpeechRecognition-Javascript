// Setting global SpeechRecognition variable
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let p = document.createElement('p');

const words = document.querySelector('.words');

words.appendChild(p);
