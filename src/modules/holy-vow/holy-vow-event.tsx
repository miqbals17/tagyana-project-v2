import { IconLocationFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

import TextReveal from "../common/components/text-reveal";

import type { IBrideGroomData } from "../common/types/bride-groom";

export default function HolyVowEvent({
  brideGroomData,
}: IBrideGroomData): React.ReactNode {
  const CDN_BASE_PATH = import.meta.env.VITE_CDN_BASE_PATH;

  return (
    <section id="event" className="relative">
      <div className="relative px-4 py-10">
        <div className="relative z-10 space-y-8">
          <div className="space-y-3 px-2">
            <TextReveal className="text-center font-great-vibes text-4xl text-[#776B5D]">
              Momen Spesial Kami
            </TextReveal>
            <TextReveal className="text-justify font-lora text-sm text-[#776B5D]">
              Di bawah sinar mentari yang cerah, kami mengucapkan janji suci di
              hadapan orang-orang tercinta. Bergabunglah dengan kami dalam hari
              yang penuh cinta dan kebahagiaan.
            </TextReveal>
          </div>
          <div className="space-y-2 rounded-2xl border border-[#776B5D] bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/v1739631130/bg-tile_mgfjhl.avif')] bg-cover bg-center pb-4">
            <div>
              <div className="relative">
                <motion.img
                  src={`${CDN_BASE_PATH}/q_auto:low/v1754791121/photo-5_ncym33.jpg`}
                  loading="lazy"
                  alt="contract"
                  className="h-auto max-h-[150px] w-full rounded-t-2xl object-cover object-center"
                  initial={{ height: 0.8 }}
                  whileInView={{ height: "auto" }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-t-2xl bg-black opacity-35"></div>
              </div>
              <div className="space-y-1 px-2 py-4">
                <p className="text-center font-sedan text-3xl italic text-[#776B5D]">
                  Akad Nikah
                </p>
                <div className="space-y-4">
                  <div className="space-y-1 text-center font-lora text-[#776B5D]">
                    <p className="text-lg font-medium">
                      {brideGroomData?.contractData.day} |{" "}
                      {brideGroomData?.contractData.date}{" "}
                      {brideGroomData?.contractData.month} |{" "}
                      {brideGroomData?.contractData.year}
                    </p>
                    <p className="text-sm font-normal">
                      Pukul {brideGroomData?.contractData.hour} - Selesai
                    </p>
                    <p className="text-sm font-normal">
                      <span className="block">Rumah Mempelai Wanita</span>
                      {brideGroomData?.contractData.place}
                    </p>
                  </div>
                  <a
                    href={brideGroomData?.contractData.map}
                    target="_blank"
                    className="mx-auto flex max-w-24 items-center justify-center space-x-1 rounded bg-[#776B5D] py-[0.125rem] font-sedan text-xs"
                  >
                    <IconLocationFilled size={12} color="#FFF" />
                    <p className="text-base text-white">Lokasi</p>
                  </a>
                </div>
              </div>
            </div>
            <img
              src={`${CDN_BASE_PATH}/v1739626058/divider_coiguf.svg`}
              alt="divider"
              className="h-auto w-full"
            />
            <div>
              <div className="relative">
                <motion.img
                  src={`${CDN_BASE_PATH}/q_auto:low/v1754791106/photo-4_bmikf0.jpg`}
                  alt="reception"
                  loading="lazy"
                  className="h-auto max-h-[150px] w-full object-cover object-center"
                  initial={{ height: 0.8 }}
                  whileInView={{ height: "auto" }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-35"></div>
              </div>
              <div className="space-y-1 px-2 py-4">
                <p className="text-center font-sedan text-3xl italic text-[#776B5D]">
                  Resepsi
                </p>
                <div className="space-y-4">
                  <div className="space-y-1 text-center font-lora text-[#776B5D]">
                    <p className="text-lg font-medium">
                      {brideGroomData?.receptionData.day} |{" "}
                      {brideGroomData?.receptionData.date}{" "}
                      {brideGroomData?.receptionData.month} |{" "}
                      {brideGroomData?.receptionData.year}
                    </p>
                    <p className="text-sm font-normal">Pukul 10.00 - Selesai</p>
                    <p className="text-sm font-normal">
                      <span className="block">Rumah Mempelai Wanita</span>
                      {brideGroomData?.receptionData.place}
                    </p>
                  </div>
                  <a
                    href={brideGroomData?.receptionData.map}
                    target="_blank"
                    className="mx-auto flex max-w-24 items-center justify-center space-x-1 rounded bg-[#776B5D] py-[0.125rem] font-sedan text-xs"
                  >
                    <IconLocationFilled size={12} color="#FFF" />
                    <p className="text-base text-white">Lokasi</p>
                  </a>
                </div>
              </div>
            </div>
            <img
              src={`${CDN_BASE_PATH}/v1739626058/divider_coiguf.svg`}
              alt="divider"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/da2awcnd1/image/upload/v1754397448/bg-section_xporxv.webp"
        alt="decoration-1"
        className="absolute -top-12 w-full"
      />
      <img
        src="https://res.cloudinary.com/da2awcnd1/image/upload/v1754397962/bg-section-2_jc8sxy.webp"
        alt="decoration-3"
        className="absolute -bottom-8 w-full"
      />
      <div className="absolute bottom-60 h-full max-h-[300px] w-full max-w-md bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/v1754397448/bg-section_xporxv.webp')] bg-cover bg-no-repeat" />
    </section>
  );
}
