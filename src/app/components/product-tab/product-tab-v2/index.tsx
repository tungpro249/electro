// components/ProductSection.js
import ProductCard from "@/app/ui/product-card";
import ProductGrid from "@/app/ui/product-grid";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import products from "./mockData";

const ProductSection = () => {
  return (
    <div className="container mx-auto p-6">
      <Tabs
        defaultActiveKey="1"
        size="small"
        tabBarGutter={8}
        type="card"
        className="p-[24px]"
      >
        <TabPane tab="Best deals" key="1">
          <div className="flex space-x-4">
            <div className="grid grid-cols-2 gap-4 ">
              {products.map((product: any, index: number) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <div className="grid grid-cols-1 ">
              <ProductCard product={products[0]} />
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              {products.map((product: any, index: number) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </TabPane>
        <TabPane tab="TV & Video" key="2">
          <ProductGrid products={products} />
        </TabPane>
        <TabPane tab="Cameras" key="3">
          <ProductGrid products={products} />
        </TabPane>
        <TabPane tab="Audio" key="4">
          <ProductGrid products={products} />
        </TabPane>
        <TabPane tab="Cell Phones" key="5">
          <ProductGrid products={products} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProductSection;
