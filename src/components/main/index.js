import { useState } from "react";
import ProductDetaills from "./components/ProductDetaills";
import Slider from "./components/Slider";
import "./css/styles.css";
import { data } from "./data";

export default function Main() {
  const [isFullScreen, setFullScreen] = useState(true);
  const [Index, setIndex] = useState(0);

  const handleSetFullScreen = (val) => {
    setFullScreen(val);
  };
  return (
    <main>
      <Slider
        data={data}
        Index={Index}
        setIndex={setIndex}
        handleSetFullScreen={handleSetFullScreen}
      />
      <ProductDetaills />
      {isFullScreen && (
        <div className="full">
          <Slider
            data={data}
            Index={Index}
            setIndex={setIndex}
            isFullScreen={isFullScreen}
            handleSetFullScreen={handleSetFullScreen}
          />
        </div>
      )}
    </main>
  );
}
