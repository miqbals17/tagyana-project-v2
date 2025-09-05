import React, { useEffect, useState } from "react";

import TextReveal from "../common/components/text-reveal";
import { copyToClipboard } from "../common/utils/copy";

import type { IBrideGroomData, IPresent } from "../common/types/bride-groom";

export default function HolyVowGift({
  brideGroomData,
}: IBrideGroomData): React.ReactNode {
  const CDN_BASE_PATH = import.meta.env.VITE_CDN_BASE_PATH;

  const [mandiri, setMandiri] = useState({
    name: "",
    no: "",
  });
  const [bri, setBri] = useState({
    name: "",
    no: "",
  });
  const [bsi, setBsi] = useState({
    name: "",
    no: "",
  });
  const [seabank, setSeabank] = useState({
    name: "",
    no: "",
  });
  const [dana, setDana] = useState({
    name: "",
    no: "",
  });
  const [shopeepay, setShopeepay] = useState({
    name: "",
    no: "",
  });
  const [present, setPresent] = useState<IPresent>({
    name: "",
    address: "",
  });

  const [mandiriCopy, setMandiriCopy] = useState<string>("Salin");
  const [bsiCopy, setBsiCopy] = useState<string>("Salin");
  const [briCopy, setBriCopy] = useState<string>("Salin");
  const [seabankCopy, setSeabankCopy] = useState<string>("Salin");
  const [danaCopy, setDanaCopy] = useState<string>("Salin");
  const [shopeepayCopy, setShopeepayCopy] = useState<string>("Salin");
  const [presentCopy, setPresentCopy] = useState<string>("Salin");

  const mandiriButton = (): void => {
    setMandiriCopy("Tersalin");

    if (mandiri.no) copyToClipboard(mandiri.no);

    setTimeout(() => {
      setMandiriCopy("Salin");
    }, 400);
  };

  const bsiButton = (): void => {
    setBsiCopy("Tersalin");

    if (bsi.no) copyToClipboard(bsi.no);

    setTimeout(() => {
      setBsiCopy("Salin");
    }, 400);
  };

  const briButton = (): void => {
    setBriCopy("Tersalin");

    if (bri.no) copyToClipboard(bri.no);

    setTimeout(() => {
      setBriCopy("Salin");
    }, 400);
  };

  const seabankButton = (): void => {
    setSeabankCopy("Tersalin");

    if (seabank.no) copyToClipboard(seabank.no);

    setTimeout(() => {
      setSeabankCopy("Salin");
    }, 400);
  };

  const danaButton = (): void => {
    setDanaCopy("Tersalin");

    if (dana.no) copyToClipboard(dana.no);

    setTimeout(() => {
      setDanaCopy("Salin");
    }, 400);
  };

  const shopeepayButton = (): void => {
    setShopeepayCopy("Tersalin");

    if (shopeepay.no) copyToClipboard(shopeepay.no);

    setTimeout(() => {
      setShopeepayCopy("Salin");
    }, 400);
  };

  const presentButton = (): void => {
    setPresentCopy("Tersalin");

    if (present.address) copyToClipboard(present.address);

    setTimeout(() => {
      setPresentCopy("Salin");
    }, 400);
  };

  useEffect(() => {
    const mandiriGift = brideGroomData?.weddingGift.mandiri;
    const bsiGift = brideGroomData?.weddingGift.bsi;
    const briGift = brideGroomData?.weddingGift.bri;
    const seabankGift = brideGroomData?.weddingGift.seabank;
    const danaGift = brideGroomData?.weddingGift.dana;
    const shopeepayGift = brideGroomData?.weddingGift.shopeepay;
    const presentGift = brideGroomData?.weddingGift.present;

    if (mandiriGift) {
      setMandiri({
        name: mandiriGift.name,
        no: mandiriGift.no,
      });
    }

    if (bsiGift) {
      setBsi({
        name: bsiGift.name,
        no: bsiGift.no,
      });
    }

    if (briGift) {
      setBri({
        name: briGift.name,
        no: briGift.no,
      });
    }

    if (seabankGift) {
      setSeabank({
        name: seabankGift.name,
        no: seabankGift.no,
      });
    }

    if (danaGift) {
      setDana({
        name: danaGift.name,
        no: danaGift.no,
      });
    }

    if (shopeepayGift) {
      setShopeepay({
        name: shopeepayGift.name,
        no: shopeepayGift.no,
      });
    }

    if (danaGift) {
      setDana({
        name: danaGift.name,
        no: danaGift.no,
      });
    }

    if (presentGift) {
      setPresent({
        name: presentGift.name,
        address: presentGift.address,
      });
    }
  }, [
    brideGroomData?.weddingGift.mandiri,
    brideGroomData?.weddingGift.bsi,
    brideGroomData?.weddingGift.bri,
    brideGroomData?.weddingGift.seabank,
    brideGroomData?.weddingGift.dana,
    brideGroomData?.weddingGift.shopeepay,
    brideGroomData?.weddingGift.present,
  ]);

  return (
    <section id="gift">
      <div className="relative bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/v1739635449/bg_he5vcq.avif')] bg-cover bg-center px-4 py-10">
        <div className="space-y-4">
          <div className="space-y-3 text-[#776B5D]">
            <TextReveal className="text-center font-great-vibes text-4xl">
              Tanda Kasih
            </TextReveal>
            <TextReveal className="text-center font-lora text-sm">
              Kehadiran Anda adalah hadiah terindah bagi kami. Namun, bagi
              Bapak/Ibu/Saudara/i yang ingin berbagi kebahagiaan lebih untuk
              kami, dapat melalui:
            </TextReveal>
          </div>
          <div className="w-full space-y-3">
            {brideGroomData?.weddingGift.mandiri && (
              <div className="flex flex-col space-y-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-end">
                  <img
                    src={`${CDN_BASE_PATH}/v1739082272/Bank_Mandiri_logo_2016.svg_uvbqof.avif`}
                    alt="mandiri"
                    width={0}
                    height={0}
                    className="h-auto w-28"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs">Nomor Rekening</p>
                      <p className="text-xs font-medium">{mandiri.no}</p>
                    </div>
                    <div>
                      <p className="text-xs">Nama Pemilik</p>
                      <p className="text-xs font-medium uppercase">
                        {mandiri.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={mandiriButton}
                    className="rounded-md bg-[#6E6E6E] px-4 py-1 font-lora text-white"
                  >
                    {mandiriCopy}
                  </button>
                </div>
              </div>
            )}
            {brideGroomData?.weddingGift.bri && (
              <div className="flex flex-col space-y-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-end">
                  <img
                    src={`${CDN_BASE_PATH}/v1739082272/BRI_2020.svg_axvs2l.avif`}
                    alt="bri"
                    width={0}
                    height={0}
                    className="w-28"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs">Nomor Rekening</p>
                      <p className="text-xs font-medium">{bri.no}</p>
                    </div>
                    <div>
                      <p className="text-xs">Nama Pemilik</p>
                      <p className="text-xs font-medium uppercase">
                        {bri.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={briButton}
                    className="rounded-md bg-[#6E6E6E] px-4 py-1 font-lora text-white"
                  >
                    {briCopy}
                  </button>
                </div>
              </div>
            )}
            {brideGroomData?.weddingGift.bsi && (
              <div className="flex flex-col space-y-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-end">
                  <img
                    src={`${CDN_BASE_PATH}/v1754737400/bsi_gwxaln.png`}
                    alt="bsi"
                    className="w-28"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs">Nomor Rekening</p>
                      <p className="text-xs font-medium">{bsi.no}</p>
                    </div>
                    <div>
                      <p className="text-xs">Nama Pemilik</p>
                      <p className="text-xs font-medium uppercase">
                        {bsi.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={bsiButton}
                    className="rounded-md bg-[#6E6E6E] px-4 py-1 font-lora text-white"
                  >
                    {bsiCopy}
                  </button>
                </div>
              </div>
            )}
            {brideGroomData?.weddingGift.seabank && (
              <div className="flex flex-col space-y-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-end">
                  <img
                    src={`${CDN_BASE_PATH}/v1739082272/SeaBank.svg_my738d.avif`}
                    alt="seabank"
                    width={0}
                    height={0}
                    className="w-28"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs">Nomor Rekening</p>
                      <p className="text-xs font-medium">{seabank.no}</p>
                    </div>
                    <div>
                      <p className="text-xs">Nama Pemilik</p>
                      <p className="text-xs font-medium uppercase">
                        {seabank.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={seabankButton}
                    className="rounded-md bg-[#6E6E6E] px-4 py-1 font-lora text-white"
                  >
                    {seabankCopy}
                  </button>
                </div>
              </div>
            )}
            {brideGroomData?.weddingGift.dana && (
              <div className="flex flex-col space-y-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-end">
                  <img
                    src={`${CDN_BASE_PATH}/v1739082272/Logo_dana_blue.svg_ze8chw.avif`}
                    alt="dana"
                    width={0}
                    height={0}
                    className="w-28"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs">Nomor Handphone</p>
                      <p className="text-xs font-medium">{dana.no}</p>
                    </div>
                    <div>
                      <p className="text-xs">Nama Pemilik</p>
                      <p className="text-xs font-medium uppercase">
                        {dana.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={danaButton}
                    className="rounded-md bg-[#6E6E6E] px-4 py-1 font-lora text-white"
                  >
                    {danaCopy}
                  </button>
                </div>
              </div>
            )}
            {brideGroomData?.weddingGift.shopeepay && (
              <div className="flex flex-col space-y-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-end">
                  <img
                    src={`${CDN_BASE_PATH}/v1739082272/ShopeePay_Logo_-_Koleksilogo.com_izci3p.avif`}
                    alt="shopeepay"
                    width={0}
                    height={0}
                    className="w-28"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs">Nomor Handphone</p>
                      <p className="text-xs font-medium">{shopeepay.no}</p>
                    </div>
                    <div>
                      <p className="text-xs">Nama Pemilik</p>
                      <p className="text-xs font-medium uppercase">
                        {shopeepay.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={shopeepayButton}
                    className="rounded-md bg-[#6E6E6E] px-4 py-1 font-lora text-white"
                  >
                    {shopeepayCopy}
                  </button>
                </div>
              </div>
            )}
            {brideGroomData.weddingGift.present && (
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex flex-col items-center gap-2">
                  <svg
                    fill="#6E6E6E"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#6E6E6E"
                    className="h-16 w-16"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M160 894c0 17.7 14.3 32 32 32h286V550H160v344zm386 32h286c17.7 0 32-14.3 32-32V550H546v376zm334-616H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v140h366V310h68v172h366V342c0-17.7-14.3-32-32-32zm-402-4h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm138 0h-70v-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70z"></path>{" "}
                    </g>
                  </svg>
                  <div className="flex flex-col items-center gap-1">
                    <p className="font-lora text-xs font-medium text-[#6E6E6E]">
                      Kirim Kado:
                    </p>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <p className="font-lora text-base font-semibold text-[#6E6E6E]">
                        {brideGroomData.weddingGift.present?.name || "-"}
                      </p>
                      <p className="font-lora text-xs font-normal text-[#776B5D]">
                        {brideGroomData.weddingGift.present?.address || "-"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={presentButton}
                    className="w-full rounded-md bg-[#6E6E6E] px-4 py-1 font-lora text-white"
                  >
                    {presentCopy}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
