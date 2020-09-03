import React from 'react';

import { FormControl } from './FormControl';

export default {
	title: 'Example/FormControl',
	component: FormControl,
	argTypes: {
		backgroundColor: { control: 'color' },
		label : {control : 'text'}
	},
};

const Template = (args) => <FormControl {...args} />;

export const Input = Template.bind({});
Input.args = {
	variation: 'input',
}

export const TextArea = Template.bind({});
TextArea.args = {
	variation: 'textarea',
}

export const Labeled = Template.bind({});
Labeled.args = {
	...Input.args,
	label: 'Labeled Input',
}

export const AssistiveText = Template.bind({});
AssistiveText.args = {
	...Input.args,
	assistiveText: 'This is assistive text',
	label: 'Assistive Text Input',
}

export const CheckBox = Template.bind({});
CheckBox.args = {
	variation: 'checkbox',
	label: 'Checkbox: ',
}

export const Radio = Template.bind({});
Radio.args = {
	variation: 'radio',
	label: 'Radio: ',
}