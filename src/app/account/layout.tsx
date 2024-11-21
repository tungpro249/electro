import ProductLayout from "../components/poduct-layout";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
      <ProductLayout />
    </div>
  );
};

export default AccountLayout;