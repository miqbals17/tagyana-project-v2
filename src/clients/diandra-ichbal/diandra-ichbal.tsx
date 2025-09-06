import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { CDN_BASE_PATH } from "../../modules/common/constants/base-path";
import HolyVow from "../../modules/holy-vow/holy-vow";

import type { IBrideGroomData } from "../../modules/common/types/bride-groom";

export default function DiandraIchbal(): React.ReactNode {
  const [brideGroomData] = useState<IBrideGroomData>({
    brideGroomData: {
      brideGroomName: "",
      brideFather: "M. Arif Mashudi",
      brideFullname: "Diandra Ajeng Ahsania",
      brideInstagram: "deandrajeng",
      brideMother: "Siti Inganah",
      brideThChild: "Pertama",
      groomFather: "Suparji",
      groomFullname: "Muhammad Ichbal",
      groomInstagram: "miichbal",
      groomMother: "Saringatin",
      groomThChild: "Ketiga",
      weddingDate: "Sabtu, 04 Oktober 2025",
      weddingDateFormat: "2025-10-04T00:00:00",
      contractData: {
        hour: "07:00",
        day: "Sabtu",
        date: "04",
        month: "Oktober",
        year: "2025",
        map: "https://maps.app.goo.gl/713LG9V3NhtJM8GKA?g_st=iw",
        place: "Jl. Ir. H. Juanda Gang VI, Ponorogo",
      },
      receptionData: {
        hour: "10.00",
        day: "Sabtu",
        date: "04",
        month: "Oktober",
        year: "2025",
        map: "https://maps.app.goo.gl/713LG9V3NhtJM8GKA?g_st=iw",
        place: "Jl. Ir. H. Juanda Gang VI, Ponorogo",
      },
      gallery: [],
      weddingGift: {
        mandiri: {
          name: "Muhammad Ichbal",
          no: "1220011399899",
        },
        bsi: {
          name: "Diandra Ajeng Ahsania",
          no: "7231109794",
        },
        present: {
          name: "Diandra Ajeng Ahsania",
          address:
            "Jl. Ir. H. Juanda Gang VI RT 03 RW 02, Kel. Ronowijayan, Kec. Siman, Kab. Ponorogo",
        },
      },
    },
    brideName: "Diandra",
    groomName: "Ichbal",
  });

  const brideGroomImages = [
    "q_auto:low/v1754791105/bride_casedt.jpg",
    "q_auto:low,c_crop,w_2210/v1754791078/groom_fvsc8o.jpg",
  ];

  const galleryImages = [
    { src: `${CDN_BASE_PATH}/q_auto:low/v1754791079/photo-2_ujiybg.jpg` },
    { src: `${CDN_BASE_PATH}/q_auto:low/v1754791086/cv-front_r1els0.jpg` },
    { src: `${CDN_BASE_PATH}/q_auto:low/v1756959646/P1250910_tb7bgu.jpg` },
    { src: `${CDN_BASE_PATH}/q_auto:low/v1754791125/P1234533SS_uoqvty.jpg` },
  ];

  const audioElement = new Audio(
    `${
      import.meta.env.VITE_CDN_BASE_PATH_VIDEO
    }/v1754733517/muara-adera_etle6h.mp3`
  );

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Menghadirkan cara modern untuk mengundang orang-orang terkasih ke hari spesial anda"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Diandra & Ichbal | Undangan Pernikahan"
        />
        <meta
          property="og:description"
          content="Acara Pernikahan diselenggarakan pada hari Sabtu, 04 Oktober 2025"
        />
        <meta
          property="og:url"
          content="https://tagyana.my.id/diandra-ichbal"
        />
        <meta property="og:site_name" content="invitation" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/da2awcnd1/image/upload/q_auto,c_fill,w_1200,h_630/v1754791122/cv-rear_q7qcfu.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <title>Diandra & Ichbal | Undangan Digital</title>
      </Helmet>
      <HolyVow
        brideGroomData={brideGroomData}
        brideGroomImages={brideGroomImages}
        galleryImages={galleryImages}
        audioElement={audioElement}
      />
    </>
  );
}
