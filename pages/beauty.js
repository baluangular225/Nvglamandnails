import { useEffect } from "react";
import CounterSection from "../src/components/CounterSection";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { activeSkillProgress } from "../src/utils";
const Skincare = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout pageName={"Beauty"}>
      <PageBanner pageName={"Beauty "} textAlign={"center"} />

      <section className="team-section rel z-1 py-30 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-left rmb-55 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/teams/team-left.jpg"
                  alt="Team Section"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-section-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">Skills</span>
                  <span className="sub-title">Our Best Skills</span>
                  <h2>Beauty Services at NV Glam & Nails</h2>
                </div>
                <p>
                  At NV Glam & Nails, beauty isn’t just a service — it’s an experience of self-care, relaxation, and transformation. Our expert aestheticians use premium products and advanced techniques to give your skin the glow, balance, and care it truly deserves.
                </p>
                <p>Whether you’re looking for a quick refresh, a skin revival, or a luxurious spa session, we offer customized treatments for every skin type and occasion.</p>
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
        <p><b>✨ Our Beauty Services</b></p>
          <ul className="list-style-two">
            <li>
              <span style={{ color: '#d6b981' }}>Express Clean</span> Up: Quick refresh for dull and tired skin.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>Glow Facials</span> Restores brightness and natural radiance.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>Brightening & Whitening Facials</span> Evens out skin tone and reduces dullness.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>Anti-Ageing Facials</span> Reduces fine lines, boosts elasticity, and revitalizes mature skin.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>Luxury Facials</span> Premium care for deep hydration, relaxation, and long-lasting glow.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>HydraFacial Treatments</span> Multi-step advanced skincare that deeply cleanses, hydrates, and nourishes. Perfect for instant glow, smoother texture, and younger-looking skin.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>D-Tan Treatments</span> Removes tan, evens skin tone, and restores a fresh, natural look.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>Skin Polishing & Exfoliation</span> Gentle resurfacing treatments for smooth, glowing, and healthy skin.
            </li>
            <li>
              <span style={{ color: '#d6b981' }}>Spa Rituals</span> Relaxing treatments that combine massage, hydration, and aromatherapy for complete rejuvenation.
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
export default Skincare;
