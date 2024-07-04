const speakButton = document.getElementById('speak-btn');
const textInput = document.getElementById('text-input');

// Check if speech synthesis is supported
if ('speechSynthesis' in window) {
    speakButton.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text !== '') {
            speakText(text);
        } else {
            alert('Please enter some text to speak.');
        }
    });
} else {
    speakButton.disabled = true;
    alert('Speech synthesis is not supported in your browser.');
}

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    // Optional settings for voice and language
    // utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
    // utterance.lang = 'en-US';

    // Speak
    speechSynthesis.speak(utterance);
}
