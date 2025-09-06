import { IconCheck, IconHeartFilled, IconX } from "@tabler/icons-react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import RelativeTime from "../common/components/relative-time";
import TextReveal from "../common/components/text-reveal";
import { db } from "../common/utils/firebase";

import type { IPrayer } from "../common/types/bride-groom";

export default function HolyVowPrayer(): React.ReactNode {
  const [queryParams] = useSearchParams();
  const name = queryParams.get("to");

  const [datas, setDatas] = useState<IPrayer[]>([]);
  const [pray, setPray] = useState<IPrayer>({
    name: "",
    date: 0,
    relationship: "",
    desc: "",
    isAttend: false,
  });

  const fetchData = async (): Promise<IPrayer[]> => {
    const diandraIchbalCol = collection(db, "ichbal-wedding");
    const praySnapshot = await getDocs(diandraIchbalCol);
    const prayList = praySnapshot.docs.map((doc) => doc.data());

    const orderedPray = (prayList as IPrayer[]).sort((a, b) => b.date - a.date);

    return orderedPray as IPrayer[];
  };

  const formSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const currentPray = {
        ...pray,
        date: Math.floor(Date.now() / 1000),
      };

      const diandraIchbalCol = collection(db, "ichbal-wedding");
      await addDoc(diandraIchbalCol, currentPray);

      setDatas((prev) => [currentPray, ...prev]);
    } catch (error) {
      console.error("Gagal menambahkan doa harapan:", error);
    } finally {
      setPray({
        name: "",
        date: 0,
        relationship: "",
        desc: "",
        isAttend: false,
      });
    }
  };

  useEffect(() => {
    if (name) {
      setPray((prev) => ({ ...prev, name: name }));
    }

    fetchData().then((res) => {
      setDatas(res);
    });
  }, []);

  return (
    <section id="prayer">
      <div className="relative bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/v1739635449/bg_he5vcq.avif')] bg-cover bg-center px-4 py-6">
        <div className="space-y-4">
          <div className="space-y-2 px-2 text-[#776B5D]">
            <TextReveal className="text-center font-great-vibes text-4xl">
              Do&apos;a dan Cinta
            </TextReveal>
            <TextReveal className="text-justify font-lora text-sm">
              Doa tulus dari hati adalah hadiah terindah yang bisa kami terima
              di hari bahagia ini. Kami mohon restu dan doa agar cinta kami
              abadi selamanya.
            </TextReveal>
          </div>
          <form
            onSubmit={formSubmit}
            className="flex w-full flex-col space-y-3 py-2"
          >
            <input
              required
              type="text"
              placeholder="Nama"
              className="px-3 py-2 text-sm outline-[#6E6E6E] bg-white"
              onChange={(e) => setPray({ ...pray, name: e.target.value })}
              value={pray.name}
            />
            <textarea
              required
              name="ucapan"
              id="ucapan"
              className="px-3 py-2 text-sm outline-[#6E6E6E] bg-white"
              placeholder="Ucapan"
              onChange={(e) =>
                setPray({
                  ...pray,
                  desc: e.target.value,
                })
              }
              value={pray.desc}
            ></textarea>
            <select
              onChange={(e) => {
                const value = e.target.value;
                setPray({
                  ...pray,
                  isAttend: value === "hadir",
                });
              }}
              className="rounded-md border-none bg-white p-2 font-quicksand text-sm outline-[#6E6E6E]"
              defaultValue={""}
              required
            >
              <option value="" disabled hidden>
                Pilih Kehadiran
              </option>
              <option value="hadir">Hadir</option>
              <option value="tidak hadir">Tidak Hadir</option>
            </select>
            <button className="rounded-md bg-[#6E6E6E] py-1 font-lora text-base font-semibold text-white">
              Kirim
            </button>
          </form>
          <div className="max-h-64 w-full overflow-y-scroll py-2">
            {datas.length > 0 ? (
              datas.map((data, key) => (
                <div key={key} className="flex flex-col py-2">
                  <div className="flex items-start space-x-2">
                    <div className="rounded-full bg-red-200 p-1">
                      <div className="rounded-full bg-red-200 p-1">
                        <IconHeartFilled size={18} color="#F87171" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <p className="text-sm font-bold">{data.name}</p>
                        {data.isAttend ? (
                          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#75A47F]">
                            <IconCheck size={8} color="#FFF" />
                          </div>
                        ) : (
                          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#D37676]">
                            <IconX size={8} color="#FFF" />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <RelativeTime
                          unixTimeMs={data.date}
                          className="text-[0.7rem] font-extralight"
                        />
                      </div>
                      <p className="text-xs">{data.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center font-lora text-base italic">
                Nantikan do&apos;a dan cinta kerabat
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
