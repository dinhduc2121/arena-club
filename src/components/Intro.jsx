import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Intro() {
  const images = [
    "/images/intro1.jpg",
    "/images/intro2.jpg",
    "/images/intro3.jpg",
    "/images/intro4.jpg",
    "/images/intro5.jpg",
    "/images/intro6.jpg",
    "/images/intro7.jpg",
  ];

  return (
    <section
  id="intro"
  className="pt-20 h-auto xl:min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-6 flex items-center"
>
  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Cột trái: Chữ */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold text-teal-50">Arena Club</h1>
          <p className="text-xl text-gray-300">
            Trợ thủ đắc lực cho quán bida hiện đại – bảng điểm thông minh, kết nối không dây, chuẩn chỉnh từng cú đánh.
          </p>
          <p className="text-lg text-gray-400">
            Arena Club không chỉ là một bảng điểm – mà là trải nghiệm thi đấu chuyên nghiệp ngay tại quán bạn.
            Giao diện dễ dùng, cập nhật tự động, và khả năng đồng bộ với ứng dụng di động, tất cả gói gọn trong một giải pháp duy nhất.
          </p>
        </motion.div>

        {/* Cột phải: Slider ảnh */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            grabCursor={true}
            className="rounded-2xl overflow-hidden w-full aspect-[4/3] md:aspect-[16/9]"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
