// src/components/gallery/BeautyGalleryPage.jsx

import PortfolioIsotop from "../isotop/PortfolioIsotop";

const beautyGalleryItems = [
  {
    image: "/assets/images/projects/beauty1.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
  {
    image: "/assets/images/projects/beauty2.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
  {
    image: "/assets/images/projects/beauty3.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
  {
    image: "/assets/images/projects/beauty4.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
  {
    image: "/assets/images/projects/beauty5.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
  {
    image: "/assets/images/projects/beauty6.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
  {
    image: "/assets/images/projects/beauty7.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
  {
    image: "/assets/images/projects/beauty8.jpg",
    title: "Beauty Pack",
    category: "Beauty",
    link: "/portfolio-details/beauty1",
  },
];

const BeautyGalleryPage = () => {
  return <PortfolioIsotop galleryName="Beauty Gallery" galleryItems={beautyGalleryItems} />;
};

export default BeautyGalleryPage;
