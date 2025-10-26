import Advertisements from "./components/advertisement/advertisement";
import Blogs from "./components/blog/blog";
import Options from "./components/categoryoptions";
import Slider from "./components/slider";
import Testimonials from "./components/testimonials";
import "./globals.css";
import ProductList from "./product/productlist";

export default function Home() {
  return (
    <>
      <div>
        <Slider />
        <Options />
        <ProductList />
        <Advertisements />
        <Blogs />
        <Testimonials />
      </div>
    </>
  );
}
