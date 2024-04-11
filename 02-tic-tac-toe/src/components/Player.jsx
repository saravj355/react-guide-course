import { useState } from "react";

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	function handleEditClick() {
		setIsEditing((wasEditing) => !wasEditing);

		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	}

	function handlePlayerNameChange(event) {
		setPlayerName(event.target.value);
	}

	return (
		<li className={isActive ? "active" : ""}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						required
						value={playerName}
						onChange={handlePlayerNameChange}
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}

				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
