import AddToCart from "./components/AddToCart";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Nav from "./css/Nav";
import "./css/styles.css";
import avatar from "../../assets/image-avatar.png";
import Humberger from "./components/Humberger";
import { useState } from "react";
export default function Header({ cart, removeItem }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <Nav>
        <Humberger setShowMenu={setShowMenu} />
        <Logo />
        <Menu show={showMenu} />
        <div className="right_menu">
          <AddToCart cardData={cart} removeItem={removeItem} />
          <Avatar img={avatar} />
        </div>
      </Nav>
    </header>
  );
}
