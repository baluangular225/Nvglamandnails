import dynamic from "next/dynamic";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";

const PortfolioIsotop = dynamic(
  () => import("../../src/components/isotop/PortfolioIsotop"),
  {
    ssr: false,
  }
);

const hair = () => {
  return (
    <Layout pageName={"Hair Gallery"}>
      <PageBanner
        pageName={"Hair Gallery"}
        bgText="Gallery"
        textAlign={"center"}
      />
      <PortfolioIsotop galleryName={"hair"}/>
    </Layout>
  )
}

export default hair;


