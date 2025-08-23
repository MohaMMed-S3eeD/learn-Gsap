"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(CustomEase, GSDevTools);
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const container = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | any>();
  const media = gsap.matchMedia();
  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(() => {
    media.add("(min-width: 768px)", () => {
      const T1 = gsap.timeline({
        duration: 0.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
      T1.to(".box-1", {
        x: 150,
        scale: 0.5,
        opacity: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });
      T1.to(".box-2", {
        x: 180,
        scale: 0.5,
        opacity: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });
      T1.to(".box-3", {
        x: 210,
        scale: 0.5,
        opacity: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });
      T1.to(".box-1", {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      T1.to(".box-2", {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      T1.to(".box-3", {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      T1.to(".box-1", {
        x: -150,
        scale: 0.5,
        opacity: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });
      T1.to(".box-2", {
        x: -180,
        scale: 0.5,
        opacity: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });
      T1.to(".box-3", {
        x: -210,
        scale: 0.5,
        opacity: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });
  });

  // useGSAP(() => {
  //   GSDevTools.create({});
  // });

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="flex">
          <div className="box box-1 gradient-blue">Box 1</div>
          <br />
          <div className="box box-2 gradient-blue">Box 2</div>
          <br />
          <div className="box box-3 gradient-blue">Box 3</div>
        </div>
      </section>
    </main>
  );
}
