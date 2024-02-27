function digitalClock() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let day = date.toDateString();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let ampm = hours >= 12 ? 'PM' : 'AM';

    let clockDisplay = document.getElementById('clockDisplay');
    clockDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm  + '<br>' + day;
}

    setInterval(digitalClock, 1000);