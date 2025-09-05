import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MusicPlayer from "../common/components/music-player";

import HolyVowGift from "./holly-vow-gift";
import HolyVowPrayer from "./holly-vow-prayer";
import HolyVowClosing from "./holy-vow-closing";
import HolyVowCover from "./holy-vow-cover";
import HolyVowEvent from "./holy-vow-event";
import HolyVowGallery from "./holy-vow-gallery";
import HolyVowHero from "./holy-vow-hero";
import HolyVowIntro from "./holy-vow-intro";
import HolyVowNavigation from "./holy-vow-navigation";

import type { IBrideGroomData } from "../common/types/bride-groom";

export default function HolyVow(): React.ReactNode {
  const CDN_BASE_PATH = import.meta.env.VITE_CDN_BASE_PATH;

  const { to: name, from } = useParams();

  const [guest, setGuest] = useState({ name: "", from: "" });
  const [isCoverClicked, setIsCoverClicked] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [play, setPlay] = useState<boolean>(false);

  const [data] = useState<IBrideGroomData>({
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

  const handleClickCover = (): void => {
    setIsCoverClicked(true);
    setPlay(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setGuest({
      name: name || "NAMA TAMU",
      from: from || "TEMPAT ASAL",
    });

    const audioElement = new Audio(
      `${import.meta.env.VITE_CDN_BASE_PATH_VIDEO}/v1739613596/blue_wgtykg.mp3`
    );
    setAudio(audioElement);
  }, []);

  return (
    <div className="flex justify-end">
      <div className="fixed z-10 h-dvh w-full bg-black/80" />
      <div className="fixed z-0 h-dvh w-full bg-[url(https://res.cloudinary.com/da2awcnd1/image/upload/v1738686149/groom-putting-ring-bride-s-finger_xxgdvj.avif)] bg-cover bg-left bg-no-repeat" />
      <div className="z-10 w-full max-w-[425px] overflow-hidden bg-white">
        <HolyVowCover
          brideName={data.brideName}
          groomName={data.groomName}
          brideGroomData={data.brideGroomData}
          guest={guest}
          coverClicked={isCoverClicked}
          setCoverClicked={handleClickCover}
        />

        {isCoverClicked && (
          <>
            <HolyVowHero
              brideName={data.brideName}
              groomName={data.groomName}
              brideGroomData={data.brideGroomData}
            />
            <HolyVowIntro
              brideName={data.brideName}
              groomName={data.groomName}
              brideGroomData={data.brideGroomData}
              images={brideGroomImages}
            />
            <HolyVowEvent brideGroomData={data.brideGroomData} />
            <HolyVowGallery
              galleryImages={galleryImages}
              handleImageLoad={() => {}}
            />
            <HolyVowGift brideGroomData={data.brideGroomData} />
            <HolyVowPrayer />

            <HolyVowClosing
              brideName={data.brideName}
              groomName={data.groomName}
              brideGroomData={data.brideGroomData}
            />
            <MusicPlayer audio={audio} play={play} setPlay={setPlay} />
            <HolyVowNavigation />
          </>
        )}
      </div>
    </div>
  );
}
