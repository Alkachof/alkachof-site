import { useNavigate } from "react-router-dom";
function ArrowBack({ onClick }) {
  const navigate = useNavigate();

  return (
    <div
      aria-label="Volver"
      onClick={onClick || navigate.goBack}
      role="navigation"
    >
      <svg
        className="arrow-back"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill="none"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </div>
  );
}

export default ArrowBack;
