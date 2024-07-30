let whiteKeys = document.querySelectorAll('.white-key');
let blackKeys = document.querySelectorAll('.black-key');

blackKeys.forEach((black, index) => {
    black.addEventListener('click', function(){
        let sound = new Audio(`sounds/black_keys/${index}.mp3`);
        playSound(sound);
    });
});

whiteKeys.forEach((white, index) => {
    white.addEventListener('click', function(){
        let sound = new Audio(`sounds/white_keys/${index}.mp3`);
        playSound(sound);
    });
});

function playSound(sound){
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}