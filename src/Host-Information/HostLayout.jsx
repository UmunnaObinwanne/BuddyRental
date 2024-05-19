import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.styles.css";

function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <div className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="clients"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Your Clients
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default HostLayout;
