import LocationBannerGrid from "../modules/location-banner-grid/organisms/LocationGrid";
import AppBarGrid from "../modules/app-bar-grid/organisms/AppBarGrid";
import ProductGrid from "../modules/product-grid/organisms/ProductGrid";

const Welcome = () => {
  return (
    <>
      <LocationBannerGrid />
      <AppBarGrid />
      <ProductGrid />
    </>
  );
};

export default Welcome;
