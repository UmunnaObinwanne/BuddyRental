import { Link, Outlet } from "react-router-dom";
import "./ClientCard.css";

function ClientCard({ client }) {
  return (
    <>
      <tbody>
        <tr className="align-middle">
          <td>
            <div className="d-flex align-items-center">
              <img
                src={client.image}
                className="avatar sm rounded-pill me-3 flex-shrink-0"
                alt="Customer"
              />
              <div>
                <Link to={`${client.id}`}>
                  <div className="h6 mb-0 lh-1">{client.name}</div>
                </Link>
              </div>
            </div>
          </td>
          <td>{client.pricePaid}</td>
          <td>
            <span className="d-inline-block align-middle">Russia</span>
          </td>
          <td>
            <span>****6231</span>
          </td>
          <td>21 Sep, 2021</td>
          <td className="text-end">
            <div className="dropdown">
              <a
                data-bs-toggle="dropdown"
                href="#"
                className="btn p-1"
                aria-expanded="false"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="#!" className="dropdown-item">
                  View Details
                </a>
                <a href="#!" className="dropdown-item">
                  Delete user
                </a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default ClientCard;
