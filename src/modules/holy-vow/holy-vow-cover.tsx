import type { IBrideGroomData } from "../common/types/bride-groom";

interface HolyVowCoverProps extends IBrideGroomData {
  coverClicked: boolean;
  setCoverClicked: (isCoverClicked: boolean) => void;
}

export default function HolyVowCover({
  brideGroomData,
  coverClicked,
  setCoverClicked,
  brideName,
  groomName,
  guest,
}: HolyVowCoverProps): React.ReactNode {
  const buttonHandle = (): void => {
    document.body.style.overflow = "auto";
    setCoverClicked(true);
  };

  return (
    <section
      id="cover"
      className={`${
        !coverClicked ? "visible opacity-100" : "invisible opacity-0"
      } fixed z-30 mx-auto w-full max-w-[425px] bg-white duration-1000`}
    >
      <div className="relative">
        <div className="flex min-h-screen bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/q_auto:low/v1754791086/cv-front_r1els0.webp')] bg-cover bg-center">
          <div className="absolute h-full w-full bg-black opacity-[0.65]"></div>
          <div className="z-10 flex w-full flex-col justify-between py-36">
            <div className="space-y-2 text-center text-white">
              <p className="font-sedan text-sm uppercase">The Wedding of</p>
              <p className="font-parisienne text-4xl font-medium">
                {brideName} & {groomName}
              </p>
              <p className="font-quicksand text-sm font-medium uppercase">
                {brideGroomData.weddingDate}
              </p>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex flex-col space-y-4 rounded-lg bg-white/15 px-16 py-4 text-white">
                <div className="space-y-2">
                  <p className="font-quicksand text-xs">
                    Kepada Yth: Bapak/Ibu/Saudara/i
                  </p>
                  <div className="text-center">
                    <p className="font-quicksand text-xl font-medium">
                      {guest?.name}
                    </p>
                    {guest?.from && (
                      <p className="font-quicksand">{guest?.from}</p>
                    )}
                    <p className="font-quicksand text-xs">Di Tempat</p>
                  </div>
                </div>
                <button
                  onClick={buttonHandle}
                  className="rounded-md border hover:cursor-pointer border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white duration-300"
                >
                  Buka Undangan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
