"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { tiaraFont } from "@/lib/fonts";
import { cn, tiaraAssetsPrefix } from "@/lib/utils";

const performances = [
  {
    date: "5/4/25",
    event: "Curtain Raiser",
    performer: "Alchemy",
    image: "/performances/alchemy.jpeg",
    isImageOnly: true
  },
  {
    date: "10/4/25",
    event: "Eastern Night",
    performer: "Purbayan Chatterjee and Co.",
    image: "/performances/purbayan.jpeg",
    isImageOnly: true
  },
  {
    date: "11/4/24",
    event: "Western Night",
    performer: "Girish and The Chronicles",
    image: "/performances/catc.jpeg",
    isImageOnly: true
  },
  {
    date: "12/4/25",
    event: "Reunion Night",
    performer: "Agnee",
    image: "/performances/agnee.jpeg",
    isImageOnly: true
  },
  {
    date: "13/4/25",
    event: "Final Night",
    performer: "Agam",
    image: "/performances/agam.jpeg",
    isImageOnly: true
  }
];


export function Sponsers() {
  return (
    <div className="h-fit">
      <div className="-ml-5 flex justify-center items-center pt-32 z-50">
        <div
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
            tiaraFont.className
          )}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F59E0B]">
            Performances
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
          {performances.map((performance, index) => {
            if (performance.isImageOnly) {
              return (
                <div key={index} className="flex flex-col items-center justify-center">
                  <Image
                    src={performance.image}
                    alt={performance.performer}
                    width={300}
                    height={300}
                    className="rounded-xl object-cover w-[300px] h-[300px]"
                    priority
                  />
                  <div className="mt-4 text-center">
                    <h2 className="text-xl font-bold text-white">{performance.date}</h2>
                    <h3 className="text-lg text-[#F59E0B] font-semibold">{performance.event}</h3>
                    <p className="text-xl text-white font-bold">{performance.performer}</p>
                  </div>
                </div>
              );
            }
            
            return (
              <CardContainer
                key={index}
                containerClassName="relative flex items-center justify-center transition-all duration-200 ease-linear w-full"
              >
                <CardBody className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#222222] backdrop-blur-md rounded-xl p-8 min-h-[280px] w-[300px] max-w-full mx-auto flex flex-col justify-center border border-[#F59E0B]/30 shadow-lg shadow-[#F59E0B]/20 hover:shadow-xl hover:shadow-[#F59E0B]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F59E0B]/5 to-transparent rounded-xl opacity-70"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F59E0B]/10 to-[#F59E0B]/5 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <CardItem translateZ="80" className="w-full relative z-10">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white mb-2">{performance.date}</h2>
                      <h3 className="text-xl text-[#F59E0B] font-semibold mb-4">{performance.event}</h3>
                      <p className="text-2xl text-white font-bold">{performance.performer}</p>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* Original card rendering code - kept for future reference 
<div className="w-full flex justify-center ">
  <div className="p-14 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-16">
    {sponsers.map((card, index) => {
      return (
        <CardContainer
          key={index}
          containerClassName="relative flex items-center justify-center transition-all duration-200 ease-linear"
        >
          <CardBody className="relative">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card}
                className="rounded-xl "
                alt="thumbnail"
                width={1200}
                height={800}
                priority
                unoptimized={card.includes("githubusercontent.com")}
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      );
    })}
  </div>
</div>
*/
