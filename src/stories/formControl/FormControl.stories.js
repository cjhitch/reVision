import React from 'react';

import { FormControl } from './FormControl';

export default {
	title: 'Example/FormControl',
	component: FormControl,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = (args) => <FormControl {...args} />;

export const Input = Template.bind({});
Input.args = {
	type: true,
	label: 'Input Field',
}

export const TextArea = Template.bind({});
TextArea.args = {
	type: false,
	label: 'Text Area Field',
}

export const Labeled = Template.bind({});
Labeled.args = {
	type: true,
	label: 'Labeled Input',
}

export const AsTxt = Template.bind({});
Labeled.args = {
	type: true,
	asTxt: true,
	label: 'Assistive Text Input',
}