import React from "react";

export function InputButton({ children }) {
  return (
    <button className="w-full rounded bg-zinc-500/40 p-1">
      {children}
    </button>
  );
}
