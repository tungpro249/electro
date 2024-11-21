"use client";
import { Row, Col, Divider } from "antd";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState } from "react";
import ButtonBase from "../ui/customize/button";
import InputBase from "../ui/customize/input";
import TextArea from "antd/es/input/TextArea";

const ContactUs = () => {
  const [markerLocation, ] = useState({
    lat: 21.028511,
    lng: 105.804817,
  });

  return (
    <div className="container mx-auto p-6">
      <Row gutter={[16, 16]} style={{ height: "500px" }} className="my-6">
        <Col span={12} className="">
          <h2 className="text-3xl font-bold mb-4">Leave A Message</h2>
          <Divider className="my-4" />
          <p>
            If you have any questions please send us a message using the
            adjacent form and we will get back to you as soon as possible
          </p>
          <div className="flex justify-between gap-3">
          <div className="w-1/2 mb-3">
            <p className="font-bold my-2">Name*</p>
            <InputBase placeholder="Name*" className="my-2" />
          </div>
          <div className="w-1/2 mb-3">
            <p className="font-bold my-2">Email*</p>
            <InputBase placeholder="Email*" className="my-2" />
          </div>
          </div>
          <div className="mb-3">
            <p className="font-bold my-2">Phone Number</p>
            <InputBase placeholder="Phone Number" className="my-2" />
          </div>
          <div className="mb-3">
            <p className="font-bold my-2">Messages*</p>
            <TextArea rows={4} />
          </div>
          
          <ButtonBase onClick={() => {}}>Send message</ButtonBase>
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

export default ContactUs;
