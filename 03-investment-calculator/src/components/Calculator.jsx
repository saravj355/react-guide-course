import { useState } from "react";
import Table from "./Table";
import UserInputs from "./UserInputs";
import { calculateInvestmentResults } from "../util/investment";

export default function Calculator() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleUserInputChange(event) {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[event.target.id]: +event.target.value,
			};
		});
	}

	const isInvalidInput = userInput.duration <= 0;

	const data = calculateInvestmentResults(userInput);
	return (
		<>
			<UserInputs
				currentUserInput={userInput}
				onInputChange={handleUserInputChange}
			/>
			{isInvalidInput ? (
				<p className="center">
					Please Enter a valid duration, minimum value is 1
				</p>
			) : (
				<Table data={data} initialInvestment={userInput.initialInvestment} />
			)}
		</>
	);
}
