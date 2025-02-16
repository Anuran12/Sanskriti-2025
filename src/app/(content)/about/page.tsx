"use client";

import Container from "@/components/shared/container";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
export default function About() {
  return (
    <Container className="mx-auto">
      <div className="py-4 mx-6  sm:mx-12 space-y-4 pt-32">
        <h1
          id="about"
          className={cn("text-6xl text-center", tiaraFont.className)}
        >
          About Sanskriti
        </h1>
        <p className="text-center">
          The Faculty of Engineering and Technology Students&apos; Union of
          Jadavpur University is the organizer of the nine-day festival known as
          Sanskriti. It was initiated in 1978 amidst the political unrest in
          West Bengal with the intention of introducing pupils to a different
          kind of culture. <br /> <br /> In this sense, the inaugural
          &quot;Sanskriti&quot; cultural festival was a landmark event. Although
          it has changed over the years, its fundamental concept has remained
          virtually constant. <br /> <br /> Mao Zedong&apos;s famous slogan,
          &quot;let a hundred flowers blossom,&quot; was used as the
          festival&apos;s subtitle. And indeed, the event was multifaceted, with
          everything from Eastern dance to Western folk songs to elocution and
          much more. <br /> <br /> <br />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <iframe
          className="px-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.49906808482!2d88.4110555753441!3d22.560430279500412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%2C%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1739666931290!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
        <iframe
          className="px-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0568377036093!2d88.36873677534238!3d22.502050579541947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02712518403fcf%3A0x6b4d821705dd609d!2sJU%20Open%20Air%20Theatre!5e0!3m2!1sen!2sin!4v1739666762772!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
}
