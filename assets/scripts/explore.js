// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

const inputForm = document.querySelector('form');
const voiceSelect = document.getElementById("voice-select");

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}


function init() {
  synth.addEventListener("end",function(){
    img.src = "assets/images/smiling.png"
  })
  var text = document.getElementById("text-to-speak");
  console.log(text.value)
  var buttons = document.querySelector("#explore button");
  var img = document.querySelector("#explore img");
  buttons.addEventListener("click",function(){
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    img.src = "assets/images/smiling-open.png"
    synth.speak(utterThis);
    setInterval(function(){
      if(synth.speaking){
        img.src = "assets/images/smiling-open.png"
      }else{
        img.src = "assets/images/smiling.png"
      }
    },200)
  })
}