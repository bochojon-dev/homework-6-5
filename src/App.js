import { memo } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/shop/Shop";
import image1 from "./assets/images/galaxy.avif";
import image2 from "./assets/images/tvbg.webp";
import image3 from "./assets/images/homebg.webp";
import image4 from "./assets/images/phones.webp";
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
        image={image1}
        name={"Galaxy S24 Ultra"}
        description={
          "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
        }
        button={"Buy now"}
      />
      <Banner
        title={"TV & Audio"}
        items={["The Frame ", "The Freestyle 2nd Gen", "Music Frame"]}
        image={image2}
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
        image={image3}
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
        image={image4}
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
