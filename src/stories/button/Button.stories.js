import React from 'react';

import { Button } from './Button';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	label: 'Secondary Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	color: 'tertiary',
	label: 'Tertiary Button',
};

export const Outline = Template.bind({});
Outline.args = {
	type: 'outline',
	label: 'Outline Button'
};

export const Shadow = Template.bind({});
Shadow.args = {
	type: 'shadow',
	label: 'Shadow Button'
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Small Button',
};
