import React from "react";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Input from "./input";
import useInput from "../../../hooks/useInput/useInput";

describe("Input", () => {
  test("Renders input", () => {
    render(
      <Input type="text" placeholder="test" value="test" onChange={() => {}} />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "test");
    expect(inputElement.value).toBe("test");
  });

  test("Displays correct value after change", () => {
    const InputTestComponent = () => {
      const test = useInput("");

      return (
        <Input
          type="text"
          placeholder="test"
          value={test.value}
          onChange={test.onChange}
        />
      );
    };
    render(<InputTestComponent />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.value).toBe("");

    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");

    fireEvent.change(inputElement, { target: { value: "test2" } });
    expect(inputElement.value).toBe("test2");
  });

  test("Renders input with error", () => {
    render(
      <Input
        type="text"
        placeholder="test"
        value="test"
        error="An error message"
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toHaveClass("input-error");

    expect(screen.getByText("An error message")).toBeInTheDocument();
  });
});
