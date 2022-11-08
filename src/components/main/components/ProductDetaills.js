import { useState } from "react";

const ProductDetaills = ({
  id,
  tag,
  header,
  description,
  price,
  discount,
  amount = 1,
  handleCart,
  item,
}) => {
  const [amountState, setAmount] = useState(amount);
  const handleAddToCart = () => {
    handleCart(item, amountState);
  };
  // hancle amount of product when user click on plus or minus
  const handleAmount = (val) => {
    val === "plus" && setAmount((prev) => prev + 1);
    amountState > 1 && val === "minus" && setAmount((next) => next - 1);
  };

  return (
    <article className="product">
      <p className="product__tag">{tag}</p>
      <h1 className="product__header">
        {header.innerHtml || (
          <>
            fall limite <br /> sneakers
          </>
        )}
      </h1>
      <p className="product__description">
        {description ||
          ` These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`}
      </p>
      <div className="product__price">
        <div>
          <strong>${price || "129.00"}.00</strong>
          <span className="coupon">%{discount || "-25"}</span>
        </div>
        <br />
        <span>${(price * discount) / 100}.00</span>
      </div>
      <div className="product__action">
        <div className="product__action--amount">
          <button onClick={() => handleAmount("minus")}>-</button>
          <span>{amountState}</span>
          <button onClick={() => handleAmount("plus")}>+</button>
        </div>
        <button
          onClick={handleAddToCart}
          className="product__action--addToCart"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
          </svg>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductDetaills;
