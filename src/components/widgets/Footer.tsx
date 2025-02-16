import Link from "next/link";
import InstagramIcon from "../icons/InstagramIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { basementFont, tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FiFacebook } from "react-icons/fi";
import s from "../story/intro/intro.module.scss";

const Footer = () => {
  return (
    <footer className="body-font w-full flex flex-col justify-center items-center">
      <div className="w-full text-center flex flex-col justify-center items-center overflow-hidden relative">
        <div
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
            tiaraFont.className
          )}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F59E0B]">
            contact us
          </h1>
        </div>

        <div
          className={cn(
            "md:grid md:grid-cols-3 flex flex-col gap-20 py-8 content-center md:text-left",
            basementFont.className
          )}
        >
          <div>
            <p className="text-zinc-200 ProgressFont text-2xl py-2 underline underline-offset-8">
              General Convenors
            </p>
            <div className="flex flex-col gap-3 md:text-left text-zinc-200 CaptainFont  text-lg tracking-wider">
              <p>Biraj Barua : +91 7001642970</p>
              <p>Dipak Lo : +91 9064217175</p>
              <p>Tamal Roychoudhury : +91 8918928140</p>
            </div>
          </div>
          <div>
            <p className="text-zinc-200 ProgressFont text-2xl py-2 underline underline-offset-8">
              Finance Convenors
            </p>
            <div className="flex flex-col gap-3 md:text-left text-zinc-200 CaptainFont text-lg tracking-wider">
              <p>Akash Ghosh : +91 8509130836</p>
              <p>Reetam Das : +91 8584899256</p>
            </div>
          </div>

          <div>
            <p className="text-zinc-200 ProgressFont text-2xl py-2 underline underline-offset-8">
              Event Coordinator
            </p>
            <div className="flex flex-col gap-3 md:text-left text-zinc-200 CaptainFont  text-lg tracking-wider">
              <p>Gaurav Bose : +91 8017469943</p>
              <p>Tiyasa Mondal : +91 9903898874</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full px-16 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className={cn(
            "flex title-font font-medium tracking-widest items-center md:justify-start justify-center prose text-white",
            tiaraFont.className
          )}
        >
          Sanskriti 25
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
          © 2025 Sanskriti
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <div className=" gap-4 flex">
            <a
              className="ml-3 text-white hover:text-tiara_red transition-all grid-cols-2"
              href="https://www.instagram.com/fetsu_presents_sanskriti/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              className="ml-3 text-white hover:text-tiara_red transition-all"
              href="https://www.facebook.com/fetsanskritiju"
              target="_blank"
            >
              <FiFacebook className="w-8 h-8" />
            </a>
            <a
              className="ml-3 text-white hover:text-tiara_red transition-all"
              href="mailto:ju.fetsanskriti@gmail.com"
              target="_blank"
            >
              <EmailIcon />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
