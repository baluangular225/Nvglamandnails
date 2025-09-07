import dynamic from "next/dynamic";

const PortfolioIsotop = dynamic(
  () => import("../isotop/PortfolioIsotop"),
  { ssr: false }
);

const hairGallery = [
  {
    image: "/assets/images/projects/hair1.jpg",
    title: "Hair Cream",
    category: "Hair Care",
    link: "/portfolio-details/hair1",
  },
  {
    image: "/assets/images/projects/hair2.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/hair3.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/hair4.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/hair5.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/hair6.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },{
    image: "/assets/images/projects/hair7.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/hair8.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  
];

const HairGalleryPage = () => {
  return (
    <PortfolioIsotop galleryName="Hair Gallery" galleryItems={hairGallery} />
  );
};

export default HairGalleryPage;
