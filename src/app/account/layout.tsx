import ProductLayout from "../components/poduct-layout";

const AccountLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <ProductLayout />
    </div>
  );
};

export default AccountLayout;