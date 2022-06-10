const Button = ({color, text}) => {
	return (
		<button style={{backgroundColor: {color}}}>
			button {text}!
		</button>
	)
}

export default Button;