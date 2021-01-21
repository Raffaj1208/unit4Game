//let compScore = Math.floor(Math.random() * 100 + 5);
let usrNumber = 0; console.log(usrNumber)
let buttonValues = ["5", "10", "1", "2"]; console.log(buttonValues);
let wins = 0; console.log(wins);
let losses = 0; console.log(losses);

console.log(compScore);
$("#Wins").append(wins);
$("#number").append(compScore);
$("#Losses").append(losses);
$("#usrNumber").append(usrNumber);

   
let updateWins = function() {
wins++;
$("#Wins").text("Wins:" + wins);
};

let resetUsrNumber = function() {
usrNumber = 0;
$("#usrNumber").text(usrNumber);
};

let updateLosses = function() {
losses++;
$("#Losses").text("Losses:" + losses);
};


let updateCompScore = function() {
compScore = Math.floor(Math.random() * 100 + 5);
//$("#number").text(compScore);
};

 for (let i = 0; i < buttonValues.length; i++) {
     let buttons = $(".btns");
     buttons.addClass("btns");
     buttons.attr("data-btnvalue", buttonValues[i]);
     $(".btns").append(buttons);
    };

$(".btns").on("click", function() {
    let buttonVal = ($(this).attr("data-btnvalue"));
    buttonVal = parseInt(buttonVal);
    usrNumber += buttonVal;
    console.log("Button Val", buttonVal);
    console.log("user number", usrNumber);
    $("#usrNumber").text(usrNumber);

    if (usrNumber === compScore) {
        alert("YOU WIINN!!");
        updateWins();
        resetUsrNumber();
        updateCompScore();
    }
    
    if (usrNumber > compScore) {
        alert("YOU LOOSE!!!");
        updateLosses();
        resetUsrNumber();
        updateCompScore();
    }
});
