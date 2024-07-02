import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

function Nav() {
  return (
    <div
      className={
        "Navbar flex justify-between px-20  items-center py-3 fixed w-full z-40  -sm:px-10 -xsm:px-3"
      }
    >
      <NavLink to={"/"}>
        <div className={"flex items-center gap-1"}>
          <img
            src="https://www.pngitem.com/pimgs/m/3-37779_transparent-delivery-png-delivery-boy-with-bike-png.png"
            alt="loading-error"
            className="w-10"
          />

          <h1 className="main-title text-2xl font-bold">CustoCare</h1>
        </div>
      </NavLink>
      <div className="location div -mmd:hidden ">
        <h1 className="flex justify-center items-center">
          <p className="font-bold">Deliver to:</p> &nbsp;
          <FaLocationDot className="theme-color" /> &nbsp;Current Location{" "}
          <span className=" font-bold">&nbsp;Kohat,Pakistan</span>
        </h1>
      </div>

      <button className="flex theme-color justify-center items-center -mmd:hidden  bg-white px-11 rounded-md py-2">
        <FaUser className="" />
        &nbsp; Login
      </button>

      <IoIosMenu className="text-3xl md:hidden" />
    </div>
  );
}

export default Nav;
