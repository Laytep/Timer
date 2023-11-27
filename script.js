function startTimer(duration, display) {
    display.classList.remove('hidden'); // Показываем таймер
    document.getElementById('inputArea').classList.add('hidden'); // Скрываем элементы ввода

    let timer = duration;
    let interval = setInterval(function () {
        let hours = parseInt(timer / 3600, 10);
        let minutes = parseInt((timer % 3600) / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + " " + minutes + " " + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "00 00 00";
        }
    }, 1000);
}

document.getElementById('startButton').addEventListener('click', function () {
    let hours = parseInt(document.getElementById('hours').value) || 0;
    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;
    let duration = (hours * 3600) + (minutes * 60) + seconds;
    let display = document.querySelector('#timer');
    startTimer(duration, display);
});
