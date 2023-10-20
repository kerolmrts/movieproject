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
     
      </div>
    </div>
  );
}
