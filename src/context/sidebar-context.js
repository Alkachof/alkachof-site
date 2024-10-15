import React from "react";

export const SidebarContext = React.createContext();


const SidebarProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <SidebarContext.Provider
            value={{
                sidebarOpen,
                toggleSidebar,
                openSidebar,
                closeSidebar
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => React.useContext(SidebarContext);

export default SidebarProvider;