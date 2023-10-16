import "./App.css";
import LocationBannerGrid from "./modules/location-banner-grid/organisms/LocationGrid";
import AppBarGrid from "./modules/app-bar-grid/organisms/AppBarGrid";
import ProductGrid from "./modules/product-grid/organisms/ProductGrid";
import MediumAppBarGrid from "./modules/app-bar-grid/organisms/MediumAppBarGrid";
import MediumProductGrid from "./modules/product-grid/organisms/MediumProductGrid";

function App() {
  return (
    <>
      <LocationBannerGrid />
      <AppBarGrid />
      <MediumAppBarGrid />
      <ProductGrid />
      <MediumProductGrid />
    </>
  );
}

export default App;
