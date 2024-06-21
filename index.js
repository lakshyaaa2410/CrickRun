const runButtons = document.querySelectorAll(".runButton");
const resetBtn = document.querySelector(".reset");
const toggleMode = document.querySelector(".toggle");

var totalRuns = 0;
var balls = 0;
var overs = 0;
var wickets = 0;

var darkMode = false;

toggleMode.addEventListener("click", function () {
	darkMode = !darkMode;
	toggleMode.innerHTML = darkMode ? "Light Mode" : "Dark Mode";

	document.querySelector("body").style.backgroundColor = darkMode
		? "#31363F"
		: "#eeeeee";
	document.querySelectorAll("h1").forEach((btn) => {
		btn.style.color = darkMode ? "#F6F5F2" : "black";
	});

	document.querySelectorAll("button").forEach((btn) => {
		if (
			btn.classList.contains("btn-dark") ||
			btn.classList.contains("btn-light")
		) {
			btn.classList.toggle("btn-dark");
			btn.classList.toggle("btn-light");
		}

		if (btn.classList.contains("extraBtn")) {
			btn.classList.toggle("btn-outline-dark");
			btn.classList.toggle("btn-outline-light");
		}
	});
});

function showOvers() {
	balls++;
	if (balls === 6) {
		overs++;
		balls = 0;
	}

	document.querySelector(".overs").textContent = `Overs: ${overs}.${balls}`;
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

	document.querySelector(".overs").textContent = `Overs: ${overs}.${balls}`;
	displayScoreboard();
}
resetBtn.addEventListener("click", reset);
