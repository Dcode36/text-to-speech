let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=>(voiceSelect.options[i]= new Option(voice.name, i)));
    voiceSelect.addEventListener("change",()=>{
        speech.voice = voices[voiceSelect.value];
    })

}
document.querySelector("#btn").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})


function handleKeyPress(event) {
    if (event.shiftKey && event.keyCode === 13) {
        event.preventDefault(); // Prevent default behavior (e.g., form submission)
        var textarea = event.target;
        var startPos = textarea.selectionStart;
        var endPos = textarea.selectionEnd;
        var value = textarea.value;
        textarea.value = value.substring(0, startPos) + "\n" + value.substring(endPos);
        textarea.selectionStart = startPos + 1;
        textarea.selectionEnd = startPos + 1;
      } else if (event.keyCode === 13) {
        event.preventDefault(); // Prevent form submission
        document.querySelector("#btn").click(); // Trigger the button click event
      }
  }