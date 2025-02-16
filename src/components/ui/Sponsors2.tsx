import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { tiaraFont } from "@/lib/fonts";
const Sponsors2 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div
        className={cn(
          "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
          tiaraFont.className
        )}
      >
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F59E0B]">
          past associate sponsors
        </h1>
      </div>
      <div className="masonry-sponsors-sm md:masonry-sponsors-md px-8 md:px-4 py-4 ">
        {/* {sponsors.map((sponsor) => (
          <Image
            key={sponsor._id}
            src={urlFor(sponsor.logo).url()}
            alt={sponsor.company}
            width={150}
            height={150}
            className="mb-4 opacity-90 shadow-inner"
          />
        ))} */}
      </div>
    </div>
  );
};

export default Sponsors2;
