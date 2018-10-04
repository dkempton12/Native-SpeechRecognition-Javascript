// Setting global SpeechRecognition variable
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; // interimResults -- property that allows you to see the text

// creating and appending parapgraphs into words div
let p = document.createElement('p');

const words = document.querySelector('.words');

words.appendChild(p);

recognition.addEventListener(results, e => {
  console.log(e.results);
  const transcriptSpoken = Array.from(e.results)
    // mapping the transcript data and joining to 1 string
    .map(result[0])
    .map(result => result.transcriptSpoken)
    .join('');

    p.textContent = transcriptSpoken;
    // if sentence (p) is finished, create a new one
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      // append each p that is spoken
      words.appendChild(p);
    }
    // testing words included in transcript
    if (transcriptSpoken.includes('Hello')) {
      console.log('HELLLLOOOO');
    }
    console.log(transcriptSpoken);
});

recognition.addEventListener('end', recognition.start);

// start the app
recognition.start();
