// src/components/isotop/PortfolioIsotop.jsx

import Link from "next/link";

const PortfolioIsotop = ({ galleryName, galleryItems = [], beautyGalleryItems = [], nailsgallery=[] }) => {
  return (
    <section className="portfolio-section pt-140 rpt-90 pb-120 rpb-80">
      <div className="container-fluid">
        <div className="section-title text-center mb-45">
          <span className="bg-text">Gallery</span>
          <span className="sub-title">Photo Gallery</span>
          <h2>{galleryName}</h2>
        </div>

        {/* First Gallery */}
        <div className="row">
          {galleryItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <div className={`portfolio-item wow fadeInUp delay-0-${(index % 4 + 2)}s`}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-content">
                  <h6>
                    <Link href={item.link}>{item.title}</Link>
                  </h6>
                  <b>{item.category}</b>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Gallery */}
        <div className="section-title text-center my-5">
        </div>
        <div className="row">
          {beautyGalleryItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <div className={`portfolio-item wow fadeInUp delay-0-${(index % 4 + 2)}s`}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-content">
                  <h6>
                    <Link href={item.link}>{item.title}</Link>
                  </h6>
                  <b>{item.category}</b>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nails Gallery */}
        <div className="section-title text-center my-5">
        </div>
        <div className="row">
          {nailsgallery.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <div className={`portfolio-item wow fadeInUp delay-0-${(index % 4 + 2)}s`}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-content">
                  <h6>
                    <Link href={item.link}>{item.title}</Link>
                  </h6>
                  <b>{item.category}</b>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioIsotop;
