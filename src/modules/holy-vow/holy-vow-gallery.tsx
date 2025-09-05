import { motion } from "motion/react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import TextReveal from "../common/components/text-reveal";

import type { IGallery } from "../common/types/bride-groom";

import "yet-another-react-lightbox/styles.css";

export default function HolyVowGallery({
  galleryImages,
}: IGallery): React.ReactNode {
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <Lightbox
        index={index}
        open={index >= 0}
        slides={galleryImages}
        close={() => setIndex(-1)}
      />

      <div className="relative bg-[url('https://res.cloudinary.com/da2awcnd1/image/upload/v1739633268/bg-event_actfz7.avif')] bg-cover bg-center px-4 pb-12 pt-8">
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>

        <div className="relative z-10 space-y-8">
          <div className="px-2">
            <TextReveal className="text-justify font-lora text-sm text-[#FDF6EC]">
              &quot;Bukanlah tentang berapa lama kau mengenal seseorang,
              melainkan tentang seseorang yang membuatmu tersenyum sejak saat
              kau mengenalnya.&quot;
            </TextReveal>
          </div>
          <div className="grid grid-cols-2 gap-2 px-4">
            {galleryImages.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                alt={`gallery-${index}`}
                width={0}
                height={0}
                className={`h-full max-h-[200px] w-full rounded-sm object-cover object-center hover:cursor-pointer ${
                  index == 0 || index == 1 ? "col-span-2" : "col-span-1"
                }`}
                onClick={() => setIndex(index)}
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
