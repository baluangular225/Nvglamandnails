import { useEffect } from "react";
import CounterSection from "../src/components/CounterSection";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { activeSkillProgress } from "../src/utils";
const Nails = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout pageName={"Nails"}>
      <PageBanner pageName={"Nails"} textAlign={"center"} />

      <section className="team-section rel z-1 py-30 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-left rmb-55 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/teams/team-left4.jpg"
                  alt="Team Section"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-section-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">Skills</span>
                  <span className="sub-title">Our Best Skills</span>
                  <h2>Nails at NV Glam & Nails</h2>
                </div>
                <p>
                  Your nails deserve as much attention as the rest of you — and at NV Glam & Nails, we specialize in turning them into a true fashion statement. From classic elegance to bold, trendy designs, our nail experts help you achieve the perfect look that matches your personality and style.
                </p>
                <p>We use premium products, advanced techniques, and strict hygiene practices to ensure every nail service is safe, long-lasting, and flawless. Whether you want a quick polish refresh or a full set of extensions, we’ve got you covered.</p>
                {/* <div className="skillbar-wrap">
                  <div className="skillbar" data-percent={87}>
                    <h6 className="skillbar-title">Quality Services</h6>
                    <div className="skillbar_container">
                      <span className="skillbar-bar" />
                      <span className="skill-bar-percent" />
                    </div>
                  </div>
                  <div className="skillbar" data-percent={93}>
                    <h6 className="skillbar-title">Best Products</h6>
                    <div className="skillbar_container">
                      <span className="skillbar-bar" />
                      <span className="skill-bar-percent" />
                    </div>
                  </div>
                  <div className="skillbar" data-percent={92}>
                    <h6 className="skillbar-title">Experience Team</h6>
                    <div className="skillbar_container">
                      <span className="skillbar-bar" />
                      <span className="skill-bar-percent" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}
      <div className="container">
        <p><b>✨ Our Nail Services</b></p>
      <ul className="list-style-two">
        <li>
          <span style={{ color: '#d6b981' }}>Nail Extensions:</span> Acrylic, Gel, and Polygel extensions designed for a natural finish or dramatic glam. 
          Durable, stylish, and customized to your preferred length and shape.
        </li>
        <li>
          <span style={{ color: '#d6b981' }}>Gel Polish – Hands & Feet:</span> Chip-free, glossy shine that lasts for weeks. 
          Choose from a wide collection of classic and trendy shades.
        </li>
        <li>
          <span style={{ color: '#d6b981' }}>Nail Art & Custom Designs:</span> Minimal, chic, or bold statement nails crafted with creativity and precision. 
          Unique designs tailored for parties, weddings, or everyday glam.
        </li>
      </ul>

       </div>
      {/* Counter Section Start */}
      <CounterSection />
      {/* Counter Section End */}
      {/* Team Section Start */}
      <section className="team-section text-center pt-140 rpt-90 pb-90 rpb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">
              <div className="section-title mb-65">
                <span className="bg-text">Teams</span>
                <span className="sub-title">Expert Team Member</span>
                <h2>Meet Our Professional Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="team-member wow fadeInUp delay-0-2s">
                <img src="assets/images/teams/team-member-1.jpg" alt="Team" />
                <div className="member-description">
                  <h5>Cammie N. Dunn</h5>
                  <span className="designations">Senior Manager</span>
                  <div className="social-style-three">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member wow fadeInUp delay-0-4s">
                <img src="assets/images/teams/team-member-2.jpg" alt="Team" />
                <div className="member-description">
                  <h5>Richard C. Shillings</h5>
                  <span className="designations">Senior Manager</span>
                  <div className="social-style-three">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member wow fadeInUp delay-0-6s">
                <img src="assets/images/teams/team-member-3.jpg" alt="Team" />
                <div className="member-description">
                  <h5>Teresa E. George</h5>
                  <span className="designations">Senior Manager</span>
                  <div className="social-style-three">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>
      {/* Team Section End */}
    </Layout>
  );
};
export default Nails;
