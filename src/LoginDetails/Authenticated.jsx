import { NavLink, Navigate, Outlet } from "react-router-dom";

function Authenticated({ authenticated }) {
  return (
    <>
      <NavLink to=".." relative="path">
        go back to home
      </NavLink>
      {authenticated ? (
        <Navigate to="/host" />
      ) : (
        <Navigate
          to="/login"
          state={{ message: "Please log in to access account" }}
        />
      )}
      <Outlet />
    </>
  );
}

export default Authenticated;
