import './App.css';
import { Routes, Route } from "react-router-dom"
import Add from "./routes/Add";
import Home from "./routes/Home";
import Lists from "./routes/Lists";
import Navbar from './Navbar';

export default function App() {

return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </>
  )
}

