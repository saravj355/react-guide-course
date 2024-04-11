export default function GameBoard({ board, onBoxClick }) {
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((col, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onBoxClick(rowIndex, colIndex)}
									disabled={col}
								>
									{col}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
