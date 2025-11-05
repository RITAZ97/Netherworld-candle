"use client";
import { useState } from "react";

const Video = ({ src = "/test.mp4", perspective = 600 }) => {
  const [transform, setTransform] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`
  );

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const ry = (x - 0.5) * 20;
    const rx = -(y - 0.5) * 12;
    setTransform(`perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`);
  };

  return (
    <div
      className={`w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(0,216,123,0.98)]`}
      style={{ transform, transition: "transform 150ms ease", transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={() => setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`)}
      onMouseDown={() => setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(0.98)`)}
      onMouseUp={() => setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1.03)`)}
    >;
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      </div>

  );
}

export default Video;