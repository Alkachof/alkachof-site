import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
    test("Renders footer", () => {
        render(<Footer />);
    
        const footerElement = screen.getByRole("contentinfo");
        expect(footerElement).toBeInTheDocument();
    });
})
