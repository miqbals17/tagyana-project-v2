import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

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

interface HolyVowProps {
  brideGroomData: IBrideGroomData;
  brideGroomImages: string[];
  galleryImages: { src: string }[];
  audioElement: HTMLAudioElement;
}

export default function HolyVow({
  brideGroomData,
  brideGroomImages,
  galleryImages,
  audioElement,
}: HolyVowProps): React.ReactNode {
  const [queryParams] = useSearchParams();

  const [guest, setGuest] = useState({ name: "", from: "" });
  const [isCoverClicked, setIsCoverClicked] = useState<boolean>(false);
  const [audio] = useState<HTMLAudioElement | null>(audioElement);
  const [play, setPlay] = useState<boolean>(false);

  const handleClickCover = (): void => {
    setIsCoverClicked(true);
    setPlay(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setGuest({
      name: queryParams.get("to") || "NAMA TAMU",
      from: queryParams.get("from") || "",
    });
  }, []);

  return (
    <div className="flex justify-end">
      <div className="fixed z-10 h-dvh w-full bg-black/80" />
      <div className="fixed z-0 h-dvh w-full bg-[url(https://res.cloudinary.com/da2awcnd1/image/upload/v1738686149/groom-putting-ring-bride-s-finger_xxgdvj.avif)] bg-cover bg-left bg-no-repeat" />
      <div className="z-10 w-full max-w-[425px] overflow-hidden bg-white">
        <HolyVowCover
          brideName={brideGroomData.brideName}
          groomName={brideGroomData.groomName}
          brideGroomData={brideGroomData.brideGroomData}
          guest={guest}
          coverClicked={isCoverClicked}
          setCoverClicked={handleClickCover}
        />

        {isCoverClicked && (
          <>
            <HolyVowHero
              brideName={brideGroomData.brideName}
              groomName={brideGroomData.groomName}
              brideGroomData={brideGroomData.brideGroomData}
            />
            <HolyVowIntro
              brideName={brideGroomData.brideName}
              groomName={brideGroomData.groomName}
              brideGroomData={brideGroomData.brideGroomData}
              images={brideGroomImages}
            />
            <HolyVowEvent brideGroomData={brideGroomData.brideGroomData} />
            <HolyVowGallery
              galleryImages={galleryImages}
              handleImageLoad={() => {}}
            />
            <HolyVowGift brideGroomData={brideGroomData.brideGroomData} />
            <HolyVowPrayer />

            <HolyVowClosing
              brideName={brideGroomData.brideName}
              groomName={brideGroomData.groomName}
              brideGroomData={brideGroomData.brideGroomData}
            />
            <MusicPlayer audio={audio} play={play} setPlay={setPlay} />
            <HolyVowNavigation />
          </>
        )}
      </div>
    </div>
  );
}
