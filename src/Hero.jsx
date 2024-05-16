import imageSrc from "./assets/hug.jpg";

function Hero() {
  return (
    <>
      <div
        className="container-fluid py-5 position-relative"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Changed overlay color to a dark shade
          }}
        ></div>
        <div className="row justify-content-center align-items-center position-relative">
          <div className="col-lg-6 text-center z-index-1">
            <h1 className="display-4 fw-bold text-light mb-4">
              Find Your Perfect Hangout Buddy at{" "}
              <span
                style={{
                  fontFamily: "Pacifico",
                  fontSize: "2rem",
                  color: "#FFFFFF",
                }}
              >
                BuddyRent!
              </span>
            </h1>
            <p className="lead text-light">
              Embark on unforgettable adventures by renting a buddy from
              BuddyRent. Whether it's a cozy movie night, an exhilarating
              outdoor escapade, or simply enjoying a chat over coffee, our
              platform connects you with like-minded individuals eager to share
              the experience. Bid farewell to solo outings and embrace a world
              of possibilities for fun and friendship with BuddyRent!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                style={{ fontFamily: "Roboto", fontWeight: "bold" }} // Changed button styles
              >
                Get Started
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4" // Changed button outline color to light
                style={{ fontFamily: "Roboto", fontWeight: "bold" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
