// Common Functions
function typeEffect(text, delay, container) {
    var index = 0;
    var timer = setInterval(function() {
        container.textContent += text[index++];
        if (index === text.length) {
            clearInterval(timer);
        }
    }, delay);
}


// Audio Samples 1

var fakeAudio1 = document.getElementById("fakeAudio-1");
var realAudio1 = document.getElementById("realAudio-1");
var playIcon1 = document.getElementById("play-icon-1");
var playIcon2 = document.getElementById("play-icon-2");

fakeAudio1.addEventListener("ended", function() {
    playIcon1.innerHTML = "&#9658;";
});

realAudio1.addEventListener("ended", function() {
    playIcon2.innerHTML = "&#9658;";
});

document.getElementById('audio1').addEventListener('click', function() {
    if (fakeAudio1.paused) {
        fakeAudio1.play();
        document.getElementById("play-icon-1").innerHTML = "&#9616;&#9616;";
    } else {
        fakeAudio1.pause();
        fakeAudio1.currentTime = 0;
        document.getElementById("play-icon-1").innerHTML = "&#9658;";
    }
});

document.getElementById('audio2').addEventListener('click', function() {
    if (realAudio1.paused) {
        realAudio1.play();
        document.getElementById("play-icon-2").innerHTML = "&#9616;&#9616;";
    } else {
        realAudio1.pause();
        realAudio1.currentTime = 0;
        document.getElementById("play-icon-2").innerHTML = "&#9658;";
    }
});



// Audio Samples 1 Poll

var button1 = document.getElementById('poll-1');
var button2 = document.getElementById('poll-2');
var resultContainer = document.getElementById('result-poll');

button1.addEventListener('click', function() {
    resultContainer.textContent = "";
    typeEffect("Good Guess! But, Speaker 2 is the authentic speaker. I agree that both sounded extremely realistic.", 30, resultContainer);
});

button2.addEventListener('click', function() {
    resultContainer.textContent = "";
    typeEffect("Good Guess! Speaker 2 is the authentic speaker indeed. But, you must agree both sounded extremely realistic.", 30, resultContainer);
});


// Algorithms 1

var buttonAlgo1 = document.getElementById('algorithm-1');
var buttonAlgo2 = document.getElementById('algorithm-2');
var buttonAlgo3 = document.getElementById('algorithm-3');
var buttonAlgo4 = document.getElementById('algorithm-4');
var resultContainerAlgo = document.getElementById('result-algorithm-1');

buttonAlgo1.addEventListener('click', function() {
    resultContainerAlgo.textContent = "";
    typeEffect("Speaker 1: Fake        Speaker 2: Real", 50, resultContainerAlgo);
});

buttonAlgo2.addEventListener('click', function() {
    resultContainerAlgo.textContent = "";
    typeEffect("Speaker 1: Fake        Speaker 2: Real", 50, resultContainerAlgo);
});

buttonAlgo3.addEventListener('click', function() {
    resultContainerAlgo.textContent = "";
    typeEffect("Speaker 1: Fake        Speaker 2: Fake", 50, resultContainerAlgo);
});

buttonAlgo4.addEventListener('click', function() {
    resultContainerAlgo.textContent = "";
    typeEffect("Speaker 1: Fake        Speaker 2: Real", 50, resultContainerAlgo);
});


// Real World Effects 1

var noisyAudio = document.getElementById("noisyAudio");
var echoAudio = document.getElementById("echoAudio");
var playIcon3 = document.getElementById("play-icon-3");
var selectedAudioAction1;

document.getElementById('action1-1').addEventListener('click', function() {
    var content1 = document.getElementById('addition-animation');
    var content2 = document.getElementById('effects-results');
    var content3 = document.getElementById('test-outer');
    var metrics1 = document.getElementById('metrics-1');
    var oops1 = document.getElementById('oops-1');
    var arrow1 = document.getElementById('test-arrow-1')
    var arrowHead1 = document.getElementById('test-arrow-head-1')
    var metrics1Para = document.getElementById('metrics-1-para');
    content2.style.display = 'none';
    selectedAudioAction1 = 'noisyAudio';
    if (selectedAudioAction1 == 'noisyAudio') {
        metrics1Para.innerHTML = "<strong>Deep4SNet</strong>: Real\n(0% → 100%)\n<strong>ResNet18</strong>: Fake\n(0.68% → 2.06%)\n<strong>RawPC Darts</strong>: Fake\n(0.49% → 0.50%)\n<strong>RawNet 2</strong>: Fake\n(0.89% → 1.67%)";
    }
    content1.style.display = 'block';
    oops1.style.opacity = 0;
    metrics1.style.opacity = 0;
    arrow1.style.backgroundColor = 'rgb(0, 122, 253)';
    arrowHead1.style.borderBottom = '100px solid rgb(0, 122, 253)';
    
    setTimeout(function() {
        content2.style.display = 'flex';
        content3.style.opacity = 0;
    }, 2500);

    setTimeout(function() {
        content3.style.opacity = 1;
    }, 4500);
});

