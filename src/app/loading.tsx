import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div
      className={cn(
        "text-6xl md:text-9xl min-h-screen flex items-center justify-center animate-pulse",
        tiaraFont.className
      )}
    >
      <span className="">Sans</span>
      <span className="text-tiara_red">kri</span>ti{" "}
      <span className="text-tiara_red">{"'"}</span>25{" "}
    </div>
  );
}
