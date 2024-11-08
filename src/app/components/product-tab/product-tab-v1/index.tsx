import ProductGrid from "@/app/ui/product-grid";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import products from "./mockData";

const ProductTabV1 = () => {
  return (
    <Tabs defaultActiveKey="1" centered className="mt-6">
      <TabPane tab="Featured" key="1">
        <ProductGrid products={products} />
      </TabPane>
      <TabPane tab="On Sale" key="2">
        <ProductGrid products={products} />
      </TabPane>
      <TabPane tab="Top Rated" key="3">
        <ProductGrid products={products} />
      </TabPane>
    </Tabs>
  );
};

export default ProductTabV1;