document.getElementById('action1-2').addEventListener('click', function() {
    var content1 = document.getElementById('addition-animation');
    var content2 = document.getElementById('effects-results');
    var content3 = document.getElementById('test-outer');
    var metrics1 = document.getElementById('metrics-1');
    var oops1 = document.getElementById('oops-1');
    var arrow1 = document.getElementById('test-arrow-1')
    var arrowHead1 = document.getElementById('test-arrow-head-1')
    var metrics1Para = document.getElementById('metrics-1-para');
    content2.style.display = 'none';
    selectedAudioAction1 = 'echoAudio';
    if (selectedAudioAction1 == 'echoAudio') {
        metrics1Para.innerHTML = "<strong>Deep4SNet</strong>: Real\n(0% → 100%)\n<strong>ResNet18</strong>: Real\n(0.68% → 99.67%)\n<strong>RawPC Darts</strong>: Fake\n(0.49% → 4.68%)\n<strong>RawNet 2</strong>: Fake\n(0.89% → 3.32%)"
    }
    content1.style.display = 'block';
    oops1.style.opacity = 0;
    metrics1.style.opacity = 0;
    arrow1.style.backgroundColor = 'rgb(0, 122, 253)';
    arrowHead1.style.borderBottom = '100px solid rgb(0, 122, 253)';

    setTimeout(function() {
        content2.style.display = 'flex';
        content3.style.opacity = 0;
    }, 2500);

    setTimeout(function() {
        content3.style.opacity = 1;
    }, 4500);
});

document.getElementById('test-arrow-1').addEventListener('click', function() {
    var metrics1 = document.getElementById('metrics-1');
    var computing1 = document.getElementById('computing-1')
    var oops1 = document.getElementById('oops-1');
    var arrow1 = document.getElementById('test-arrow-1')
    var arrowHead1 = document.getElementById('test-arrow-head-1')
    computing1.style.display = 'block';
    metrics1.style.opacity = 0;
    oops1.style.opacity = 0;
    arrow1.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead1.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing1.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics1.style.opacity = 1;
        oops1.style.opacity = 1;
    }, 5300);
});

document.getElementById('test-arrow-head-1').addEventListener('click', function() {
    var metrics1 = document.getElementById('metrics-1');
    var computing1 = document.getElementById('computing-1')
    var oops1 = document.getElementById('oops-1');
    var arrow1 = document.getElementById('test-arrow-1')
    var arrowHead1 = document.getElementById('test-arrow-head-1')
    computing1.style.display = 'block';
    metrics1.style.opacity = 0;
    oops1.style.opacity = 0;
    arrow1.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead1.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing1.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics1.style.opacity = 1;
        oops1.style.opacity = 1;
    }, 5300);
});

document.getElementById('test-it').addEventListener('click', function() {
    var metrics1 = document.getElementById('metrics-1');
    var computing1 = document.getElementById('computing-1')
    var oops1 = document.getElementById('oops-1');
    var arrow1 = document.getElementById('test-arrow-1')
    var arrowHead1 = document.getElementById('test-arrow-head-1')
    computing1.style.display = 'block';
    metrics1.style.opacity = 0;
    oops1.style.opacity = 0;
    arrow1.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead1.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing1.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics1.style.opacity = 1;
        oops1.style.opacity = 1;
    }, 5300);
});

noisyAudio.addEventListener("ended", function() {
    playIcon3.innerHTML = "&#9658;";
});

echoAudio.addEventListener("ended", function() {
    playIcon3.innerHTML = "&#9658;";
});

document.getElementById('sample1').addEventListener('click', function() {
    if (selectedAudioAction1 == 'noisyAudio') {
        if (noisyAudio.paused) {
            noisyAudio.play();
            document.getElementById("play-icon-3").innerHTML = "&#9616;&#9616;";
        } else {
            noisyAudio.pause();
            noisyAudio.currentTime = 0;
            document.getElementById("play-icon-3").innerHTML = "&#9658;";
        }
    }
    else {
        if (echoAudio.paused) {
            echoAudio.play();
            document.getElementById("play-icon-3").innerHTML = "&#9616;&#9616;";
        } else {
            echoAudio.pause();
            echoAudio.currentTime = 0;
            document.getElementById("play-icon-3").innerHTML = "&#9658;";
        }
    }
});


// Real World Effects 2

var lowBitRateAudio = document.getElementById("lowBitRateAudio");
var gaussianNoiseAudio = document.getElementById("gaussianNoiseAudio");
var playIcon4 = document.getElementById("play-icon-4");
var selectedAudioAction2;

