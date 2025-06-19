import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Partners() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const inViewSectionTop = useInView(sectionRef, { margin: "-100% 0px 0px 0px" });
  const inViewSectionFull = useInView(sectionRef, { threshold: 1 });

  const inViewLeft = useInView(leftRef, { margin: "-100% 0px 0px 0px" });
  const inViewFullLeft = useInView(leftRef, { threshold: 1 });

  const inViewRight = useInView(rightRef, { margin: "-100% 0px 0px 0px" });
  const inViewFullRight = useInView(rightRef, { threshold: 1 });

  const [showSection, setShowSection] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    if (inViewSectionTop || inViewSectionFull) setShowSection(true);
    if (!inViewSectionTop && !inViewSectionFull) setShowSection(false);
  }, [inViewSectionTop, inViewSectionFull]);

  useEffect(() => {
    if (inViewLeft || inViewFullLeft) setShowLeft(true);
    if (!inViewLeft && !inViewFullLeft) setShowLeft(false);
  }, [inViewLeft, inViewFullLeft]);

  useEffect(() => {
    if (inViewRight || inViewFullRight) setShowRight(true);
    if (!inViewRight && !inViewFullRight) setShowRight(false);
  }, [inViewRight, inViewFullRight]);

  const khachHangImages = Array.from({ length: 4 }, (_, i) => `kh${i + 1}.jpg`);
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
    <motion.section
      ref={sectionRef}
      id="partners"
      className="bg-black text-white py-20 w-full px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={showSection ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Khách hàng & Đối tác</h2>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        <motion.div
          ref={leftRef}
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={showLeft ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Khách hàng</h3>
          <div className="grid grid-cols-2 gap-6">
            {khachHangImages.map((img, i) => (
              <div
                key={i}
                className="p-4 rounded bg-[#111] border border-gray-700 shadow-md text-center"
              >
                <img
                  src={`/images/${img}`}
                  alt={`Khách hàng ${i + 1}`}
                  className="w-full h-32 object-contain mb-2 mx-auto"
                  draggable={false}
                />
                <p className="text-sm">Những khách hàng đã sử dụng sản phẩm và đánh giá tốt</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={rightRef}
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={showRight ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Đối tác</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {doiTacData.map((dt, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-700 p-4 rounded shadow-md"
              >
                <img
                  src={`/images/${dt.img}`}
                  alt={`Đối tác ${idx + 1}`}
                  className="w-full h-32 object-contain mb-2"
                  draggable={false}
                />
                <p className="text-sm text-gray-200">{dt.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
