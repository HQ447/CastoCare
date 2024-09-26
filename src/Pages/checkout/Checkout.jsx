import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../store/store";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [cardName, setcardName] = useState("");
  const [cardNo, setcardNo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit() {
    const custData = {
      name: name,
      email: email,
      number: number,
      address: address,
      cardName: cardName,
      cardNo: cardNo,
    };

    dispatch(updateFormData(custData));

    navigate("/invoice");
  }

  return (
    <div className="pt-20 px-20 flex justify-center text-white ">
      <form
        action=""
        className="flex flex-col gap-4 bg-orange-500 p-6 w-1/3 my-3 rounded-md"
      >
        <h1 className="font-bold text-xl text-center ">Checkout Form</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Full Name</label>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            id="name"
            className="bg-gray- rounded-md py-1 px-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            id="email"
            className=" rounded-md py-1 px-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cardName">Card Name</label>
          <input
            type="text"
            id="cardName"
            onChange={(e) => setcardName(e.target.value)}
            className=" rounded-md py-1 px-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cardNo">Card Number</label>
          <input
            onChange={(e) => setcardNo(e.target.value)}
            type="number"
            id="cardNo"
            className=" rounded-md py-1 px-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cvv">CVV</label>
          <input
            type="number"
            id="cvv"
            max={3}
            className=" rounded-md py-1 px-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="num">Phone Number</label>
          <input
            type="number"
            onChange={(e) => setnumber(e.target.value)}
            id="num"
            className=" rounded-md py-1 px-2 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address">Billing Address</label>
          <input
            onChange={(e) => setaddress(e.target.value)}
            type="text"
            id="address"
            className=" rounded-md py-1 px-2 "
          />
        </div>
        <button
          onClick={handleSubmit}
          className="py-1 mt-2 bg-[red] text-white rounded-md hover:scale-95 transition-all"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Checkout;
