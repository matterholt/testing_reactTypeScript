import React from "react";
import {
  render,
} from "@testing-library/react";


import UserForm from "./UserForm"

const mockUser = { username:"Tim" };

function renderUsage() {
    // arrange the set up
    const utils = render(<UserForm username={mockUser.username} />);
    return {
        ...utils,
        submitButton: utils.getByText(/submit/i),
        resetButton : utils.getByText(/reset/i)
    };
}


test('will this render', () => {
    const { submitButton, resetButton } = renderUsage();

    // initial Assertion for the buttons
    expect(submitButton).toHaveAttribute('disabled')
    expect(resetButton).toHaveAttribute('disabled');

})