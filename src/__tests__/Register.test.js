import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RegisterPage from "../pages/RegisterPage"; // Adjust path if needed
import "@testing-library/jest-dom/extend-expect";

test("renders registration form", () => {
  render(<Register />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByText(/register/i)).toBeInTheDocument();
});

test("shows validation errors if form is submitted empty", async () => {
  render(<RegisterPage />);
  
  fireEvent.click(screen.getByText(/register/i));

  expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
});
