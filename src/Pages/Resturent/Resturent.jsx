import "./resturent.css";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

function Resturent() {
  const restArr = useSelector((state) => state.store.restArr);
  return (
    <div className=" pt-16 px-20">
      <h1 className=" text-3xl w-full text-center font-bold py-7">
        All Resturents
      </h1>
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
    </div>
  );
}

export default Resturent;
