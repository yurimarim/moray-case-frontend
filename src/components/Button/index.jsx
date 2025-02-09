import PropTypes from 'prop-types';
import { StyledButton } from './styles';


export default function Button({
	type = 'button',
	disabled = false,
	children,
	onClick = undefined,
}) {
	return (
		<StyledButton
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};
