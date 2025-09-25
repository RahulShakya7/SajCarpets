import Options from "./catalogue/categoryoptions";
import Advertisements from "./components/advertisement/advertisement";
import Blogs from "./components/blogs/blog";
import Footer from "./components/footer/footer";
import Header from "./components/navbar/header";
import Slider from "./components/slider";
import Testimonials from "./components/testimonails";
import "./globals.css";
import Newsletter from "./newsletter/newsletter";
import ProductList from "./product/productlist";

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
