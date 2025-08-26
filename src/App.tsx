import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shadcn/Navbar";
import Home from "./components/features/Home";
import About from "./components/features/About";
//import Menu from "./pages/Menu";
//import About from "./pages/About";
//import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/" element={<Home />} />*/}
        {/* <Route path="/" element={<Home />} />*/}
      </Routes>
    </>
  );
}

export default App;
