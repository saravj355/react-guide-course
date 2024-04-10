function TabButton({ children, isActive = false, ...props }) {
	return (
		<li>
			<button className={isActive ? "active" : ""} {...props}>
				{children}
			</button>
		</li>
	);
}

export default TabButton;
