import { useSidebar } from "../../../context/sidebar-context";

function SectionHeader({ title }) {
  const { openSidebar } = useSidebar();
  return (
    <div className="section-header">
      <h3>{title}</h3>

      <div className="toggle-sidebar" onClick={openSidebar} data-testid="toggle-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 80"
          width="30"
          height="30"
          fill={"#166534"}
        >
          <rect width="100" height="15" rx="8"></rect>
          <rect y="30" width="100" height="15" rx="8"></rect>
          <rect y="60" width="100" height="15" rx="8"></rect>
        </svg>
      </div>
    </div>
  );
}

export default SectionHeader;
