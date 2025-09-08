import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Contact = () => {
  return (
    <Layout pageName={"Contact Us"}>
        <PageBanner pageName={"Contact Us"} textAlign={"center"} imageurl="/assets/images/banners/page-banner-five.jpg" />
      <section className="contact-info-section pt-150 rpt-100 pb-120 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6">
              <div className="contact-info-item wow fadeInUp delay-0-2s">
                <i className="fas fa-map-marker-alt" />
                <h4>Location</h4>
                <p>NV Glam & Nails The Unisex Salon – KPHB
1 ST FLOOR, HIG-3, near NEXUS MALL, K P H B Phase 9, Kukatpally, Hyderabad, Telangana 500085</p>
                <p>NV Glam & Nails The Unisex Salon –Gowlidoddy
H 105,Wipro Circle Rd, 3 rd, opp. jayabheri nirvana, floor, Gowlidoddy, Serilingampalle (M), Hyderabad, Telangana 500032</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="contact-info-item wow fadeInUp delay-0-4s">
                <i className="fa fa-envelope-open-text" />
                <h4>Email Us</h4>
                <p>
                  info@nvglamandnails.com 
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="contact-info-item wow fadeInUp delay-0-6s">
                <i className="fa fa-phone-alt" />
                <h4>Hotline</h4>
                <p>
                  Call : <a href="callto:+012(345)7899">+91 9640439996</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information End */}
      {/* Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121782.4879380892!2d78.22963245380443!3d17.47393577852337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91834241fe87%3A0x8304d30611c172c0!2sNV%20Glam%20%26%20Nails%20The%20Unisex%20Salon%20%E2%80%93%20KPHB!5e0!3m2!1sen!2sin!4v1757231819285!5m2!1sen!2sin"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      {/* Map Area End */}
      {/* Contact Form Start */}
      {/* <div className="contact-form-area py-150 rpy-100">
        <div className="container">
          <div className="contact-form-wrap wow fadeInUp delay-0-2s">
            <div className="section-title mb-45 text-center">
              <h2>Send Us Message</h2>
            </div>
            <form
              onClick={(e) => e.preventDefault()}
              action="#"
              className="contact-form"
            >
              <div className="row clearfix justify-content-center">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="far fa-user" />
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Us"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="website"
                      name="website"
                      className="form-control"
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      rows={5}
                      className="form-control"
                      placeholder="Write Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-8">
                  <div className="form-group mb-0">
                    <button type="submit" className="theme-btn w-100 style-six">
                      send message <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};
export default Contact;
