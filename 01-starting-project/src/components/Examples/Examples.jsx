import { useState } from "react";
import TabButton from "./TabButton";
import { tabsData } from "../../data/data";
import "./TabButton.css";
import Section from "../common/Section";
import Tabs from "../common/Tabs";

export default function Examples() {
	const [currentTab, setCurrentTab] = useState(-1);

	function handleClick(buttonIndex) {
		setCurrentTab(buttonIndex);
	}

	return (
		<Section title="Examples" id="examples">
			<Tabs
				buttonsContainer="menu"
				buttons={tabsData.map((tab, index) => (
					<TabButton
						key={index}
						isActive={index === currentTab}
						onClick={() => handleClick(index)}
					>
						{tab.title}
					</TabButton>
				))}
			>
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
			</Tabs>
		</Section>
	);
}
