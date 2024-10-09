import { render, screen } from "@testing-library/react";
import ResetPassword from "./reset-password";
import { BrowserRouter } from "react-router-dom";

describe("ResetPassword", () => {
  test("Renders ResetPassword", () => {
    render(
      <BrowserRouter>
        <ResetPassword open={true} handleClose={jest.fn()} />
      </BrowserRouter>
    );

    const modalContent = screen.getByText("Recuperar contraseña");

    expect(modalContent).toBeInTheDocument();
  });
});
