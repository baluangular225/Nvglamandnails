import Link from 'next/link';

const PageBanner = ({ pageName, bgText, pageTitle, textAlign, imageurl }) => {
  return (
    <section
      className="page-banner text-white py-165 rpy-130"
      style={{
        backgroundImage: `url(${imageurl || '/assets/images/banners/page-banner.jpg'})`,
      }}
    >
      <div className="container">
        <div className={`banner-inner text-${textAlign || "left"}`}>
          <span className="bg-text">{bgText || pageName}</span>
          <h1 className="page-title wow fadeInUp delay-0-2s">
            {pageTitle || pageName}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
