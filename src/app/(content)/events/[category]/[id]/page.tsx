"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import { EncryptButton } from "@components/ui/hover/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { tiaraFont } from "@/lib/fonts";

export interface Event {
  name: string;
  team: string;
  description: string;
  costs: number;
  rules: string[];
  prerequisites: string[];
  general_rules: string[];
  thumbnail: string;
  startTime: string;
  endTime: string | undefined;
  // costs: string;
  facultyCoordinators: FacultyCoordinator[];
  studentCoordinators: StudentCoordinator[];
  formLink?: string; // Optional Google Form link for registration
  venue?: string; // Add venue property
}

export interface FacultyCoordinator {
  name: string;
  phone: string;
}

export interface StudentCoordinator {
  name: string;
  phone: string;
}

const Page = () => {
  const [eventInfo, setEventInfo] = useState<Event>();
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const [, , category, path] = pathname.split("/");
    fetch(`/api/events/${category}/${path}`)
      .then((response) => response.json())
      .then((dataList) => {
        setEventInfo(dataList);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [pathname]);
  const startTime = eventInfo?.startTime ? new Date(eventInfo.startTime) : null;
  const endTime = eventInfo?.endTime ? new Date(eventInfo.endTime) : null;
  const formattedStartDate = startTime ? startTime.getDate() : "";
  const formatedEndDate = endTime ? endTime.getDate() : "";
  const formattedTime = startTime
    ? startTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";
  const eventName = eventInfo?.name;
  const parts = eventName?.split(/\(([^)]+)\)/);
  return (
    <>
      {/* Hero */}
      {loading ? (
        <Loading />
      ) : (
        <div className="container w-full mt-32 px-5 mx-auto">
          <div className="w-full h-full lg:grid  grid-cols-2  sm:flex flex-col mx-auto">
            <div className="mx-auto">
              <div className="w-full mt-5 2xl:w-11/12 mx-auto ">
                <h1 className="text-4xl font-bold ml-4 2xl:text-6xl ">
                  {eventInfo?.name}
                </h1>
                <p className="mt-4 ml-4 text-xl 2xl:text-2xl">
                  {eventInfo?.description}
                </p>
              </div>

              <div
                className={`  ${
                  formatedEndDate == "" ? "w-4/6" : "w-5/6"
                }  h-16 bg-white rounded-xl flex lg:text-5xl text-black  justify-center items-center mt-6 font-tiara ml-4 mx-auto`}
              >
                <span
                  className={cn(
                    "tracking-widest  font-medium text-center text-xl lg:text-2xl ",
                    tiaraFont.className
                  )}
                >
                  {formattedStartDate.toString().toLowerCase()}
                  {formatedEndDate ? (
                    <span
                      className={cn(
                        "tracking-widest  font-medium text-center text-xl lg:text-2xl ",
                        tiaraFont.className
                      )}
                    >
                      th may to{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  {""}
                  {formatedEndDate.toString().toLowerCase()}th may{" "}
                  {formattedTime.toString().toLowerCase()}
                </span>
              </div>

              {eventInfo?.venue && (
                <div className="w-full mt-4 2xl:w-11/12 mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 ml-4 mr-4">
                    <h2 className="text-xl font-bold text-tiara_red 2xl:text-3xl flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Venue
                    </h2>
                    <p className="text-lg 2xl:text-2xl mt-2 ml-8">
                      {eventInfo.venue}
                    </p>
                  </div>
                </div>
              )}

              <div className="w-full mt-10  2xl:w-11/12 mx-auto ">
                {eventInfo && eventInfo.prerequisites.length === 0 ? (
                  ""
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-tiara_red ml-4 2xl:text-4xl">
                      Prerequisites
                    </h1>
                    <ul className="mt-4 ml-5">
                      {eventInfo?.prerequisites.map((prerequisite, index) => (
                        <li
                          className="text-lg list-disc marker:text-tiara_red 2xl:text-2xl"
                          key={index}
                        >
                          {prerequisite}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="w-full mt-5 2xl:w-11/12 mx-auto ">
                <h1 className="text-2xl font-bold text-tiara_red ml-4 2xl:text-4xl">
                  Rules
                </h1>
                <ul className="mt-4 ml-5">
                  {eventInfo?.rules.map((rules, index) => (
                    <li
                      className="text-lg list-disc marker:text-tiara_red 2xl:text-2xl"
                      key={index}
                    >
                      {rules}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full mt-5  2xl:w-11/12 mx-auto">
                <h1 className="text-2xl font-bold text-tiara_red ml-4 2xl:text-4xl">
                  Event Coordinators
                </h1>
                <ul className="mt-4 ml-5">
                  {eventInfo?.studentCoordinators.map(
                    (studentCoordinators, index) => (
                      <li
                        className="text-lg list-disc marker:text-tiara_red 2xl:text-2xl"
                        key={index}
                      >
                        {studentCoordinators.name} {" | "}{" "}
                        <a
                          className=""
                          href={`tel:+91${studentCoordinators.phone}`}
                        >
                          {studentCoordinators.phone}
                        </a>{" "}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className=" flex justify-center items-start p-10">
              <div>
                {/* <h1 className="text-3xl font-bold text-white">{eventInfo?.name}</h1> */}
                <Image
                  src={eventInfo?.thumbnail || ""}
                  width={400}
                  height={400}
                  alt="image"
                  unoptimized={typeof eventInfo?.thumbnail === "string"}
                  className=" rounded-lg shadow-lg shadow-slate-500/50 mt-16 2xl:w-[520px] 2xl:h-[690px]"
                />
                <div className="text-center 2xl:text-2xl mt-8">
                  <a
                    href={
                      eventInfo?.formLink ||
                      "https://forms.gle/YourDefaultGoogleFormLink"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EncryptButton targetText="register now" />
                  </a>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {/* End Hero */}
    </>
  );
};

export default Page;
