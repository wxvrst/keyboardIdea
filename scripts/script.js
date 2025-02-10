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
    let element = document.querySelector(`.${keyName.toLowerCase()}`);
    let input = document.querySelector(`#input`);
    if(keyName==="space"){input.value +=" ";}
    else if(keyName==="Enter" && input.value==="dancing cow"){window.location.replace("https://rutube.ru/video/e8e52a1c012310bd2c0c3e4ea4f4871d/");}
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
    if(key === "["){input.value+="[";playSound();}
    if(key === "]"){input.value+="]";playSound();}
    if(key === ";"){input.value+=";";playSound();}
    if(key === "'"){input.value+="'";playSound();}
    if(key === ","){input.value+=",";playSound();}
    if(key === "."){input.value+=".";playSound();}
})
