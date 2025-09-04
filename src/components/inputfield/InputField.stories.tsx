import type { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';
import InputField from './InputField';

// Define the component metadata
const meta: Meta = {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    // Define controls for props in Storybook
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

// Define the component template
const Template: StoryFn = (args) => <InputField {...args} />;

// --- Stories ---

export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
  placeholder: 'Enter your email',
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Username',
  placeholder: 'Enter username',
  variant: 'filled',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Password',
  placeholder: 'Enter password',
  invalid: true,
  errorMessage: 'Password must be at least 8 characters.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Address',
  placeholder: 'Shipping Address',
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Phone Number',
  helperText: 'e.g., +1 (555) 555-5555',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  label: 'Name',
  placeholder: 'Your Full Name',
  size: 'lg',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  label: 'Promo Code',
  placeholder: 'Enter code',
  size: 'sm',
};