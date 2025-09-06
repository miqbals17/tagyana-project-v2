import { IconEye, IconShoppingCart } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface IDataCatalogue {
  id: number;
  imageThumbnail: string;
  title: string;
  desc: string;
  price: string;
  link: string;
}

export default function LandingPageCatalogue(): React.ReactNode {
  const [catalogueData, setCatalogueData] = useState<IDataCatalogue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatalogue = async (): Promise<void> => {
    setIsLoading(true);

    // TODO: Fetch from API
    setCatalogueData([
      {
        id: 1,
        imageThumbnail:
          "https://res.cloudinary.com/da2awcnd1/image/upload/v1739201458/Rose_Bloom_a9xhtj.avif",
        title: "Rose Bloom",
        desc: "Layaknya mawar mekar yang memiliki suasana romantis",
        price: "40.000",
        link: "/rose-bloom",
      },
      {
        id: 2,
        imageThumbnail:
          "https://res.cloudinary.com/da2awcnd1/image/upload/v1739201457/Morning_Sun_j6b5xj.avif",
        title: "Morning Sun",
        desc: "Permulaan hari dengan harapan dan kesempatan yang baru",
        price: "40.000",
        link: "/morning-sun",
      },
      {
        id: 3,
        imageThumbnail:
          "https://res.cloudinary.com/da2awcnd1/image/upload/v1739201772/Green_Forest_oamelx.avif",
        title: "Green Forest",
        desc: "Alam yang menjadi cerminan kekuatan dan keindahan",
        price: "40.000",
        link: "/green-forest",
      },
      {
        id: 4,
        imageThumbnail:
          "https://res.cloudinary.com/da2awcnd1/image/upload/v1739636691/Holy_Vow_xnx3c7.avif",
        title: "Holy Vow",
        desc: "Janji suci yang mencerminkan kesetiaan dan cinta",
        price: "50.000",
        link: "/holy-vow",
      },
    ]);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCatalogue();
  }, []);

  return (
    <section
      id="catalogue"
      className="bg-[rgb(246,247,248)] px-4 py-10 font-inter lg:py-12"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-text-primary">
            Tema Undangan Digital
          </h2>
          <p className="text-sm text-text-primary lg:text-base">
            Klik <span className="font-semibold">Pratinjau</span> untuk melihat
            detail temanya
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {isLoading ? (
            <SkeletonTheme baseColor="#F2F4F7" highlightColor="#FFF">
              <div className="flex w-full flex-col space-y-1 rounded-md p-2 shadow">
                <Skeleton height={"200px"} />
              </div>
              <div className="flex w-full flex-col space-y-1 rounded-md p-2 shadow">
                <Skeleton height={"200px"} />
              </div>
              <div className="flex w-full flex-col space-y-1 rounded-md p-2 shadow">
                <Skeleton height={"200px"} />
              </div>
              <div className="flex w-full flex-col space-y-1 rounded-md p-2 shadow">
                <Skeleton height={"200px"} />
              </div>
            </SkeletonTheme>
          ) : (
            catalogueData.map((data, index) => (
              <div
                key={index}
                className="flex w-full flex-col space-y-1 rounded-md bg-white p-2 shadow"
              >
                <img
                  src={data.imageThumbnail}
                  alt={data.title}
                  width={1024}
                  height={1024}
                  className="aspect-square rounded-md object-contain md:rounded-lg"
                />
                <div className="flex flex-col space-y-3 py-2">
                  <div className="space-y-1">
                    <div
                      className={`flex flex-col md:flex-row md:items-center ${
                        data.title != "Segera Hadir"
                          ? "md:justify-between"
                          : "md:justify-center"
                      }`}
                    >
                      <p className="text-sm font-medium text-text-primary lg:text-xl">
                        {data.title}
                      </p>
                      {data.title != "Segera Hadir" && (
                        <p className="text-sm font-medium text-text-secondary lg:text-xl">
                          Rp{data.price}
                        </p>
                      )}
                    </div>
                    <p className="twoline-ellipsis text-xs font-light text-text-primary lg:text-base">
                      {data.desc}
                    </p>
                  </div>
                  {data.title != "Segera Hadir" && (
                    <div className="flex flex-col space-y-1">
                      <a
                        href={data.link}
                        target="_blank"
                        className={`flex items-center justify-center space-x-1 rounded-[0.25rem] bg-bg-primary py-1 font-normal text-white md:rounded-lg md:py-2`}
                      >
                        <IconEye size={16} />
                        <p className="text-xs md:text-sm">Pratinjau</p>
                      </a>
                      <a
                        href={
                          "https://api.whatsapp.com/send?phone=6285155114193"
                        }
                        className={`flex items-center justify-center space-x-1 rounded-[0.25rem] bg-bg-secondary py-1 font-normal text-white md:rounded-lg md:py-2`}
                      >
                        <IconShoppingCart size={16} />
                        <p className="text-xs md:text-sm">Pesan</p>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
