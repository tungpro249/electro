import Logo from "@/app/components/icon/Logo";
import WidgetPhone from "@/app/components/icon/WidgetPhone";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";

const SectionFooterWidget = () => {
  return (
    <Row className="w-full footer-widget px-12 my-20" gutter={[16, 16]}>
      <Col span={7} key="1">
        <Logo />
        <div className="flex mt-4">
          <WidgetPhone />
          <div className="ml-4">
            <p>Got questions? Call us 24/7</p>
            (800) 8001-8588, (0600) 874 548
          </div>
        </div>
        <div className="mt-4">
          <p>
            <b>Contact info</b>
          </p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        <div className="mt-4">
          <FacebookFilled className="mr-4" style={{ fontSize: "24px" }} />
          <TwitterSquareFilled className="mr-4" style={{ fontSize: "24px" }} />
          <InstagramFilled className="mr-4" style={{ fontSize: "24px" }} />
          <YoutubeFilled className="mr-4" style={{ fontSize: "24px" }} />
        </div>
      </Col>
      <Col span={5} key="2">
        <div>
          <b>Find In Fast</b>
          <ul>
            <li>Accessories</li>
            <li>Gaming</li>
            <li>Laptops & Computer</li>
            <li>Mac Computers</li>
            <li>PC Computers</li>
            <li>Ultrabooks</li>
          </ul>
        </div>
      </Col>
      <Col span={5} key="3">
        <div>
          <b>Information</b>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>All Collections</li>
            <li>Privacy policy</li>
            <li>PC Computers</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </Col>
      <Col span={5} key="4">
        <div>
          <b>In the Spotlight</b>
          <ul>
            <li>Electronics</li>
            <li>Toys</li>
            <li>Video Games</li>
            <li>Home Products</li>
            <li>Clothing</li>
            <li>Sports & Outdoors</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default SectionFooterWidget;
