import React from "react";
import "./CoreConcept.css";

function CoreConcept(props) {
	const { keyIndex, image, title, description } = props;

	return (
		<li key={keyIndex}>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

export default CoreConcept;
