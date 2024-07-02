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

      {/* <br />
      <br />
      <h1 className=" text-2xl  font-bold my-2">Our Mission</h1>
      At Custo Care, we aim to make your shopping experience as simple and
      enjoyable as possible. We believe that everyone deserves quick access to
      fresh, quality food without the hassle. <br />
      <br />
      <h1 className=" text-2xl  font-bold my-2">What We Offer</h1>
      <span className="underline">Variety: </span> From fresh produce to
      household essentials, we have everything you need.
      <br />
      <br />
      <span className=" underline">Top Brands:</span> We work with both local
      and global brands to bring you a wide selection of products. Simple
      Ordering: Our website and app are easy to use, making shopping a breeze.
      <br /> <br />
      <span className=" underline">Fast Delivery:</span> We deliver your order
      quickly and in perfect condition. Customer Focused: Your satisfaction is
      our priority. We're always here to help with any questions or concerns.
      Our Promise We are dedicated to supporting our local communities and
      protecting the environment. By choosing local products and eco-friendly
      packaging, we reduce our impact on the planet. <br />
      <br />
      <span className=" underline">Join Us </span> Try Custo Care today and see
      how easy grocery shopping can be. Whether you need your weekly groceries
      or last-minute items, we're here to help. Thank you for choosing Custo
      Care – we’re excited to serve you! */}
    </div>
  );
}

export default About;
