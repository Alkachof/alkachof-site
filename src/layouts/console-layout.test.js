import {screen, render} from "@testing-library/react";
import ConsoleLayout from "./console-layout";
import { BrowserRouter } from "react-router-dom";


test("Renders ConsoleLayout", () => {
    render(<BrowserRouter><ConsoleLayout /></BrowserRouter>);
    const consoleLayoutElement = screen.getByRole("main");
    expect(consoleLayoutElement).toBeInTheDocument();
})