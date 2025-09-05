import { IconBrandInstagram } from "@tabler/icons-react";
import { motion } from "motion/react";

import TextReveal from "../common/components/text-reveal";

import type { IBrideGroomData } from "../common/types/bride-groom";

interface HolyVowIntroProps extends IBrideGroomData {
  images: string[];
}

export default function HolyVowIntro({
  brideName,
  groomName,
  brideGroomData,
  images,
}: HolyVowIntroProps): React.ReactNode {
  const CDN_BASE_PATH = import.meta.env.VITE_CDN_BASE_PATH;

  return (
    <section key={"intro"} id="intro" className="relative overflow-hidden">
      <div className="relative z-10 bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/v1754397448/bg-section_xporxv.webp')] bg-contain bg-top bg-no-repeat px-4 py-10">
        <div className="space-y-4 rounded-3xl bg-white shadow">
          <div className="px-4 py-12">
            <div className="space-y-4 text-center">
              <TextReveal className="space-x-2 text-center font-lora text-6xl text-[#77685D]">
                {brideName?.charAt(0)}
                <span className="mx-2 text-3xl">&</span>
                {groomName?.charAt(0)}
              </TextReveal>
              <TextReveal className="text-justify font-lora text-sm italic text-[#776B5D]">
                &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar
                kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
                di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian
                itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir.&quot;
              </TextReveal>
              <TextReveal className="font-lora text-base font-bold italic text-[#776B5D]">
                QS. Ar-Rum Ayat 21
              </TextReveal>
            </div>
          </div>
          <div className="px-4">
            <img
              src={`${CDN_BASE_PATH}/v1739626058/divider_coiguf.svg`}
              alt="divider"
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-4">
            <div className="p-4">
              <div className="space-y-3 text-center text-[#776B5D]">
                <TextReveal className="font-sedan text-2xl">
                  Pasangan Mempelai
                </TextReveal>
                <TextReveal className="text-justify font-lora text-sm leading-[18px]">
                  Dua jiwa yang bersatu dalam harmoni, mengarungi kehidupan
                  dengan cinta dan kesetiaan, serta membangun masa depan bersama
                  dalam kehangatan dan kebahagiaan yang abadi
                </TextReveal>
              </div>
            </div>
            <div className="-space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex w-full">
                  <motion.img
                    src={`${CDN_BASE_PATH}/${images[0]}`}
                    alt="bride"
                    height={0}
                    width={0}
                    className="h-[300px] w-full rounded-br-[35px] rounded-tr-[35px] object-cover"
                    initial={{ height: 0.8 }}
                    whileInView={{ height: "auto" }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="w-full space-y-6 px-4">
                  <div className="w-full space-y-2">
                    <p className="font-lora text-base font-semibold text-[#B99470]">
                      {brideGroomData?.brideFullname}{" "}
                    </p>
                    <p className="font-sedan text-xs font-normal text-[#776B5D]">
                      Putri {brideGroomData?.brideThChild} dari
                      <br />
                      Bapak {brideGroomData?.brideFather} & Ibu{" "}
                      {brideGroomData?.brideMother}
                    </p>
                  </div>
                  <a
                    href={`https://instagram.com/${brideGroomData?.brideInstagram}`}
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-1 rounded-[4px] bg-[#B99470] px-2 py-1 text-center font-lora text-xs font-medium text-white"
                  >
                    <IconBrandInstagram size={16} strokeWidth={2} />
                    <span>@{brideGroomData.brideInstagram}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-full space-y-4 px-4">
                  <div className="w-full space-y-2">
                    <p className="text-right font-lora text-base font-semibold text-[#B99470]">
                      {brideGroomData?.groomFullname}
                    </p>
                    <p className="text-right font-sedan text-xs font-normal text-[#776B5D]">
                      Putra {brideGroomData?.groomThChild} dari
                      <br />
                      Bapak {brideGroomData?.groomFather} & Ibu{" "}
                      {brideGroomData?.groomMother}
                    </p>
                  </div>
                  <a
                    href={`https://instagram.com/${brideGroomData?.groomInstagram}`}
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-1 rounded-[4px] bg-[#B99470] px-2 py-1 text-center font-lora text-xs font-medium text-white"
                  >
                    <IconBrandInstagram size={16} strokeWidth={2} />
                    <span>@{brideGroomData.groomInstagram}</span>
                  </a>
                </div>
                <div className="w-full">
                  <motion.img
                    src={`${CDN_BASE_PATH}/${images[1]}`}
                    alt="groom"
                    height={224}
                    width={224}
                    className="h-[300px] w-full rounded-br-3xl rounded-tl-[35px] object-cover"
                    initial={{ height: 0.8 }}
                    whileInView={{ height: "auto" }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-full max-h-[300px] w-full max-w-md bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/v1754397962/bg-section-2_jc8sxy.webp')] bg-cover bg-no-repeat" />
    </section>
  );
}
