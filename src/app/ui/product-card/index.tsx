"use client"; // Nếu dùng App Router trong Next.js

import { HeartOutlined, ArrowsAltOutlined } from "@ant-design/icons";
import { Badge, Image } from "antd";
import { useState } from "react";

const ProductCard = ({
  product,
  horizon = false,
}: {
  product: any;
  horizon?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const image = (
    <Image
      src={product.image}
      alt={product.name}
      preview={false}
      className="w-full h-48 object-contain mb-2"
    />
  );

  return (
    <button
      type="button"
      className={`relative p-4 transition-all duration-300 border rounded-lg  ${
        isHovered ? "border-red-500" : "border-gray-300"
      }`}
      onMouseEnter={() => {
        console.log("Mouse Enter");
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log("Mouse Leave");
        setIsHovered(false);
      }}
    >
      {product.discount && (
        <Badge
          count={`-${product.discount}%`}
          style={{ backgroundColor: "#facc15" }}
          className="absolute top-4 left-4 text-lg"
        />
      )}
      {!horizon ? (
        <>
          {image}
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
        </>
      ) : (
        <div className="flex">
          {image && <div className="w-1/2">{image}</div>}
          <div className="inline-grid">
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
      )}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-white/70 rounded-lg">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowsAltOutlined />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <HeartOutlined />
          </button>
        </div>
      )}
    </button>
  );
};

export default ProductCard;
