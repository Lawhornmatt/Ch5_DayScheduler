//Initiallizing currentTime AND defining it with moment.js THEN immediately changing the inner Text of timeClock prevents that initial lag when using setInterval. Without the following two lines, the current time field starts out blank for one second.
var currentTime = new moment().format('HH:mm:ss')
$("#timeClock").text(currentTime);

//Updates the clock every second
var timetoAdd;
timetoAdd = setInterval(function () {
    currentTime = new moment().format('HH:mm:ss');
    var currentMinutes = new moment().format('mm:ss');
    if (currentMinutes == '00:00') {
        rowResponse();
    };
    $("#timeClock").text(currentTime);
}, 1000);


//Set the date
var currentDate = moment().format('ddd MM, YYYY')
$("#currentDay").text(currentDate);

var saveBtn;

function updateBtns() {

    saveBtn = $('.saveBtn');

    saveBtn.on('click', function () {
        console.log('Local Storage (Key then Pair):')
        // console.log($(this).siblings('.col-2').text());
        console.log($(this).parent().attr('id'));
        console.log($(this).siblings('.col-8').children().val());
        localStorage.setItem(($(this).parent().attr('id')), ($(this).siblings('.col-8').children().val()));
    });
}


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

function rowResponse() {

    var numMakeOld = Math.trunc((moment().format('HH') - 9));

    console.log(numMakeOld);

    for (let i = 0; i < numMakeOld; i++) {
        var rowToChange = $('.container-fluid').children().eq(i);
        rowToChange.addClass('rowinthePast');

            var colToChangeLeft = rowToChange.children().eq(0);
            if (colToChangeLeft.children('span')) {
            var parentID = rowToChange.attr('id');
            colToChangeLeft.html(parentID);
            colToChangeLeft.removeClass('colModern');
            };
            colToChangeLeft.addClass('colinthePast');

            var colToChangeRight = rowToChange.children().eq(2);
            colToChangeRight.addClass('colinthePast');
            colToChangeRight.removeClass('saveBtn');
            colToChangeRight.children().removeClass('pulse');
            
            var colToChangeMid = rowToChange.children().eq(1);
            colToChangeMid.addClass('col8inthePast');
            colToChangeMid.children().removeClass('pulse');
            colToChangeMid.children('textarea').attr('readonly', 'true');
            colToChangeMid.children('textarea').attr('placeholder','');
    }
    var currentHourRow = $('.container-fluid').children().eq(numMakeOld);
    currentHourRow.addClass('modernRow');
        var colToChangeLeft = currentHourRow.children().eq(0);
        colToChangeLeft.html("<span class=\"material-symbols-outlined\">warning</span>");
        colToChangeLeft.addClass('colFlash');

        var colToChangeRight = currentHourRow.children().eq(2);
        colToChangeRight.addClass('colModern');

        var colToChangeMid = currentHourRow.children().eq(1);
        colToChangeMid.addClass('colModern');

    updateBtns()
};

function startUp() {
    persistancePls();
    rowResponse();
};

document.onload = startUp();
