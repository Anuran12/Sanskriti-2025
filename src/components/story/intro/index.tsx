import clsx from "clsx";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import Image from "next/image";

import s from "./intro.module.scss";
import { cn } from "@/lib/utils";
import { tiaraFont } from "@/lib/fonts";

export const LabIntro = () => {
  return (
    <Scrollytelling.Root start="top bottom" end="bottom top" scrub={1.1}>
      <div className={s.container}>
        <Scrollytelling.Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: 40, unit: "px" },
          }}
        >
          <svg
            width="732"
            height="301"
            viewBox="0 0 732 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.backgroundSvg}
          >
            <path
              d="M628.193 67.9406C563.929 76.1379 499.499 80.8854 435.955 96.0051C305.698 126.998 179.75 177.007 51.0966 215.747C34.6395 220.702 18.1584 225.379 1.76567 230.636C-1.91449 231.817 8.67902 226.737 12.1913 224.946C45.404 208.006 78.9877 192.231 112.379 175.833C199.078 133.255 284.291 86.7261 369.968 41.2015C398.131 26.2371 431.344 45.0069 460 31.6905C473.381 25.4724 427.33 8.36477 413.578 13.215C358.347 32.6947 302.314 50.0199 247.976 73.0858C237.151 77.6805 246.928 71.8535 250.963 68.5643C267.595 55.0097 284.224 41.5293 302.074 30.4434C319.353 19.7126 337.563 11.1069 356.237 4.79568C359.563 3.67159 362.932 2.68719 366.344 2.0672C367.541 1.84983 370.219 0.850123 369.968 2.30107C369.551 4.71396 367.028 5.67547 365.454 7.21234C362.024 10.5639 358.396 13.605 354.965 16.9569C301.888 68.8149 252.906 130.958 223.882 207.171C216.075 227.674 201.661 266.424 209.452 290.741C215.687 310.204 244.734 293.52 252.998 289.805C346.865 247.615 434.589 183.803 521.012 122.978C525.943 119.508 530.874 116.038 535.824 112.61C539.753 109.889 550.214 100.266 547.839 104.97C544.42 111.743 537.95 115.301 532.964 120.406C518.223 135.498 511.105 143.302 494.821 157.981C465.725 184.208 434.916 206.569 401.245 222.919C375.388 235.474 345.128 247.895 316.823 247.475C296.913 247.18 306.308 232.553 317.331 222.763C366.433 179.154 426.957 148.469 482.234 120.094C546.383 87.1639 611.846 57.9003 679.939 39.8762C694.7 35.969 711.518 32.9041 726.855 31.6908C757.409 29.2734 665.67 34.8845 635.058 35.6665"
              stroke="#FF4D00"
              strokeWidth="1.15257"
              strokeLinecap="round"
              strokeDasharray="7 7"
            />
          </svg>
        </Scrollytelling.Parallax>

        <Scrollytelling.Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: -40, unit: "px" },
          }}
        >
          <h2 className={cn(s.title, "tracking-widest", tiaraFont.className)}>
            : what is sanskriti ? :
          </h2>
        </Scrollytelling.Parallax>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 mb-12 px-4">
          <div className="flex-shrink-0">
            <Image 
              src="/sanskriti.png"
              alt="Sanskriti Logo"
              width={700}
              height={700}
              className="object-contain"
              priority
            />
          </div>
          
          <div className="md:max-w-4xl">
            <p className={cn("md:text-left text-center text-2xl leading-relaxed", tiaraFont.className)}>
              Sanskriti is a celebration of hope. The very word &#40;origin
              Sanskrit: Sanskaar&#41; contains a hint of mending, and reconstruction
              and is a relentless effort towards upliftment and perfection. From its
              mere facade, Sanskriti is a fest, a cultural festival but to us, the
              students of Jadavpur University, Sanskriti is a guiding force, a path
              we take in our attempt to redefine culture. It is an endeavor to break
              down the shackles of defined cultural norms and to set new boundaries,
              only to reinvent against those. Through its living heritage of 30
              years, Sanskriti has given shape to ideas - new and bright and cradled
              feelings of warmth and endearment. It has spread its wings to include
              much more - a film festival &#40;Chhayanat&#41;, a tech fest
              &#40;Srijan&#41;, and a freshers&#39; welcome U-Turn. As we strive
              every year to bring light to the concept that Sanskriti embodies -
              igniting the fire of life and hope into a morbid, stale state, we dig
              up a world that existed only in imagination. Sanskriti is the literal
              unfolding of the magic that life is.
            </p>
          </div>
        </div>

        <div className={s.marquees}>
          <Marquee className={s.marquee1} orange />
          <Marquee className={s.marquee2} reverse />
          <Scrollytelling.Animation
            tween={[
              {
                start: 0,
                end: 100,
                target: `.${s.marquee1} [data-marquee-animation-container]`,
                to: { x: -1000, ease: "linear" },
              },
              {
                start: 0,
                end: 100,
                target: `.${s.marquee2} [data-marquee-animation-container]`,
                to: { x: 1000, ease: "linear" },
              },
            ]}
          />
        </div>
      </div>
    </Scrollytelling.Root>
  );
};

// MARQUEE STUFF

const Marquee = ({
  reverse,
  orange,
  className,
}: {
  reverse?: boolean;
  orange?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={clsx(s.marqueeContainer, className)}
      style={{
        ["--marquee-color" as string]: orange
          ? "var(--color-orange)"
          : "var(--color-white)",
      }}
    >
      <div
        className={clsx(s.marqueeAnimationContainer, reverse && s.reverse)}
        data-marquee-animation-container
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={cn(
              s.marqueeItem,
              "tracking-widest",
              tiaraFont.className
            )}
          >
            Sans<span className="text-tiara_red">kri</span>ti{" "}
            <span className="text-tiara_red">{"'"}</span>25
          </div>
        ))}
      </div>
    </div>
  );
};
