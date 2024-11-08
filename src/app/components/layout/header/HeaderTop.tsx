import Logo from "@/app/components/icon/Logo";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";
const HeaderTop = () => {
  return (
    <div className="container mx-auto flex justify-between items-center pt-6">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="flex items-center border-2 border-yellow-400 rounded-full overflow-hidden w-full max-w-xl">
        <Input
          placeholder="Search..."
          className="flex-grow border-none focus:ring-0"
          style={{ borderRadius: 0 }}
        />
        <button className="bg-yellow-400 p-3 flex items-center justify-center">
          <SearchOutlined style={{ fontSize: "18px", color: "black" }} />
        </button>
      </div>
      <div className="flex items-center space-x-8">
        <div className="relative">
          <HeartOutlined className="text-2xl text-gray-600" />
          <span
            className="absolute -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
            style={{ top: "12px" }}
          >
            0
          </span>
        </div>

        <div className="relative flex items-center">
          <ShoppingOutlined className="text-2xl text-gray-600" />
          <span
            className="absolute bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
            style={{ top: "14px", left: "14px" }}
          >
            1
          </span>
          <span className="ml-2 text-lg text-gray-800 font-medium">
            $200.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
