import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import winningCombinations from "./utils/winningCombinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};
function derivedActivePlayer(gameTurns) {
	return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
}
function calculateWinner(gameBoard, players) {
	for (const combination of winningCombinations) {
		const firstSquare = gameBoard[combination[0].row][combination[0].column];
		const secondSquare = gameBoard[combination[1].row][combination[1].column];
		const thirdSquare = gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquare &&
			firstSquare === secondSquare &&
			firstSquare === thirdSquare
		) {
			return players[firstSquare];
		}
	}
}
function fillGameBoard(gameTurns) {
	const initialGameBoard = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	const gameBoard = structuredClone(initialGameBoard);

	for (const turn of gameTurns) {
		const { square, player } = turn;
		gameBoard[square.row][square.col] = player;
	}

	return gameBoard;
}

function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameTurns, setGameTurns] = useState([]);
	const currentPlayer = derivedActivePlayer(gameTurns);
	const gameBoard = fillGameBoard(gameTurns);
	const winner = calculateWinner(gameBoard, players);
	const hasDraw = gameTurns.length === 9 && !winner;

	function handleBoxClick(rowIndex, colIndex) {
		setGameTurns((prevGameTurns) => {
			const currentPlayer = derivedActivePlayer(prevGameTurns);

			const newGameTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevGameTurns,
			];

			return newGameTurns;
		});
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: newName }));
	}

	function handleResetGame() {
		setGameTurns([]);
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						key="player-1"
						initialName={PLAYERS.X}
						symbol="X"
						isActive={currentPlayer === "X"}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						key="player-2"
						initialName={PLAYERS.O}
						symbol="O"
						isActive={currentPlayer === "O"}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver winner={winner} onResetGame={handleResetGame} />
				)}
				<GameBoard board={gameBoard} onBoxClick={handleBoxClick} />
			</div>
			<Log gameTurns={gameTurns} />
		</main>
	);
}

export default App;
