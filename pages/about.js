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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperia eaque ipsa
                  quae abillo inventore veritatis quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim quia voluptas sit aspernatur
                  aut odit aut fugit sed consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt porro quisquam
                </p>
                <p>
                  Nemo enim quia voluptas sit aspernatur aut odit aut fugit sed
                  consequuntur magni dolores ratione voluptatem sequi nesciunt
                  quisquam
                </p>
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
