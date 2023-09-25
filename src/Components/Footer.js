import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export function Footer() {
  return (
    <main className=" relative flex items-center justify-center w-full h-10  bg-zinc-700">
      <div>
      <Breadcrumbs/>
      </div>
      <div className=" text-zinc-100/25"> © 2023 Todos os direitos reservados | Brasil  </div>
      
    </main>
    
  );
}