document.getElementById('action2-1').addEventListener('click', function() {
    var content1 = document.getElementById('addition-animation-2');
    var content2 = document.getElementById('effects-results-2');
    var content3 = document.getElementById('test-outer-2');
    var metrics2 = document.getElementById('metrics-2');
    var oops2 = document.getElementById('oops-2');
    var arrow2 = document.getElementById('test-arrow-2')
    var arrowHead2 = document.getElementById('test-arrow-head-2')
    var metrics2Para = document.getElementById('metrics-2-para');
    content2.style.display = 'none';
    selectedAudioAction2 = 'lowBitRateAudio';
    if (selectedAudioAction2 == 'lowBitRateAudio') {
        metrics2Para.innerHTML = "<strong>Deep4SNet</strong>: Real\n(0% → 100%)\n<strong>ResNet18</strong>: Real\n(0.68% → 99.77%)\n<strong>RawPC Darts</strong>: Fake\n(0.49% → 0.39%)\n<strong>RawNet 2</strong>: Fake\n(0.89% → 0.89%)";
    }
    content1.style.display = 'block';
    oops2.style.opacity = 0;
    metrics2.style.opacity = 0;
    arrow2.style.backgroundColor = 'rgb(0, 122, 253)';
    arrowHead2.style.borderBottom = '100px solid rgb(0, 122, 253)';

    setTimeout(function() {
        content2.style.display = 'flex';
        content3.style.opacity = 0;
    }, 2500);

    setTimeout(function() {
        content3.style.opacity = 1;
    }, 4500);
});

document.getElementById('action2-2').addEventListener('click', function() {
    var content1 = document.getElementById('addition-animation-2');
    var content2 = document.getElementById('effects-results-2');
    var content3 = document.getElementById('test-outer-2');
    var metrics2 = document.getElementById('metrics-2');
    var oops2 = document.getElementById('oops-2');
    var arrow2 = document.getElementById('test-arrow-2');
    var arrowHead2 = document.getElementById('test-arrow-head-2');
    var metrics2Para = document.getElementById('metrics-2-para');
    content2.style.display = 'none';
    selectedAudioAction2 = 'gaussianNoiseAudio';
    if (selectedAudioAction2 == 'gaussianNoiseAudio') {
        metrics2Para.innerHTML = "<strong>Deep4SNet</strong>: Real\n(0% → 100%)\n<strong>ResNet18</strong>: Real\n(0.68% → 99.98%)\n<strong>RawPC Darts</strong>: Fake\n(0.49% → 0.42%)\n<strong>RawNet 2</strong>: Fake\n(0.89% → 1.26%)"
    }
    content1.style.display = 'block';
    oops2.style.opacity = 0;
    metrics2.style.opacity = 0;
    arrow2.style.backgroundColor = 'rgb(0, 122, 253)';
    arrowHead2.style.borderBottom = '100px solid rgb(0, 122, 253)';
    
    setTimeout(function() {
        content2.style.display = 'flex';
        content3.style.opacity = 0;
    }, 2500);

    setTimeout(function() {
        content3.style.opacity = 1;
    }, 4500);
});

document.getElementById('test-arrow-2').addEventListener('click', function() {
    var metrics2 = document.getElementById('metrics-2');
    var computing2 = document.getElementById('computing-2')
    var oops2 = document.getElementById('oops-2');
    var arrow2 = document.getElementById('test-arrow-2')
    var arrowHead2 = document.getElementById('test-arrow-head-2')
    computing2.style.display = 'block';
    metrics2.style.opacity = 0;
    oops2.style.opacity = 0;
    arrow2.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead2.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing2.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics2.style.opacity = 1;
        oops2.style.opacity = 1;
    }, 5300);
});

document.getElementById('test-arrow-head-2').addEventListener('click', function() {
    var metrics2 = document.getElementById('metrics-2');
    var computing2 = document.getElementById('computing-2')
    var oops2 = document.getElementById('oops-2');
    var arrow2 = document.getElementById('test-arrow-2')
    var arrowHead2 = document.getElementById('test-arrow-head-2')
    computing2.style.display = 'block';
    metrics2.style.opacity = 0;
    oops2.style.opacity = 0;
    arrow2.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead2.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing2.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics2.style.opacity = 1;
        oops2.style.opacity = 1;
    }, 5300);
});

document.getElementById('test-it-2').addEventListener('click', function() {
    var metrics2 = document.getElementById('metrics-2');
    var computing2 = document.getElementById('computing-2')
    var oops2 = document.getElementById('oops-2');
    var arrow2 = document.getElementById('test-arrow-2')
    var arrowHead2 = document.getElementById('test-arrow-head-2')
    computing2.style.display = 'block';
    metrics2.style.opacity = 0;
    oops2.style.opacity = 0;
    arrow2.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead2.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing2.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics2.style.opacity = 1;
        oops2.style.opacity = 1;
    }, 5300);
});

