import dynamic from "next/dynamic";
import Layout from "/src/layout/Layout";
import PageBanner from "/src/layout/PageBanner";

const PortfolioIsotop = dynamic(
  () => import("/src/components/isotop/PortfolioIsotop"),
  {
    ssr: false,
  }
);



const nails = () => {
  return (
    <Layout pageName={"Nail Gallery"}>
      <PageBanner
        pageName={"Nail Gallery"}
        bgText="Gallery"
        textAlign={"center"}
      />
      <PortfolioIsotop galleryName={"nails"}/>
    </Layout>
  )
}

export default nails;


