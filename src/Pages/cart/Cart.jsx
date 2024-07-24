import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.store.cart);

  return (
    <div className="pt-16 px-20">
      <h1>Cart</h1>
      <div>
        {cart.length > 0 ? (
          cart.map((obj) => <div key={obj.id}>{obj.itemName}</div>)
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
