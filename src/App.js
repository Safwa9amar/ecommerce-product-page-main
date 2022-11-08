import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header";
import Main from "./components/main";
import "./sass/global.css";

function App() {
  // pass selected cart item to header
  const [cart, setCart] = useState([]);

  const handleCart = (item, amountState) => {
    item.amount = amountState;
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };
  // remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header cart={cart} removeItem={removeItem} />
      <Main handleCart={handleCart} />
      <Footer />
    </div>
  );
}

export default App;
