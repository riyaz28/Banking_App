import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login'
import userEvent from '@testing-library/user-event'

test('submits username and password', async () => {

    // ARRANGE
    const username = "admin@admin.com";
    const password = "abc123";
    const mockLogin = jest.fn();
    render(<Login onSubmit={mockLogin(username, password)} />);
    
    const inputs = screen.getAllByRole('textbox')
    userEvent.type(inputs[0], 'admin@admin.com');
    userEvent.type(inputs[1], 'abc123');
    const loginButton = screen.getByRole('button');
    expect(loginButton).not.toBeDisabled();

    // ACT
    userEvent.click(loginButton);

    // ASSERT
    await expect(mockLogin).toHaveBeenCalled();
    await expect(mockLogin).toHaveBeenCalledTimes(1);
    await expect(mockLogin).toHaveBeenCalledWith("admin@admin.com", "abc123");
  });