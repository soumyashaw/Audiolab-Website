document.getElementById('audio1').addEventListener('click', function() {
    audioElement = document.getElementById("myAudio");
    if (audioElement.paused) {
        audioElement.play();
        document.getElementById("play-icon-1").innerHTML = "&#9616;&#9616;";
    } else {
        audioElement.pause();
        audioElement.currentTime = 0;
        document.getElementById("play-icon-1").innerHTML = "&#9658;";
    }
    //showComputingAnimation();
    //setTimeout(function() {
    //    showOutput(true);
    //}, 2000); // Simulating computation delay
});

document.getElementById('audio2').addEventListener('click', function() {
    audioElement = document.getElementById("myAudio");
    if (audioElement.paused) {
        audioElement.play();
        document.getElementById("play-icon-2").innerHTML = "&#9616;&#9616;";
    } else {
        audioElement.pause();
        audioElement.currentTime = 0;
        document.getElementById("play-icon-2").innerHTML = "&#9658;";
    }
    //showComputingAnimation();
    //setTimeout(function() {
    //    showOutput(true);
    //}, 2000); // Simulating computation delay
});

document.getElementById('compute-btn').addEventListener('click', function() {
    showComputingAnimation();
    setTimeout(function() {
        showOutput(true); // Simulating computation result
    }, 2000); // Simulating computation delay
});

function showComputingAnimation() {
    document.getElementById('computing-animation').style.display = 'block';
}

function showOutput(isRealSpeaker) {
    document.getElementById('computing-animation').style.display = 'none';
    var outputDiv = document.getElementById('output');
    if (isRealSpeaker) {
        outputDiv.innerHTML = "Output matches real speaker.";
    } else {
        outputDiv.innerHTML = "Output does not match real speaker.";
    }
}