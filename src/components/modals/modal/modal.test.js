import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./modal";
import { BrowserRouter } from "react-router-dom";

describe("Modal component", () => {
  test("renders modal when open is true", () => {
    render(
      <BrowserRouter>
        <Modal open={true} onClose={jest.fn()}>
          <div>Modal Content</div>
        </Modal>
      </BrowserRouter>
    );

    const modalContent = screen.getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("modal open");
  });

  test("does not render modal when open is false", () => {
    render(
      <BrowserRouter>
        <Modal title="Modal Title" open={false} onClose={jest.fn()}>
          <div>Modal Content</div>
        </Modal>
      </BrowserRouter>
    );

    const modalTitle = screen.queryByText("Modal Title");
    expect(modalTitle).not.toBeInTheDocument();

    const modalContent = screen.queryByText("Modal Content");
    expect(modalContent).not.toBeInTheDocument();

    const modal = screen.queryByRole("dialog");
    expect(modal).not.toHaveClass("modal open");
  });

  test("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <BrowserRouter>
        <Modal open={true} handleClose={handleClose}>
          <div>Modal Content</div>
        </Modal>
      </BrowserRouter>
    );

    const closeButton =  screen.getByRole("navigation");

    expect(handleClose).toHaveBeenCalledTimes(0);
 
    fireEvent.click(closeButton); 

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
