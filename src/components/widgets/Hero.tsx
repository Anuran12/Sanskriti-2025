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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 200, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [isMobile ? -300 : -900, isMobile ? 300 : 900]
    ),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [isMobile ? -300 : -900, isMobile ? -500 : -1200]
    ),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [isMobile ? 5 : 12, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [isMobile ? 8 : 15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2],
      [isMobile ? -220 : -600, isMobile ? 180 : 400]
    ),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="-z-10 h-auto overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] w-full"
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
        <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 mb-6 sm:mb-10 md:mb-20 overflow-visible w-screen -ml-[16px] sm:-ml-[24px] md:-ml-[32px] pl-0">
          {firstRow.map((image, index) => (
            <ImageCard image={image} translate={translateX} key={index} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-6 sm:mb-10 md:mb-20 space-x-4 sm:space-x-10 md:space-x-20 overflow-visible w-screen -ml-[16px] sm:-ml-[24px] md:-ml-[32px] pl-0">
          {secondRow.map((image, index) => (
            <ImageCard
              image={image}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 pb-[16rem] sm:pb-[24rem] md:pb-[32rem] lg:pb-[32rem] overflow-visible w-screen -ml-[16px] sm:-ml-[24px] md:-ml-[32px] pl-0">
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
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "mt-20 text-center text-4xl md:text-8xl ",
          tiaraFont.className
        )}
      >
        Unraveling...
      </motion.h2>
      {/* <ShiftingCountdown targetDate="04/05/2025" /> */}
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
      className="h-40 sm:h-80 md:h-96 w-[12rem] sm:w-[20rem] md:w-[30rem] relative flex-shrink-0 origin-left"
    >
      <Image
        src={image.src}
        height="600"
        width="600"
        unoptimized={image.src.includes("githubusercontent.com")}
        className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
        alt={image.alt}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
    </motion.div>
  );
};
