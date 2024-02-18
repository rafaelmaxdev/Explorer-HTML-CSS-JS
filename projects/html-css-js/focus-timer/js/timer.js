import { Sounds } from "./sounds.js";

export function Timer({
	minutesDisplay,
	secondsDisplay,
	resetControls,
	minutes,
}) {
	let timerTimeOut;

	function updateDisplay(newMinutes, seconds) {
		const updatedMinutes = newMinutes !== undefined ? newMinutes : minutes;
		const updatedSeconds = seconds !== undefined ? seconds : 0;

		minutesDisplay.textContent = String(updatedMinutes).padStart(2, "0");
		secondsDisplay.textContent = String(updatedSeconds).padStart(2, "0");
	}

	function reset() {
		updateDisplay(minutes, 0);
		clearTimeout(timerTimeOut);
	}

	function countdown() {
		timerTimeOut = setTimeout(() => {
			let seconds = Number(secondsDisplay.textContent);
			let minutes = Number(minutesDisplay.textContent);
			const isFinished = minutes <= 0 && seconds <= 0;

			updateDisplay(minutes, 0);

			if (isFinished) {
				resetControls();
				updateDisplay();
				Sounds().timeEnd();
				return;
			}

			if (seconds <= 0) {
				seconds = 60;
				--minutes;
			}

			updateDisplay(minutes, String(--seconds));

			countdown();
		}, 1000);
	}

	function updateMinutes(newMinutes) {
		minutes = newMinutes;
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
