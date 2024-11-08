import { Carousel } from "antd";
import ProductCard from "@/app/ui/product-card";
import products from "./mockData";

const NewArrivals = () => (
  <div className="my-10">
    <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
      New Arrivals
    </h2>
    <Carousel
      dots={true}
      arrows
      slidesToShow={4}
      slidesToScroll={4}
      className="relative"
    >
      {products.map((product, index) => (
        <div key={index} className="p-2">
          <ProductCard product={product} key={index} />
        </div>
      ))}
    </Carousel>
  </div>
);

export default NewArrivals;
