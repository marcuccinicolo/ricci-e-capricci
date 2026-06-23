"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Immagine con zoom "very soft" in hover (le immagini sono protagoniste).
 * Il wrapper ha overflow nascosto; lo zoom agisce solo sulla foto.
 */
export default function ZoomImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  rounded = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`group relative overflow-hidden ${
        rounded ? "rounded-2xl" : ""
      } ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        initial={false}
        whileHover={reduce ? undefined : { scale: 1.06 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
