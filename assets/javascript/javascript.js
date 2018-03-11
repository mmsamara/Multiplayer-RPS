/*
PSEUDO CODE:
-Create player objects with properties of name, wins, losses, and choice (which will reset every turn).
-Create a "turn" variable which determines which player is actively picking 
-The player object and turn variable should be connected to firebase
-If turn variable = 1, then allow player 1 to choose and hide the result from player 2's screen
-When the game initializes, it is player 1's turn, only once player 1 is finished can player 2 proceed
-Use a setTimeOut to display the result for a few seconds, then initialize the game again
-Create a chat box that both players can use and "submit" mini forms that will then append a new div into a box with their message
*/

var config = {
    apiKey: "AIzaSyDq3SBPFSL4VFtVhMCqL-bFmd3ac0bd3sw",
    authDomain: "rock-paper-scissors-3dd59.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-3dd59.firebaseio.com",
    projectId: "rock-paper-scissors-3dd59",
    storageBucket: "",
    messagingSenderId: "426450353343"
  };

firebase.initializeApp(config);

var database = firebase.database();

var name = "";

var playerOneChoice = null;
var playerOneWins = 0;
var playerOneLosses = 0;

var playerTwoChoice = null;
var playerTwoWins = 0;
var playerTwoLosses = 0;
var ties = 0;

$("#add-user").on("click", function() {
	event.preventDefault();

	name = $("#name-input").val().trim();

	database.ref().set({
		name: name
	});
});

database.ref().on("value", function(snapshot) {
	$("#welcome-area").html("<h2> Hello " + snapshot.val().name + "!</h2>");
	$("#p1-name").text(snapshot.val().name);
}, function(errorObject) {
	console.log("Errors handled: " + errorObject.code);
});

$("#rock").on("click", function() {
	playerOneChoice = "r";
	checkGame(playerOneChoice);
	if(playerTwoChoice != null) {
		updateResult();
		initializeRound();		
	}
})

$("#paper").on("click", function() {
	playerOneChoice = "p";
	checkGame(playerOneChoice);
	if(playerTwoChoice != null) {
		updateResult();
		initializeRound();		
	}
})

$("#scissors").on("click", function() {
	playerOneChoice = "s";
	checkGame(playerOneChoice);
	if(playerTwoChoice != null) {
		updateResult();
		initializeRound();		
	}
})

$("#rock2").on("click", function() {
	playerTwoChoice = "r";
	checkGame(playerOneChoice);
	if(playerOneChoice != null) {
		updateResult();
		initializeRound();		
	}
})

$("#paper2").on("click", function() {
	playerTwoChoice = "p";
	checkGame(playerOneChoice);
	if(playerOneChoice != null) {
		updateResult();
		initializeRound();		
	}
})

$("#scissors2").on("click", function() {
	playerTwoChoice = "s";
	checkGame(playerOneChoice);
	if(playerOneChoice != null) {
		updateResult();	
		initializeRound();	
	}
})

function checkGame(playerOneChoice) {

	if (playerOneChoice === playerTwoChoice) {
		ties++;
	} else if (playerOneChoice==="r" && playerTwoChoice==="p") {
		playerOneLosses++;
		playerTwoWins++;
	} else if (playerOneChoice==="r" && playerTwoChoice==="s") {
		playerOneWins++;
		playerTwoLosses++;
	} else if (playerOneChoice==="p" && playerTwoChoice==="s") {
		playerOneLosses++;
		playerTwoWins++;
	} else if (playerOneChoice==="p" && playerTwoChoice==="r") {
		playerOneWins++;
		playerTwoLosses++;
	} else if (playerOneChoice==="s" && playerTwoChoice==="r") {
		playerOneLosses++;
		playerTwoWins++;
	} else if (playerOneChoice==="s" && playerTwoChoice==="p") {
		playerOneWins++;
		playerTwoLosses++;
	} 
}

function updateResult() {
	if (playerOneChoice==="r") {
		$("#p1-choice").text("Rock");
	} else if (playerOneChoice==="p") {
		$("#p1-choice").text("Paper");
	} else if (playerOneChoice==="s") {
		$("#p1-choice").text("Scissors");
	}
	if (playerTwoChoice==="r") {
		$("#p2-choice").text("Rock");
	} else if (playerTwoChoice==="p") {
		$("#p2-choice").text("Paper");
	} else if (playerTwoChoice==="s") {
		$("#p2-choice").text("Scissors");
	}

	$("#p1wins-area").text(playerOneWins);
	$("#p1losses-area").text(playerOneLosses);
	$("#ties-area").text(ties);
	$("#p2wins-area").text(playerTwoWins);
	$("#p2losses-area").text(playerTwoLosses);
	$("#ties-area").text(ties);

	if (playerOneChoice === playerTwoChoice) {
		$("#result-area").html("<h1>Tie!</h1>");
	} else if (playerOneChoice==="r" && playerTwoChoice==="p") {
		$("#result-area").html("<h1>Player Two Wins!</h1>");
	} else if (playerOneChoice==="r" && playerTwoChoice==="s") {
		$("#result-area").html("<h1>Player One Wins!</h1>");
	} else if (playerOneChoice==="p" && playerTwoChoice==="s") {
		$("#result-area").html("<h1>Player Two Wins!</h1>");
	} else if (playerOneChoice==="p" && playerTwoChoice==="r") {
		$("#result-area").html("<h1>Player One Wins!</h1>");
	} else if (playerOneChoice==="s" && playerTwoChoice==="r") {
		$("#result-area").html("<h1>Player Two Wins!</h1>");
	} else if (playerOneChoice==="s" && playerTwoChoice==="p") {
		$("#result-area").html("<h1>Player One Wins!</h1>");
	} 
}

function initializeRound() {
	playerOneChoice = null;
	playerTwoChoice = null;
}