import React from "react";

export function Button({ children }) {
  return (
    <button className=" bg-black/40 p-1">
      {children}
    </button>
  );
}
