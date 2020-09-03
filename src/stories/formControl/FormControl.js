import React from 'react';
import PropTypes from 'prop-types';
import './FormControl.scss';

export const FormControl = ({ type, label, asTxt, placeholder, ...props }) => {
	const mode = type ? '<input' : '<textarea';
	// const display = type === 'outline' ? 'outline' : type === 'shadow' ? 'shadow' : ''
	return (
        <>
            {label ? <label for={props.id}>{label}</label> : ''}
                <input
                    id={props.id}
                    placeholder={placeholder}
                    {...props}
                 />
                {mode ? '' : '</textarea>'}
                {asTxt ? <span>{asTxt}</span> : ''}
        </>
	);
};

FormControl.propTypes = {
    type: PropTypes.bool,
    label: PropTypes.string,
    asTxt: PropTypes.string,
    placeholder: PropTypes.string,
}

FormControl.defaultProps = {
    type: true,
    frmLabel: null,
    asTxt: null,
    placeholder: 'Type Something'
};