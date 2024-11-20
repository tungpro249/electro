"use client";
import { Button, Col, Image, Input, Row, Table } from "antd";
import React, { useState } from "react";
import ButtonBase from "../ui/customize/button";
import CustomSelectForm from "../ui/customize/autocomplete";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  const columns = [
    { title: "Product", dataIndex: "product", key: "product" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Total", dataIndex: "total", key: "total" },
  ];

  const dataSource = [
    {
      key: "1",
      product: (
        <div className="flex items-center">
          <Image
            src="https://electrox.arenacommerce.com/cdn/shop/products/watchsmart_10c538ca-171d-4710-a740-57069d7f3359.png?v=1649400523&width=100"
            alt="Product 1"
            preview={false}
            width={50}
            height={50}
          />
        </div>
      ),
      price: "$19.99",
      quantity: (
        <div className="flex items-center">
          <Button onClick={() => setQuantity((prev) => prev - 1)}>-</Button>
          <span className="mx-2">{quantity}</span>
          <Button onClick={() => setQuantity((prev) => prev + 1)}>+</Button>
        </div>
      ),
      total: "$19.99",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-xl font-semibold">Shopping Cart</h2>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <div className="flex justify-end mt-4 gap-4">
        <ButtonBase onClick={() => {}} className="bg-gray-300">
          Continue shopping
        </ButtonBase>
        <ButtonBase onClick={() => {}} className="bg-yellow-500 text-white">
          Clear cart
        </ButtonBase>
      </div>
      <Row gutter={[16, 16]} className="mt-6">
        <Col span={12}>
          <h3 className="font-semibold">Estimated Shipping</h3>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <CustomSelectForm
                onChange={() => {}}
                title=""
                options={[
                  { value: '"United States"', label: "United States" },
                  { value: "Canada", label: "Canada" },
                ]}
              />
            </Col>
            <Col span={12}>
              <CustomSelectForm
                onChange={() => {}}
                title=""
                options={[
                  { value: '"United States"', label: "United States" },
                  { value: "Canada", label: "Canada" },
                ]}
              />
            </Col>
            <Col span={12}>
              <Input placeholder="Zip Code" className="w-36" />
            </Col>
            <Col span={12}>
              <ButtonBase onClick={() => {}} className="bg-gray-300">
                Get a quote
              </ButtonBase>
            </Col>
          </Row>
          <div className="mt-4">
            <h3 className="font-semibold">Add a note to your order</h3>
            <Input.TextArea rows={4} placeholder="Add a note..." />
          </div>
        </Col>
        <Col span={12}>
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-semibold">Cart Total</h3>
            <span className="text-xl font-semibold">${200 * quantity}.00</span>
          </div>
          <ButtonBase
            onClick={() => {}}
            className="w-full mt-4 bg-yellow-500 text-white px-6"
          >
            Proceed to Checkout
          </ButtonBase>
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingCart;
