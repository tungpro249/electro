import { Button, Col, Input, Row } from "antd";

const Newsletter = () => {
  return (
    <Row
      gutter={[16, 16]}
      className="w-full justify-space-between p-4 px-20 items-center"
      style={{ backgroundColor: "#FED700" }}
    >
      <Col span={8}>
        <div className="text-2xl">Sign up to Newsletter</div>
      </Col>
      <Col span={8}>
        <div>...and receive $20 coupon for first shopping</div>
      </Col>
      <Col span={8}>
        <div className="flex" style={{ width: "70%" }}>
          <Input placeholder="Enter your email address" size="middle" style={{ borderRadius: "8px 0px 0px 8px" }} />
          <Button
            className="btn btn-primary"
            style={{ background: "#333E48", color: "#fff", border: "none", borderRadius: "0px 8px 8px 0px" }}
          >
            Subscribe
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Newsletter;
