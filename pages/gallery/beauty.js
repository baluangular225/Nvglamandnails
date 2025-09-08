// pages/gallery/hair.jsx

import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import BeautyGalleryPage from "../../src/components/isotop/BeautyGalleryPage";


const Hair = () => {
  return (
    <Layout pageName="Hair Gallery">
      <PageBanner pageName={"Beauty Gallery"} textAlign={"center"} imageurl="/assets/images/banners/page-banner-four.jpg" />
      <BeautyGalleryPage />
    </Layout>
  );
};

export default Hair;
