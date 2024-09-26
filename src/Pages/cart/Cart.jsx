import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import {
  removeFromCart,
  updateCartItem,
  updateDeliveryCharges,
} from "../../store/store";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function Cart() {
  const [total, settotal] = useState();
  const cart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();
  const [deliveryType, setDeliveryType] = useState(150);

  const navigate = useNavigate();

  function removeItem(id) {
    dispatch(removeFromCart(id));
    handleTotalAmount();
  }

  function handleChange(obj, d) {
    const updatedAmount = obj.quantity + d;
    if (updatedAmount >= 1) {
      const updatedItem = { ...obj, quantity: updatedAmount };
      dispatch(updateCartItem(updatedItem));
    }
  }

  function deliveryCharges() {
    dispatch(updateDeliveryCharges(deliveryType * 1));
  }

  function handleTotalAmount() {
    let total = 0;
    cart.map((obj) => (total += obj.itemPrice * obj.quantity));
    settotal(total);
  }

  useEffect(() => {
    handleTotalAmount();
    deliveryCharges();
  });

  return (
    <div className="pt-20 px-20">
      <h1 className="w-full font-bold text-3xl text-center">Your Cart</h1>
      <div className="my-4 gap-5">
        {cart.length > 0 ? (
          cart.map((obj) => (
            <div
              key={obj.itemID} // Ensure this key is unique for each item
              className="flex  items-center w-full shadow-lg rounded-lg justify-between px-2"
            >
              <div className="flex items-center">
                <img src={obj.img} alt="" className=" w-24" />
                <div>
                  <div className="title font-bold text-xl">{obj.itemName}</div>
                  <p>{obj.des}</p>
                </div>
              </div>
              <div className="flex bg-orange-500 text-white justify-center items-center rounded-lg">
                <button
                  className="py-1 px-3 hover:bg-orange-600 rounded-lg"
                  onClick={() => handleChange(obj, 1)}
                >
                  +
                </button>
                <h1 className="py-1 px-2">{obj.quantity}</h1>
                <button
                  className="py-1 px-3 hover:bg-orange-600 rounded-lg"
                  onClick={() => handleChange(obj, -1)}
                >
                  -
                </button>
              </div>
              <h1 className="font-bold text-xl">
                RS {obj.itemPrice * obj.quantity}
              </h1>
              <RiDeleteBin6Line
                className="text-3xl text-red-500 hover:scale-105 transition-all"
                onClick={() => removeItem(obj.itemID)}
              />
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="flex flex-col mb-7 gap-4 bg-gray-200 w-1/3 p-3 rounded-lg">
        <h1 className=" text-2xl font-bold ">Order Summary</h1>
        <div className="flex justify-between">
          <h1 className=" ">Items Price</h1>
          <p className="">Rs {total}</p>
        </div>

        <div className="flex justify-between ">
          <h1>Delivery Type</h1>
          <select
            name=""
            id=""
            onChange={(e) => setDeliveryType(e.target.value)}
            className=" outline-none rounded-lg py-1 px-2"
          >
            <option value="150">Normal Delivery Rs-150</option>
            <option value="200">Standard Delivery Rs-200</option>
            <option value="250">Urgent Delivery Rs-250</option>
          </select>
        </div>
        <hr className=" h-[1px] bg-black " />
        <div className="flex justify-between">
          <h1 className=" text-xl">Total Amount</h1>
          <p className=" text-xl ">Rs {total + deliveryType * 1}</p>
        </div>
        <button
          className="py-1 w-full bg-orange-500 text-white rounded-md mt-3 hover:scale-95 transition-all"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
