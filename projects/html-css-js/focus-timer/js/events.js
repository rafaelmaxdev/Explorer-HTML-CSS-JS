import { elements } from "./elements.js";

const {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonSet,
	buttonSoundOff,
	buttonSoundOn,
} = elements;

export function events({ controls, timer, sound }) {
	buttonPlay.addEventListener("click", () => {
		controls.play();
		timer.countdown();
		sound.pressButton();
	});

	buttonPause.addEventListener("click", () => {
		controls.pause();
		timer.hold();
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
		const newMinutes = controls.getMinutes();

		if (!newMinutes) {
			timer.reset();
			return;
		}

		timer.updateDisplay(newMinutes);
		timer.updateMinutes(newMinutes);
	});
}
