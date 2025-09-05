import {
  IconCalendar,
  IconGift,
  IconHome,
  IconMessage,
} from "@tabler/icons-react";
import React from "react";

export default function HolyVowNavigation(): React.ReactNode {
  return (
    <div className="fixed bottom-0 z-30 flex w-full max-w-[425px] justify-around rounded-tl-xl rounded-tr-xl border-t border-slate-200 bg-white p-2 shadow-md">
      <a href={"#intro"} className={`rounded-full p-2`}>
        <IconHome size={24} />
      </a>
      <a href={"#event"} className={`rounded-full p-2`}>
        <IconCalendar size={24} />
      </a>
      <a href={"#gift"} className={`rounded-full p-2`}>
        <IconGift size={24} />
      </a>
      <a href={"#prayer"} className={`rounded-full p-2`}>
        <IconMessage size={24} />
      </a>
    </div>
  );
}
