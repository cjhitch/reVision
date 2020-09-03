import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, size, type, label, ...props }) => {
	const mode = color === 'secondary' ? 'secondary' : color === 'tertiary' ? 'tertiary' : 'primary';
	const display = type === 'outline' ? 'outline' : type === 'shadow' ? 'shadow' : ''
	return (
		<button
			type="button"
			className={['btn', `${size}`, mode, display].join(' ')}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	color: PropTypes.string,
	/**
	 * What background color to use
	 */
	// backgroundColor: PropTypes.string,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	// backgroundColor: null,
	color: 'primary',
	size: 'medium',
	type: null,
	onClick: undefined,
};
