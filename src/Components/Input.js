import React from "react";

export function Input({ icon: Icon, ...rest }) {
  return (
    <div className="px-4 mt-2 h-8 w-full rounded flex items-center bg-zinc-700 text-gray-300 mb-8 rounded-10">
        {Icon && <Icon size={20} />}
      <input
        {...rest}
        className="h-8 w-full pl-2 text-white bg-transparent border-0 "
      />
      <svg className="ml-16"></svg>
    </div>
  );
}
