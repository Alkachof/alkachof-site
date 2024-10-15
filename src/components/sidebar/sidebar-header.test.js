import { screen, render } from "@testing-library/react";
import SidebarHeader from "./sidebar-header";
import SidebarProvider from "../../context/sidebar-context";


test("Renders SidebarHeader", () => {
    render(<SidebarProvider><SidebarHeader name="test" /></SidebarProvider>);
    const sectionHeaderElement = screen.getByText("test");
    expect(sectionHeaderElement).toBeInTheDocument();
})