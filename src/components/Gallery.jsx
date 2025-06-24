import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Gallery() {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    margin: "-20% 0px -20% 0px",
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(inView);
  }, [inView]);

  const images = Array.from({ length: 7 }, (_, i) => `img${i + 1}.jpg`);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="bg-black text-white w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white text-center mt-16">
          Hình ảnh sản phẩm
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg text-center">
          Khám phá những khoảnh khắc nổi bật từ bảng điểm Arena – phong cách hiện đại, chất lượng sắc nét, và thiết kế ấn tượng từng chi tiết.
        </p>

        <div className="w-full max-w-[1600px] mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((name, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="w-full h-full flex items-center justify-center bg-[#111] border border-gray-900/30 rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={`/images/${name}`}
                    alt={`Ảnh ${name}`}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
