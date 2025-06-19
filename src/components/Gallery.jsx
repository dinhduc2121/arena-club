import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const inViewTop = useInView(sectionRef, { margin: "-100% 0px 0px 0px" });
  const inViewFull = useInView(sectionRef, { threshold: 1 });
  const [isVisible, setIsVisible] = useState(false);

  const images = Array.from({ length: 7 }, (_, i) => `img${i + 1}.jpg`);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (inViewTop || inViewFull) setIsVisible(true);
    if (!inViewTop && !inViewFull) setIsVisible(false);
  }, [inViewTop, inViewFull]);

  const count = isMobile ? 1 : 3;
  const visibleImages = images.slice(startIndex, startIndex + count);
  if (visibleImages.length < count) {
    visibleImages.push(...images.slice(0, count - visibleImages.length));
  }

  return (
    <motion.section
      ref={sectionRef}
      id="gallery"
      className="text-center bg-black text-white py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-10">Hình ảnh sản phẩm</h2>

      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-[10px] w-full`}>
        {visibleImages.map((name, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-64 sm:h-80 md:h-[360px] bg-[#111] border border-gray-700 shadow-lg overflow-hidden flex items-center justify-center"
          >
            <img
              src={`/images/${name}`}
              alt={`Ảnh ${name}`}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      <p className="text-sm mt-8 text-gray-400 italic">
        Hình ảnh thực tế từ bảng điểm Arena
      </p>
    </motion.section>
  );
}
