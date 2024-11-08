"use client";
import React, { useState } from "react";
import { Collapse, Typography } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { Text } = Typography;

const Categories = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key: any) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const categories = [
    { title: "Value of the Day" },
    { title: "Top 100 Offers" },
    { title: "New Arrivals" },
    {
      title: "TV & Audio",
      subCategories: ["Gadgets", "Phones & PDAs", "Watches"],
    },
    { title: "Gadgets" },
    { title: "All in One" },
    { title: "Accessories" },
    { title: "Gaming" },
    { title: "Laptops & Computer" },
    { title: "Mac Computers" },
    { title: "Ultrabooks" },
  ];

  return (
    <div className="w-full p-4 border rounded-md bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <Collapse
        accordion
        bordered={false}
        activeKey={activeKey}
        onChange={handleToggle}
        expandIcon={({ isActive }) =>
          isActive ? <DownOutlined /> : <RightOutlined />
        }
        className="space-y-1"
      >
        {categories.map((category, index) =>
          category.subCategories ? (
            <Panel
              header={<Text strong>{category.title}</Text>}
              key={index}
              className="bg-white hover:bg-gray-50 rounded-md"
            >
              <div className="space-y-2 pl-4">
                {category.subCategories.map((subCategory, subIndex) => (
                  <Text key={subIndex} className="block text-gray-600">
                    {subCategory}
                  </Text>
                ))}
              </div>
            </Panel>
          ) : (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-md"
            >
              <Text>{category.title}</Text>
              <RightOutlined className="text-xs" />
            </div>
          )
        )}
      </Collapse>
    </div>
  );
};

export default Categories;
