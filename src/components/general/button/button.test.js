import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  test("Renders button", () => {
    render(<Button text="Click me" onClick={() => {}} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click me");
  });

  test("Renders button with default text", () => {
    render(<Button onClick={() => {}} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Aceptar");
  });

  test("Renders button with primary style", () => {
    render(<Button text="Click me" onClick={() => {}} type="primary" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("button-primary");
  });

  test("Renders button with secondary style", () => {
    render(<Button text="Click me" onClick={() => {}} type="secondary" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("button-secondary");
  });

  test("Renders button with link style", () => {
    render(<Button text="Click me" onClick={() => {}} type="link" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("button-link");
  });
});
