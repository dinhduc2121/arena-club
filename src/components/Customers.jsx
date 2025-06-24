import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Customers() {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    margin: "-25% 0px -25% 0px",
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(inView);
  }, [inView]);

  const images = Array.from({ length: 4 }, (_, i) => `kh${i + 1}.jpg`);

  return (
    <section
      ref={sectionRef}
      id="customers"
      className="bg-gray-800 text-white py-20 px-4 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Khách hàng
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="w-full h-full p-4 bg-[#1b1b1b] rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300"
  >
    <img
      src={`/images/${img}`}
      alt={`Khách hàng ${i + 1}`}
      className="w-full h-full object-contain rounded-xl"
      draggable={false}
    />
  </motion.div>
</SwiperSlide>

          ))}
        </Swiper>
        
      </motion.div>
    </section>
  );
}
