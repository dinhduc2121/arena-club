import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const inViewLeft = useInView(leftRef, { margin: "-100% 0px 0px 0px" });
  const inViewRight = useInView(rightRef, { margin: "-100% 0px 0px 0px" });

  const inViewFullLeft = useInView(leftRef, { threshold: 1 });
  const inViewFullRight = useInView(rightRef, { threshold: 1 });

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    if (inViewLeft || inViewFullLeft) setShowLeft(true);
    if (!inViewLeft && !inViewFullLeft) setShowLeft(false);
  }, [inViewLeft, inViewFullLeft]);

  useEffect(() => {
    if (inViewRight || inViewFullRight) setShowRight(true);
    if (!inViewRight && !inViewFullRight) setShowRight(false);
  }, [inViewRight, inViewFullRight]);

  return (
    <section
      id="hero"
      className="bg-gray-800 text-white py-24 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      <motion.div
        ref={leftRef}
        initial={{ x: -100, opacity: 0 }}
        animate={showLeft ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full lg:w-3/5 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Arena Club – Bảng điểm thông minh cho mọi bàn bida hiện đại
        </h1>
        <div className="text-gray-400 text-sm md:text-base space-y-2">
          <p>🔹 <strong>Hiển thị điểm số trực tiếp:</strong> Mỗi cú đánh đều được cập nhật tức thời lên bảng.</p>
          <p>🔹 <strong>Kết nối không dây:</strong> Ghép nối dễ dàng với điện thoại hoặc tablet.</p>
          <p>🔹 <strong>Thiết kế hiện đại:</strong> Mỏng, nhẹ, đèn LED sắc nét.</p>
          <p>🔹 <strong>Tiết kiệm chi phí:</strong> Giảm sai sót ghi điểm, tăng uy tín.</p>
          <p>🔹 <strong>Phù hợp mọi mô hình:</strong> Giải trí lẫn giải đấu chuyên nghiệp.</p>
        </div>
        <a
          href="#contact"
          className="inline-block mt-4 bg-white text-black font-bold py-3 px-6 rounded hover:bg-gray-200 transition"
        >
          📞 Nhận tư vấn & lắp đặt ngay
        </a>
      </motion.div>

      <motion.div
        ref={rightRef}
        initial={{ x: 100, opacity: 0 }}
        animate={showRight ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full lg:w-2/5"
      >
        <img
          src="/images/img.jpg"
          alt="Bảng điểm Arena Club"
          className="rounded-xl shadow-lg w-full"
        />
      </motion.div>
    </section>
  );
}
