import {
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const ShopifySectionSections = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-2 bg-white">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <PhoneOutlined className="text-lg text-gray-500" />
              <span className="text-sm text-gray-600">(+800) 123 456 7890</span>
            </div>

            <div className="flex items-center space-x-2">
              <MailOutlined className="text-lg text-gray-500" />
              <span className="text-sm text-gray-600">sample@email.com</span>
            </div>
          </div>

          {/* Phần bên phải */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <EnvironmentOutlined className="text-lg text-gray-500" />
              <span className="text-sm text-gray-600">Store Location</span>
            </div>

            <div className="flex items-center space-x-2">
              <UserOutlined className="text-lg text-gray-500" />
              <span className="text-sm text-gray-600">Sign in or Register</span>
            </div>
            <GlobalOutlined className="text-lg text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifySectionSections;
