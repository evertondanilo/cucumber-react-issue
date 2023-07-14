import React from 'react';
import MyComponent from '../../src/MyComponent';
import { Given, Then, When } from '@cucumber/cucumber';
import { render, screen, fireEvent } from '@testing-library/react';
import expect from 'expect';

Given('I am on the MyComponent page', async () => {
  // Render the MyComponent
  render(<MyComponent />);
});

When('I enter {string} in the input field', async (inputValue) => {
  // Find the input field and enter the provided value
  const input = screen.getByLabelText('Input:');
  fireEvent.change(input, { target: { value: inputValue } });
});

When('I click the {string} button', async (buttonText) => {
  // Find the button element and click it
  const button = screen.getByRole('button', { name: buttonText });
  fireEvent.click(button);
});

Then('I should see {string} in the second readonly input', async (expectedValue) => {
  // Find the second input element and verify its text content
  const input = screen.getByLabelText('Output:');
  expect(input.value).toBe(expectedValue);
});
