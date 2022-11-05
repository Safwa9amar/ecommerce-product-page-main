import { useState } from "react";
import product_one_thumbnail from "../../../assets/image-product-1-thumbnail.jpg";

const AddToCart = ({ cardData = [] }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <a href="#" className="cart">
      <div className="cart__btn" onClick={handleShow}>
        <div className="cart__indicator">3</div>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fillRule="nonzero"
          />
        </svg>
      </div>

      {show && (
        <div className="cart__body">
          <div className="cart__body--header">
            <strong>cart</strong>
          </div>
          <div className="cart__body--content">
            {cardData.length !== 0 ? (
              "your cart is empty"
            ) : (
              <>
                <CartItem />
                <CartItem />
                <CartItem />
              </>
            )}
          </div>
          <button className="cart__footer">checkout</button>
        </div>
      )}
    </a>
  );
};

const CartItem = ({ img }) => {
  return (
    <div className="cartItem">
      <img
        className="cardItem__thumb"
        src={product_one_thumbnail}
        alt="product thumb"
      />
      <div className="cartItem__detaills">
        <p className="cartItem__name">Fall Limited Edition Sneakers</p>
        <p className="cartItem__price">
          $125.00 x 3 <strong>$375.00</strong>
        </p>
      </div>
      <div className="cartItem--delete">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4824 3.75H13.125V1.875C13.125 1.70924 13.0592 1.55027 12.9419 1.43306C12.8247 1.31585 12.6658 1.25 12.5 1.25H7.5C7.33424 1.25 7.17527 1.31585 7.05806 1.43306C6.94085 1.55027 6.875 1.70924 6.875 1.875V3.75H2.51758L2.5 5.3125H3.78906L4.57383 17.5781C4.59369 17.8953 4.73363 18.193 4.96518 18.4107C5.19673 18.6284 5.5025 18.7497 5.82031 18.75H14.1797C14.4973 18.75 14.803 18.629 15.0347 18.4117C15.2664 18.1944 15.4066 17.8971 15.427 17.5801L16.2109 5.3125H17.5L17.4824 3.75ZM6.875 16.25L6.52344 6.25H7.8125L8.16406 16.25H6.875ZM10.625 16.25H9.375V6.25H10.625V16.25ZM11.5625 3.75H8.4375V2.65625C8.4375 2.61481 8.45396 2.57507 8.48326 2.54576C8.51257 2.51646 8.55231 2.5 8.59375 2.5H11.4062C11.4477 2.5 11.4874 2.51646 11.5167 2.54576C11.546 2.57507 11.5625 2.61481 11.5625 2.65625V3.75ZM13.125 16.25H11.8359L12.1875 6.25H13.4766L13.125 16.25Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default AddToCart;
