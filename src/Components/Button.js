import React from "react";

export function Button({ children,...rest }) {
  return (
    
    <button {...rest}
    className="w-full rounded bg-zinc-500/40 p-1">
      {children}
    </button>
  );
}
