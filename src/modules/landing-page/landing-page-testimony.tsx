import React, { useEffect, useState } from "react";

interface ITestimony {
  id: number;
  imageThumbnail: string;
  user: string;
  dom: string;
  desc: string;
}

export default function LandingPageTestimony(): React.ReactNode {
  const [testimonies, setTestimonies] = useState<ITestimony[]>([]);

  const fetchTestimony = async (): Promise<void> => {
    setTestimonies([
      {
        id: 1,
        imageThumbnail:
          "https://res.cloudinary.com/da2awcnd1/image/upload/v1739371267/elsiaziz_oc7t0t.avif",
        user: "Elsi & Aziz",
        dom: "Boyolali, Jawa Tengah",
        desc: "Makasihhh ya kaak, bagusss aku suka undanganya hihii, kakaknya jg ramah bgtt servicenya mantul pdhl aku banyak request ini itu 💯💯🤩",
      },
    ]);
  };

  useEffect(() => {
    fetchTestimony();
  }, []);

  return (
    <section id="testimony">
      <div className="py-10">
        <div className="mx-auto flex max-w-[1150px] flex-col space-y-10 px-4">
          <h2 className="font-inter text-center text-3xl font-semibold text-[#334155]">
            Apa yang mereka katakan?
          </h2>
          {/* <EmblaCarousel> */}
          {testimonies.map((testimony) => (
            <div
              key={testimony.id}
              className="embla__slide min-w-0 shrink-0 grow-0 basis-full space-y-3"
            >
              <div className="mx-auto flex !w-9/12 flex-col space-y-3 rounded-2xl border border-[#EDEDED] bg-[#F6F7F8] p-8">
                <div className="flex flex-col items-center gap-6 lg:flex-row">
                  <div className="flex shrink-0 flex-col items-center space-y-3">
                    <img
                      src={testimony.imageThumbnail}
                      height={160}
                      width={160}
                      className="aspect-square rounded-full object-cover object-center"
                      alt="elsi_aziz"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-inter text-center text-lg font-semibold text-[#334155]">
                        {testimony.user}
                      </p>
                      <p className="font-inter text-center text-sm font-light text-[#334155]">
                        {testimony.dom}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col space-y-2">
                    <div>
                      <img
                        width={32}
                        height={32}
                        src="https://res.cloudinary.com/dkm5jppig/image/upload/v1716701990/landingpage/gayglwcmm1gwtrwqtdwm.png"
                        alt="comment-end"
                      />
                    </div>
                    <p className="multiline-ellipsis font-inter text-start text-base font-normal text-[#334155]">
                      {testimony.desc}
                    </p>
                    <div className="flex flex-col items-end">
                      <img
                        width={32}
                        height={32}
                        src="https://res.cloudinary.com/dkm5jppig/image/upload/v1716701990/landingpage/si6qygp4uwxp9l0ia4kh.png"
                        alt="comment-end"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
