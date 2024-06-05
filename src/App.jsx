import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import { Features } from "./components/Features";
import Metrix from "./components/Metrix";
import ReviewCard from "./components/ReviewCard";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="
      min-h-screen flex flex-col "
    >
      <Navbar />
      <Herosection />
      <Features />
      <Metrix />
      <ReviewCard />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
