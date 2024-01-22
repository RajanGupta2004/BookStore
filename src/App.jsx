import "./App.css";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedAuthor from "./components/FeaturedAuthor";
import TopSelling from "./components/TopSelling";
import FeaturedBooks from "./components/FeaturedBooks";
import WeekOfBook from "./components/WeekOfBook";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedAuthor />
      <TopSelling />
      <FeaturedBooks />
      <WeekOfBook />
      <Footer />
    </>
  );
}

export default App;
