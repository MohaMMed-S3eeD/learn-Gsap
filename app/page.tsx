"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

      items.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c0b] to-[#111312] text-slate-200">
      <section
        ref={container}
        className="relative mx-auto max-w-4xl px-4 py-16"
      >
        <header className="mb-14 ml-12">
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            My GSAP Experiments
          </h1>
          <p className="mt-3 text-slate-400">
            A minimal, dark timeline with quick links to each demo.
          </p>
        </header>

        <div className="pointer-events-none absolute inset-y-0 left-6 w-px bg-slate-700/60"></div>

        <ul className="space-y-10">
          <li className="relative pl-12 timeline-item">
            <span className="absolute left-6 top-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-400/20"></span>
            <article className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs">
                  Scroll
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs">
                  Trigger
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                GSAP ScrollTrigger
              </h3>
              <p className="mt-1 text-slate-300">
                Bind animations to scroll for on‑view reveals.
              </p>
              <a
                href="https://learn-gsap-scrolltrigger.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
              >
                View Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13 3a1 1 0 100 2h4.586L8.293 14.293a1 1 0 101.414 1.414L19 6.414V11a1 1 0 102 0V4a1 1 0 00-1-1h-7z" />
                  <path d="M5 5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </article>
          </li>

          <li className="relative pl-12 timeline-item">
            <span className="absolute left-6 top-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-rose-500 ring-4 ring-rose-400/20"></span>
            <article className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs">
                  Timeline
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs">
                  Control
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                GSAP Timeline
              </h3>
              <p className="mt-1 text-slate-300">
                Sequence multiple animations for full control.
              </p>
              <a
                href="https://learn-gsap-time-line.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-white hover:bg-rose-600"
              >
                View Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13 3a1 1 0 100 2h4.586L8.293 14.293a1 1 0 101.414 1.414L19 6.414V11a1 1 0 102 0V4a1 1 0 00-1-1h-7z" />
                  <path d="M5 5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
}
