import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      {/* <img
        src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/hero-header.png"
        alt=""
      /> */}
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
