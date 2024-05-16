import { Link } from "react-router-dom";
import "./FriendList.styles.css";

function FriendCard({ friend }) {
  return (
    <div className="friend-card">
      <div className="card overflow-hidden text-center">
        <div className="card-body p-0">
          <a
            href="#!"
            className="avatar xl rounded-circle bg-gray bg-opacity-10 p-1 position-relative mt-n5 d-block mx-auto"
          >
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              className="avatar-img img-fluid rounded-circle"
              alt=""
              style={{ width: "100px", height: "100px" }} // Adjust the width and height of the image
            />
          </a>
          <h5 className="mb-0 pt-3">
            <a href="#!" className="text-reset">
              {friend.name}
            </a>
          </h5>
          <span className="text-muted small d-block mb-4">
            {friend.jobRole}
          </span>
          <div className="row mx-0 border-top border-bottom">
            <div className="col-6 text-center border-end py-3">
              <h5 className="mb-0">{friend.pricePerDay}</h5>
              <small className="text-muted">Price/Day</small>
            </div>
            <div className="col-6 text-center py-3">
              <h5 className="mb-0">{friend.age}</h5>
              <small className="text-muted">Age</small>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
              <span className="text-muted small">Location</span>
              <strong>Barcelona, Spain</strong>
            </li>
            <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
              <span className="text-muted small d-flex align-items-center">
                <span className="align-middle lh-1 me-1 size-5 border border-4 border-success rounded-circle d-inline-block"></span>
                {friend.online ? "online" : "offline"}
              </span>
              <div className="text-end">
                <Link
                  to={`/friends/${friend.id}`}
                  className="btn btn-sm btn-primary"
                >
                  View Profile
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;

/*

<li className="list-group-item px-3 d-flex align-items-center justify-content-between">
              <span className="text-muted small">Activities</span>
              <strong>
                {friend.activities.map((activity, index) => (
                  <span key={index} className="badge bg-secondary me-1">
                    {activity}
                  </span>
                ))}
              </strong>
            </li>


*/
