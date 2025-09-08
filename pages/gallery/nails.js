// pages/gallery/hair.jsx

import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import NailsGalleryPage from "../../src/components/isotop/NailsGalleryPage";


const Hair = () => {
  return (
    <Layout pageName="Hair Gallery">
      <PageBanner pageName={"Nails Gallery"} textAlign={"center"} imageurl="/assets/images/banners/page-banner-four.jpg" />
      <NailsGalleryPage />
    </Layout>
  );
};

export default Hair;
