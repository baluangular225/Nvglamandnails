import Link from "next/link";
import Slider from "react-slick";
import { FeedBackSliderWithLogo } from "../src/components/slider/FeedBackSlider";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { logoSliderProps } from "../src/sliderProps";
const About = () => {
  return (
    <Layout pageName={"About Us"}>
      <PageBanner pageName={"About Us"} />

      <section className="about-page-section rel z-2 pt-140 rpt-90">
        <div className="container">
          <div className="row mb-55">
            <div className="col-lg-5">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">about</span>
                  <span className="sub-title">Who We Are</span>
                  <h2>Quality &amp; Natural Beauty Salon</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-page-right-text wow fadeInRight delay-0-2s">
                <p>
                 At NV Glam & Nails, we believe beauty is not just about looking good — it’s about feeling confident, empowered, and unapologetically yourself.
                </p>
                <p>
                 We are a premium salon offering a complete range of Nails, Hair, Beauty, and Makeup services.
Our highly skilled team is passionate about creating personalized transformations. Whether it’s a refreshing mani-pedi, a skin-reviving facial, or a bridal makeover, every service is delivered with utmost care, precision, and attention to detail.
                </p>
                <p><b>✨ Why Choose Us?</b></p>
                <p>Professional, trained stylists & nail artists
Premium products for lasting results
Hygienic & relaxing salon environment
Customized packages for every occasion
Affordable luxury with exclusive offers
At NV Glam & Nails, we don’t just offer services — we offer an experience of self-care, relaxation, and glam that leaves you glowing inside out.
💖 Step in for a service, step out with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logos text-center pt-80 pb-70">
        <div className="container">
          <Slider {...logoSliderProps} className="client-logo-wrap">
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </a>
          </Slider>
        </div>
      </div>
      {/* Client Logo Section End */}
      {/* Feedback Section Start */}
      <div className="feedback-section mb-150 rmb-100">
        <div className="container">
          <div className="about-page-feedback rel z-1 bg-butter">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="feedback-left-image bgs-cover h-100 wow fadeInLeft delay-0-2s"
                  style={{
                    backgroundImage:
                      "url(assets/images/testimonials/about-page-feedback.jpg)",
                  }}
                />
              </div>
              <div className="col-xl-6">
                <div className="feedback-wrap rel my-145 rm-100 text-center wow fadeInRight delay-0-2s">
                  <span className="bg-text">Feedback</span>
                  <FeedBackSliderWithLogo />
                </div>
              </div>
            </div>
            <div className="feedback-leaf">
              <img
                src="assets/images/shapes/about-page-leaf.png"
                alt="Feedback Leaf"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Section End */}
    </Layout>
  );
};
export default About;
