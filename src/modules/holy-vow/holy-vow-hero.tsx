import { IconMouse2 } from "@tabler/icons-react";
import { motion } from "motion/react";

import type { IBrideGroomData } from "../common/types/bride-groom";

export default function HolyVowHero({
  brideName,
  groomName,
  brideGroomData,
}: IBrideGroomData): React.ReactNode {
  return (
    <div className="relative">
      <div
        className={`flex min-h-screen bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/q_auto:low/v1754791086/cv-front_r1els0.webp')] bg-cover bg-center duration-500 ease-linear`}
      >
        <div className="absolute h-full w-full bg-black opacity-[0.65]"></div>
        <div className="z-10 flex w-full flex-col justify-between py-36">
          <div className="space-y-2 text-center text-white">
            <motion.p
              initial={{ height: 0 }}
              whileInView={{ height: "auto" }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={`font-sedan text-sm uppercase`}
            >
              The Wedding of
            </motion.p>
            <p className={`font-parisienne text-4xl font-medium`}>
              {brideName} & {groomName}
            </p>
            <p className="font-quicksand text-sm font-medium uppercase">
              {brideGroomData.weddingDate}
            </p>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-col items-center space-y-2">
              <IconMouse2 stroke={1} size={24} color="#FFF" />
              <p className="font-quicksand text-xs text-white">
                Scroll kebawah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
