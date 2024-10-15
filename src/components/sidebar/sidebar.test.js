import {screen, render} from "@testing-library/react";
import Sidebar from "./sidebar";
import SidebarProvider from "../../context/sidebar-context";
import { BrowserRouter, RouterProvider } from "react-router-dom";


describe("Sidebar", () => {
    test("Renders sidebar", () => {
        render(<BrowserRouter><SidebarProvider><Sidebar /></SidebarProvider></BrowserRouter>);
        const sidebarElement = screen.getByRole("navigation");
        expect(sidebarElement).toBeInTheDocument();
    });
    test("Renders catalog button", () => {
        render(<BrowserRouter><SidebarProvider><Sidebar /></SidebarProvider></BrowserRouter>);
        const catalogButton = screen.getByText("Catálogos");
        expect(catalogButton).toBeInTheDocument();
    })

    test("Renders sales button", () => {
        render(<BrowserRouter><SidebarProvider><Sidebar /></SidebarProvider></BrowserRouter>);
        const salesButton = screen.getByText("Ventas");
        expect(salesButton).toBeInTheDocument();
    })


    test("Renders purchases button", () => { 
        render(<BrowserRouter><SidebarProvider><Sidebar /></SidebarProvider></BrowserRouter>);
        const purchasesButton = screen.getByText("Compras");    
        expect(purchasesButton).toBeInTheDocument();
    })

   
    test("Renders settings button", () => { 
        render(<BrowserRouter><SidebarProvider><Sidebar /></SidebarProvider></BrowserRouter>);
        const settingsButton = screen.getByText("Ajustes");
        expect(settingsButton).toBeInTheDocument();
    })
})
