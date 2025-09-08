// pages/gallery/hair.jsx

import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import HairGalleryPage from "../../src/components/isotop/HairGalleryPage";


const Hair = () => {
  return (
    <Layout pageName="Hair Gallery">
       <PageBanner pageName={"Hair Gallery"} textAlign={"center"} imageurl="/assets/images/banners/page-banner-four.jpg" />
      <HairGalleryPage />
    </Layout>
  );
};

export default Hair;
