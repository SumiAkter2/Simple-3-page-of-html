// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Home/Navbar";
import NotFound from "./Component/NotFound/NotFound";
import Page2 from "./Component/Page2/Page2";
import Page3 from "./Component/Page3/Page3";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Page2 /> */}

      <Footer />
    </div>
  );
}

export default App;
