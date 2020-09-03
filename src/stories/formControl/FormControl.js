import React from 'react';
import PropTypes from 'prop-types';
import './FormControl.scss';

export const FormControl = ({ variation, label, assistiveText, placeholder, ...props }) => {

    const variant = variation === 'textarea' ? 'textarea' :
                    'input';

    const type = variation === 'checkbox' || variation === 'toggle' ? 'checkbox' :
                 variation === 'radio' ? 'radio' :
                 variation === 'textarea' ? '' :
                 'text'

    const Tag = `${variant}`

	return (
        <>
            {label ? <label htmlFor={props.id}>{label}</label> : ''}
            <Tag id={props.id} placeholder={placeholder} type={type} className={`FormControl ${variation === 'toggle' ? 'toggle' : ''}`} ></Tag>
            {assistiveText ? <span>{assistiveText}</span> : ''}
        </>
	);
};

FormControl.propTypes = {
    variation: PropTypes.oneOf(['input', 'textarea', 'checkbox', 'radio', 'toggle']),
    label: PropTypes.string,
    assistiveText: PropTypes.string,
    placeholder: PropTypes.string,
}

FormControl.defaultProps = {
    variation: 'input',
    label: null,
    assistiveText: null,
    placeholder: 'Type Something'
};