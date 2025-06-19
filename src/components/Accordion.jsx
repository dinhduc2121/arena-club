import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Accordion({ title, children, direction = "left" }) {
  const ref = useRef(null);

  const inViewTop = useInView(ref, {
    margin: "-100% 0px 0px 0px",
  });

  const inViewFull = useInView(ref, {
    threshold: 1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (inViewTop || inViewFull) {
      setIsVisible(true);
    }

    if (!inViewTop && !inViewFull) {
      setIsVisible(false);
    }
  }, [inViewTop, inViewFull]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      animate={
        isVisible
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: direction === "left" ? -100 : 100 }
      }
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-[#111] border border-gray-700 rounded-xl overflow-hidden mb-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition"
      >
        <span className="text-xl font-semibold">{title}</span>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="px-6 overflow-hidden"
      >
        <div className="py-4">{children}</div>
      </motion.div>
    </motion.div>
  );
}
