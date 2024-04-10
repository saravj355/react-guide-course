import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { coreConceptsData, tabsData } from "./data/data";

function App() {
	const [currentTab, setCurrentTab] = useState(-1);

	function handleClick(buttonIndex) {
		setCurrentTab(buttonIndex);
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
								key={index}
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
						{tabsData.map((tab, index) => (
							<TabButton
								key={index}
								isActive={index === currentTab}
								onClick={() => handleClick(index)}
							>
								{tab.title}
							</TabButton>
						))}
					</menu>
					<div id="tab-content">
						{currentTab !== -1 ? (
							<>
								<h3>{tabsData[currentTab].title}</h3>
								<p>{tabsData[currentTab].description}</p>
								<pre>
									<code>{tabsData[currentTab].code}</code>
								</pre>
							</>
						) : (
							<p>Please select a topic</p>
						)}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
