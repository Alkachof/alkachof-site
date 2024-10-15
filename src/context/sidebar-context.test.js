import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import SidebarProvider from "./sidebar-context";
import SectionHeader from "../components/general/section-header/section-header";
import Sidebar from "../components/sidebar/sidebar";
import { BrowserRouter } from "react-router-dom";
describe("SidebarProvider", () => {
  test("Sidebar is not open", () => {
    render(
      <BrowserRouter>
        <SidebarProvider>
          <SectionHeader title="test" />
          <Sidebar />
        </SidebarProvider>
      </BrowserRouter>
    );

    const sidebar = document.querySelector(".sidebar");
    expect(sidebar).not.toHaveClass("open");
  });

  test("Sidebar opens and closes", () => {
  
    render(
      <BrowserRouter>
        <SidebarProvider>
          <SectionHeader title="test" />
          <Sidebar />
        </SidebarProvider>
      </BrowserRouter>
    );

    const sidebar = document.querySelector(".sidebar");

    const toggleButton = screen.getByTestId("toggle-button");

    fireEvent.click(toggleButton);

    expect(sidebar).toHaveClass("open");

    const closeButton = screen.getByTestId("close-button");

    fireEvent.click(closeButton);

    expect(sidebar).not.toHaveClass("open");
  })
});
