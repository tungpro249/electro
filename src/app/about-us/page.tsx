import { Button, Col, Image, Row } from "antd";

const AboutUs = () => {
  return (
    <>
      <div
        className="text-center h-96 flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url('https://electrox.arenacommerce.com/cdn/shop/files/au-banner_1920x.png?v=1649844288')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-1/3">
          <h3 className="text-3xl font-bold">About Us</h3>
          <p className="text-lg">
            Passion may be a friendly or eager interest in or admiration for a
            proposal, cause, discovery, or activity or love to a feeling of
            unusual excitement.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <Row>
          <Col xs={24} md={12} lg={8}>
            <div className="text-center mb-6">
              <Image
                src="https://electrox.arenacommerce.com/cdn/shop/files/3column1.png?v=1649844301&width=500"
                alt="What we really do?"
                preview={false}
                className="w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold">What we really do?</h2>
              <p>
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="text-center mb-6">
              <Image
                src="https://electrox.arenacommerce.com/cdn/shop/files/3column2.png?v=1649844310&width=508"
                alt="What we really do?"
                preview={false}
                className="w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold">What we really do?</h2>
              <p>
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="text-center">
              <Image
                src="https://electrox.arenacommerce.com/cdn/shop/files/3column3.png?v=1649844322&width=500"
                alt="What we really do?"
                preview={false}
                className="w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold">What we really do?</h2>
              <p>
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="bg-gray-100 p-6">
        <Row gutter={[16, 16]} justify="center">
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            className="text-center my-6"
          >
            <Image
              src="https://electrox.arenacommerce.com/cdn/shop/files/au-team-1.png?v=1649844334&width=180"
              alt="Thomas Snow"
              preview={false}
              className="w-full h-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Thomas Snow</h2>
            <p>Ceo Founder</p>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            className="text-center my-6"
          >
            <Image
              src="https://electrox.arenacommerce.com/cdn/shop/files/au-team-1.png?v=1649844334&width=180"
              alt="Thomas Snow"
              preview={false}
              className="w-full h-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Thomas Snow</h2>
            <p>Ceo Founder</p>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            className="text-center my-6"
          >
            <Image
              src="https://electrox.arenacommerce.com/cdn/shop/files/au-team-1.png?v=1649844334&width=180"
              alt="Thomas Snow"
              preview={false}
              className="w-full h-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Thomas Snow</h2>
            <p>Ceo Founder</p>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            className="text-center my-6"
          >
            <Image
              src="https://electrox.arenacommerce.com/cdn/shop/files/au-team-1.png?v=1649844334&width=180"
              alt="Thomas Snow"
              preview={false}
              className="w-full h-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Thomas Snow</h2>
            <p>Ceo Founder</p>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            className="text-center my-6"
          >
            <Image
              src="https://electrox.arenacommerce.com/cdn/shop/files/au-team-1.png?v=1649844334&width=180"
              alt="Thomas Snow"
              preview={false}
              className="w-full h-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Thomas Snow</h2>
            <p>Ceo Founder</p>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            className="text-center my-6"
          >
            <Image
              src="https://electrox.arenacommerce.com/cdn/shop/files/au-team-1.png?v=1649844334&width=180"
              alt="Thomas Snow"
              preview={false}
              className="w-full h-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Thomas Snow</h2>
            <p>Ceo Founder</p>
          </Col>
        </Row>
      </div>

      <div className="container mx-auto p-6">
        <Row>
          <Col xs={24} md={8}>
            <div>
              <h2 className="text-lg font-semibold">What we really do?</h2>
              <p className="text-gray-600">
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Our vision</h2>
              <p className="text-gray-600">
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div>
              <h2 className="text-lg font-semibold">History of the Company</h2>
              <p className="text-gray-600">
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Cooperate with Us!</h2>
              <p className="text-gray-600">
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <Button
              className="flex items-center justify-between w-full"
              type="default"
            >
              <span>Support 24/7</span> <span>+</span>
            </Button>
            <Button
              className="flex items-center justify-between w-full"
              type="default"
            >
              <span>Best Quality</span> <span>+</span>
            </Button>
            <Button
              className="flex items-center justify-between w-full"
              type="default"
            >
              <span>Fastest Delivery</span> <span>+</span>
            </Button>
            <Button
              className="flex items-center justify-between w-full"
              type="default"
            >
              <span>Customer Care</span> <span>+</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutUs;
