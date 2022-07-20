//Initiallizing currentTime AND defining it with moment.js THEN immediately changing the inner Text of timeClock prevents that initial lag when using setInterval. Without the following two lines, the current time field starts out blank for one second.
var currentTime = moment().format('HH:mm:ss')
$("#timeClock").text(currentTime);

//Updates the clock every second
var timetoAdd;
timetoAdd = setInterval(function () {
    currentTime = moment().format('HH:mm:ss');
    $("#timeClock").text(currentTime);
}, 1000);

//Set the date
var currentDate = moment().format('ddd MM, YYYY')
$("#currentDay").text(currentDate);

//I could update the date but... for this assignment seems overkill
// var timetoAdd;
// timetoAdd = setInterval(function () {
//     currentTime = moment().format('hh:mm:ss');
//     $("#timeClock").text(currentTime);
// }, 1000);

//DEBUG KEYS
document.addEventListener("keydown", keydownAction);
function keydownAction(e) {
    // if (e.altKey && e.key == '`') {     //Fire off the Debug Quiz
    //     quizAsset = tstDEBUGFile.tstDEBUG;
    //     loadQuiz(quizAsset);
    // }
    // if (e.altKey && e.key == 'm') {     //Jump back to Mainpage
    //     console.log('Quit to Mainpage')
    //     timerUI.style.visibility = "hidden";
    //     resettoMain();
    // }
    if (e.altKey && e.key == 't') {     //Sets timer to 1PM to test functionality
        console.log('DEBUG ~ Set time to 1PM');
        clearInterval(timetoAdd)
        currentTime = moment().hour(13).format('HH:mm:ss');
        $("#timeClock").text(currentTime);
    }
}