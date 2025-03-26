import React from "react";
import Image from "next/image";
import { cn, tiaraAssetsPrefix } from "@/lib/utils";
import { tiaraFont } from "@/lib/fonts";

const Sponsors2 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0E0E0E] py-10">
      <div
        className={cn(
          "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-fit text-center duration-500 mb-8",
          tiaraFont.className
        )}
      >
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FF0066]">
          : past associate sponsors :
        </h1>
      </div>
      
      {/* Truly compact masonry-style layout */}
      <div className="w-full max-w-6xl mx-auto px-2">
        <div className="flex flex-wrap justify-center gap-[1px] md:gap-[2px]">
          {/* First row */}
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#4A1500] p-0">
            <Image src="/sponsors/sp01.webp" alt="Snickers" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-white p-0">
            <Image src="/sponsors/sp02.webp" alt="PepsiCo" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex flex-col items-center justify-center bg-white p-0">
            <Image src="/sponsors/sp03.webp" alt="Times of India" width={150} height={80} className="w-[90%] h-auto" />
            <div className="h-1"></div>
            <Image src="/sponsors/sp16.webp" alt="Career Launcher" width={150} height={40} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-white p-0">
            <Image src="/sponsors/sp04.webp" alt="Zoomcar" width={150} height={150} className="w-[75%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex flex-col items-center justify-center bg-[#CCCCCC] p-0">
            <Image src="/sponsors/sp05.webp" alt="EDUgraph" width={150} height={60} className="w-[90%] h-auto" />
            <div className="h-1"></div>
            <Image src="/sponsors/sp06.webp" alt="Uninor" width={150} height={60} className="w-[90%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#CCCCCC] p-0">
            <Image src="/sponsors/sp07.webp" alt="Vodafone" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-white p-0">
            <Image src="/sponsors/sp08.webp" alt="TATA" width={150} height={150} className="w-[80%] h-auto" />
          </div>

          {/* Second row */}
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#F5A900] p-0">
            <Image src="/sponsors/sp09.webp" alt="Spencer's" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#222222] p-0">
            <Image src="/sponsors/sp10.webp" alt="VH1" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#00237D] p-0">
            <Image src="/sponsors/sp11.webp" alt="Reliance" width={150} height={150} className="w-[90%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#E30613] p-0">
            <Image src="/sponsors/sp12.webp" alt="Red FM" width={150} height={150} className="w-[85%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#3A1795] p-0">
            <Image src="/sponsors/sp13.webp" alt="CEAT" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex flex-col items-center justify-center bg-white p-0">
            <Image src="/sponsors/sp14.webp" alt="Yamaha" width={150} height={60} className="w-[90%] h-auto" />
            <div className="h-1"></div>
            <Image src="/sponsors/sp15.webp" alt="Wipro" width={150} height={60} className="w-[90%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#FF0D00] p-0">
            <Image src="/sponsors/sp18.webp" alt="MTS" width={150} height={150} className="w-[75%] h-auto" />
          </div>

          {/* Third row */}
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#143C8C] p-0">
            <Image src="/sponsors/sp19.webp" alt="Shaporji Pallonji" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#EEEEEE] p-0">
            <Image src="/sponsors/sp20.webp" alt="Mahindra" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#FFDA00] p-0">
            <Image src="/sponsors/sp21.webp" alt="Jet Airways" width={150} height={150} className="w-[90%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#FFDD00] p-0">
            <Image src="/sponsors/sp22.webp" alt="ABP Ananda" width={150} height={150} className="w-[90%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#1E2678] p-0">
            <Image src="/sponsors/sp23.webp" alt="Indian Oil" width={150} height={150} className="w-[80%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-black p-0">
            <Image src="/sponsors/sp24.webp" alt="Spykar" width={150} height={150} className="w-[75%] h-auto" />
          </div>
          
          {/* Fourth row (partial) */}
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-white p-0">
            <Image src="/sponsors/sp25.webp" alt="Coca Cola" width={150} height={150} className="w-[75%] h-auto" />
          </div>
          <div className="w-[24%] sm:w-[20%] md:w-[14%] aspect-square overflow-hidden flex items-center justify-center bg-[#F2E000] p-0">
            <Image src="/sponsors/sp26.webp" alt="Saregama" width={150} height={150} className="w-[90%] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors2;
