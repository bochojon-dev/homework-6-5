import { memo } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/shop/Shop";
import image from "./assets/images/galaxy.avif";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop />
      <Banner
        title={"Mobile & Computing"}
        items={[
          "Galaxy S24 Ultra",
          "Galaxy S24+",
          "Galaxy Book4 Ultra",
          "GalaxyTab S9 Series",
          "Galaxy Watch6 Series",
        ]}
        image={image}
        name={"Galaxy S24 Ultra"}
        description={
          "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
        }
        button={"Buy now"}
      />
      <Banner
        title={"Mobile & Computing"}
        items={[
          "Galaxy S24 Ultra",
          "Galaxy S24+",
          "Galaxy Book4 Ultra",
          "GalaxyTab S9 Series",
          "Galaxy Watch6 Series",
        ]}
        image={image}
        name={"Galaxy S24 Ultra"}
        description={
          "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
        }
        button={"Buy now"}
      />
      <Banner
        title={"Mobile & Computing"}
        items={[
          "Galaxy S24 Ultra",
          "Galaxy S24+",
          "Galaxy Book4 Ultra",
          "GalaxyTab S9 Series",
          "Galaxy Watch6 Series",
        ]}
        image={image}
        name={"Galaxy S24 Ultra"}
        description={
          "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
        }
        button={"Buy now"}
      />
      <Banner
        title={"Mobile & Computing"}
        items={[
          "Galaxy S24 Ultra",
          "Galaxy S24+",
          "Galaxy Book4 Ultra",
          "GalaxyTab S9 Series",
          "Galaxy Watch6 Series",
        ]}
        image={image}
        name={"Galaxy S24 Ultra"}
        description={
          "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
        }
        button={"Buy now"}
      />
    </div>
  );
}

export default memo(App);
