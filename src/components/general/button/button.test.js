import { render, screen } from "@testing-library/react";
import Button from "./button";

test("Renders button", () => {
    render(<Button text="Click me" onClick={() => {}} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click me");
})

