import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import LiveFromFarm from "@/components/site/LiveFromFarm";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";

const Landing = () => {
  return (
    <div data-testid="landing-page" className="bg-[#FAF8F5] text-[#1A362D]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <LiveFromFarm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
