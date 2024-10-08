import {render, screen} from "@testing-library/react";
import Landing from "./landing";
import { BrowserRouter } from "react-router-dom";


describe("Landing", () => {
    test("Renders Landing", () => {
        render(<BrowserRouter><Landing /> </BrowserRouter>);

        const landingElement = screen.getByRole("main");

        expect(landingElement).toBeInTheDocument();

    })
})
