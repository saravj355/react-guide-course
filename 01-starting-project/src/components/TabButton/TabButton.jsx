import "./TabButton.css";
function TabButton({ children, onClick, isActive = false }) {
	return (
		<li>
			<button className={isActive ? "active" : ""} onClick={onClick}>
				{children}
			</button>
		</li>
	);
}

export default TabButton;
