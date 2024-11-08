import { Card, Divider } from "antd";
import Image from "next/image";
import './style.css';

const ProductCategory = ({ title, products }) => {
  return (
    <div className="w-1/4">
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <Divider className="border-yellow-500 border-t-2 w-1/4 mx-auto" />
      <div className="flex flex-col gap-4 mt-4">
        {products.map((product, index) => (
          <Card key={index} bordered={false} className="flex items-center category-card">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="object-contain"
            />
            <div className="ml-4">
              <div className="text-blue-600 font-semibold">{product.name}</div>
              <div>
                <span className="text-red-500 font-bold">${product.price}</span>{" "}
                {product.originalPrice && (
                  <span className="line-through text-gray-400">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ProductLayout = () => {
  const featuredProducts = [
    {
      name: "Faxtex Product Sample",
      price: 110,
      originalPrice: 199,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
    {
      name: "Finity Product Sample",
      price: 95,
      originalPrice: 120,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
    {
      name: "Fixair Product Sample",
      price: 210,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
  ];

  const onsaleProducts = [
    {
      name: "Dentotam Product Sample",
      price: 20,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
    {
      name: "Donkix Product Sample",
      price: 60,
      originalPrice: 80,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
    {
      name: "Finity Product Sample",
      price: 95,
      originalPrice: 120,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
  ];

  const topRatedProducts = [
    {
      name: "Soltone Product Sample",
      price: 280,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
    {
      name: "Lexiited Product Sample",
      price: 200,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
    {
      name: "Lexiwarm Product Sample",
      price: 35,
      image:
        "https://electrox.arenacommerce.com/cdn/shop/products/iapdlap_15d8435c-e601-44c4-9b8b-81bc581f1406.png?v=1649399848&width=360",
    },
  ];

  return (
    <div
      className="flex justify-between gap-4 mx-auto my-6"
      style={{ width: "1440px" }}
    >
      {/* Các danh mục sản phẩm */}
      <ProductCategory title="Featured Products" products={featuredProducts}  />
      <ProductCategory title="Onsale Products" products={onsaleProducts} />
      <ProductCategory title="Top Rated Products" products={topRatedProducts} />

      {/* Quảng cáo */}
      <div className="w-1/4">
        <Image
          src="https://electrox.arenacommerce.com/cdn/shop/files/v2-right-1.jpg?v=1649837269&width=329"
          alt="Advertisement"
          width={360}
          height={360}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProductLayout;
