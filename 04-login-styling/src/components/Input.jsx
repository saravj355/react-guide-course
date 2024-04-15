export default function Input({ labelText, invalid, ...props }) {
	const labelStyle = `block mb-2 text-xs font-bold tracking-wide uppercase ${
		invalid ? "text-red-400" : "text-stone-300"
	}`;

	const inputStyle = `w-full px-3 py-2 leading-tight  border rounded shadow 
	${
		invalid
			? "text-red-500 bg-red-100 border-red-300"
			: "bg-stone-300 text-gray-700"
	}`;
	return (
		<p>
			<label className={labelStyle}>{labelText}</label>
			<input className={inputStyle} {...props} />
		</p>
	);
}
