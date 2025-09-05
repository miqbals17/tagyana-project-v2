export default function HolyVow(): React.ReactNode {
  return (
    <div className="flex justify-end">
      <div className="fixed z-10 h-dvh w-full bg-black/80" />
      <div className="fixed z-0 h-dvh w-full bg-[url(https://res.cloudinary.com/da2awcnd1/image/upload/v1738686149/groom-putting-ring-bride-s-finger_xxgdvj.avif)] bg-cover bg-left bg-no-repeat" />
      <div className="z-10 w-full max-w-[425px] overflow-hidden bg-white">
        {/* <Cover
          brideName={data.brideName}
          groomName={data.groomName}
          brideGroomData={data.brideGroomData}
          guest={guest}
          coverClicked={isCoverClicked}
          setCoverClicked={handleCover}
        />

        {isCoverClicked && (
          <>
            <Hero
              brideName={data.brideName}
              groomName={data.groomName}
              brideGroomData={data.brideGroomData}
            />
            <Intro
              brideName={data.brideName}
              groomName={data.groomName}
              brideGroomData={data.brideGroomData}
              images={brideGroomImages}
            />
            <Event brideGroomData={data.brideGroomData} />
            <Gallery images={galleryImages} handleImageLoad={() => {}} />
            <Gift brideGroomData={data.brideGroomData} />
            <Prayer />

            <Closing
              brideName={data.brideName}
              groomName={data.groomName}
              brideGroomData={data.brideGroomData}
            />
            <MusicPlayer audio={audio} playing={play} setPlaying={setPlay} />
            <BottomNavigation />
          </>
        )} */}
      </div>
    </div>
  );
}
