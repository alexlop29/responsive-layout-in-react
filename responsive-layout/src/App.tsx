import "./App.css";
import LocationBannerGrid from "./modules/location-banner-grid/organisms/LocationGrid";
import AppBarGrid from "./modules/app-bar-grid/organisms/AppBarGrid";
import ProductGrid from "./modules/product-grid/organisms/ProductGrid";
import MediumAppBarGrid from "./modules/app-bar-grid/organisms/MediumAppBarGrid";

function App() {
  return (
    <>
      <LocationBannerGrid />
      <AppBarGrid />
      <MediumAppBarGrid />
      <ProductGrid />
    </>
  );
}

export default App;
