import { useEffect } from "react";
import CounterSection from "../src/components/CounterSection";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { activeSkillProgress } from "../src/utils";
import { Nav, Tab } from "react-bootstrap";

const Carrers = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout pageName={"Carrers"}>
      <PageBanner pageName={"Carrers"} textAlign={"center"} imageurl="/assets/images/banners/page-banner-three.jpg" />

       <div className="container mt-30">
        <p><b>Join Our Team – Nail Technician</b></p>
          <ul className="list-style-two">
            <li><span style={{ color: '#d6b981' }}>Location: </span>NV Glam & Nails – KPHB & Gowlidoddi, Hyderabad</li>
            <li><span style={{ color: '#d6b981' }}>Job Type: </span>Full-time</li>
          </ul>
          <p><b>About Us</b></p>
          <p>At NV Glam & Nails, we believe in creating stunning transformations and unforgettable experiences. As one of Hyderabad’s premium salons, we specialize in nails, hair, beauty, and makeup services, offering clients the perfect mix of luxury and care.</p>
          <p>We’re now looking for a skilled and passionate Nail Technician to join our growing team!</p>

            <div
            className="product-details-information pt-20 pb-20 wow fadeInUp delay-0-2s"
            id="product-details-information"
          >
            <Tab.Container defaultActiveKey={"details"}>
              <Nav
                as={"ui"}
                className="nav nav-tabs product-information-tab mb-30"
              >
                <li>
                  <Nav.Link eventKey="details" data-toggle="tab">
                    Responsibilities
                  </Nav.Link>
                </li>
                {/* <li>
                  <Nav.Link eventKey="information" data-toggle="tab">
                    Requirements
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link eventKey="review" data-toggle="tab">
                    What We Offer
                  </Nav.Link>
                </li> */}
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="details">
                 <ul className="list-style-two">
                    <li>Perform professional manicures, pedicures, nail extensions, and nail art.</li>
                    <li> Apply and maintain gel polish, acrylics, overlays, and nail enhancements.</li>
                    <li> Advise clients on nail care, trends, and after-care tips.</li>
                    <li>Maintain salon hygiene and safety standards.</li>
                    <li>Provide excellent customer service and create a welcoming experience.</li>
                </ul>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="information">
                  <ul className="list-style-two">
                    <li>Proven experience as a Nail Technician / Nail Artist.</li>
                    <li>Knowledge of gel, acrylic, polygel, and nail art techniques.</li>
                    <li>Creativity and passion for the latest nail trends.</li>
                    <li>Good communication skills and a client-focused attitude.</li>
                    <li>Certification in Nail Technology (preferred but not mandatory).</li>
                </ul>

                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="review">
                   
                   <ul className="list-style-two">
                        <li>Competitive salary + incentives.</li>
                        <li>Training and growth opportunities.</li>
                        <li>Friendly, professional work environment.</li>
                        <li>Chance to work with one of Hyderabad’s top beauty brands.</li>
                   </ul>

                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>

          <p>👉 If you’re ready to bring your talent and creativity to NV Glam & Nails, we’d love to hear from you!</p>
          <p>📩 Apply Now: Send your resume and portfolio to [info@nvglamandnails.com]</p>

          </div>
    </Layout>
  );
};
export default Carrers;
