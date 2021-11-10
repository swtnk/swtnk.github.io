const typeWriter = (text, index, element, letterDuration, sentenceDuration, restartIn, fnCallback) => {
    if (index < (text.length)) {
        element.innerHTML = text.substring(0, index + 1) + '<span class="blink" aria-hidden="true"></span>';
        setTimeout(() => {
            typeWriter(text, index + 1, element, letterDuration, sentenceDuration, restartIn, fnCallback)
        }, letterDuration);
    }
    else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, sentenceDuration, restartIn);
    }
}

const startTextAnimation = (index, element_object, dataText, letterDuration, sentenceDuration, restartIn, restart_) => {
    letterDuration = letterDuration ? letterDuration : 100;
    sentenceDuration = sentenceDuration ? sentenceDuration : 700;
    restartIn = restartIn ? restartIn : 10000;
    if (typeof dataText[index] == 'undefined'){
        setTimeout(() => {
            startTextAnimation(0, element_object, dataText, letterDuration, sentenceDuration, restartIn);
        }, restartIn);
    }
    try {
        if (index < dataText[index].length) {
            typeWriter(dataText[index], 0, element_object, letterDuration, sentenceDuration, restartIn, () => {
                startTextAnimation(index + 1, element_object, dataText, letterDuration, sentenceDuration, restartIn);
            });
        }
    } catch (error) {}
}

export default function typewriterEffect(element, dataText, letterDuration, sentenceDuration, restartIn) {
    const element_object = document.querySelector(element);
    startTextAnimation(0, element_object, dataText, letterDuration, sentenceDuration, restartIn)
}
