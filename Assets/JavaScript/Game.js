//.. Create variables
   let compScore = Math.floor(Math.random() * 100 + 5); console.log(compScore)
   let usrNumber = 0; console.log(usrNumber)
   let wins = 0; console.log(wins)
   let losses = 0; console.log(losses)
   let buttonValues = ["5", "10", "1", "2"]; console.log(buttonValues)

   //.. Tell the html file what it will be displaying
   //.. Grab each element, and tell it to display the value of the variable
   $("#number").append(compScore);
   $("#Wins").append(wins);
   $("#Losses").append(losses);
   $("#usrNumber").append(usrNumber);

   //.. Create our functions for later
   let updateWins = function() {
       wins++;
       $("#Wins").text("Wins:" + wins);

   };

   let resetUsrNumber = function() {
       usrNumber = 0;
       $("#usrNumber").text(usrNumber);
   }

   let updateLosses = function() {
       losses++;
       $("#Losses").text("Losses:" + losses);
   }

   let updateCompScore = function() {
    compScore = Math.floor(Math.random() * 100 + 5);
    $("#number").text(compScore);
   }

   //.. Create the loop for the value of the buttons
   for (let i = 0; i < buttonValues.length; i++) {
    let buttonLoop = $("data-btnId", buttonValues[i]);
    console.log(buttonLoop);
}

//.. Create button functions
    $(".btns").on("click", function() {
    
     let buttonVal = $(this).attr("data-btnId");
    buttonVal = parseInt(buttonValues);
    usrNumber += buttonVal;
    $("#usrNumber").text(usrNumber);

        

    //.. The algorithm
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
