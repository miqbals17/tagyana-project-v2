import React from "react";

import TextReveal from "../common/components/text-reveal";

import type { IBrideGroomData } from "../common/types/bride-groom";

export default function HolyVowClosing({
  brideName,
  groomName,
}: IBrideGroomData): React.ReactNode {
  return (
    <section id="closing" className="overflow-hidden">
      <div className="relative bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/q_auto:low/v1754791122/cv-rear_q7qcfu.jpg')] bg-cover bg-center p-6">
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-65"></div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-between space-y-6 px-4 py-32 text-white">
          <TextReveal className="text-center font-lora text-xs">
            Atas kehadiran dan doa restu yang Bapak/lbu/Saudara/i berikan, kami
            ucapkan terima kasih. Semoga Allah SWT senantiasa melimpahkan rahmat
            dan berkah-Nya kepada kita semua
          </TextReveal>
          <TextReveal className="font-the-nautigal text-5xl">
            {brideName} & {groomName}
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
