import { Link, Outlet } from "react-router-dom";

const linkStyle = {
  textDecoration: "underline",
  margin: "10px",
};

function IndividualClientCard({ client }) {
  return (
    <>
      <div>
        <Link to=".." relative="path" style={linkStyle}>
          <span>&laquo; go back to clients</span>
        </Link>
      </div>
      <div>
        <section className="section about-section gray-bg" id="about">
          <div className="container">
            <div className="row align-items-center justify-content-around flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text">
                  <h3 className="dark-color">{client.name}</h3>
                  <p>{client.description}</p>
                  <div className="btn-bar">
                    <button className="px-btn btn-primary">
                      Contact {client.name} again.
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <div className="about-img">
                  <img src={client.image} alt={`${client.name}`} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default IndividualClientCard;
