import { formatter } from "../util/investment";

const titles = [
	"Year",
	"Investment Value",
	"Interest (Year)",
	"Total Interest",
	"Inverted Capital",
];
export default function Table({ data, initialInvestment }) {
	return (
		<table id="result">
			<thead>
				<tr>
					{titles.map((title) => (
						<th key={title}>{title}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row) => {
					const totalInterest =
						row.valueEndOfYear -
						row.annualInvestment * row.year -
						initialInvestment;

					const totalAmountInvested = row.valueEndOfYear - totalInterest;
					return (
						<tr key={row.year}>
							<td>{row.year}</td>
							<td>{formatter.format(row.valueEndOfYear)}</td>
							<td>{formatter.format(row.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
