var usrNumber = 0;
var wins = 0;
var losses = 0;
var compScore = Math.floor(Math.random() * 500 + 5);
var value1 = Math.floor(Math.random() * 100 + 5);
var value2 = Math.floor(Math.random() * 100 + 5);
var value3 = Math.floor(Math.random() * 100 + 5);
var value4 = Math.floor(Math.random() * 100 + 5);

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

$('#btn1').on('click', function() {
    usrNumber += value1;
    $('#usrNumber').text(usrNumber);
    console.log(value1);
});

$('#btn2').on('click', function() {
    usrNumber += value2;
    $('#usrNumber').text(usrNumber);
    console.log(value2);
});

$('#btn3').on('click', function() {
    usrNumber += value3;
    $('#usrNumber').text(usrNumber);
    console.log(value3);
});

$('#btn4').on('click', function() {
    usrNumber += value4;
    $('#usrNumber').text(usrNumber);
    console.log(value4);
});