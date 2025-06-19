import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 text-center"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold text-teal-400">
          Arena Club
        </h1>
        <p className="text-xl text-gray-300">
          Trợ thủ đắc lực cho quán bida hiện đại – bảng điểm thông minh, kết nối không dây, chuẩn chỉnh từng cú đánh.
        </p>
      </motion.div>
    </section>
  );
}
