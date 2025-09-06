import Link from "next/link";

const PortfolioIsotop = () => {
  return (
    <section className="portfolio-section pt-140 rpt-90 pb-120 rpb-80">
      <div className="container-fluid">
        <div className="section-title text-center mb-45">
          <span className="bg-text">Gallery</span>
          <span className="sub-title">Photo Gallery</span>
          <h2>Hair</h2>
        </div>
        {/* Removed filter buttons and isotope logic */}
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/portfolio1.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/projects/portfolio2.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/portfolio3.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/portfolio4.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/portfolio5.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/projects/portfolio6.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/portfolio7.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/portfolio8.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/portfolio9.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/projects/portfolio10.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/portfolio11.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="portfolio-item wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/portfolio12.jpg"
                alt="Portfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioIsotop;
