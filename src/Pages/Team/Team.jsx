import { useSelector } from "react-redux";

function Team() {
  const ourTeam = useSelector((state) => state.store.ourTeam);
  return (
    <div className="px-20 py-32 min-h-screen text-justify  ">
      <h1 className="w-full text-center text-3xl font-bold mb-4">
        Meet Our Team
      </h1>
      <div className="flex justify-center gap-20 flex-wrap py-6">
        {ourTeam.map((obj) => (
          <div
            key={ourTeam.index}
            className="flex flex-col items-center w-64 shadow-xl p-4 rounded-lg"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
              alt="loading error"
              className=" w-28 "
            />
            <h1 className="my-3 font-bold">{obj.name}</h1>
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus iure exercitationem libero ipsam perspiciatis. Esse
            </p>
            <h1
              style={{ backgroundColor: "#F17228" }}
              className="font-bold text-white text-lg my-2 w-full py-1 text-center rounded-md"
            >
              {obj.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
