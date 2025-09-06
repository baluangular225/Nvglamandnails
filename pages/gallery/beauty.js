import dynamic from "next/dynamic";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";

const PortfolioIsotop = dynamic(
  () => import("../../src/components/isotop/PortfolioIsotop"),
  {
    ssr: false,
  }
);



const beauty = () => {
  return (
    <Layout pageName={"Beauty Gallery"}>
      <PageBanner
        pageName={"Beauty Gallery"}
        bgText="Gallery"
        textAlign={"center"}
      />
      <PortfolioIsotop galleryName={"beauty"}/>
    </Layout>
  )
}

export default beauty;


