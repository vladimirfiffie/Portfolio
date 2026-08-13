"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Project thumbnail that plays a clip once, then settles back on the still.
 *
 * Behaviour:
 *  - The image (your logo/screenshot) is the resting state and is always
 *    rendered underneath, so there is never an empty frame.
 *  - When the card scrolls into view the clip fades in and plays ONCE.
 *  - On `ended` it rewinds and fades out, revealing the image again.
 *  - Hovering (or tapping) replays it.
 *  - No `video`, a failed file, or reduced-motion: the image simply stays.
 *
 * Autoplay only works muted — browsers block sound-on autoplay outright.
 */
export default function ProjectMedia({
  src,
  video,
  alt,
  className,
  imgClassName,
  fit = "cover",
}: {
  src: string;
  video?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain" | "fill";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  const inView = useInView(ref, { margin: "-12%" });
  const showVideo = Boolean(video) && !failed;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const start = useCallback(() => {
    const el = videoRef.current;
    if (!el || !showVideo || reduced) return;
    el.currentTime = 0;
    el.play()
      .then(() => setPlaying(true))
      // Autoplay can still be refused; the image just stays put.
      .catch(() => setPlaying(false));
  }, [showVideo, reduced]);

  const reset = useCallback(() => {
    const el = videoRef.current;
    setPlaying(false);
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  }, []);

  // Play once on entry; rewind when it leaves so it replays next time
  useEffect(() => {
    if (!showVideo || reduced) return;
    if (inView) start();
    else reset();
  }, [inView, showVideo, reduced, start, reset]);

  const fitClass =
    fit === "contain"
      ? "object-contain"
      : fit === "fill"
        ? "object-fill"
        : "object-cover";

  return (
    <div
      ref={ref}
      onMouseEnter={() => !playing && start()}
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      {/* Resting state — your logo/screenshot, always underneath */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("absolute inset-0 h-full w-full", fitClass, imgClassName)}
      />

      {showVideo && (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          poster={src}
          onEnded={reset}
          onError={() => setFailed(true)}
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-500",
            fitClass,
            playing ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* Only offered once the clip has finished and the logo is back */}
      {showVideo && !playing && (
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-1.5 border-2 border-foreground bg-background px-2 py-1 text-[10px] font-black uppercase tracking-widest text-foreground"
        >
          <span className="block h-0 w-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-current" />
          Replay
        </span>
      )}
    </div>
  );
}
