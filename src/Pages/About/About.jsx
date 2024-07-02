function About() {
  return (
    <div className="px-20 py-32 min-h-screen text-justify -xsm:px-3 ">
      <h1 className="w-full text-center text-3xl font-bold mb-10">About Us</h1>
      <div className="flex flex-wrap-reverse w-full -sm:gap-10">
        <div className="px-2 w-full md:w-1/2 mb-6 md:mb-0">
          <p>
            Welcome to Custo Care! We make getting your food and groceries easy,
            fast, and reliable. Our goal is to bring you the best products right
            to your doorstep, so you can spend more time enjoying your day.
            Welcome to Custo Care! We make getting your food and groceries easy,
            fast, and reliable. Our goal is to bring you the best products right
            to your doorstep, so you can spend more time enjoying your day.
            Welcome to Custo Care! We make getting your food and groceries easy,
            fast, and reliable. Our goal is to bring you the best products right
            to your doorstep, so you can spend more time enjoying your day.{" "}
          </p>
          <button
            className="rounded-sm py-2 px-5 text-white font-bold mt-7 -xsm:w-full "
            style={{ backgroundColor: "#f17228" }}
          >
            Read More
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            height="305"
            src="https://www.youtube.com/embed/XHp2GDL-pkA?controls=0&autoplay=1&loop=1&playlist=XHp2GDL-pkA"
            className="rounded-lg w-3/4 -xsm:w-full"
            title="About Us Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
