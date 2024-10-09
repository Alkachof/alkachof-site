import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ArrowBack from "./arrow-back";

describe("ArrowBack", () => {
  test("Renders ArrowBack", () => {
    const handleClose = jest.fn();
    render(
      <BrowserRouter>
        <ArrowBack onClick={handleClose} />
      </BrowserRouter>
    );

    const arrowBackElement = screen.getByRole("navigation");

    expect(arrowBackElement).toBeInTheDocument();

    expect(arrowBackElement).toHaveAttribute("aria-label", "Volver");

    expect(handleClose).toHaveBeenCalledTimes(0);

    fireEvent.click(arrowBackElement);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
