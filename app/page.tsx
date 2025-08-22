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

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(() => {
    const T1 = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    T1.to(".box-1", {
      x: 150,
    });
    T1.to(".box-2", {
      x: -150,
    });
    T1.to(".box-3", {
      x: 150,
    });
  });

  useGSAP(() => {
    GSDevTools.create({});
  });

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
          <div className="box box2 gradient-blue">Box 2</div>
          <br />
          <div className="box box3 gradient-blue">Box 3</div>
        </div>
      </section>
    </main>
  );
}
