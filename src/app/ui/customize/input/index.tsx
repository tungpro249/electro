import { Input } from "antd";

const InputBase = ({ className = '', ...props }) => {
  return (
    <Input 
      {...props}
      className={`w-full rounded-full border-2 focus:ring-0 p-2 ${className}`} 
    />
  );
};

export default InputBase;
