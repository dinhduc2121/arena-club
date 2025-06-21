import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Specs from "./components/Specs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Customer from "./components/Comment";
import Intro from "./components/Intro";
import { motion } from "framer-motion";
import Customers from "./components/Customers";
import BrandAmbassadors from "./components/BrandAmbassadors";

export default function App() {

      const accordionVariants = {
        hidden: (direction) => ({
          opacity: 0,
          x: direction === "left" ? -100 : 100,
        }),
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
        exit: (direction) => ({
          opacity: 0,
          x: direction === "left" ? -100 : 100,
          transition: { duration: 0.6 },
        }),
      };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#012222] to-black text-white font-sans">
      <Navbar />
      <main className="pt-5 space-y-1">
        <Intro />
        <Hero />
        <Gallery />
        <Customers />
        <BrandAmbassadors />  
<section
  id="details"
  className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-gray-800 text-white"
>
  <h2 className="text-3xl font-bold mb-12 text-center">Chi tiết sản phẩm</h2>

  {[
    { title: "Tính năng bảng điểm", content: <Features /> },
    { title: "Thông số kỹ thuật", content: <Specs /> },
    { title: "Chia sẻ từ khách hàng", content: <Customer /> },
    { title: "Bảng giá", content: <Pricing /> },
  ].map((item, index) => {
    const direction = index % 2 === 0 ? "left" : "right";

    return (
      <Accordion
        key={index}
        title={item.title}
        direction={direction}
      >
        {item.content}
      </Accordion>
    );
  })}
</section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
