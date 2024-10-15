import { screen, render } from "@testing-library/react";

import Catalogs from "./catalogs";
import SidebarProvider from "../context/sidebar-context";

test("Renders Catalog", () => {
  render(<SidebarProvider><Catalogs /></SidebarProvider>);

  const catalogElement = screen.getByRole("main");

  expect(catalogElement).toBeInTheDocument();

  const titleElement = screen.getByText("Mis catálogos");
 
  expect(titleElement).toBeInTheDocument();

  const catalogListElement = screen.getByRole("list");
  expect(catalogListElement).toBeInTheDocument();

  const catalogItemElement = screen.getAllByRole("listitem");

  expect(catalogItemElement).toHaveLength(3)

});
