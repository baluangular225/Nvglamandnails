// pages/gallery/hair.jsx

import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import BeautyGalleryPage from "../../src/components/isotop/BeautyGalleryPage";


const Hair = () => {
  return (
    <Layout pageName="Hair Gallery">
      <PageBanner pageName="Beauty Gallery" bgText="Gallery" textAlign="center" />
      <BeautyGalleryPage />
    </Layout>
  );
};

export default Hair;
