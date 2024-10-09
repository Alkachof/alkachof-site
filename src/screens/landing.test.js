import {render, screen} from "@testing-library/react";
import Landing from "./landing";
import { BrowserRouter } from "react-router-dom";


describe("Landing", () => {
    test("Renders Landing", () => {
        render(<BrowserRouter><Landing /> </BrowserRouter>);

        const landingElement = screen.getByRole("main");

        expect(landingElement).toBeInTheDocument();
    })

    test("Renders signup button", () => { 
        render(<BrowserRouter><Landing /> </BrowserRouter>);
        const signupButton = screen.getByText("Crear cuenta");

        expect(signupButton).toBeInTheDocument();
    })

    test("Renders signin button", () => {
        render(<BrowserRouter><Landing /> </BrowserRouter>);
        const signinButton = screen.getByText("Acceder");

        expect(signinButton).toBeInTheDocument();
    })
})
