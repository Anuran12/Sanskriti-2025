"use client";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React from "react";
import { LampContainer } from "../ui/lamp";
import ShiftingCountdown from "./Countdown";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const HeroParallax = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) => {
  const firstRow = images.slice(0, 5);
  const secondRow = images.slice(5, 10);
  const thirdRow = images.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="-z-10 h-auto overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((image, index) => (
            <ImageCard image={image} translate={translateX} key={index} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((image, index) => (
            <ImageCard
              image={image}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 pb-[32rem]">
          {thirdRow.map((image, index) => (
            <ImageCard image={image} translate={translateX} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <LampContainer />
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn("pt-20 text-center text-xl md:text-4xl")}
      >
        F.E.T.S.U. PRESENTS
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "pt-20 text-center text-5xl md:text-6xl lg:text-9xl text-tiara_red",
          tiaraFont.className
        )}
      >
        Sanskriti 2025
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "mt-2 text-center text-xl md:text-4xl",
          tiaraFont.className
        )}
      >
        redefining culture...
      </motion.h2>
      <ShiftingCountdown targetDate="04/05/2025" />
    </>
  );
};

export const ImageCard = ({
  image,
  translate,
}: {
  image: {
    src: string;
    alt: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="h-96 w-[30rem] relative flex-shrink-0"
    >
      <Image
        src={image.src}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={image.alt}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
    </motion.div>
  );
};
