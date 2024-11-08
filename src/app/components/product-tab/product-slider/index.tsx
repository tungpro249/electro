import React from "react";
import { Carousel, Image, Tabs } from "antd";
import products from "./mockData";
import "./style.css";

const { TabPane } = Tabs;

// Function to split products into chunks for two rows with three items each
const chunkProducts = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

const ProductTabs = () => {
  // Split products into chunks of 6 (2 rows * 3 items)
  const productChunks = chunkProducts(products, 6);

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Bestsellers</h2>
        <Tabs defaultActiveKey="top20" centered>
          <TabPane tab="Top 20" key="top20"></TabPane>
          <TabPane tab="Phones & Tablets" key="phonesTablets"></TabPane>
          <TabPane tab="Laptops & Computers" key="laptopsComputers"></TabPane>
          <TabPane tab="Video Cameras" key="videoCameras"></TabPane>
        </Tabs>
      </div>
      <Carousel
        dots={true}
        arrows
        slidesToShow={1}
        slidesToScroll={1}
        className="relative"
      >
        {productChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {chunk.map((product, index) => (
                <div key={index} className="flex">
                  <Image
                    src={product.image}
                    alt={product.name}
                    preview={false}
                    className="w-full h-48 object-contain mb-2"
                  />
                  <div>
                    <div className="text-center text-blue-600 font-semibold mb-2">
                      {product.name}
                    </div>
                    <div className="text-center">
                      <span className="text-red-500 text-lg font-bold">
                        ${product.price}
                      </span>{" "}
                      {product.originalPrice && (
                        <span className="line-through text-gray-400">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductTabs;
