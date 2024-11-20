"use client";
import React from "react";
import {
  AppstoreOutlined,
  DownOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Col, Dropdown, Menu, MenuProps, Row, Space } from "antd";

const HeaderBottom = () => {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const menuNavbar: MenuProps["items"] = [
    {
      label: <span className="font-bold">Value of the Day</span>,
      key: "1",
      icon: <AppstoreOutlined />,
    },
    { label: <span className="font-bold">Top 100 Offers</span>, key: "2" },
    { label: <span className="font-bold">New Arrivals</span>, key: "3" },
    {
      label: "TV & Audio",
      key: "4",
      children: [
        {
          label: (
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <div>
                  <h3 className="font-bold mb-2">TV & Audio</h3>
                  <ul>
                    <li>Action 1</li>
                    <li>Action 2</li>
                  </ul>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <h3 className="font-bold mb-2">1233</h3>
                  <ul>
                    <li>Action 3</li>
                    <li>Action 4</li>
                  </ul>
                </div>
              </Col>
            </Row>
          ),
          key: "1-1",
        },
      ],
    },
    { label: "Gadgets", key: "5" },
    { label: "Gaming", key: "6" },
    { label: "Laptops & Computers", key: "7" },
    { label: "Mac Computers", key: "8" },
    { label: "Ultrabooks", key: "9" },
  ];

  const navigateMenu: MenuProps["items"] = [
    {
      label: "Catalog",
      key: "catalog",
      children: [
        {
          type: "group",
          label: "Home 1",
        },
        {
          type: "group",
          label: "Home 1.1",
        },
        {
          type: "group",
          label: "Home 1.2",
        },
        {
          type: "group",
          label: "Home 2",
        },
      ],
    },
    {
      label: "Gift Cards",
      key: "giftCards",
      children: [
        {
          type: "group",
          label: "Item 1",
        },
      ],
    },
    {
      label: "Pages",
      key: "pages",
    },
    {
      label: "Features",
      key: "features",
    },
  ];

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 bg-white">
      <Dropdown overlay={<Menu items={menuNavbar} onClick={handleMenuClick} />}>
        <Button
          className="bg-yellow-400 text-black font-bold flex items-center"
          icon={<MenuOutlined />}
        >
          <Space>
            All Departments
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Menu mode="horizontal" items={navigateMenu} style={{ width: "500px" }} />
      <div className="text-sm font-medium text-gray-500">
        Free Shipping on Orders $500+
      </div>
    </nav>
  );
};

export default HeaderBottom;
