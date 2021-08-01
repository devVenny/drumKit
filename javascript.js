'use strict'

const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) {
        return
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}

function removeTransitioned(e) {
    this.classList.remove('playing');
}


keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransitioned);
})

window.addEventListener('keydown', playSound);