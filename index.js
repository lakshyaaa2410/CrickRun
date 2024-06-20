const runButtons = document.querySelectorAll(".runButton");
const playersList = document.querySelector(".playerList");
const playerNameHolder = document.querySelector("#playerName");
const addPlayer = document.querySelector(".addPlayer");
const resetBtn = document.querySelector(".reset");
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
				reset();
				balls--;
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

function reset() {
	balls = 0;
	overs = 0;
	totalRuns = 0;
	wickets = 0;

	document.querySelector(".overs").textContent = `${overs}.${balls}`;
	displayScoreboard();
}
resetBtn.addEventListener("click", reset);
