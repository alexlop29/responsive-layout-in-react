import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SmallLocationBanner from "./modules/location-banner/organisms/sm-nav-bar";
import LocationBannerGrid from "./modules/location-banner-grid/organisms/LocationGrid";
import AppBarGrid from "./modules/app-bar-grid/organisms/AppBarGrid";
import ProductGrid from "./modules/product-grid/organisms/ProductGrid";

function App() {
  return (
    <>
      <LocationBannerGrid />
      <AppBarGrid />
      <ProductGrid />
    </>
  );
}

export default App;
