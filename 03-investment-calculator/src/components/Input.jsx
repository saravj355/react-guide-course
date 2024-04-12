export default function Input({
	id,
	labelText,
	type = "text",
	value,
	onChange,
	...props
}) {
	return (
		<p>
			<label htmlFor={id}>{labelText}</label>
			<input id={id} type={type} value={value} onChange={onChange} {...props} />
		</p>
	);
}
