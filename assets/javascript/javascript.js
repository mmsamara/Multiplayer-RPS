// var config = {
//     apiKey: "AIzaSyDq3SBPFSL4VFtVhMCqL-bFmd3ac0bd3sw",
//     authDomain: "rock-paper-scissors-3dd59.firebaseapp.com",
//     databaseURL: "https://rock-paper-scissors-3dd59.firebaseio.com",
//     projectId: "rock-paper-scissors-3dd59",
//     storageBucket: "",
//     messagingSenderId: "426450353343"
//   };

// firebase.initializeApp(config);

// var database = firebase.database();

var playerOneChoice = null;
var playerOneWins = 0;
var playerOneLosses = 0;

var playerTwoChoice = null;
var playerTwoWins = 0;
var playerTwoLosses = 0;
var ties = 0;

//var choiceArray=["r","p","s"];
//var computerChoice;

$("#rock").on("click", function() {
	playerOneChoice = "r";
	checkGame(playerOneChoice);
	if(playerTwoChoice != null) {
		updateResult();		
	}
})

$("#paper").on("click", function() {
	playerOneChoice = "p";
	checkGame(playerOneChoice);
	if(playerTwoChoice != null) {
		updateResult();		
	}
})

$("#scissors").on("click", function() {
	playerOneChoice = "s";
	checkGame(playerOneChoice);
	if(playerTwoChoice != null) {
		updateResult();		
	}
})

$("#rock2").on("click", function() {
	playerTwoChoice = "r";
	checkGame(playerOneChoice);
	if(playerOneChoice != null) {
		updateResult();		
	}
})

$("#paper2").on("click", function() {
	playerTwoChoice = "p";
	checkGame(playerOneChoice);
	if(playerOneChoice != null) {
		updateResult();		
	}
})

$("#scissors2").on("click", function() {
	playerTwoChoice = "s";
	checkGame(playerOneChoice);
	if(playerOneChoice != null) {
		updateResult();		
	}
})

function checkGame(playerOneChoice) {
	//computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];

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
	} else if (playerOneChoice==="p" && playerTwoChoicee==="r") {
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
		ties++;
	} else if (playerOneChoice==="r" && playerTwoChoice==="p") {
		$("#result-area").html("<h1>Player Two Wins!</h1>");
	} else if (playerOneChoice==="r" && playerTwoChoice==="s") {
		$("#result-area").html("<h1>Player One Wins!</h1>");
	} else if (playerOneChoice==="p" && playerTwoChoice==="s") {
		$("#result-area").html("<h1>Player Two Wins!</h1>");
	} else if (playerOneChoice==="p" && playerTwoChoicee==="r") {
		$("#result-area").html("<h1>Player One Wins!</h1>");
	} else if (playerOneChoice==="s" && playerTwoChoice==="r") {
		$("#result-area").html("<h1>Player Two Wins!</h1>");
	} else if (playerOneChoice==="s" && playerTwoChoice==="p") {
		$("#result-area").html("<h1>Player One Wins!</h1>");
	} 
}