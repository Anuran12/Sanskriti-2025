"use client";
import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { categoriesList } from "@/data/categoryList";

// Type definition for events
interface EventCard {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  startTime: string;
  costs: number;
  category: string; // Add category field for routing
}

export default function RegisterPage() {
  const [allEvents, setAllEvents] = useState<EventCard[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Process all events from categoriesList
    const events: EventCard[] = [];

    // Iterate through categories
    Object.keys(categoriesList).forEach((categoryKey) => {
      const category =
        categoriesList[categoryKey as keyof typeof categoriesList];

      // Check if events exist and are in the expected format
      if (category.events && category.events.length > 0 && category.events[0]) {
        const categoryEvents = category.events[0];

        // Process each event in the category
        if (typeof categoryEvents === "object") {
          Object.keys(categoryEvents).forEach((eventKey) => {
            // @ts-ignore - We're doing runtime type checking
            const event = categoryEvents[eventKey];
            if (event && event.name) {
              events.push({
                id: eventKey,
                name: event.name,
                description: event.description || "",
                thumbnail: event.thumbnail || "/images/poster.png",
                startTime: event.startTime || "",
                costs: event.costs || 0,
                category: categoryKey, // Store the category for routing
              });
            }
          });
        }
      }
    });

    setAllEvents(events);
  }, []);

  // Handle click on event card
  const handleEventClick = (event: EventCard) => {
    router.push(`/events/${event.category}/${event.id}`);
  };

  return (
    <div className="h-fit">
      <div className="flex justify-center items-center pt-32 z-50">
        <div
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
            tiaraFont.className
          )}
        >
          Event Registration
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allEvents.map((event, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => handleEventClick(event)}
            >
              <CardContainer containerClassName="relative flex items-center justify-center transition-all duration-200 ease-linear">
                <CardBody className="relative">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={event.thumbnail}
                      className="rounded-xl"
                      alt={event.name}
                      width={400}
                      height={300}
                      priority
                      unoptimized={typeof event.thumbnail === "string"}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-xl font-bold text-center mb-2">
                        {event.name}
                      </h3>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
