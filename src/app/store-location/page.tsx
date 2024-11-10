"use client";
import React, { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Col, List, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import CustomSelectForm from "../ui/customize/autocomplete";

const StoreLocation = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 21.028511,
    lng: 105.804817,
  });

  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);

  // Sample data
  const countries = [
    { value: "Canada", label: "Canada" },
    { value: "United States", label: "United States" },
  ];
  const cities = [
    { value: "Boston", label: "Boston" },
    { value: "HN", label: "Hà Nội" },
    { value: "HY", label: "Hưng Yên" },
  ];

  const stores = [
    {
      name: "The Rusty Bucket",
      address:
        "293 Likely Rd, 150 Mile House, BC 150 Mile House British Columbia Canada",
    },
    {
      name: "Ambition Salon",
      address: "#210 - 34077 Gladys Avenue Abbotsford British Columbia Canada",
    },
    {
      name: "Cheam Wellness Group",
      address: "304-32625 South Fraser Way Abbotsford British Columbia Canada",
    },
    {
      name: "Rosy Cheeks Boutique",
      address: "4614 BarrièreTown Road Barrière British Columbia Canada",
    },
    {
      name: "Chickadee Boutique",
      address: "4347 Hastings Street Burnaby British Columbia Canada",
    },
    {
      name: "Ocean Mountain Yoga",
      address: "1121 Cedar Street Campbell River British Columbia Canada",
    },
  ];

  // Filtered stores based on country and city selection
  const filteredStores = stores.filter(
    (store) =>
      (!country || store.address.includes(country)) &&
      (!city || store.address.includes(city))
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center">Store Location</h1>
      <div className="my-4 border-b border-gray-300 text-center">
        Visit us and discover everything
      </div>
      <Row gutter={[16, 16]} style={{ height: "400px" }} className="my-6">
        <Col span={12}>
          <CustomSelectForm
            title="Country"
            options={countries}
            onChange={(value) => {
              setCountry(value);
              setCity(null); // Reset city when country changes
            }}
          />

          <CustomSelectForm
            title="City"
            options={cities}
            onChange={(value) => setCity(value)}
            placeholder="Select City"
            disabled={!country}
          />
          <List
            itemLayout="horizontal"
            dataSource={filteredStores}
            style={{ height: "300px", overflow: "auto" }}
            className="mt-4"
            renderItem={(store) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <EnvironmentOutlined className="text-blue-500 text-2xl" />
                  }
                  title={
                    <strong className="text-sm font-medium">
                      {store.name}
                    </strong>
                  }
                  description={
                    <p className="text-gray-600 text-sm">{store.address}</p>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <Col span={12} className="h-full">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_API_MAP_KEY ?? ""}>
            <Map
              style={{ borderRadius: "20px", width: "100%", height: "100%" }}
              className="w-full h-full"
              defaultZoom={13}
              defaultCenter={markerLocation}
              gestureHandling={"greedy"}
              disableDefaultUI
            >
              <Marker position={markerLocation} />
            </Map>
          </APIProvider>
        </Col>
      </Row>
    </div>
  );
};

export default StoreLocation;
