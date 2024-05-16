function FeaturesSection() {
  const containerStyle = {
    padding: "4rem", // Add padding to the container
    margin: "20px auto", // Add margin top to the container
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="pb-2 border-bottom">Why Choose BuddyRent?</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            Find Your Perfect Hangout Buddy
          </h2>
          <p className="text-body-secondary">
            Discover the joy of shared experiences by renting a buddy from
            BuddyRent. Whether it's a cozy movie night, an exhilarating outdoor
            escapade, or simply enjoying a chat over coffee, our platform
            connects you with like-minded individuals eager to share the
            experience.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <FeatureItem title="Wide Range of Activities" icon="collection" />
            <FeatureItem title="Quality Buddy Matches" icon="gear-fill" />
            <FeatureItem title="Fast and Easy Booking" icon="speedometer" />
            <FeatureItem title="Secure Payment System" icon="table" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, icon }) {
  return (
    <div className="col d-flex flex-column gap-2">
      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref={`#${icon}`} />
        </svg>
      </div>
      <h4 className="fw-semibold mb-0 text-body-emphasis">{title}</h4>
      <p className="text-body-secondary">
        Explore various activities and find the perfect buddy for your needs.
      </p>
    </div>
  );
}

export default FeaturesSection;
