"use client";
import Lenis from "@/components/shared/lenis";
import { LabIntro } from "@/components/story/intro";
import { HeroParallax } from "@/components/widgets/Hero";
import { tiaraAssetsPrefix } from "@/lib/utils";
import EventsPage from "./events/page";
import { Sponsers } from "@components/widgets/GoldSponser";
import RegisterNow from "@/components/ui/registernow";
import { useSession } from "next-auth/react";

const images = [
  { alt: "Image 0", src: `${tiaraAssetsPrefix}/hero/3(1).jpg` },
  { alt: "Image 1", src: `${tiaraAssetsPrefix}/hero/3(10).jpg` },
  { alt: "Image 2", src: `${tiaraAssetsPrefix}/hero/3(11).jpg` },
  { alt: "Image 3", src: `${tiaraAssetsPrefix}/hero/3(12).jpg` },
  { alt: "Image 4", src: `${tiaraAssetsPrefix}/hero/3(13).jpg` },
  { alt: "Image 5", src: `${tiaraAssetsPrefix}/hero/3(14).jpg` },
  { alt: "Image 6", src: `${tiaraAssetsPrefix}/hero/3(15).jpg` },
  { alt: "Image 7", src: `${tiaraAssetsPrefix}/hero/3(16).jpg` },
  { alt: "Image 8", src: `${tiaraAssetsPrefix}/hero/3(2).jpg` },
  { alt: "Image 9", src: `${tiaraAssetsPrefix}/hero/3(3).jpg` },
  { alt: "Image 10", src: `${tiaraAssetsPrefix}/hero/3(4).jpg` },
  { alt: "Image 11", src: `${tiaraAssetsPrefix}/hero/3(5).jpg` },
  { alt: "Image 12", src: `${tiaraAssetsPrefix}/hero/3(6).jpg` },
  { alt: "Image 13", src: `${tiaraAssetsPrefix}/hero/3(7).jpg` },
  { alt: "Image 14", src: `${tiaraAssetsPrefix}/hero/3(8).jpg` },
  { alt: "Image 15", src: `${tiaraAssetsPrefix}/hero/3(9).jpg` },
];

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-0 md:gap-8 md:py-0">
      <Lenis>
        <HeroParallax images={images} />
        <LabIntro />
        <EventsPage />
        <RegisterNow />
        <Sponsers />
      </Lenis>
    </main>
  );
}
