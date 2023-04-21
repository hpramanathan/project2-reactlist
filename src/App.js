import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import Lists from "./routes/Lists";
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';

export default function App() {

return (
    <>
      <Navbar />
      <Routes>
         {/* The component routes */}
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}