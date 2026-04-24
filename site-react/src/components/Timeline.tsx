"use client";
import { Timeline } from "@/components/ui/timeline";

/* ── Timeline data ── */
export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p
            className="mb-6 sm:mb-8 font-bold uppercase tracking-tight text-foreground leading-relaxed"
            style={{ fontSize: "clamp(0.7rem, 2vw, 1.1rem)" }}
          >
            Built two major projects:{" "}
            <span className="text-primary underline decoration-2 underline-offset-4">
              Pao&apos;er Ship
            </span>
            , a Pygame Battleship for Raspberry Pi, and{" "}
            <span className="text-primary underline decoration-2 underline-offset-4">
              Lion&apos;s Den Cinema
            </span>
            , a booking platform where I designed the web UI.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="overflow-hidden rounded-lg border border-border aspect-[3/2]">
              <img
                src="/images/paoer-ship.jpg"
                alt="Pao'er Ship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border aspect-[3/2]">
              <img
                src="/images/lion-den-cinema.png"
                alt="Lion's Den Cinema"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p
            className="mb-6 sm:mb-8 font-bold uppercase tracking-tight text-foreground leading-relaxed"
            style={{ fontSize: "clamp(0.7rem, 2vw, 1.1rem)" }}
          >
            Graduated and focused on building skills in React, animations, and
            full-stack development.
          </p>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p
            className="mb-6 sm:mb-8 font-bold uppercase tracking-tight text-foreground leading-relaxed"
            style={{ fontSize: "clamp(0.7rem, 2vw, 1.1rem)" }}
          >
            Portfolio launched. Designed and built the frontend for{" "}
            <span className="text-primary underline decoration-2 underline-offset-4">
              Smart Advisor
            </span>
            , an AI-powered recommendation platform. Currently building{" "}
            <span className="text-primary underline decoration-2 underline-offset-4">
              Airflow
            </span>
            , a flight SaaS, with a focus on scalable React applications and
            high-performance UX design.
          </p>
          <div className="overflow-hidden rounded-lg border border-border mb-6 sm:mb-8">
            <img
              src="/images/smart-advisor-screenshot.png"
              alt="Smart Advisor screenshot"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
