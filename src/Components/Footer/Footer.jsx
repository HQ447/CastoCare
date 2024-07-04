import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";

function Footer() {
  return (
    <section
      className="py-10 px-20 pt-7  -sm:px-10 -xsm:px-3 "
      style={{ backgroundColor: "#212121" }}
    >
      <div className="container mx-auto">
        <h5 className="leading-loose font-bold text-white">OUR TOP PLACES</h5>
        <div className="flex justify-between flex-wrap">
          <div className="col-6 col-md-4 col-lg-auto mb-3">
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  KDA Sector-I
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  KDA Sector-II
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  KDA Sector III
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-auto mb-3">
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Main City
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Chikkar Kot
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Bahadar kot
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-auto mb-3">
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Kohat Cantt
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  OTS
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  College Town
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-auto mb-3">
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Muhammad Nagar
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Spring Velly
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  KDA Gate 2
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className="row flex justify-between my-4 flex-wrap">
          <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
            <h5 className="leading-loose font-bold text-white ">COMPANY</h5>
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <NavLink to={"/about"}>
                  <a
                    className="text-gray-400 no-underline hover:text-white hover:font-bold hover:cursor-pointer"
                    href="#!"
                  >
                    About Us
                  </a>
                </NavLink>
              </li>
              <li className="leading-loose">
                <NavLink to={"/team"}>
                  <a
                    className="text-gray-400 no-underline hover:text-white hover:font-bold hover:cursor-pointer"
                    href="#!"
                  >
                    Our Team
                  </a>
                </NavLink>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Careers
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xxl-2 col-lg-3 mb-3">
            <h5 className="leading-loose font-bold text-white">CONTACT</h5>
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Help & Support
                </a>
              </li>
              <ReactWhatsapp
                number="+92 3336575249"
                message="How can I help you?"
              >
                <li className="leading-loose">
                  <a className="text-gray-400 no-underline" href="#!">
                    Partner with us
                  </a>
                </li>
              </ReactWhatsapp>
              <br />
              <ReactWhatsapp
                number="+92 3336575249"
                message="How can I help you?"
              >
                <li className="leading-loose">
                  <a className="text-gray-400 no-underline" href="#!">
                    Ride with us
                  </a>
                </li>
              </ReactWhatsapp>
              <br />
              <ReactWhatsapp
                number="+92 3336575249"
                message="How can I help you?"
              >
                <li className="leading-loose">
                  <a className="text-gray-400 no-underline" href="#!">
                    Ride with us
                  </a>
                </li>
              </ReactWhatsapp>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
            <h5 className="leading-loose font-bold text-white">LEGAL</h5>
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Terms & Conditions
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Refund & Cancellation
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Privacy Policy
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
            <h5 className="leading-loose font-bold text-white">LEGAL</h5>
            <ul className="list-none mb-4 lg:mb-0">
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Terms & Conditions
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Refund & Cancellation
                </a>
              </li>
              <li className="leading-loose">
                <a className="text-gray-400 no-underline" href="#!">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 ">
          <h5
            className="leading-loose font-bold text-xl mt-7"
            style={{ color: "#bdbdbd" }}
          >
            FOLLOW US
          </h5>
          <div
            className="flex  text-2xl gap-3 mt-3 mb-7"
            style={{ color: "#bdbdbd" }}
          >
            <a
              href="https://www.instagram.com/custocares?igsh=MnVnaWZ3ODhmcGpp"
              target="_blank"
            >
              <FaInstagram className=" hover:text-white hover:cursor-pointer" />
            </a>
            <a
              href="https://x.com/custocare180692?t=RV1by54FuHxyIiIoPYmc0g&s=09"
              target="_blank"
            >
              <FaXTwitter className=" hover:text-white hover:cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61559239227557&mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebook className=" hover:text-white hover:cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/custocare-services-407865307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com/@custocareservices?si=QtCtcv8sQmK0oTK3"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>
          <h5
            className=" font-bold text-3xl text-white"
            style={{ color: "#bdbdbd" }}
          >
            Receive exclusive offers and <br /> discounts in your mailbox
          </h5>
          <div className=" my-10">
            <div className="col">
              <div className="form-floating flex gap-8 flex-wrap">
                <div
                  className="flex rounded-lg px-3 items-center text-gray-300 placeholder-gray-500 border border-gray-700 focus:border-gray-600 focus:bg-gray-900 focus:text-white focus:placeholder-gray-700"
                  style={{ backgroundColor: "#616161" }}
                >
                  <IoMail className="text-2xl mr-2" />
                  <input
                    type="text"
                    className="form-control bg-transparent focus:outline-none"
                    id="mail"
                    placeholder="Enter Email"
                  />
                </div>
                <button
                  className="btn btn-danger btn-lg py-2 px-9 rounded-sm text-white font-bold"
                  style={{ backgroundColor: "#ffb30e" }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className="my-3 flex flex-wrap justify-center md:justify-between items-center pb-3">
          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-0">
            <p className="text-gray-400">
              All rights Reserved © CastoCare, 2024
            </p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right order-0 md:order-1">
            <p className="text-gray-400">
              Made
              <svg
                className="inline-block ml-1 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="#FFB30E"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
              </svg>
              by
              <a
                className="text-gray-400 font-bold"
                href="https://themewagon.com/"
                target="_blank"
              >
                {" "}
                CastoCare-Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
