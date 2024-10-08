import { render, screen } from "@testing-library/react";
import Signin from "./signin";
import { BrowserRouter } from "react-router-dom";

describe("Signin", () => {
  test("Renders Signin", () => {
    render(
      <BrowserRouter>
        <Signin open={true} handleClose={jest.fn()} />
      </BrowserRouter>
    );

    const modalContent = screen.getByText("Iniciar sesión");

    expect(modalContent).toBeInTheDocument();
  });
});
