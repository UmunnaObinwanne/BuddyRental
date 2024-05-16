import rainKiss from "./assets/rain kiss.jpg";
import "./about.css";

function About() {
  return (
    <div>
      <section className="section_all bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title_all text-center">
                <h3 className="font-weight-bold">
                  Welcome To <span className="text-custom">BuddyRent</span>
                </h3>
                <p className="section_subtitle mx-auto text-muted">
                  BuddyRent is a platform where you can find your perfect
                  hangout buddy. Rent a friend and discover the joy of shared
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="about_header_main mt-3">
                <div className="about_icon_box">
                  <p className="text_custom font-weight-bold">
                    Rent a Buddy Today
                  </p>
                </div>
                <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                  Your Ultimate Hangout Solution
                </h4>
                <p className="text-muted mt-3">
                  BuddyRent provides you with the opportunity to find a buddy
                  for any occasion. Whether you're looking for a movie
                  companion, an outdoor adventure buddy, or just someone to hang
                  out with, we've got you covered.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img
                  src={rainKiss}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Creative Design
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">
                    Our platform is designed to provide you with the best user
                    experience and help you find the perfect buddy for your
                    needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fab fa-angellist"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Best Results
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">
                    We strive to ensure that you have the best experience
                    possible on our platform and find the perfect buddy to hang
                    out with.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Best Platform
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">
                    BuddyRent is the best platform for finding a hangout buddy.
                    With our extensive database of buddies, you're sure to find
                    the perfect match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
