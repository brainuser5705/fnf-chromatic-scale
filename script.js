let keys = document.querySelector("#keyboard").children;

function playSound(e){
    let letter = this.getAttribute('data-key');
    let audio = document.querySelector(`audio[data-key="${letter}"`);
    audio.currentTime = 0;
    audio.play();
}

for (key of keys){
    key.addEventListener('click', playSound);
    console.log(key);
}

