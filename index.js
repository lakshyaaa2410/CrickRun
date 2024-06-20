const runButtons = document.querySelectorAll(".runButton");
const playersList = document.querySelector(".playerList");
const playerNameHolder = document.querySelector("#playerName");
const addPlayer = document.querySelector(".addPlayer");

var totalRuns = 0;
var balls = 0;
var overs = 0;
var wickets = 0;

var playerNames = [];

function showOvers() {
	balls++;
	if (balls === 6) {
		overs++;
		balls = 0;
	}

	document.querySelector(".overs").textContent = `${overs}.${balls}`;
}
function addRuns(run) {
	totalRuns += Number(run);
}

function displayScoreboard() {
	document.querySelector(".runs").textContent = `${totalRuns}/${wickets}`;
}

runButtons.forEach((btn) => {
	btn.addEventListener("click", function () {
		if (btn.classList.contains("extra")) {
			addRuns(1);
		} else if (btn.classList.contains("dot")) {
			showOvers();
		} else if (btn.classList.contains("wicket")) {
			wickets++;
			if (wickets === 10) {
				alert("Team All Out");
				wickets = 0;
			}
			showOvers();
		} else {
			const runValue = btn.textContent.slice(-1);
			addRuns(runValue);
			showOvers();
		}
		displayScoreboard();
	});
});

// addPlayer.addEventListener("click", function () {
// 	const playerName = playerNameHolder.value;

// 	if (playerName === "") {
// 		alert("Please enter a name!");
// 		return;
// 	}
// 	const player = `<li>${playerName}</li>`;
// 	playersList.insertAdjacentHTML("beforeend", player);
// 	document.querySelector("#playerName").value = "";

// 	const newPlayer = {
// 		name: playerName,
// 	};

// 	playerNames.push(newPlayer);
// 	console.log(playerNames);
// });
