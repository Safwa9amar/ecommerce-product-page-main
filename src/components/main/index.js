import React, { useEffect, useRef, useState } from "react";
import "./css/styles.css";
import { data } from "./data";

const Slider = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(data[0]);
  const handleThumb = (e, product) => {
    setSelectedProduct(product);
  };
  // create active state for thumbs
  useEffect(() => {}, [selectedProduct]);
  return (
    <div className="silder">
      <img
        className="slider__preview"
        src={selectedProduct.img}
        alt="product"
      />
      <div className="slider__thumbs">
        {data.map((el) => {
          return <SliderItem key={el.id} el={el} handleThumb={handleThumb} />;
        })}
      </div>
    </div>
  );
};

const SliderItem = ({ el, handleThumb }) => {
  return (
    <img
      id={el.id}
      key={el.id}
      onClick={(evt) => {
        handleThumb(evt, el);
      }}
      className={`slider__thumbs--item `}
      src={el.thum}
      alt="thumb"
    />
  );
};
const ProductDetaills = () => {
  return (
    <article className="product">
      <p className="product__tag">SNEAKER COMPANY</p>
      <h1 className="product__header">
        fall limite <br /> sneakers
      </h1>
      <p className="product__description">
        These low-profile sneakers // are your perfect casual wear companion.
        Featuring a durable rubber outer // sole, they’ll withstand everything
        the weather can offer.
      </p>
      <div className="product__price">
        <strong>$125.00</strong>
        <sup>50%</sup>
        <span>$250.00</span>
      </div>
      <div className="product__action">
        <div className="product__action--amount">
          <button>-</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className="product__action--addToCart">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
            add to cart
          </svg>
        </div>
      </div>
    </article>
  );
};

export default function Main() {
  return (
    <main>
      <Slider data={data} />
      {/* <ProductDetaills /> */}
    </main>
  );
}
