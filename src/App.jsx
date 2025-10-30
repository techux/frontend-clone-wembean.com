import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import Pricing from "./components/Pricing/Pricing";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
