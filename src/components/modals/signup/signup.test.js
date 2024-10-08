import { render, screen } from "@testing-library/react";
import Signup from "./signup";
import { BrowserRouter } from "react-router-dom";

describe("Signup", () => {
  test("Renders Signup", () => {
    render(
      <BrowserRouter>
        <Signup open={true} handleClose={jest.fn()} />{" "}
      </BrowserRouter>
    );

    const modalContent = screen.getByText("Registro");

    expect(modalContent).toBeInTheDocument();
  });
});
