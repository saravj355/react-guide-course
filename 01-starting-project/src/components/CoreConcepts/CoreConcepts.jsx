import React from "react";
import "./index.css";
import Concept from "./Concept";
import { coreConceptsData } from "../../data/data";

function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h2>Core Concepts</h2>
			<ul>
				{coreConceptsData.map((concept, index) => (
					<Concept
						key={index}
						image={concept.imageSrc}
						title={concept.title}
						description={concept.description}
					/>
				))}
			</ul>
		</section>
	);
}

export default CoreConcepts;
