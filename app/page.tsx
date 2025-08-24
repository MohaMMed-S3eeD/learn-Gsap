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
      y: `random(0, 300)`,
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

    // create a frame
    const frames = gsap.utils.toArray("#frame");
    gsap.set(frames, { zIndex: (i) => -i + 1 });

    const frameTimeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#frameSection",
        start: "top top",
        end: `+=${frames.length * 1000}px`,
        pin: true,
        scrub: 1,
      },
    });
    frames.forEach((e, i) => {
      if (i !== frames.length - 1) {
        frameTimeline.to(e as HTMLElement, {
          clipPath: "inset(0 0 100% 0)",
        });
      }
    });
  });

  // useGSAP(() => {
  //   GSDevTools.create({});
  // });

  return (
    <main className="w-full overflow-x-hidden">
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
      <section className="relative ">
        <div id="frameSection" className="relative h-screen">
          <div
            id="frame"
            className="absolute inset-0  bg-[url('/img-3.jpg')] bg-cover bg-center flex flex-col items-center justify-center"
          >
            <h1 className="text-white text-4xl font-bold">Hello 1</h1>
            <p className="text-white text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div
            id="frame"
            className="absolute inset-0 bg-[url('/img-1.jpg')] bg-cover bg-center flex flex-col items-center justify-center"
          >
            <h1 className="text-white text-4xl font-bold">Hello 2</h1>
            <p className="text-white text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div
            id="frame"
            className="absolute inset-0  bg-[url('/img-2.jpg')] bg-cover bg-center flex flex-col items-center justify-center"
          >
            <h1 className="text-white text-4xl font-bold">Hello 3</h1>
            <p className="text-white text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
