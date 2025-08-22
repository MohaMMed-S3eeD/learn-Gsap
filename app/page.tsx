"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const container = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | any>();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(() => {
    const boxes = gsap.utils.toArray<HTMLElement>(".box");
    gsap.from(boxes, {
      x: 120,
      opacity: 0,
      duration: 2,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.173,0 0.247,1 0.247,1 0.247,1 0.271,1 0.271,1 0.271,1 0.308,0.51 0.416,0.51 0.502,0.51 0.566,1 0.566,1 0.566,1 0.578,1 0.578,1 0.578,1 0.606,0.783 0.664,0.783 0.71,0.783 0.753,1 0.753,1 0.753,1 0.758,1 0.758,1 0.758,1 0.776,0.913 0.809,0.913 0.836,0.913 0.862,1 0.862,1 0.862,1 0.865,1 0.865,1 0.865,1 0.874,0.968 0.895,0.968 0.912,0.968 0.927,1 0.927,1 0.927,1 0.927,1 0.927,1 0.927,1 0.932,0.989 0.945,0.989 0.956,0.989 0.964,1 0.964,1 0.964,1 0.964,1 0.964,1 0.964,1 0.967,0.997 0.975,0.997 0.982,0.997 0.986,1 0.986,1 0.986,1 0.986,1 0.986,1 0.986,1 0.988,0.999 0.993,0.999 0.995,0.999 0.997,0.889 0.998,0.613 0.998,0.544 0.999,0.104 0.999,0.074 0.999,0.057 1,0.349 1,0.349 "
      ),
      repeat: 1,
      yoyo: true,
    });
  });

  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray<HTMLElement>(".box");
  //     tl.current = gsap
  //       .timeline()
  //       .to(boxes[0], { x: 120, rotation: 360 })
  //       .to(boxes[1], { x: -120, rotation: -360 }, "<")
  //       .to(boxes[2], { y: -166 })
  //       .reverse();
  //   },
  //   { scope: container }
  // );

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="flex">
          <div className="box gradient-blue">Box 1</div>
          <div className="box gradient-blue">Box 2</div>
          <div className="box gradient-blue">Box 3</div>
        </div>
      </section>
    </main>
  );
}
