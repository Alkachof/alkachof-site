import { useSidebar } from "../../context/sidebar-context";

function SidebarHeader({ name }) {
    const { closeSidebar} = useSidebar()
  return (
    <div className="sidebar-header">
      <div>
        <img
          className="avatar"
          src="https://via.placeholder.com/150"
          alt="avatar"
        />
        <h3>{name}</h3>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 430 430"
        onClick={closeSidebar}
        data-testid="close-button"
      >
        <path
          stroke="#166534"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="17.02"
          strokeWidth="20"
          d="M59.6 370.4 370.4 59.6m-310.8 0 310.8 310.8"
        />
      </svg>
    </div>
  );
}

export default SidebarHeader;
