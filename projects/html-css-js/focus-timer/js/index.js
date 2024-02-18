import { elements } from "./elements.js";
import { events } from "./events.js";
import { Controls } from "./controls.js";
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
	resetControls: controls.reset,
	minutes,
});

const sound = Sounds();

events({ controls, timer, sound });
