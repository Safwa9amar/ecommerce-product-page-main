const SliderItem = ({ el, handleThumb, selectedProduct, idx }) => {
  return (
    <img
      id={el.id}
      key={el.id}
      onClick={() => {
        handleThumb(idx, el);
      }}
      className={`slider__thumbs--item ${
        el.id === selectedProduct.id ? "active" : ""
      } `}
      src={el.thum}
      alt="thumb"
    />
  );
};

export default SliderItem;