lowBitRateAudio.addEventListener("ended", function() {
    playIcon4.innerHTML = "&#9658;";
});

gaussianNoiseAudio.addEventListener("ended", function() {
    playIcon4.innerHTML = "&#9658;";
});

document.getElementById('sample2').addEventListener('click', function() {
    if (selectedAudioAction2 == 'lowBitRateAudio') {
        if (lowBitRateAudio.paused) {
            lowBitRateAudio.play();
            document.getElementById("play-icon-4").innerHTML = "&#9616;&#9616;";
        } else {
            lowBitRateAudio.pause();
            lowBitRateAudio.currentTime = 0;
            document.getElementById("play-icon-4").innerHTML = "&#9658;";
        }
    }
    else {
        if (gaussianNoiseAudio.paused) {
            gaussianNoiseAudio.play();
            document.getElementById("play-icon-4").innerHTML = "&#9616;&#9616;";
        } else {
            gaussianNoiseAudio.pause();
            gaussianNoiseAudio.currentTime = 0;
            document.getElementById("play-icon-4").innerHTML = "&#9658;";
        }
    }
});


// Real World Effects 3

var volReducedAudio = document.getElementById("volReducedAudio");
var playIcon5 = document.getElementById("play-icon-5");

document.getElementById('action3-1').addEventListener('click', function() {
    var content1 = document.getElementById('addition-animation-3');
    var content2 = document.getElementById('effects-results-3');
    var content3 = document.getElementById('test-outer-3');
    var metrics3 = document.getElementById('metrics-3');
    var oops3 = document.getElementById('oops-3');
    var arrow3 = document.getElementById('test-arrow-3')
    var arrowHead3 = document.getElementById('test-arrow-head-3')
    content2.style.display = 'none';
    content1.style.display = 'block';
    oops3.style.opacity = 0;
    metrics3.style.opacity = 0;
    arrow3.style.backgroundColor = 'rgb(0, 122, 253)';
    arrowHead3.style.borderBottom = '100px solid rgb(0, 122, 253)';
    
    setTimeout(function() {
        content2.style.display = 'flex';
        content3.style.opacity = 0;
    }, 2500);

    setTimeout(function() {
        content3.style.opacity = 1;
    }, 4500);
});

document.getElementById('test-arrow-3').addEventListener('click', function() {
    var metrics3 = document.getElementById('metrics-3');
    var computing3 = document.getElementById('computing-3')
    var oops3 = document.getElementById('oops-3');
    var arrow3 = document.getElementById('test-arrow-3')
    var arrowHead3 = document.getElementById('test-arrow-head-3')
    computing3.style.display = 'block';
    metrics3.style.opacity = 0;
    oops3.style.opacity = 0;
    arrow3.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead3.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing3.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics3.style.opacity = 1;
        oops3.style.opacity = 1;
    }, 5300);
});

document.getElementById('test-arrow-head-3').addEventListener('click', function() {
    var metrics3 = document.getElementById('metrics-3');
    var computing3 = document.getElementById('computing-3')
    var oops3 = document.getElementById('oops-3');
    var arrow3 = document.getElementById('test-arrow-3')
    var arrowHead3 = document.getElementById('test-arrow-head-3')
    computing3.style.display = 'block';
    metrics3.style.opacity = 0;
    oops3.style.opacity = 0;
    arrow3.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead3.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing3.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics3.style.opacity = 1;
        oops3.style.opacity = 1;
    }, 5300);
});

document.getElementById('test-it-3').addEventListener('click', function() {
    var metrics3 = document.getElementById('metrics-3');
    var computing3 = document.getElementById('computing-3')
    var oops3 = document.getElementById('oops-3');
    var arrow3 = document.getElementById('test-arrow-3')
    var arrowHead3 = document.getElementById('test-arrow-head-3')
    computing3.style.display = 'block';
    metrics3.style.opacity = 0;
    oops3.style.opacity = 0;
    arrow3.style.backgroundColor = 'rgb(6, 215, 108)';
    arrowHead3.style.borderBottom = '100px solid rgb(6, 215, 108)';

    setTimeout(function() {
        computing3.style.display = 'none';
    }, 5000);
    setTimeout(function() {
        metrics3.style.opacity = 1;
        oops3.style.opacity = 1;
    }, 5300);
});

volReducedAudio.addEventListener("ended", function() {
    playIcon5.innerHTML = "&#9658;";
});

document.getElementById('sample3').addEventListener('click', function() {
    if (volReducedAudio.paused) {
        volReducedAudio.play();
        document.getElementById("play-icon-5").innerHTML = "&#9616;&#9616;";
    } else {
        volReducedAudio.pause();
        volReducedAudio.currentTime = 0;
        document.getElementById("play-icon-5").innerHTML = "&#9658;";
    }
});