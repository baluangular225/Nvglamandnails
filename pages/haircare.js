import { useEffect } from "react";
import CounterSection from "../src/components/CounterSection";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { activeSkillProgress } from "../src/utils";
const Haircare = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout pageName={"Haircare "}>
      <PageBanner pageName={"Haircare"} textAlign={"center"} />

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
                  <h2>Hair Services at NV Glam & Nails</h2>
                </div>
                <p>
                  At NV Glam & Nails, we offer expert hair services for both men and women, blending style, care, and the latest techniques to give you the perfect look. Whether you want a simple haircut, a refreshing treatment, or a complete hair transformation, our stylists are here to deliver results tailored to you.
                </p>
                <div className="skillbar-wrap">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}
       <div className="container">
        <p><b>✨ Women’s Hair Services</b></p>
        <ul className="list-style-two">
        <li><span style={{color:'#d6b981'}}>Haircuts & Styling</span> – Precision cuts, blow-dry, and styling to match your personality and lifestyle.</li>
        <li><span style={{color:'#d6b981'}}>Hair Coloring & Highlights</span> – Global color, streaks, balayage, or ombré with premium products for rich, vibrant shades.</li>
        <li><span style={{color:'#d6b981'}}>Hair Treatments Hair Botox </span> – Restores shine, smoothness, and strength. Keratin & Smoothening – Frizz-free, silky, and manageable hair. Nanoplastia – Advanced, chemical-safe straightening for long-lasting smooth results.</li>
        <li><span style={{color:'#d6b981'}}>Hair Spa</span> – Relaxing deep-conditioning treatments for hydration, repair, and rejuvenation.</li>
        <li><span style={{color:'#d6b981'}}>Bridal & Occasion Styling</span> – Elegant updos, curls, waves, and glam styles for special days.</li>
        </ul>
        <p><b>✨ Men’s Hair Services</b></p>
        <ul className="list-style-two">
        <li><span style={{color:'#d6b981'}}>Haircuts & Grooming</span> – Trendy, classic, and customized cuts that suit your style.</li>
        <li><span style={{color:'#d6b981'}}>Beard Styling & Trimming</span> – Sharp, clean looks with professional detailing.</li>
        <li><span style={{color:'#d6b981'}}>Hair Coloring</span> – Grey coverage, highlights, and global coloring options.</li>
        <li><span style={{color:'#d6b981'}}>D-Tan & Scalp Treatments</span> – Refreshing treatments for a clean, healthy look.</li>
        <li><span style={{color:'#d6b981'}}>Head Massage & Hair Spa</span> – Stress relief and nourishment for stronger, shinier hair.</li>
        
        </ul>
        <p>💇 At NV Glam & Nails, every service is performed by skilled stylists using high-quality products, ensuring your hair looks its best — every day.</p>
        <p>✨ Step in for a cut, treatment, or transformation — walk out with confidence!</p>
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
export default Haircare;
