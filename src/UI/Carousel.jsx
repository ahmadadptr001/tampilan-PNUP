import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";


const DEFAULT_ITEMS = [
  {
    id: 1,
    title: "pimpinan politeknik  ",
    src: "https://www.poliupg.ac.id/uploads/slideshow/Pimpinan_Politeknik_Negeri_Ujung_Pandang_gambar_slideshow_2025_09_24_10_19_09.png",
  },
  {
    id: 2,
    title: "Teknik Sipil",
    src: "https://www.poliupg.ac.id/uploads/slideshow/Teknik_Sipil_gambar_slideshow_2025_09_24_10_21_00.png",
  },
  {
    id: 3,
    title: "Teknik ELektro",
    src: "https://www.poliupg.ac.id/uploads/slideshow/Teknik_Eletro_gambar_slideshow_2025_09_24_10_21_56.png",
  },
  {
    id: 4,
    title: "Akuntansi",
    src: "https://www.poliupg.ac.id/uploads/slideshow/Akuntansi_gambar_slideshow_2025_09_24_10_25_41.png",
  },
  {
    id: 5,
    title: "Teknik Kimia",
    src: "https://www.poliupg.ac.id/uploads/slideshow/Teknik_Kimia_gambar_slideshow_2025_09_24_10_23_37.png",
  },
];

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplayDelay = 3000,
}) {
  const GAP = 16;
  const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // atur lebar item sesuai container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setItemWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const trackItemOffset = itemWidth + GAP;

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // autoplay
  useEffect(() => {
    if (!autoplayDelay) return;
    const interval = setInterval(() => {
      if (!isHovered) {
        nextItem();
      }
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplayDelay, isHovered, items.length]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full bg-base-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track */}
      <motion.div
        className="flex"
        style={{ x }}
        animate={{ x: -currentIndex * trackItemOffset }}
        transition={SPRING_OPTIONS}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="shrink-0 flex flex-col justify-center items-center bg-base-100 rounded-xl mx-2 cursor-grab active:cursor-grabbing"
            style={{
              width: itemWidth,
              minHeight: "250px",
            }}
            transition={SPRING_OPTIONS}
          >
            <img
              src={item.src}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Controls */}
      <button
        className="btn btn-circle btn-sm absolute top-1/2 left-2 -translate-y-1/2"
        onClick={prevItem}
      >
        ❮
      </button>
      <button
        className="btn btn-circle btn-sm absolute top-1/2 right-2 -translate-y-1/2"
        onClick={nextItem}
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-neutral" : "bg-base-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
