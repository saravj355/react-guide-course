import React from "react";

// don't change the Component name "App"
export default function App() {
	const colors = ["white", "green", "red"];
	const [switchColor, setSwitchColor] = React.useState(0);

	function handleSwitchColor() {
		if (switchColor === colors.length - 1) {
			setSwitchColor(colors.length - colors.length);
		}

		setSwitchColor((prevIndex) => prevIndex++);
	}

	return (
		<div>
			<p style={{ color: colors[switchColor] }}>Style me!</p>
			<button onClick={handleSwitchColor}>Toggle style</button>
		</div>
	);
}
