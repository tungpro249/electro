"use client";

import Categories from "@/app/components/categories-menu";
import products from "@/app/components/product-tab/product-slider/mockData";
import FilterForm from "@/app/ui/filter-form";
import ProductGrid from "@/app/ui/product-grid";
import Image from "next/image";

const SoftwareCollection = () => {
  const brands = [
    { label: "Armani", count: 1 },
    { label: "Christian Dior", count: 2 },
    { label: "Dolce & Gabbana", count: 2 },
    { label: "Donna Karan", count: 1 },
    { label: "Givenchy", count: 2 },
  ];
  const color = [
    { label: "Black", count: 1 },
    { label: "Blue", count: 1 },
    { label: "Green", count: 1 },
  ];

  const size = [
    { label: "M", count: 1 },
    { label: "XL", count: 1 },
    { label: "XXL", count: 1 },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <Categories />
          <div className="p-4 border border-gray-300 rounded-md mt-4">
            <h3 className="text-lg font-semibold mb-4">Filter</h3>
            <FilterForm data={brands} title="Brands" />
            <FilterForm data={color} title="Color" />
            <FilterForm data={size} title="Size" />
          </div>
          <div>

          <Image
            src="https://electrox.arenacommerce.com/cdn/shop/files/banner-sidebar-h13.jpg?v=1655367216&width=270"
            alt="brand-logo"
            width={350}
            height={300}
            className="mt-6"
            />
        </div>
            </div>
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default SoftwareCollection;
