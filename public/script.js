var mins = 00;
var secs = 00;
var msecs = 00;

var minsheading = document.getElementById('mins');
var secsheading = document.getElementById('secs');
var msecsheading = document.getElementById('msecs');

var interval;


function time() {
    msecs++;
    msecsheading.innerHTML = msecs;
    if (msecs >= 100) {
        secs++
        secsheading.innerHTML = secs;
        msecs = 00;
    } else if (secs >= 60) {
        mins++;
        minsheading.innerHTML = mins;
        secs = 00;
    }
}


function start() {
    interval = setInterval(time, 10)
    var btn = document.getElementById("botn");
    btn.disabled = true;

}

function stop() {
    clearInterval(interval);
    document.getElementById('botn').disabled = false;
}

function reset() {

    mins = 00;
    secs = 00;
    msecs = 00;

    minsheading.innerHTML = mins;
    secsheading.innerHTML = secs;
    msecsheading.innerHTML = msecs;
    stop();
    document.getElementById('botn').disabled = false;
}