export function Controls({
	buttonPlay,
	buttonPause,
	buttonSet,
	buttonStop,
	buttonSoundOn,
	buttonSoundOff,
}) {
	function play() {
		buttonPlay.classList.add("hide");
		buttonPause.classList.remove("hide");
		buttonSet.classList.add("hide");
		buttonStop.classList.remove("hide");
	}

	function pause() {
		buttonPause.classList.add("hide");
		buttonPlay.classList.remove("hide");
	}

	function reset() {
		buttonPlay.classList.remove("hide");
		buttonPause.classList.add("hide");
		buttonSet.classList.remove("hide");
		buttonStop.classList.add("hide");
	}

	function volumeOn() {
		buttonSoundOff.classList.add("hide");
		buttonSoundOff.classList.remove("hide");
	}

	function volumeOff() {
		buttonSoundOn.classList.remove("hide");
		buttonSoundOn.classList.add("hide");
	}

	function getMinutes() {
		const setMinutes = prompt("Quantos minutos?");
		if (!setMinutes) {
			return false;
		}

		return setMinutes;
	}
	return {
		reset,
		play,
		pause,
		getMinutes,
		volumeOff,
		volumeOn,
	};
}
