import { getRandomInt } from "../../utils/RandomNumber";
import reactImage from "../../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css";

export default function Header() {
	const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
	return (
		<header>
			<img src={reactImage} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
