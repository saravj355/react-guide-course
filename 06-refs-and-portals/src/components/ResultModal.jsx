import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default forwardRef(function ResultModal(
	{ targetTime, remainingTime, onReset },
	ref
) {
	const dialog = useRef();

	useImperativeHandle(ref, () => ({
		open() {
			dialog.current.showModal();
		},
	}));

	const userLost = remainingTime <= 0;

	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
	return createPortal(
		<dialog ref={dialog} className="result-modal" onClose={onReset}>
			<h2>You {userLost ? "lost" : "won"}</h2>
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			{userLost ? (
				<p>You ran out of time!</p>
			) : (
				<>
					<p>
						You stopped the timer with{" "}
						<strong>{formattedRemainingTime} seconds left</strong>
					</p>
					<p>Your Score is {score}</p>
				</>
			)}
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById("modal")
	);
});
