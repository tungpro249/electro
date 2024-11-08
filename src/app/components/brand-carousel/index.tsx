// components/BrandCarousel.jsx
import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";

const BrandCarousel = ({ brands = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <hr />
      <Carousel {...settings}>
        {brands.map((brand, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <Image
              src={brand.image}
              alt={brand.name}
              preview={false}
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>
        ))}
      </Carousel>
      <hr />
    </div>
  );
};

export default BrandCarousel;
