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
        wins++;
        $("#Wins").text("Wins:" + wins);
    };
    updateWins();

    var resetUsrNumber = function() {
        $("#usrNumber").text(usrNumber);
        usrNumber = 0;
    };
    resetUsrNumber();
    
    var updateLosses = function() {
        losses++;
        $("#Losses").text("Losses:" + losses);
    };
    updateLosses();
    
    var updateCompScore = function() {
        compScore = Math.floor(Math.random() * 100 + 5);
    };
    updateCompScore();
};


$('#btn1').on('click', function() {
    usrNumber += value1;
    $('#usrNumber').text(usrNumber);
});

$('#btn2').on('click', function() {
    usrNumber += value2;
    $('#usrNumber').text(usrNumber);
});

$('#btn3').on('click', function() {
    usrNumber += value3;
    $('#usrNumber').text(usrNumber);
});

$('#btn4').on('click', function() {
    usrNumber += value4;
    $('#usrNumber').text(usrNumber);
});

function matchRules() {
    if (usrNumber === compScore) {
        alert("YOU WIINN!!");
        update();
    }
    
    if (usrNumber > compScore) {
        alert("YOU LOOSE!!!");
        update();
    }
};
matchRules();