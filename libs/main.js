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

// var saveBtn = document.querySelectorAll(saveBtn);

// function addListeners() {
//     saveBtn.addEventListener('click', saveInfo);
// }

// document.onload = addListeners();

// function saveInfo(e) {
//     console.log("Hello");
// }

var saveBtn = $('.saveBtn');

// saveBtn.on('click', function () {        //Me learning jQuery DOM traversal
//     console.log('This object:');
//     console.log(this);
//     console.log('The parent ');
//     console.log($(this).parent()); //gotta wrap in a $() to use .parent()
//     console.log('The siblings ');
//     console.log($(this).siblings());
//     console.log('The middle column ');
//     console.log($(this).siblings('.col-8'));
//     console.log('The textarea ');
//     console.log($(this).siblings('.col-8').children());
//     console.log('textarea value ');
//     console.log($(this).siblings('.col-8').children().val()); //Got it :)

//     console.log($(this).siblings('.col-2').text()); //And this gets the time
//   });

saveBtn.on('click', function () {
    console.log($(this).siblings('.col-2').text());
    console.log($(this).siblings('.col-8').children().val());
    localStorage.setItem(($(this).siblings('.col-2').text()), ($(this).siblings('.col-8').children().val()));
});