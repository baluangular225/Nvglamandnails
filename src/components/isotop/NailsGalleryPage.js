import dynamic from "next/dynamic";

const PortfolioIsotop = dynamic(
  () => import("../isotop/PortfolioIsotop"),
  { ssr: false }
);

const nailsgallery = [
  {
    image: "/assets/images/projects/nails1.jpg",
    title: "Hair Cream",
    category: "Hair Care",
    link: "/portfolio-details/hair1",
  },
  {
    image: "/assets/images/projects/nails2.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/nails3.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/nails4.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/nails5.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/nails6.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },{
    image: "/assets/images/projects/nails7.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  {
    image: "/assets/images/projects/nails8.jpg",
    title: "Hair Style",
    category: "Hair Salon",
    link: "/portfolio-details/hair2",
  },
  
];

const NailsGalleryPage = () => {
  return (
    <PortfolioIsotop galleryName="Nails Gallery" galleryItems={nailsgallery} />
  );
};

export default NailsGalleryPage;
