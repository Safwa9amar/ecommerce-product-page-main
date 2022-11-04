import AddToCart from "./components/AddToCart";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Nav from "./css/Nav";
import "./css/styles.css";
import avatar from "../../assets/image-avatar.png";
export default function Header() {
  return (
    <header>
      <Nav>
        <Logo />
        <Menu />
        <div className="right_menu">
          <AddToCart />
          <Avatar img={avatar} />
        </div>
      </Nav>
    </header>
  );
}
