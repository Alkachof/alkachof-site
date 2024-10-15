import { screen, render } from "@testing-library/react";

import SectionHeader from "./section-header";
import SidebarProvider from "../../../context/sidebar-context";

describe("SectionHeader", () => {
    test("Renders title", () => {
        render(<SidebarProvider><SectionHeader title="test" /></SidebarProvider>);
        const titleElement = screen.getByText("test");
        expect(titleElement).toBeInTheDocument();
    });
})