import { elements } from "./elements.js";
import { Controls } from "./controls.js";
import { Events } from "./events.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";

const {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonSet,
	minutesDisplay,
	secondsDisplay,
} = elements;

const minutes = Number(minutesDisplay.textContent);

const controls = Controls({
	buttonPause,
	buttonPlay,
	buttonSet,
	buttonStop,
});

const timer = Timer({
	minutesDisplay,
	secondsDisplay,
	minutes,
	resetControls: controls.reset,
});

const sound = Sounds();

Events({ controls, timer, sound });
