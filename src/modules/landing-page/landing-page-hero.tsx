import { IconMouse2 } from "@tabler/icons-react";
import React from "react";

export default function LandingPageHero(): React.ReactNode {
  return (
    <section
      id="hero"
      className="relative flex aspect-auto h-svh flex-col bg-[url(https://res.cloudinary.com/da2awcnd1/image/upload/v1738481399/hero_q3knqn.avif)] bg-cover bg-center bg-no-repeat py-20 lg:aspect-[2/0.9] lg:h-auto"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black/50"></div>
      <div className="z-10 mx-auto w-full max-w-[1150px] px-4 py-32">
        <div className="space-y-3">
          <h1 className="text-center font-inter text-3xl font-semibold text-white md:text-5xl">
            Ceritakan Kisah Cinta dengan Modern
          </h1>
          <p className="text-center font-inter text-base font-light text-white md:text-lg">
            Menghadirkan cara modern dan elegan untuk mengundang orang-orang
            terkasih ke hari spesial anda
          </p>
        </div>
      </div>
      <div className="absolute bottom-16 left-0 right-0 flex flex-row items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          <IconMouse2
            size={32}
            color="#FFF"
            className="animate-bounce"
            stroke={1}
          />
          <p className="font-inter text-xs font-light text-white md:text-base">
            Scroll kebawah untuk lebih lanjut
          </p>
        </div>
      </div>
    </section>
  );
}
