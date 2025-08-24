"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { GSDevTools } from "gsap/GSDevTools";
import Image from "next/image";
gsap.registerPlugin(CustomEase, GSDevTools, ScrollTrigger);
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  let widthWindow = 0;
  if (typeof window !== "undefined") {
    widthWindow = window.innerWidth;
  }

  useGSAP(() => {
    // create a intro
    const intro = gsap.timeline();
    intro
      .from("#intro", {
        clipPath: "inset(30% 30% 30% 30%)",
        ease: "none",
        delay: 1,
      })
      .from(".intro-content ", {
        clipPath: "inset(100% 0% 0% 0%)",
        ease: "none",
      });

    // create a cloud
    gsap.set("#cloud", {
      y: `random(0, 500)`,
      scale: `random(0.2, 0.7)`,
    });

    gsap.fromTo(
      "#cloud",
      {
        x: `random(0, ${widthWindow})`,
      },
      {
        x: `random(0, ${widthWindow})`,
        duration: 30,
        ease: "none",
        stagger: {
          yoyo: true,
          repeat: -1,
        },
      }
    );
  });

  // useGSAP(() => {
  //   GSDevTools.create({});
  // });

  return (
    <main className="w-full h-screen overflow-x-hidden">
      <section
        id="intro"
        className=" w-full h-screen bg-gradient-to-t from-white to-blue-500 relative"
      >
        <div className="w-full h-screen overflow-hidden absolute inset-0 z-0 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <Image
              key={index}
              id="cloud"
              src="/Cloud.png"
              alt="image"
              width={500}
              height={500}
              className="absolute"
            />
          ))}
        </div>
        <div
          id="header"
          className="w-full h-screen relative z-10 flex items-center justify-center"
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className=" intro-content text-6xl font-bold text-white mb-6">
              Welcome to Our Amazing Platform
            </h1>
            <p className=" intro-content text-xl text-white mb-8 leading-relaxed">
              Discover a world of endless possibilities where innovation meets
              creativity. Our cutting-edge technology empowers you to achieve
              your dreams and unlock your full potential. Join thousands of
              satisfied users who have transformed their lives through our
              comprehensive solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className=" intro-content bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className=" intro-content border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-8 text-white opacity-75">
              <p className=" intro-content text-sm">
                Trusted by over 100,000+ users worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
