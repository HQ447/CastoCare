import "./Home.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import bike from "../../assets/bike.jpg";

function Home() {
  const restArr = useSelector((state) => state.store.restArr);

  return (
    <div className="Home ">
      <ReactWhatsapp number="+92 3336575249" message="How can I help you?">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
          alt=""
          className=" w-16 fixed bottom-10 right-5 z-50  hover:scale-110 transition-all"
        />
      </ReactWhatsapp>
      <div className="front-sec pt-20 h-screen -md:h-auto -md:pt-24 -md:pb-10 -md:gap-4 px-20 flex flex-wrap-reverse w-full -sm:px-10 -xsm:px-3">
        <div className="flex flex-col left w-full md:w-1/2 justify-center h-full overflow-hidden ">
          <div className=" w-full ">
            <h1 className="lg-heading text-white -md:text-center head-1">
              Are You Starving?
            </h1>
          </div>
          <p className="md-heading text-gray-600 -md:text-center ">
            Within a few clicks, find meals <br /> that are accessible near you
          </p>
          <div className="bg-white rounded-md p-4 my-3">
            <div className="btn-box flex py-3 -xsm:gap-1">
              <button className="DeliveryBtn flex gap-1 items-center text-gray-400 py-2 px-3 rounded-md hover:bg-orange-300">
                <MdDeliveryDining className="text-3xl" />
                <span>Delivery</span>
              </button>
              <button className="pickupBtn gap-1 items-center text-gray-400 flex py-2 px-3 rounded-md hover:bg-orange-300">
                <FaBagShopping className="text-xl" />
                <span>Pickup</span>
              </button>
            </div>
            <div className="flex items-center gap-4 w-full ">
              <div className="flex items-center input-box rounded-md gap-3 p-3 w-3/4 -mmd:w-7/12 -md:w-3/5">
                <FaLocationDot style={{ color: "#F17228" }} />
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="bg-transparent outline-none"
                />
              </div>
              <button
                className="text-white font-bold p-3 rounded-md w-1/3 -mmd:w-2/5  -md:w-1/3  hover:scale-95 transition-all"
                style={{ backgroundColor: "#F17228" }}
              >
                Find Food
              </button>
            </div>
          </div>
        </div>
        <div className=" image-slider right w-full md:w-1/2 flex justify-center items-center">
          <img src={bike} alt="img" className="main-img w-96" />
        </div>
      </div>

      <section className="py-0 px-20 my-20  -sm:px-10 -xsm:px-3">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2 mt-7">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-3 pb-4 px-2">
              <div className="card h-full">
                <div className="relative">
                  <img
                    className="rounded-3 w-full rounded-3xl h-52 "
                    src="https://i.tribune.com.pk/media/images/WhatsApp-Image-2022-04-09-at-3-15-22-PM1649499342-0/WhatsApp-Image-2022-04-09-at-3-15-22-PM1649499342-0.jpeg"
                    alt="..."
                  />
                  <div
                    className="absolute bottom-0 left-0 rounded-tr-3xl front-sec
                  "
                  >
                    <div className="bg-primary p-4 rounded-tr-3xl ">
                      <div className="flex justify-between items-center">
                        <div className="text-white text-4xl">25%</div>
                        <div className="text-white text-sm">
                          <div className="font-normal text-sm mt-2"> Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0">
                  <h5 className="font-bold text-gray-900 truncate text-xl mt-1">
                    Full Beef Karahi
                  </h5>
                  <span className="bg-red-100 py-1 px-3 inline-block rounded-xl mt-2">
                    <span className="text-red-500 text-lg font-bold">
                      6 days Remaining
                    </span>
                  </span>
                </div>
                <a className="stretched-link" href="#"></a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-3 pb-4 px-2">
              <div className="card h-full">
                <div className="relative">
                  <img
                    className="rounded-3 w-full rounded-3xl h-52 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxUNGrCbT0SCIlnn5VZknc-HCxy0WWG1wIA&s"
                    alt="..."
                  />
                  <div className="absolute bottom-0 left-0 rounded-tr-3xl front-sec ">
                    <div className=" p-4 rounded-tr-3xl ">
                      <div className="flex justify-between items-center ">
                        <div className="text-white text-4xl ">30%</div>
                        <div className="text-white text-sm">
                          <div className="font-normal text-sm mt-2"> Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0">
                  <h5 className="font-bold text-gray-900 truncate text-xl mt-1">
                    Combo Pack
                  </h5>
                  <span className="bg-red-100 py-1 px-3 inline-block rounded-xl mt-2">
                    <span className="text-red-500 font-bold text-lg">
                      6 days Remaining
                    </span>
                  </span>
                </div>
                <a className="stretched-link" href="#"></a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-3 pb-4 px-2  ">
              <div className="card h-full">
                <div className="relative  ">
                  <img
                    className=" w-full rounded-3xl h-52 "
                    src="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/keep-an-attractive-and-creative-name-of-your-food-combo.jpg"
                    alt="..."
                  />
                  <div className="absolute bottom-0 left-0 rounded-tr-3xl front-sec">
                    <div className="bg-primary p-4 rounded-tr-3xl ">
                      <div className="flex justify-between items-center">
                        <div className="text-white text-4xl">40%</div>
                        <div className="text-white text-sm">
                          <div className="font-normal text-sm mt-2"> Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0">
                  <h5 className="font-bold text-gray-900 truncate text-xl mt-1">
                    Fast Deals
                  </h5>
                  <span className="bg-red-100 py-1 px-3 inline-block rounded-xl mt-2">
                    <span className="text-red-500 font-bold text-lg">
                      6 days Remaining
                    </span>
                  </span>
                </div>
                <a className="stretched-link" href="#"></a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-3 pb-4 px-2">
              <div className="card h-full">
                <div className="relative">
                  <img
                    className="rounded-3 w-full rounded-3xl h-52 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDB-jJq0cw2bigYwIHiz4w2Y7jFK5rs-NLSg&s"
                    alt="..."
                  />
                  <div className="absolute bottom-0 left-0 rounded-tr-3xl front-sec">
                    <div className="bg-primary p-4 rounded-tr-3xl ">
                      <div className="flex justify-between items-center">
                        <div className="text-white text-4xl">50%</div>
                        <div className="text-white text-sm">
                          <div className="font-normal text-sm mt-2"> Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0">
                  <h5 className="font-bold text-gray-900 truncate text-xl mt-1">
                    Summer Deals
                  </h5>
                  <span className="bg-red-100 py-1 px-3 inline-block rounded-xl mt-2">
                    <span className="text-red-500 font-bold text-lg">
                      6 days Remaining
                    </span>
                  </span>
                </div>
                <a className="stretched-link" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" sec-3-bg py-10 px-20  -sm:px-10 -xsm:px-3 ">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full xl:w-3/4">
              <div className="w-full lg:w-1/2 text-center mx-auto mb-3 mb-md-5 mt-4">
                <h5 className="font-bold sec-3-heading mb-20 lg:text-5xl leading-snug ">
                  How does it work
                </h5>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                  <div className="text-center">
                    <img
                      className=" mx-auto"
                      src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/location.png"
                      height="112"
                      alt="Select location"
                    />
                    <h5 className="mt-4 font-bold">Select location</h5>
                    <p className="mb-md-0 text-gray-400">
                      Choose the location where your food will be delivered.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                  <div className="text-center">
                    <img
                      className=" mx-auto"
                      src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/order.png"
                      height="112"
                      alt="Choose order"
                    />
                    <h5 className="mt-4 font-bold">Choose order</h5>
                    <p className="mb-md-0 text-gray-400">
                      Check over hundreds of menus to pick your favorite food
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                  <div className="text-center">
                    <img
                      className=" mx-auto"
                      src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/pay.png"
                      height="112"
                      alt="Pay advanced"
                    />
                    <h5 className="mt-4 font-bold">Pay advanced</h5>
                    <p className="mb-md-0 text-gray-400">
                      It's quick, safe, and simple. Select several methods of
                      payment
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                  <div className="text-center ">
                    <img
                      className=" mx-auto"
                      src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/meals.png"
                      height="112"
                      alt="Enjoy meals"
                    />
                    <h5 className="mt-4 font-bold">Enjoy meals</h5>
                    <p className="mb-md-0 text-gray-400">
                      Food is made and delivered directly to your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="px-20 py-20  -sm:px-10 -xsm:px-3">
        <div className="">
          <div className="col-lg-7 mx-auto text-center mb-6">
            <h5 className="font-bold text-4xl mb-3">Featured Restaurants</h5>
          </div>
        </div>
        <div className="container mx-auto  flex gap-2 flex-wrap justify-between">
          {restArr.map((obj) => (
            <div
              key={obj.index}
              className="col-sm-6 col-md-4 col-lg-3 h-full mb-5 w-60 shadow-md p-2 rounded-lg -mmd:w-80"
            >
              <div className="card text-white rounded-3 relative overflow-hidden ">
                <img
                  className="img-fluid rounded-3  w-full object-cover h-48 rounded-xl"
                  src={obj.image}
                  alt="..."
                />
                <div className="absolute inset-0 ps-0"></div>
                <div className="card-body ps-0">
                  <div className="flex items-center ">
                    <img
                      className="img-fluid"
                      src="assets/img/gallery/food-world-logo.png"
                      alt=""
                    />
                    <div className="flex my-3">
                      <div className="logo rounded-full">
                        <img
                          src={obj.logo}
                          alt="logo"
                          className="rounded-full w-16"
                        />
                      </div>
                      <div className=" flex flex-col justify-center ms-4">
                        <h5 className="mb-0 font-bold text-gray-900 text-xl ">
                          {obj.ResturentName}
                        </h5>
                        <span className="flex items-center gap-1">
                          <FaStar className=" text-yellow-400 " />
                          <FaStar className=" text-yellow-400 " />
                          <FaStar className=" text-yellow-400 " />
                          <FaStar className=" text-yellow-400 " />
                          <p className="text-black ">{obj.rating}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="badge bg-green-100 px-2 py-1 rounded-md"
                    style={{ backgroundColor: "#ffb30ed4" }}
                  >
                    <span className="font-bold text-lg  p-0 text-white">
                      Opens Tomorrow
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-5 pt-8 px-20 -sm:px-10 -xsm:px-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="card mb-3 shadow-lg">
                <div className="card-body py-0">
                  <div className="flex flex-wrap justify-center">
                    <div className="order-0 md:order-1 w-full md:w-5/12 xl:w-7/12 2xl:w-8/12 g-0">
                      <img
                        className="img-fluid w-full h-full object-cover rounded-t md:rounded-r md:rounded-t-none"
                        src="https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_au:cuisines:indian-4.jpg/v1/au/restaurants/11022284.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="w-full md:w-7/12 xl:w-5/12 2xl:w-4/12  p-10 -xsm:p-3">
                      <h1 className="card-title mt-xl-5 mb-4 text-4xl font-bold">
                        Best deals <br />
                        <span
                          style={{ color: "#FFB30E" }}
                          className="text-primary text-4xl font-bold"
                        >
                          Royal Biryani Feast
                        </span>
                      </h1>
                      <p className="text-lg">
                        Savor the rich and aromatic flavors of our Royal
                        Biryani, crafted with premium basmati rice and tender
                        meat.
                      </p>
                      <div
                        className="grid py-2 text-center rounded-md text-white font-bold mt-11"
                        style={{ backgroundColor: "#FFB30E" }}
                      >
                        <a
                          className="btn btn-lg btn-primary mt-xl-6  hover:scale-95 transition-all"
                          href="#!"
                        >
                          PROCEED TO ORDER
                          <svg
                            className="w-4 h-4 ml-2 inline-block"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 pt-8 px-20 -sm:px-10 -xsm:px-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="card mb-3 shadow-lg">
                <div className="card-body py-0">
                  <div className="flex flex-wrap justify-center">
                    <div className="order-0 md:order-0 w-full md:w-5/12 xl:w-7/12 2xl:w-8/12 g-0">
                      <img
                        className="img-fluid w-full h-full object-cover rounded-t md:rounded-l md:rounded-t-none"
                        src="https://assets.epicurious.com/photos/5c4b7ab537d8ef4605419f1d/16:9/w_5840,h_3285,c_limit/St.-Patrick's-Day-Breakfast-Hash-012319.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="w-full md:w-7/12 xl:w-5/12 2xl:w-4/12 p-10 -xsm:p-3">
                      <h1 className="card-title mt-xl-5 mb-4 text-4xl font-bold">
                        Best deals <br />
                        <span
                          style={{ color: "#FFB30E" }}
                          className="text-primary text-4xl font-bold"
                        >
                          Breakfast Bonanza
                        </span>
                      </h1>
                      <p className="text-lg">
                        Start your day right with our breakfast bonanza. A
                        perfect mix of breakfast essentials to kickstart your
                        morning.
                      </p>
                      <div
                        className="grid py-2 text-center rounded-md text-white font-bold mt-11"
                        style={{ backgroundColor: "#FFB30E" }}
                      >
                        <a
                          className="btn btn-lg btn-primary mt-xl-6  hover:scale-95 transition-all"
                          href="#!"
                        >
                          PROCEED TO ORDER
                          <svg
                            className="w-4 h-4 ml-2 inline-block"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5 pt-8 px-20 -sm:px-10 -xsm:px-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="card mb-3 shadow-lg">
                <div className="card-body py-0">
                  <div className="flex flex-wrap justify-center">
                    <div className="order-0 md:order-1 w-full md:w-5/12 xl:w-7/12 2xl:w-8/12 g-0">
                      <img
                        className="img-fluid w-full h-full object-cover rounded-t md:rounded-r md:rounded-t-none"
                        src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/crispy-sandwiches.png"
                        alt="..."
                      />
                    </div>
                    <div className="w-full md:w-7/12 xl:w-5/12 2xl:w-4/12  p-10 -xsm:p-3">
                      <h1 className="card-title mt-xl-5 mb-4 text-4xl font-bold">
                        Best deals <br />
                        <span
                          style={{ color: "#FFB30E" }}
                          className="text-primary text-4xl font-bold"
                        >
                          Gourmet Burgers
                        </span>
                      </h1>
                      <p className="text-lg">
                        Savor the flavors of our gourmet burgers. Made with
                        premium ingredients, these burgers are a delight in
                        every bite.
                      </p>
                      <div
                        className="grid py-2 text-center rounded-md text-white font-bold mt-11"
                        style={{ backgroundColor: "#FFB30E" }}
                      >
                        <a
                          className="btn btn-lg btn-primary mt-xl-6  hover:scale-95 transition-all"
                          href="#!"
                        >
                          PROCEED TO ORDER
                          <svg
                            className="w-4 h-4 ml-2 inline-block"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative px-20 -sm:px-10 -xsm:px-3">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/cta-two-bg.png)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="py-7 text-center">
              <h1 className="font-bold mb-10 text-4xl text-white">
                Are you ready to order <br /> with the best deals?
              </h1>
              <a
                className="btn py-3 px-6 rounded-sm text-white font-bold  hover:scale-95 transition-all "
                href="#"
                style={{ backgroundColor: "#f17228" }}
              >
                PROCEED TO ORDER
                <svg
                  className="w-4 h-4 ml-2 inline-block"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
