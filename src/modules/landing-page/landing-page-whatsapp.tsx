import React, { useEffect, useState } from "react";

export default function LandingPageWhatsapp(): React.ReactNode {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.pageYOffset >= 650) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <a
      href="https://api.whatsapp.com/send?phone=628812814048"
      target="_blank"
      className={`fixed bottom-5 right-5 ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-200 ease-in-out`}
    >
      <img
        src="https://res.cloudinary.com/da2awcnd1/image/upload/v1740285308/wa-logo_obxw2f.avif"
        alt="wa-icon"
        className="h-16 w-16"
      />
    </a>
  );
}
