export default function Tabs({
	children,
	buttons,
	buttonsContainer: ButtonsContainer = "menu",
}) {
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
