import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../../store/store";

function Product() {
  const tempArr = useSelector((state) => state.store.tempArr);
  const cart = useSelector((state) => state.store.cart);
  const foodItems = useSelector((state) => state.store.foodItems);
  const dispatch = useDispatch();
  const resID = useSelector((state) => state.store.resID);

  function handleClick(obj) {
    if (cart.indexOf(obj) !== -1) return;
    else {
      dispatch(addToCart(obj));
    }
  }

  return (
    <div className="pt-16 px-20">
      <div className=" my-7">
        {tempArr.map((obj) => (
          <div key={obj.id} className=" flex ">
            <div className=" w-2/6 flex  items-center  ">
              <img src={obj.image} alt="" className=" w-3/4 rounded-lg" />
            </div>
            <div className=" w-2/3">
              <h2 className=" text-3xl font-bold">{obj.ResturentName}</h2>
              <p className=" my-3">{obj.description}</p>
              <p className=" text-xl flex items-center gap-3">
                <b>Ratings</b>
                <span className="flex">
                  <FaStar className="text-yellow-400 " />
                  <FaStar className="text-yellow-400 " />
                  <FaStar className="text-yellow-400 " />
                </span>
                {obj.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full  rounded-xl flex flex-col px-2 my-4 py-5">
        <h1 className=" font-bold text-2xl w-full text-center mb-2">Menu</h1>
        <div className="flex gap-2">
          {foodItems
            .filter((obj) => {
              if (obj.shopID == resID) {
                return obj;
              }
            })

            .map((obj) => (
              <div
                key={obj.index}
                className="  p-4 w-60 rounded-3xl shadow-md shadow-[#8d6962] bg-white "
              >
                <img
                  src={obj.img}
                  alt="loading error"
                  className=" w-full rounded-md"
                />
                <div className="flex">
                  <span className=" rounded-full  px-2 border-2 text-sm bg-[#dddfa4]">
                    #custocare
                  </span>
                </div>
                <h1 className=" text-lg font-bold">{obj.itemName}</h1>
                <p className=" text-sm my-1">{obj.des}</p>

                <div className="flex justify-between items-center mt-3">
                  <h1 className=" font-bold">RS {obj.itemPrice}</h1>
                  <button
                    className=" bg-[#ff5900] text-white rounded-lg  py-1 px-2  hover:scale-95 transition-all"
                    onClick={() => handleClick(obj)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
