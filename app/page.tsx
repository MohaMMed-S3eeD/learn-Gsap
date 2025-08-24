"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(CustomEase, GSDevTools, ScrollTrigger);
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const container = useRef<HTMLElement | any>();
  const media = gsap.matchMedia();

  useGSAP(() => {
    media.add("(min-width: 768px)", () => {
      const tl = gsap.timeline();

      tl.to("#img", {
        duration: 10,
        backgroundColor: "",
        // rotate: 360,
        scale: 30,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#conImg",
          start: "top top",
          end: "bottom 20%",
          scrub: true,
          // markers: true,
          pin: true,
        },
      });
    });
  });

  // useGSAP(() => {
  //   GSDevTools.create({});
  // });

  return (
    <main>
      <section className="flex flex-col w-screen justify-center items-center">
        <div className="w-full h-screen bg-slate-700">
          <div className="w-full h-full bg-slate-700">
            <h1 className="text-white text-7xl font-bold text-center ">
              Start 👇
            </h1>
          </div>
        </div>
        <div
          id="conImg"
          className=" shrink-0 overflow-hidden flex justify-center items-center h-screen w-screen border-2 border-red-500 bg-slate-300"
        >
          <Image id="img" src="/next.svg" alt="test" width={250} height={250} />
        </div>
        <div className=" h-[1500px] w-screen bg-slate-700">
          <h1 className="text-white text-7xl font-bold text-center ">End</h1>
        </div>
      </section>
    </main>
  );
}
