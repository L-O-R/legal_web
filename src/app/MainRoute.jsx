import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import { Routes, Route } from "react-router-dom";

const MainRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default MainRoute;
