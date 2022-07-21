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
    console.log('Local Storage (Key then Pair):')
    console.log($(this).siblings('.col-2').text());
    console.log($(this).siblings('.col-8').children().val());
    localStorage.setItem(($(this).siblings('.col-2').text()), ($(this).siblings('.col-8').children().val()));
});

function persistancePls() {
    
    if (localStorage.getItem('0900')) {
        $('#0900').children('.col-8').children().val(localStorage.getItem('0900'));
    }

    if (localStorage.getItem('1000')) {
        $('#1000').children('.col-8').children().val(localStorage.getItem('1000'));
    }

    if (localStorage.getItem('1100')) {
        $('#1100').children('.col-8').children().val(localStorage.getItem('1100'));
    }

    if (localStorage.getItem('1200')) {
        $('#1200').children('.col-8').children().val(localStorage.getItem('1200'));
    }

    if (localStorage.getItem('1300')) {
        $('#1300').children('.col-8').children().val(localStorage.getItem('1300'));
    }

    if (localStorage.getItem('1400')) {
        $('#1400').children('.col-8').children().val(localStorage.getItem('1400'));
    }

    if (localStorage.getItem('1500')) {
        $('#1500').children('.col-8').children().val(localStorage.getItem('1500'));
    }

    if (localStorage.getItem('1600')) {
        $('#1600').children('.col-8').children().val(localStorage.getItem('1600'));
    }

    if (localStorage.getItem('1700')) {
        $('#1700').children('.col-8').children().val(localStorage.getItem('1700'));
    }
}

const fakeHours = 14;

function rowResponse() {
    // console.log((moment().hours()))
    var numMakeOld = (fakeHours - 9); //2
    // console.log($('.container-fluid').children());
    for (let i = 0; i < numMakeOld; i++) {
        var rowToChange = $('.container-fluid').children().eq(i);
        rowToChange.addClass('rowinthePast');
            var colToChangeLeft = rowToChange.children().eq(0);
            colToChangeLeft.addClass('colinthePast');
            var colToChangeRight = rowToChange.children().eq(2);
            colToChangeRight.addClass('colinthePast');
            colToChangeRight.children().removeClass('pulse');
            var colToChangeMid = rowToChange.children().eq(1);
            colToChangeMid.addClass('col8inthePast');
            colToChangeMid.children().removeClass('pulse');
            colToChangeMid.children('textarea').attr('readonly', 'true');
    }
};

function startUp() {
    persistancePls();
    rowResponse();
};

document.onload = startUp();

//remember .eval