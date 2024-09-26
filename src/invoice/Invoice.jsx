import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Invoice() {
  const cart = useSelector((state) => state.store.cart);
  const data = useSelector((state) => state.store.formData);
  const devliveryCharges = useSelector((state) => state.store.devliveryCharges);

  const navigate = useNavigate();

  function handleTotalAmount() {
    let total = 0;
    cart.map((obj) => (total += obj.itemPrice * obj.quantity));
    return total;
  }

  return (
    <div className="pt-20 px-20 flex flex-col ">
      <h1 className="w-full text-center text-2xl font-bold my-5">Invoice</h1>
      <table className="mb-6">
        <tr>
          <th colSpan={2} className="py-2">
            Customer Details
          </th>
          <th colSpan={2}>Order Details</th>
          <th colSpan={2} className="py-2">
            Payment Details
          </th>
        </tr>
        <tr>
          <th>Customer Name</th>
          <td>{data.name}</td>
          <th>Order ID</th>
          <td>{cart.length * 3}</td>
          <th>Card Name</th>
          <td>{data.cardName}</td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td>{data.email}</td>
          <th>Total Items</th>
          <td>{cart.length}</td>
          <th>Card No</th>
          <td>{data.cardNo}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{data.address}</td>
          <th>Delivery Charges</th>
          <td>{devliveryCharges}</td>
          <th>Delivery Type</th>
          <td>COD</td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>+{data.number}</td>
          <th>Total Amount</th>
          <td className=" font-bold underline">{handleTotalAmount()}</td>
        </tr>
      </table>
      <button
        onClick={() => {
          navigate("/product");
          alert("ORDER DONE!");
        }}
        className="py-2 w-full bg-orange-500 text-white font-bold rounded-md transition-all hover:scale-95 mb-9"
      >
        Proceed
      </button>
    </div>
  );
}

export default Invoice;
