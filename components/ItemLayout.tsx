"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const ItemLayout = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.5 }}
      // viewport={{ once: true }}
      className={clsx(
        "bg-[#13162D] bg-opacity-75 backdrop-blur-md shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
