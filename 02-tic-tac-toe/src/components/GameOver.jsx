export default function GameOver({ onResetGame, winner }) {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{winner ? <p>The winner is {winner}</p> : <p>It's a draw!</p>}
			<p>
				<button onClick={onResetGame}>Rematch!</button>
			</p>
		</div>
	);
}
