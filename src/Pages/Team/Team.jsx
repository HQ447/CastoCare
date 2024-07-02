import { useSelector } from "react-redux";

function Team() {
  const ourTeam = useSelector((state) => state.store.ourTeam);
  return (
    <div className="px-20 py-32 min-h-screen text-justify -xsm:px-3  ">
      <h1 className="w-full text-center text-3xl font-bold mb-4">
        Meet Our Team
      </h1>
      <div className="flex flex-col justify-center gap-10  flex-wrap py-6">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center w-64 shadow-xl p-4 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
              alt="loading error"
              className=" w-28 "
            />
            <h1 className="my-3 font-bold">Muhammad Talha</h1>
            <p className=" text-justify">
              Visionary leader and driving force behind the startup. Passionate
              about innovation and dedicated to turning ideas into reality.
            </p>
            <h1
              style={{ backgroundColor: "#F17228" }}
              className="font-bold text-white text-lg my-2 w-full py-1 text-center rounded-md"
            >
              Founder
            </h1>
          </div>
          <div className="flex flex-col items-center w-64 shadow-xl p-4 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
              alt="loading error"
              className=" w-28 "
            />
            <h1 className="my-3 font-bold">Obaid Afridi</h1>
            <p className=" text-justify">
              Strategic thinker and problem solver. Collaborates closely with
              the founder to shape the company’s direction and ensures smooth
              operations.
            </p>
            <h1
              style={{ backgroundColor: "#F17228" }}
              className="font-bold text-white text-lg my-2 w-full py-1 text-center rounded-md"
            >
              Co-Founder
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {ourTeam.map((obj) => (
            <div
              key={ourTeam.index}
              className="flex flex-col items-center w-64 shadow-xl p-4 rounded-lg"
            >
              <img
                src={obj.img}
                className=" w-28 border-2 border-black border-solid rounded-full "
              />
              <h1 className="my-3 font-bold">{obj.name}</h1>
              <p className="">{obj.des}</p>
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
    </div>
  );
}

export default Team;
