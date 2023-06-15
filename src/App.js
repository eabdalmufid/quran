import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import DetailNabi from "./DetailNabi";
import Story from "./Story";
import NavBars from "./component/Navbar";
import Pray from "./Pray";
import DetailPray from "./component/DetailPray";
import "./css/style.css";
import HomeApp from "./HomeApp";

function App() {
  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<HomeApp />}></Route>
        <Route path="/surah/" element={<Home />}></Route>
        <Route path="/surah/:key" element={<Detail />}></Route>
        <Route path="/story/" element={<Story />}></Route>
        <Route path="/story/:key" element={<DetailNabi />}></Route>
        <Route path="/pray/" element={<Pray />}></Route>
        <Route path="/pray/" element={<Pray />}></Route>
        <Route path="/pray/:key" element={<DetailPray />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
