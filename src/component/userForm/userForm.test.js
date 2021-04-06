import React from "react";
import {
    fireEvent,
  render,screen
} from "@testing-library/react";


import UserForm from "./UserForm"

const mockUser = { username:"Tim", position:"", responsible: "" };

function renderUsage() {

    // arrange
  
    const utils = render(<UserForm username={mockUser.username} />);
    return {
      ...utils,
      submitButton: utils.getByText(/submit/i),
      resetButton: utils.getByText(/reset/i),
      userLabel: utils.getByLabelText(/username/i),
      positionTitle: utils.getByLabelText(/position/i),
      responsibility: utils.getByLabelText(/responsibility/i),

    };
}


test('Initial State of form', () => {
    const {
      submitButton,
      resetButton,
      userLabel,
      positionTitle,
      responsibility,
    } = renderUsage();

    // initial Assertion for the buttons
    expect(submitButton).toHaveAttribute('disabled')
    expect(resetButton).toHaveAttribute('disabled');
    

    expect(userLabel).toHaveAttribute('disabled')
    expect(userLabel.value).toBe(mockUser.username);


    const testData = {
    ...mockUser,
      position: "Leader",
      responsible: "over watcher",
      };

    // actions
    fireEvent.change(positionTitle, { target: { value: testData.position } });
    fireEvent.change(responsibility, {
      target: { value: testData.responsible },
    });
    
  // assertion once action is performed
    expect(submitButton).not.toHaveAttribute("disabled");
  expect(resetButton).not.toHaveAttribute("disabled");


  fireEvent.click(submitButton);
  // expect(formStatus).toBeInTheDocument();
  

  // submit the form



screen.debug();
})


