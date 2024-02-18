import { elements } from "./elements.js";

const {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonSet,
	buttonSoundOff,
	buttonSoundOn,
} = elements;

export function Events({ controls, timer, sound }) {
	buttonPlay.addEventListener("click", () => {
		controls.play();
		timer.countdown();
		sound.pressButton();
	});

	buttonPause.addEventListener("click", () => {
		controls.pause();
		sound.pressButton();
	});

	buttonStop.addEventListener("click", () => {
		controls.reset();
		timer.reset();
		sound.pressButton();
	});

	buttonSoundOff.addEventListener("click", () => {
		buttonSoundOn.classList.remove("hide");
		buttonSoundOff.classList.add("hide");
		sound.bgAudio.play();
	});

	buttonSoundOn.addEventListener("click", () => {
		buttonSoundOn.classList.add("hide");
		buttonSoundOff.classList.remove("hide");
		sound.bgAudio.pause();
	});

	buttonSet.addEventListener("click", () => {
		const setMinutes = controls.getMinutes();

		if (!setMinutes) {
			timer.reset();
			return;
		}

		timer.updateDisplay(setMinutes);
		timer.updateMinutes(setMinutes);
	});
}
