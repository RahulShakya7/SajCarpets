import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import Advertisements from "./pages/advertisement";
import Blogs from "./pages/blog";
import Options from "./pages/categoryoptions";
import Newsletter from "./pages/newsletter";
import ProductList from "./pages/productlist";
import Slider from "./pages/slider";
import Testimonials from "./pages/testimonails";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="pt-[header-height]">
        <Header />
        <Slider />
        <Options />
        <ProductList />
        <Advertisements />
        <Blogs />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
