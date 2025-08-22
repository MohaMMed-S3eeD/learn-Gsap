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
    gsap.to(boxes, {
      x: 150,
      opacity: 0.7,
      duration: 1.5,
      ease: "elastic.out(0.5, 0.3)",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
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
          <br />
          <div className="box gradient-blue">Box 2</div>
          <br />
          <div className="box gradient-blue">Box 3</div>
        </div>
      </section>
    </main>
  );
}
