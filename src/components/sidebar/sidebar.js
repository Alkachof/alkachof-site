import { Link } from "react-router-dom";
import { useSidebar } from "../../context/sidebar-context";
import SidebarHeader from "./sidebar-header";

function Sidebar() {
  const {sidebarOpen} = useSidebar()
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`} role="navigation">
      <SidebarHeader name="Juan Perez"  />
      <ul className="sidebar-menu">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="430"
            fill="none"
            viewBox="0 0 430 430"
          >
            <g
              stroke="#166534"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
            >
              <path d="M139 361v49l26-16 26 16v-49" />
              <path
                strokeMiterlimit="10"
                d="M121.666 87.333h215.793V30H121.666C105.869 30 93 42.868 93 58.667c0 15.797 12.869 28.666 28.666 28.666"
              />
              <path
                strokeMiterlimit="10"
                d="M93 58.667v273.771c0 7.951 3.243 15.066 8.37 20.192 5.231 5.231 12.345 8.37 20.296 8.37h215.793V87.228M285 270H145m114.136 35h-88.272"
              />
              <path strokeMiterlimit="10" d="M145 140h140v50H145z" />
            </g>
          </svg>
          <Link to="/dashboard/catalogs">Catálogos</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="430"
            fill="none"
            viewBox="0 0 430 430"
          >
            <g stroke="#166534" strokeMiterlimit="14.8" strokeWidth="20">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M127.012 275.95s-7.1 1.6-10.9 6.3c-6 7.4-5.8 19.6 15.1 19.6h175.3"
              />
              <path d="M144.112 301.95c15.3 0 27.8 12.4 27.8 27.8 0 15.3-12.4 27.8-27.8 27.8s-27.8-12.4-27.8-27.8c.1-15.4 12.5-27.8 27.8-27.8Zm164.2 0c15.3 0 27.8 12.4 27.8 27.8 0 15.3-12.4 27.8-27.8 27.8-15.3 0-27.8-12.4-27.8-27.8.1-15.4 12.5-27.8 27.8-27.8Z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M41.912 72.45h25.4c14 0 28.2 16.4 31.6 36.5l28.1 167m-28-166.5 248.2.1h39.3c1.3 0 1.9 1.4 1.4 3.1s-5.5 19-11.2 38.6l-18.8 64.7c-5.7 19.6-26.8 37.4-47.1 39.7l-145.7 16.6c-20.3 2.3-34.8 2.1-38.1 3.7 0 0-7.1 1.6-10.9 6.3"
              />
            </g> 
          </svg>
          <Link to="/dashboard/sales/">Ventas</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="430"
            fill="none"
            viewBox="0 0 430 430"
          >
            <g
              stroke="#166534"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="20"
            >
              <path d="M249.1 68.7h56.7v193.4M135.7 68.7H79v320.2h147.1m-76.9-179.3h114.1m-114.1-48.5h114.1m-114.1 97h114.1m-114.1 48.5h77.7M167.2 62.7V42h50.4v20.7" />
              <path d="M249.1 62.7H135.7v37.4h113.4zm86.6 301.6 5 24.7h-78.5l5-24.6c2.6-12.8 12.1-22.8 24.2-26.4-12.1-3.6-21.6-13.6-24.2-26.5l-5-24.6h78.5l-5 24.6c-2.6 12.9-12.1 22.8-24.2 26.5 12.1 3.4 21.6 13.4 24.2 26.3M251 286.7h101M251 388.9h101M121.397 161.1h.1m.01 48.525h.1m0 48.475h.1m-.307 48.5h.1" />
            </g>
          </svg>
          <Link to="/dashboard/purchases/">Compras</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="430"
            fill="none"
            viewBox="0 0 430 430"
          >
            <g
              stroke="#166534"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
            >
              <path d="M215 134a80.001 80.001 0 1 1-66.518 124.446A80 80 0 0 1 135 214a80 80 0 0 1 23.434-56.566A80 80 0 0 1 215 134" />
              <path d="m365.447 244.782-8.727-5.041a145.1 145.1 0 0 0 0-50.518l8.727-5.041a22.31 22.31 0 0 0 8.172-30.497l-26.515-45.942a22.324 22.324 0 0 0-30.497-8.172l-8.754 5.059a143.4 143.4 0 0 0-43.718-25.285V69.308a22.32 22.32 0 0 0-6.537-15.777A22.32 22.32 0 0 0 241.818 47h-53.02a22.3 22.3 0 0 0-20.617 13.769 22.3 22.3 0 0 0-1.699 8.539V79.38a143.4 143.4 0 0 0-43.719 25.285l-8.754-5.059a22.327 22.327 0 0 0-30.497 8.172l-26.514 45.924a22.32 22.32 0 0 0-2.238 16.943A22.3 22.3 0 0 0 65.17 184.2l8.728 5.041a145.1 145.1 0 0 0 0 50.518L65.17 244.8a22.3 22.3 0 0 0-10.409 13.554 22.3 22.3 0 0 0 2.238 16.943l26.523 45.924a22.324 22.324 0 0 0 30.497 8.172l8.754-5.059a143.4 143.4 0 0 0 43.719 25.285v10.073a22.3 22.3 0 0 0 6.536 15.777 22.3 22.3 0 0 0 15.78 6.531h53.029a22.3 22.3 0 0 0 15.78-6.531 22.3 22.3 0 0 0 6.537-15.777v-10.108a143.5 143.5 0 0 0 43.718-25.286l8.754 5.059a22.326 22.326 0 0 0 30.497-8.172l26.515-45.924A22.32 22.32 0 0 0 372 250.517a22.3 22.3 0 0 0-6.553-5.735" />
            </g>
          </svg>
          <Link to="/dashboard/settings">Ajustes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
