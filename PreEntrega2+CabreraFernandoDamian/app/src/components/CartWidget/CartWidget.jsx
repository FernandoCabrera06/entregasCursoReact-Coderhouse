import "./CartWidget.css";
import Cart from "../../assets/Cart.svg";

const CartWidget = () => {
  return (
    <div className="img-widget">
      <span id="contadorCarrito" className="badge text-bg-danger">
        3
      </span>
      <img src={Cart} alt="cart-widget" />
    </div>
  );
};

export default CartWidget;
