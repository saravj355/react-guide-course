import Input from "./Input";

export default function UserInputs({ currentUserInput, onInputChange }) {
	const { initialInvestment, annualInvestment, expectedReturn, duration } =
		currentUserInput;

	return (
		<section id="user-input">
			<div className="input-group">
				<Input
					id="initialInvestment"
					type="number"
					labelText={"Initial Investment"}
					value={initialInvestment}
					onChange={onInputChange}
				/>
				<Input
					id="annualInvestment"
					type="number"
					labelText={"Annual Investment"}
					value={annualInvestment}
					onChange={onInputChange}
				/>
			</div>
			<div className="input-group">
				<Input
					id="expectedReturn"
					type="number"
					labelText={"Expected Return"}
					value={expectedReturn}
					onChange={onInputChange}
				/>
				<Input
					id="duration"
					type="number"
					labelText={"Duration"}
					value={duration}
					onChange={onInputChange}
				/>
			</div>
		</section>
	);
}
