import { Link } from "react-router-dom";
import "./FriendList.styles.css";

function FriendCard({ friend }) {
  return (
    <div className="friend-card">
      <div className="card">
        <div className="card-body">
          <div className="avatar-wrapper">
            <a href="#!" className="avatar-link">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="avatar-img"
                alt=""
              />
            </a>
          </div>
          <h5 className="card-title">
            <a href="#!" className="text-reset">
              {friend.name}
            </a>
          </h5>
          <span className="text-muted small d-block mb-4">
            {friend.jobRole}
          </span>
          <div className="card-stats">
            <div className="stat">
              <h5 className="stat-value">{friend.pricePerDay}</h5>
              <small className="text-muted">Price/Day</small>
            </div>
            <div className="stat">
              <h5 className="stat-value">{friend.age}</h5>
              <small className="text-muted">Age</small>
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="text-muted small">Location</span>
              <strong>Barcelona, Spain</strong>
            </li>
            <li className="list-group-item">
              <span className="text-muted small">
                <span
                  className={`status-indicator ${
                    friend.online ? "online" : "offline"
                  }`}
                ></span>
                {friend.online ? "online" : "offline"}
              </span>
              <div className="text-end">
                <Link to={`${friend.id}`} className="btn btn-primary">
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
