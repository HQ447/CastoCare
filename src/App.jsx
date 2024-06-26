import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Team from "./Pages/Team/Team";

function App() {
  return (
    <>
      {/* <img
        src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/hero-header.png"
        alt=""
      /> */}
      <Nav />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
