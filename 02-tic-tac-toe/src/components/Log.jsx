export default function Log({ gameTurns }) {
	return (
		<ol id="log">
			{gameTurns.map((turn) => (
				<li key={`${turn.square.col}${turn.square.row}`}>
					{`${turn.player} Selected ${turn.square.row}, ${turn.square.col}`}
				</li>
			))}
		</ol>
	);
}
