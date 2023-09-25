import React from "react";
import Link from "next/link";

export function Card({ titulo, srcImage, dataLancamento, id }) {
  return (
    <section>
      <div>
        <Link href={`/details/${id}`} passHref>
          <div className="bg-white bg-opacity-10 rounded items-center gap-3">
            <picture className="w-[350px] h-[450px]">
              <img
                src={srcImage}
                className="w-[350px] h-[450px] object-cover transition-transform hover:scale-105"
                alt="cartaz"
              />
            </picture>
          </div>
        </Link>
        <div>
          <span className="items-center font-semibold text-lg">{titulo}</span>
          <p className="items-center text-zinc-400">Lançamento: {dataLancamento}</p>
        </div>
      </div>
    </section>
  );
}