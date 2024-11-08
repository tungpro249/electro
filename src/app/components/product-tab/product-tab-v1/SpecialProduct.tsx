"use client"; // Nếu dùng App Router trong Next.js

import { Progress, Badge } from "antd";
import Image from "next/image";

const SpecialOfferCard = () => {
  return (
    <div className="relative border-2 border-yellow-400 rounded-lg p-6 max-w-sm mx-auto">
      <div className="text-left mb-2 text-lg font-semibold">Special Offer</div>
      <Badge
        count="Save 36%"
        style={{ backgroundColor: "#facc15" }}
        className="absolute top-5 right-5 text-lg font-semibold"
      />
      <Image
        src="https://electrox.arenacommerce.com/cdn/shop/products/game-1.png?v=1649392653&width=540"
        alt="Product"
        width={540}
        height={540}
        loading="lazy"
        className="w-full h-auto mb-4"
      />

      <div className="text-center text-blue-600 font-semibold text-lg mb-2">
        Black Fashion Zapda
      </div>

      <div className="text-center">
        <span className="text-red-500 text-2xl font-bold">$350.00</span>{" "}
        <span className="line-through text-gray-400">$550.00</span>
      </div>

      {/* Sold & Available Info */}
      <div className="flex justify-between text-sm mt-4">
        <div>
          Already Sold: <strong>6</strong>
        </div>
        <div>
          Available: <strong>60</strong>
        </div>
      </div>

      {/* Progress Bar */}
      <Progress
        percent={10}
        showInfo={false}
        strokeColor="#facc15"
        className="mt-2"
      />

      {/* Countdown Timer */}
      <div className="text-center mt-4 font-semibold text-gray-700">
        Hurry Up! Offer ends in
      </div>
      <div className="flex justify-center gap-2 mt-2 text-xl">
        <div className="flex flex-col items-center">
          <span className="font-bold">1594</span>
          <span className="text-sm">HOURS</span>
        </div>
        <span className="text-lg">:</span>
        <div className="flex flex-col items-center">
          <span className="font-bold">52</span>
          <span className="text-sm">MINUTES</span>
        </div>
        <span className="text-lg">:</span>
        <div className="flex flex-col items-center">
          <span className="font-bold">56</span>
          <span className="text-sm">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
