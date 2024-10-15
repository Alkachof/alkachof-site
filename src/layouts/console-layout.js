import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import SidebarProvider from "../context/sidebar-context";

function ConsoleLayout() {
    return (
        <SidebarProvider>
            <div className="console-layout" role="main">
                <Sidebar />
                <div className="console-content">
                    <Outlet />
                </div>
            </div>
        </SidebarProvider>
    );
}

export default ConsoleLayout