import dynamic from "next/dynamic";
const BrandCarousel = dynamic(() => import("@/app/components/brand-carousel"));
const ProductLayout = dynamic(() => import("@/app/components/poduct-layout"));
import { Image } from "antd";
import { brands, categories } from "./mockdata";

const Collection = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category: any, index: number) => (
            <div className="block justify-items-center" key={index}>
              <Image
                src={category.image}
                alt={category.name}
                height={200}
                width={200}
                preview={false}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/8 object-contain mb-2"
              />
              <div className="text-center text-blue-600 font-semibold mb-2">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductLayout />

      {/* Brand Carousel */}
      <BrandCarousel brands={brands} />
    </>
  );
};

export default Collection;
