import { render, screen } from "@testing-library/react";
import Modal from "./modal";

describe("Modal component", () => {
  test("renders modal when open is true", () => {
    render(
      <Modal open={true} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalContent = screen.getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("modal open");
  });

  test("does not render modal when open is false", () => {
    render(
      <Modal open={false} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalContent = screen.queryByText("Modal Content");
    expect(modalContent).not.toBeInTheDocument();

    const modal = screen.queryByRole("dialog");
    expect(modal).not.toHaveClass("modal open");
  });
});
