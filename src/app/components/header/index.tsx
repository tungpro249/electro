import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import ShopifySectionSections from "./shopify-section-sections";

const Header = () => {
  return (
    <header className="w-full">
      <ShopifySectionSections />
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
