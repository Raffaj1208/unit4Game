var usrNumber = 0;
var wins = 0;
var losses = 0;
var compScore = Math.floor(Math.random() * 150 + 5);
var value1 = Math.floor(Math.random() * 10 + 5);
var value2 = Math.floor(Math.random() * 10 + 5);
var value3 = Math.floor(Math.random() * 10 + 5);
var value4 = Math.floor(Math.random() * 10 + 5);

function start() {
    $("#Wins").append(wins);
    $("#number").append(compScore);
    $("#Losses").append(losses);
    $("#usrNumber").append(usrNumber);
    $("#number").hide(compScore);
    console.log(compScore);
};
start();

function update() {
    var updateWins = function() {
        if (usrNumber === compScore) {
            wins++;
        }
        $("#Wins").text("Wins:" + wins);
    };
    updateWins();

    var resetUsrNumber = function() {
        usrNumber = 0;
        $("#usrNumber").text(usrNumber);
    };
    resetUsrNumber();
    
    var updateLosses = function() {
        if (usrNumber !== compScore) {
            losses++;
        }
        $("#Losses").text("Losses:" + losses);
    };
    updateLosses();

    var updateCompScore = function() {
        compScore = Math.floor(Math.random() * 100 + 5);
        console.log(compScore);
    };
    updateCompScore();
};

function matchRules() {
    if (usrNumber === compScore) {
        alert("You Win!! You get to keep all the crystals in the bag !!");
        update();
    }
    if (usrNumber > compScore) {
        alert("You Lost! you don't get to keep any crystals ");
        update();
    }
};

$('#fold').on('click', function() {
    if (usrNumber >= compScore - 5 && usrNumber <= compScore) {
        alert("You Win!! You get to keep all the crystals in the bag !!");
        update();
    }
     else if (usrNumber < acceptable) {
        alert("You Lost! you don't get to keep any crystals ");
        update();
    }
});


$('#btn1').on('click', function() {
    usrNumber += value1;
    $('#usrNumber').text(usrNumber);
    matchRules();
});

$('#btn2').on('click', function() {
    usrNumber += value2;
    $('#usrNumber').text(usrNumber);
    matchRules();
});

$('#btn3').on('click', function() {
    usrNumber += value3;
    $('#usrNumber').text(usrNumber);
    matchRules();
});

$('#btn4').on('click', function() {
    usrNumber += value4;
    $('#usrNumber').text(usrNumber);
    matchRules();
});