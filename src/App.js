import './App.css';
import { Routes, Route } from "react-router-dom"
import Favourites from "./routes/Favourites";
import Home from "./routes/Home";
import Lists from "./routes/Lists";
import Navbar from './Navbar';

export default function App() {

return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </>
  )
}

