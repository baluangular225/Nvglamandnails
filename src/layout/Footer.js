const Footer = () => {
  return (
    <footer className="main-footer footer-three bg-black text-white pt-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title">Salon Services</h4>
              <ul>
                  <li>
                  <a href="/hair">Hair care</a>
                </li>
                <li>
                  <a href="/beauty">Beauty</a>
                </li>
                <li>
                  <a href="makeup">Makeup</a>
                </li>
                <li>
                  <a href="manicurespedicures">Manicures & Pedicures</a>
                </li>
                <li>
                  <a href="nails">Nails</a>
                </li>
              </ul>
            </div>
          </div>
            <div className="col-lg-3 col-sm-6">
            <div className="footer-widget newsletter-widget">
              <h4 className="footer-title">Gallery</h4>
              <ul>
                <li>
                  <a href="/gallery/hair">Hair</a>
                </li>
                <li>
                  <a href="/gallery/beauty">Beauty</a>
                </li>
                <li>
                  <a href="/gallery/nails">Nails</a>
                </li>
              </ul>
             
             
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="footer-widget contact-widget">
              <h4 className="footer-title">Contact</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <div className="info-content">
                    <h5>Location</h5>
                    <p>NV Glam & Nails The Unisex Salon – KPHB
1 ST FLOOR, HIG-3, near NEXUS MALL, K P H B Phase 9, Kukatpally, Hyderabad, Telangana 500085</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-phone-alt" />
                  <div className="info-content">
                    <h5>Hotline</h5>
                    <p>Call : +91 9640439996</p>
                  </div>
                </li>
                <li>
                  <i className="far fa-comment" />
                  <div className="info-content">
                    <h5>Email</h5>
                    <a href="mailto:support@gmail.com">info@nvglamandnails.com</a>
                  </div>
                </li>
              </ul>
               <div className="social-style-one pt-40">
                 <a href="https://www.facebook.com/profile.php?id=61580350741076" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/nv.glam.and.nails/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://wa.me/919640439996" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube" />
              </a>
              </div>
            </div>
          </div>
        
        </div>
        <div className="copyright-area pt-25 pb-15 text-center">
          <p>© 2025 Nvglamandnails, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

export const Footer1 = () => {
  return (
    <footer className="main-footer bg-light-gray footer-two pt-80">
      <div className="container">
        <div className="footer-subscribe mb-55 wow fadeInLeft delay-0-2s">
          <div className="subscribe-title">
            <i className="flaticon-newspaper" />
            <h3>Subscribe Our Newsletter</h3>
          </div>
          <form
            onClick={(e) => e.preventDefault()}
            action="#"
            method="post"
            className="wow fadeInRight delay-0-4s"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter Email"
              required=""
            />
            <button value="submit" className="theme-btn style-three">
              subscribe <i className="fas fa-long-arrow-alt-right" />
            </button>
          </form>
        </div>
        <div className="copyright-area pt-25 pb-45">
          <ul className="footer-menu py-5">
            <li>
                  <a href="/hair">Hair care</a>
                </li>
                <li>
                  <a href="/beauty">Beauty</a>
                </li>
                <li>
                  <a href="/makeup">Makeup</a>
                </li>
                <li>
                  <a href="/manicurespedicures">Manicures & Pedicures</a>
                </li>
                <li>
                  <a href="/nails">Nails</a>
                </li>
          </ul>
          <div className="copyright-social">
            <p>© 2025 Nvglamandnails, All Rights Reserved</p>
            <div className="social-style-two">
              <a href="https://www.facebook.com/profile.php?id=61580350741076" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/nv.glam.and.nails/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://wa.me/919640439996" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};