"use client";
import dynamic from "next/dynamic";
const BrandCarousel = dynamic(() => import("@/app/components/brand-carousel"));
const CarouselComponent = dynamic(() => import("@/app/components/carousel"));
const Footer = dynamic(() => import("@/app/components/layout/footer"));
const Gallery = dynamic(() => import("@/app/components/layout/gallery"));
const Header = dynamic(() => import("@/app/components/layout/header"));
const ProductTabV1 = dynamic(
  () => import("@/app/components/product-tab/product-tab-v1")
);
const SpecialOfferCard = dynamic(
  () => import("@/app/components/product-tab/product-tab-v1/SpecialProduct")
);
const ProductSection = dynamic(
  () => import("@/app/components/product-tab/product-tab-v2")
);

import ProductTabs from "@/app/components/product-tab/product-slider";
import NewArrivals from "@/app/components/new-arrivals";
import ProductLayout from "@/app/components/poduct-layout";
import Image from "next/image";

export default function Home() {
  const brands = [
    {
      name: "Nike",
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/themeforest1.png?v=1649837305&width=200",
    },
    {
      name: "Adidas",
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/themeforest2.png?v=1649837316&width=200",
    },
    {
      name: "Puma",
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/themeforest3.png?v=1649837326&width=200",
    },
    {
      name: "New Balance",
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/themeforest4.png?v=1649837336&width=200",
    },
    {
      name: "Reebok",
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/themeforest5.png?v=1649837344&width=200",
    },
    {
      name: "Under Armour",
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/themeforest6.png?v=1649837364&width=200",
    },
  ];

  const sliderData = [
    {
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/slide-bg.jpg?v=1649834146&width=1920",
    },
    {
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/image-slide-3.png?v=1649834858&width=520",
    },
    {
      image:
        "https://electrox.arenacommerce.com/cdn/shop/files/image-slide-1.png?v=1649835414&width=520",
    },
  ];

  return (
    <>
      <CarouselComponent dataList={sliderData} />
      <Gallery />

      {/* product v1 */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 mt-6">
        <div className="lg:w-1/3 w-full">
          <SpecialOfferCard />
        </div>
        <div className="lg:w-2/3 w-full">
          <ProductTabV1 />
        </div>
      </div>
      {/* product v2 */}
      <div className="container mx-auto my-6">
        <ProductSection />
      </div>

      <div className="container mx-auto my-6">
        <ProductTabs />
      </div>

      <div className="container mx-auto my-6">
        <Image
          src="https://electrox.arenacommerce.com/cdn/shop/files/single-banner-h1_1440x.png?v=1649836868"
          alt="Another Image"
          width={1440}
          height={300}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto my-6">
        <NewArrivals />
      </div>

      <ProductLayout />

      {/* Brand Carousel */}
      <BrandCarousel brands={brands} />
    </>
  );
}
