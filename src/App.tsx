import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shadcn/Navbar";
import Home from "./components/features/Home";
import About from "./components/features/About";
//import Cart from "./components/features/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Cart" element={<Cart />} />*/}
      </Routes>
    </>
  );
}

export default App;
