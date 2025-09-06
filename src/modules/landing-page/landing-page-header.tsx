import React from "react";

export default function LandingPageHeader(): React.ReactNode {
  const scrollToCatalogue = (): void => {
    const catalogueSection = document.getElementById("catalogue");
    const navbarHeight = 64;

    if (!catalogueSection) {
      return;
    }

    window.scrollTo({
      top: catalogueSection.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-16 flex-col justify-center">
      <div className="mx-auto flex w-full max-w-[1150px] flex-row items-center justify-between px-4">
        <a href="/">
          <h1 className="font-inter text-xl font-extrabold uppercase text-white">
            TAGYANA
          </h1>
        </a>
        <nav>
          <ul>
            <li>
              <button
                onClick={scrollToCatalogue}
                className="inline-block rounded-md bg-bg-secondary px-4 py-2 font-inter text-xs font-medium text-white"
              >
                Pilih Undangan Anda
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
