import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
	const initialTime = targetTime * 1000;
	const [timeRemaining, setTimeRemaining] = useState(initialTime);

	const timerId = useRef();
	const dialog = useRef();

	const timerIsActive = timeRemaining > 0 && timeRemaining < initialTime;

	if (timeRemaining <= 0) {
		handleStop();
	}

	function handleStart() {
		const initialMilliseconds = 10;

		const timer = setInterval(() => {
			setTimeRemaining((timeRemaining) => timeRemaining - initialMilliseconds);
		}, initialMilliseconds);

		timerId.current = timer;
	}

	function handleStop() {
		clearInterval(timerId.current);
		dialog.current.open();
	}

	function handleReset() {
		setTimeRemaining(initialTime);
	}

	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={targetTime}
				remainingTime={timeRemaining}
				onReset={handleReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? "Stop" : "Start"}
					</button>
				</p>
				<p className={timerIsActive ? "active" : ""}>
					{timerIsActive ? "Time is running" : "Timer inactive"}
				</p>
			</section>
		</>
	);
}
