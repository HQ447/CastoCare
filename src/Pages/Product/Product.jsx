import { useSelector } from "react-redux";

function Product() {
  const tempArr = useSelector((state) => state.store.tempArr);
  const foodItems = useSelector((state) => state.store.foodItems);

  const resID = useSelector((state) => state.store.resID);

  return (
    <div className="pt-16 px-20">
      <div className=" my-7">
        {tempArr.map((obj) => (
          <div key={obj.index} className=" flex ">
            <div className=" w-2/6 flex  items-center  ">
              <img src={obj.image} alt="" className=" w-3/4 rounded-lg" />
            </div>
            <div className=" w-2/3">
              <h2 className=" text-3xl font-bold">{obj.ResturentName}</h2>
              <p className=" my-3">{obj.description}</p>
              <p className=" text-xl">
                <b>Ratings</b> {obj.rating}
              </p>
              <p>{resID}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full bg-red-300 flex flex-col">
        <h1 className=" font-bold text-2xl w-full text-center">Menu</h1>
        <div className="flex gap-2">
          {foodItems
            .filter((obj) => {
              if (obj.shopID == resID) {
                return obj;
              }
            })

            .map((obj) => (
              <div key={obj.index}>
                <h1>{obj.shopID}</h1>
                <h1>{obj.itemName}</h1>
                <h1>{obj.itemPrice}</h1>
                <h1>{obj.quantity}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
