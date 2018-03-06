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

var userChoice;
var choiceArray = ["r", "p", "s"];
var computerChoice;
var wins = 0;
var losses = 0;
var ties = 0;

$("#rock").on("click", function() {
	userChoice = "r";
	checkGame(userChoice);
	updateResult();
})

$("#paper").on("click", function() {
	userChoice = "p";
	checkGame(userChoice);
	updateResult();
})

$("#scissors").on("click", function() {
	userChoice = "s";
	checkGame(userChoice);
	updateResult();
})

function checkGame(userChoice) {
	computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];

	if (userChoice === computerChoice) {
		ties++;
	} else if (userChoice==="r" && computerChoice==="p") {
		losses++;
	} else if (userChoice==="r" && computerChoice==="s") {
		wins++;
	} else if (userChoice==="p" && computerChoice==="s") {
		losses++;
	} else if (userChoice==="p" && computerChoice==="r") {
		wins++;
	} else if (userChoice==="s" && computerChoice==="r") {
		losses++;
	} else if (userChoice==="s" && computerChoice==="p") {
		wins++;
	} 
}

function updateResult() {
	if (userChoice==="r") {
		$("#user-choice").text("Rock");
	} else if (userChoice==="p") {
		$("#user-choice").text("Paper");
	} else if (userChoice==="s") {
		$("#user-choice").text("Scissors");
	}
	if (computerChoice==="r") {
		$("#computer-choice").text("Rock");
	} else if (computerChoice==="p") {
		$("#computer-choice").text("Paper");
	} else if (computerChoice==="s") {
		$("#computer-choice").text("Scissors");
	}
	$("#wins-area").text(wins);
	$("#losses-area").text(losses);
	$("#ties-area").text(ties);
}