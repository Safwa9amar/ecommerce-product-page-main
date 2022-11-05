import { useEffect, useState } from "react";
import SliderItem from "./SilderItem";

const Slider = ({
  data,
  isFullScreen,
  handleSetFullScreen,
  Index,
  setIndex,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(data[Index]);
  const handleThumb = (idx, product) => {
    setSelectedProduct(product);
    setIndex(idx);
  };
  const handleNext = () => {
    if (Index >= data.length - 1) return;
    setIndex((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (Index < 1) return;
    Index >= 0 && setIndex((prev) => prev - 1);
  };
  useEffect(() => {
    setSelectedProduct(data[Index]);
  }, [Index, data]);

  // create active state for thumbs
  return (
    <div className="slider ">
      {isFullScreen && (
        <button
          onClick={() => {
            handleSetFullScreen(false);
          }}
          className="slider--close"
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      )}

      <div className="slider__preview">
        {isFullScreen && (
          <button
            onClick={handlePrevious}
            className="slider__preview--previous"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 13L2 7L8 1" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        )}
        <img
          onClick={() => {
            handleSetFullScreen(true);
          }}
          src={selectedProduct.img}
          alt="product"
        />

        {isFullScreen && (
          <button onClick={handleNext} className="slider__preview--next">
            <svg
              width="14"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L7 7L1 13" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        )}
      </div>
      <div className="slider__thumbs">
        {data.map((el, idx) => {
          return (
            <SliderItem
              idx={idx}
              key={el.id}
              el={el}
              handleThumb={handleThumb}
              selectedProduct={selectedProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
