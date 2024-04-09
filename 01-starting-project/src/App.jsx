import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { coreConceptsData } from "./data/data";

function App() {
	const [currentTab, setCurrentTab] = useState("");

	function handleClick(event) {
		setCurrentTab(event);
	}
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{coreConceptsData.map((concept, index) => (
							<CoreConcept
								keyIndex={index}
								image={concept.imageSrc}
								title={concept.title}
								description={concept.description}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onClick={() => handleClick("components")}>
							Components
						</TabButton>
						<TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
						<TabButton onClick={() => handleClick("props")}>Props</TabButton>
						<TabButton onClick={() => handleClick("state")}>State</TabButton>
					</menu>
					{currentTab}
				</section>
			</main>
		</div>
	);
}

export default App;
