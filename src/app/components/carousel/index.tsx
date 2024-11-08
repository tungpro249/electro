import React from "react";
import { Image, Carousel } from "antd";
import './style.css';

const CarouselComponent: React.FC = ({ dataList = [] }) => {
  return (
    <Carousel
      dots={false}
      arrows={true}
      draggable={true}
      focusOnSelect={true}
    >
      {dataList.map((data, index) => (
        <div key={index} style={{ padding: "10px" }}>
          <Image
            src={data.image}
            alt={data.name}
            preview={false}
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
