import { useState } from "react";
import ProductDetaills from "./components/ProductDetaills";
import Slider from "./components/Slider";
import "./css/styles.css";
import { data } from "./data";

export default function Main({ handleCart }) {
  const [isFullScreen, setFullScreen] = useState(false);
  const [Index, setIndex] = useState(0);
  // create object for product details
  const product = data[Index];
  const { id, tag, header, description, price, discount } = product;

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
      <ProductDetaills
        id={id}
        tag={tag}
        header={header}
        description={description}
        price={price}
        discount={discount}
        handleCart={handleCart}
        item={product}
      />
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
