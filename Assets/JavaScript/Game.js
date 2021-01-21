var usrNumber = 0;
var wins = 0;
var losses = 0;
var compScore = Math.floor(Math.random() * 100 + 5);

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
