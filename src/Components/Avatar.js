import React from "react";
import { Input } from "./Input";
import { FiCamera } from "react-icons/fi";

export function Avatar({ srcImage, ...rest }) {
  return (
    <div className="flex align-items center justify-center mb-10">
      <div className="flex relative">
      <img
        {...rest}
        src={srcImage}
        alt="Foto do usuário"
        className="w-36 rounded-full"
      >
   
      </img>
      <label
        htmlFor="avatar"
        className="absolute right-0 bottom-0 w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer"
             >
       <FiCamera/>
        
        <input id="avatar" type="file" className="hidden"
      />
      </label>
      </div>
    </div>
  );
}
