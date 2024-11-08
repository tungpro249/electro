import ProductCard from "../product-card";

const ProductGrid = ({ products, horizon }: { products: any[], horizon?: boolean }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: any, index: number) => (
        <ProductCard key={index} product={product} horizon={horizon} />
      ))}
    </div>
  );
};
export default ProductGrid;
