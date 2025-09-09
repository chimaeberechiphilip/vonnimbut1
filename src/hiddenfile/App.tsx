import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

import Products from "./pages/Products";
import ZincOre from "./pages/products/ZincOre";
import LeadOre from "./pages/products/LeadOre";
import Monazite from "./pages/products/Monazite";
import Lithium from "./pages/products/Lithium";
import Tin from "./pages/products/Tin";
import IronOre from "./pages/products/IronOre";
import Zircon from "./pages/products/Zircon";
import Columbite from "./pages/products/Columbite";
import Illuminate from "./pages/products/Illuminate";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/zinc-ore" element={<ZincOre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        {/* Placeholder routes for future development */}
        <Route path="/products/lead-ore" element={<LeadOre />} />
        <Route path="/products/monazite" element={<Monazite />} />
        <Route path="/products/lithium" element={<Lithium />} />
        <Route path="/products/iron-ore" element={<IronOre />} />
        <Route path="/products/tin" element={<Tin />} />
        <Route path="/products/zircon" element={<Zircon />} />
        <Route path="/products/columbite" element={<Columbite />} />
        <Route path="/products/Illuminate" element={<Illuminate />} />

        <Route path="/export-logistics" element={<About />} />
        <Route path="/industries" element={<About />} />
        <Route path="/quality" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/news" element={<About />} />
        <Route path="/faq" element={<Contact />} />
        <Route path="/tracking" element={<Contact />} />
        <Route path="/terms" element={<About />} />
        <Route path="/privacy" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
