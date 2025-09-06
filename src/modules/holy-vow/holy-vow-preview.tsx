import React, { useState } from "react";

import { CDN_BASE_PATH } from "../common/constants/base-path";

import HolyVow from "./holy-vow";

import type { IBrideGroomData } from "../common/types/bride-groom";

export default function HolyVowPreview(): React.ReactNode {
  const [brideGroomData] = useState<IBrideGroomData>({
    brideGroomData: {
      brideGroomName: "",
      brideFather: "Joko Suharso",
      brideFullname: "Anisa Darshwana",
      brideInstagram: "anis.drwn",
      brideMother: "Sri Rejeki",
      brideThChild: "Pertama",
      groomFather: "Mohamad Toha",
      groomFullname: "Agung Rizki",
      groomInstagram: "a.rizky131",
      groomMother: "Juwariti",
      groomThChild: "Pertama",
      weddingDate: "Kamis, 01 Januari 2026",
      weddingDateFormat: "2026-01-01T00:00:00",
      contractData: {
        hour: "08.00",
        day: "Kamis",
        date: "01",
        month: "Januari",
        year: "2025",
        map: "#",
        place: "Gedung Pancasona",
      },
      receptionData: {
        hour: "10.00",
        day: "Kamis",
        date: "01",
        month: "Januari",
        year: "2025",
        map: "#",
        place: "Gedung Pancasona",
      },
      gallery: [],
      weddingGift: {
        mandiri: {
          name: "Anisa Darshwana",
          no: "123123123",
        },
        dana: {
          name: "Anisa Darshwana",
          no: "081234567890",
        },
      },
    },
    brideName: "Anisa",
    groomName: "Agung",
  });

  const brideGroomImages = [
    "v1738986698/bride_fbiil1.avif",
    "v1738986698/groom_zslz2o.avif",
  ];

  const galleryImages = [
    { src: `${CDN_BASE_PATH}/v1739097212/gallery-1_xyjxrr.avif` },
    { src: `${CDN_BASE_PATH}/v1739097214/gallery-4_dsx76j.avif` },
    { src: `${CDN_BASE_PATH}/v1739097212/gallery-3_m1vxqa.avif` },
    { src: `${CDN_BASE_PATH}/v1739097212/gallery-2_xfkc9s.avif` },
  ];

  const audioElement = new Audio(
    `${import.meta.env.VITE_CDN_BASE_PATH_VIDEO}/v1739613596/blue_wgtykg.mp3`
  );

  return (
    <HolyVow
      brideGroomData={brideGroomData}
      brideGroomImages={brideGroomImages}
      galleryImages={galleryImages}
      audioElement={audioElement}
    />
  );
}
