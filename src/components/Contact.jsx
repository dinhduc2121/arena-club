import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef(null);
  const inViewTop = useInView(ref, { margin: "-100% 0px 0px 0px" });
  const inViewFull = useInView(ref, { threshold: 1 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inViewTop || inViewFull) setVisible(true);
    if (!inViewTop && !inViewFull) setVisible(false);
  }, [inViewTop, inViewFull]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="text-center bg-black text-white px-4 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-10">Liên hệ với chúng tôi</h2>

      {submitted ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 font-medium"
        >
          ✅ Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto grid gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-400 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-400 w-full"
          />
          <textarea
            name="message"
            placeholder="Nội dung tin nhắn"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            className="p-3 rounded border border-gray-700 bg-black text-white placeholder-gray-400 w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Gửi tin nhắn
          </button>
        </motion.form>
      )}
    </motion.section>
  );
}
