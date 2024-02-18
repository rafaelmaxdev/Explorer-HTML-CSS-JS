import { Sounds } from "./sounds.js";

export function Timer({
	minutesDisplay,
	secondsDisplay,
	resetControls,
	minutes,
}) {
	let timerTimeOut;

	function reset() {
		updateDisplay(minutes, 0);
		clearTimeout(timerTimeOut);
	}

	function updateDisplay(setMinutes, seconds) {
		const updatedMinutes = setMinutes !== undefined ? setMinutes : minutes;
		const updatedSeconds = seconds !== undefined ? seconds : 0;

		minutesDisplay.textContent = String(updatedMinutes).padStart(2, "0");
		secondsDisplay.textContent = String(updatedSeconds).padStart(2, "0");
	}

	function countdown() {
		timerTimeOut = setTimeout(() => {
			let minutes = Number(minutesDisplay.textContent);
			let seconds = Number(secondsDisplay.textContent);
			const isFinished = seconds <= 0 && minutes <= 0;

			updateDisplay(minutes, 0);

			if (seconds <= 0) {
				seconds = 60;
				--minutes;
			}

			if (isFinished) {
				resetControls();
				updateDisplay();
				Sounds().timeEnd();
				return;
			}

			updateDisplay(minutes, String(--seconds));

			countdown();
		}, 1000);
	}

	function updateMinutes(setMinutes) {
		minutes = setMinutes;
	}

	function hold() {
		clearTimeout(timerTimeOut);
	}

	return {
		countdown,
		reset,
		updateDisplay,
		updateMinutes,
		hold,
	};
}
