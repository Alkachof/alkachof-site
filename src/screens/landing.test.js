import {render, screen} from "@testing-library/react";
import Landing from "./landing";


describe("Landing", () => {
    test("Renders Landing", () => {
        render(<Landing />);

        const landingElement = screen.getByRole("main");

        expect(landingElement).toBeInTheDocument();

    })
})
