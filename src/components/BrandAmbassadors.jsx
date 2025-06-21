import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function BrandAmbassadors() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-50% 0px -50% 0px" });
  const inViewFull = useInView(sectionRef, { threshold: 1 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView || inViewFull) setShow(true);
    else setShow(false);
  }, [inView, inViewFull]);

  const doiTacData = [
    {
      img: "dt1.jpg",
      desc: "Arena hợp tác cùng Dương Quốc Hoàng – Cơ thủ số 1 Việt Nam.",
    },
    {
      img: "dt2.jpg",
      desc: "Arena hợp tác cùng Seo Seo A – cơ thủ hàng đầu Hàn Quốc.",
    },
    {
      img: "dt3.jpg",
      desc: "Hollywood mở showroom billiards dưới sự vận hành của Arena.",
    },
    {
      img: "dt4.jpg",
      desc: "Arena hợp tác cùng Chiêm Hồng Thái – Vô địch Carom 3 băng 2024.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="ambassadors"
      className="bg-black text-white py-20 px-4 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">
          Đại sứ thương hiệu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {doiTacData.map((dt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8,}}
              className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-teal-500/30 hover:border-teal-400 transition-all duration-300"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={`/images/${dt.img}`}
                alt={`Đối tác ${idx + 1}`}
                className="w-full h-36 sm:h-40 object-cover rounded-md mb-4 transition-transform duration-300"
                draggable={false}
              />
              <p className="text-sm text-gray-200 leading-relaxed">{dt.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
