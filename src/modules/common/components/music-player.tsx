import React, { useEffect, useRef } from "react";

interface MusicPlayerProps {
  audio: HTMLAudioElement | null;
  play: boolean;
  setPlay: (play: boolean) => void;
}

export default function MusicPlayer({
  audio,
  play,
  setPlay,
}: MusicPlayerProps): React.ReactNode {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMusic = (): void => {
    setPlay(!play);
  };

  useEffect(() => {
    if (play) {
      audio?.play();
    } else {
      audio?.pause();
    }
  }, [play]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleMusic}
      className={`${
        play && "animate-spin"
      } fixed bottom-16 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black`}
    >
      {play ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 text-white"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
