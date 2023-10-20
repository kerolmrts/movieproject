import React from "react";

function Banner({children}) {
  return (
    <div style={{zIndex:10}}className="relative">
      <video
        autoPlay
        loop
        muted
        src="/background-img.mp4"
        type="video/mp4"
        className="w-full h-auto"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      <div className="absolute flex items-center justify-center text-6xl -bottom-36 inset-0">
        {children}
      </div>
    </div>
  );
}
export default Banner;