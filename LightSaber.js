const move = () => {
    var btn = document.getElementById("button"); 
    var elem = document.getElementById("mybar");
    var widthIncrease = 0;
    var widthDecrease = 100;
    var id = setInterval(frame, 10)

    function frame() {
        if (btn.value == "On") {
            if(widthIncrease >= 100) {
                clearInterval(id);
            } else {
                widthIncrease++;
                elem.style.width = widthIncrease + "%";
                document.getElementById("incvalue").innerHTML = widthIncrease + "%";
            }
        } else {
            if(widthDecrease <= 0) {
                clearInterval(id);
            } else {
                widthDecrease--;
                elem.style.width = widthDecrease + "%";
                document.getElementById("incvalue").innerHTML = widthDecrease + "%";
            }
        }
    }

    if (btn.value == "Off") {
        btn.value = "On";
        btn.innerText = "OFF";
        soundPlayer = new Audio("LightSaber.mp3");
        soundPlayer.play();
        soundPlayer.loop = true;
    } else {
        btn.value = "Off";
        btn.innerText = "ON";
        soundPlayer.pause();
        soundPlayer.currentTime = 0;
    }

}