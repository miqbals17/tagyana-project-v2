import React from "react";

export default function LandingPageFooter(): React.ReactNode {
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
    <footer className="bg-bg-primary px-2 py-5">
      <div className="font-inter text-white">
        <div className="mx-auto grid max-w-[1150px] grid-cols-1 space-y-6 px-4 py-10 md:grid-cols-4 md:space-y-0">
          <h4 className="text-2xl font-bold uppercase">Tagyana</h4>
          <div className="space-y-2 md:col-span-2">
            <h5 className="text-lg font-bold uppercase tracking-normal">
              Kontak
            </h5>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Jl. Swadharma Utara No.6 <br /> Ulujami, Pesanggrahan, Jakarta
                Selatan
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h5 className="text-lg font-bold uppercase tracking-normal">
              Halaman
            </h5>
            <ul className="space-y-1 text-sm md:text-base">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <button onClick={scrollToCatalogue}>Katalog</button>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h5 className="text-lg font-semibold uppercase">Pusat Bantuan</h5>
            <ul className="space-y-1 text-sm md:text-base">
              <li>
                <a href="https://wa.me/628812814048" target="_blank">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
