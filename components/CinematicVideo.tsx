"use client";

import { useEffect, useRef, useState } from "react";

export default function CinematicVideo() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [hasError, setHasError] = useState(false);

  // Initialize both videos for strict mobile & desktop compatibility
  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    const attemptPlay = (vid: HTMLVideoElement | null) => {
      if (!vid) return;
      vid.muted = true;
      vid.playsInline = true;
      vid.setAttribute("playsinline", "true");
      vid.setAttribute("webkit-playsinline", "true");
      
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Mobile autoplay policy waiting for user gesture:", err);
          // Play immediately on first touch, scroll, or tap anywhere on mobile
          const handleMobileGesture = () => {
            vid.play().catch(() => {});
            window.removeEventListener("touchstart", handleMobileGesture);
            window.removeEventListener("scroll", handleMobileGesture);
            window.removeEventListener("click", handleMobileGesture);
          };
          window.addEventListener("touchstart", handleMobileGesture, { passive: true, once: true });
          window.addEventListener("scroll", handleMobileGesture, { passive: true, once: true });
          window.addEventListener("click", handleMobileGesture, { passive: true, once: true });
        });
      }
    };

    attemptPlay(v1);

    if (v2) {
      v2.muted = true;
      v2.playsInline = true;
      v2.setAttribute("playsinline", "true");
      v2.setAttribute("webkit-playsinline", "true");
    }
  }, []);

  // When Video 1 ends, smoothly transition to Video 2 (reverse frames)
  const handleVideo1Ended = () => {
    const v2 = video2Ref.current;
    if (v2) {
      v2.currentTime = 0;
      v2.play().then(() => {
        setActiveVideo(2);
      }).catch(() => {
        // Fallback: restart video 1 if v2 play fails
        if (video1Ref.current) {
          video1Ref.current.currentTime = 0;
          video1Ref.current.play().catch(() => {});
        }
      });
    }
  };

  // When Video 2 ends, smoothly transition back to Video 1 (forward frames)
  const handleVideo2Ended = () => {
    const v1 = video1Ref.current;
    if (v1) {
      v1.currentTime = 0;
      v1.play().then(() => {
        setActiveVideo(1);
      }).catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-[100dvh] min-h-screen z-0 overflow-hidden pointer-events-none select-none bg-black">
      {/* Primary Forward Video */}
      {!hasError && (
        <video
          ref={video1Ref}
          src="/video.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideo1Ended}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-[65%_center] sm:object-[70%_25%] md:object-[75%_center] transition-opacity duration-700 ${
            activeVideo === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ transform: "translateZ(0)" }}
        />
      )}

      {/* Secondary Reverse Video */}
      {!hasError && (
        <video
          ref={video2Ref}
          src="/reverse.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={handleVideo2Ended}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-[65%_center] sm:object-[70%_25%] md:object-[75%_center] transition-opacity duration-700 ${
            activeVideo === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ transform: "translateZ(0)" }}
        />
      )}

      {/* Fallback dark ambient backdrop */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 z-10" />
      )}

      {/* Ultra-Light Transparent Overlay System */}
      <div className="absolute inset-0 bg-black/10 backdrop-brightness-95 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-20" />
    </div>
  );
}
