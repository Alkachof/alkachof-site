import {screen, render} from "@testing-library/react";
import CatalogItem from "./catalog-item";

test("Renders CatalogItem", () => {
    render(<CatalogItem item={{name: "Title test", image: "http://testimage33.com", price: "24" }} />);
    const catalogItemElement = screen.getByRole("listitem");
    expect(catalogItemElement).toBeInTheDocument();

    const titleElement = screen.getByText("Title test");
    expect(titleElement).toBeInTheDocument();

    const priceElement = screen.getByText("$24");
    expect(priceElement).toBeInTheDocument();

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();

    expect(imageElement).toHaveAttribute("src", "http://testimage33.com");

    expect(imageElement).toHaveAttribute("alt", "Title test");
})

