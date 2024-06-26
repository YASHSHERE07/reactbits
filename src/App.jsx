import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Components from "./pages/Components";
import Documentation from "./pages/Documentation";
import HomePage from "./pages/HomePage";
import ButtonTab from "./components/ButtonTab";
import AvatarsTab from "./components/AvatarsTab";
import CardTab from "./components/CardTab";
import FeaturesTab from "./components/FeaturesTab";
import HeroTab from "./components/HeroTab";
import ReviewsTab from "./components/ReviewsTab";
import CartTab from "./components/CartTab";
import TestimonialsTab from "./components/TestimonialsTab";
import ErorrTab from "./components/ErorrTab";
import Templates from "./pages/Templates";
import TemplatePreview from "./pages/TemplatePreview";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buttons" element={<ButtonTab />} />
          <Route path="/avatars" element={<AvatarsTab />} />
          <Route path="/cards" element={<CardTab />} />
          <Route path="/filter" element={<FeaturesTab />} />
          <Route path="/hero" element={<HeroTab />} />
          <Route path="/reviews" element={<ReviewsTab />} />
          <Route path="/cart" element={<CartTab />} />
          <Route path="/testimonials" element={<TestimonialsTab />} />
          <Route path="/erorr404" element={<ErorrTab />} />
          <Route path="/components" element={<Components />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/template/:templateId" element={<TemplatePreview />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
