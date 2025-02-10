function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function playSound() {
    var song = document.getElementById("sound");
    song.volume = 1;
    song.play();
}
document.addEventListener("keypress", (event) => {
    let keyName = event.key;
    if(event.code==="Space") {keyName="space";}
    let element = document.querySelector(`.${keyName}`);
    let input = document.querySelector(`#input`);
    if(keyName==="space"){input.value +=" ";}
    else {input.value +=keyName;}
    element.classList.add("hover");
    element.classList.add("active");
    playSound();
    sleep(50).then(() => {
        element.classList.remove("hover");
        element.classList.remove("active");
    });
})
document.addEventListener("keydown", (event) => {
    let key = event.key;
    let input = document.querySelector(`#input`);
    if(key === "Backspace"){input.value= input.value.substring(0,input.value.length-1);playSound();}
})
