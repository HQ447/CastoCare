import "./Home.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";

function Home() {
  return (
    <div className="Home px-20">
      <div className="front-sec h-screen">
        <div className="flex flex-col left w-7/12 justify-center h-full ">
          <h1 className="lg-heading text-white">Are You Starving?</h1>
          <p className="md-heading text-gray-600 ">
            Within a few clicks, find meals <br /> that are accessible near you
          </p>
          <div className=" bg-white rounded-md p-4 my-3">
            <div className="btn-box flex py-3">
              <button className="DeliveryBtn flex gap-1 items-center text-gray-400 py-2 px-3 rounded-md hover:bg-orange-300">
                <MdDeliveryDining className="text-3xl" />
                <span>Delivery</span>
              </button>
              <button className="pickupBtn gap-1 items-center text-gray-400 flex  py-2 px-3 rounded-md hover:bg-orange-300">
                <FaBagShopping className="text-xl" />
                <span> Pickup</span>
              </button>
            </div>
            <div className="flex  items-center gap-4  ">
              <div className="flex items-center input-box rounded-md gap-3 p-3 w-full">
                <FaLocationDot style={{ color: "#F17228" }} />
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className=" bg-transparent "
                />
              </div>
              <button
                className=" text-white font-bold p-3 rounded-md w-40"
                style={{ backgroundColor: "#F17228" }}
              >
                Find Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
