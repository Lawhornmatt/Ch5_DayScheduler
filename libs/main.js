var timetoAdd;

var currentTime = moment().format('hh:mm:ss')
console.log(currentTime);
// timeClock.textContent = currentTime;
$("#timeClock").text(currentTime);

timetoAdd = setInterval(function () {
    currentTime = moment().add(1, 'second').format('hh:mm:ss');
    $("#timeClock").text(currentTime);
}, 1000);