import React from "react";

function Banner() {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        src="/background-img.mp4"
        type="video/mp4"
        className="w-full h-auto"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      <div className="absolute flex items-center justify-center text-6xl -bottom-36 inset-0 z-10">
        <h1 className="text-white text-shadow-lg border-4 border-gray-800 p-4 transition-transform hover:scale-105 cursor-pointer">
          Comunidade de cinéfilos
        </h1>
      </div>
    </div>
  );
}
export default Banner;