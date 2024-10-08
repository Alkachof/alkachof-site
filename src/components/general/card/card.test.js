import { render, screen } from "@testing-library/react";
import Card from "./card";


describe("Card", () => {
    test("Renders card with children", () => {
        render(<Card>test</Card>);
        const cardElement = screen.getByRole("region");
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveTextContent("test");
    })
})