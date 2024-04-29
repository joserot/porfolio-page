"use client";

import Logo from "./logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      if (moving > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`
            flex
            flex-col
            items-center
            justify-center
            sticky
            top-0
            z-30
            p-3
            md:py-5
            max-w-3xl
            mx-auto
            ${
              visible &&
              `bg-white 
            dark:bg-black
            bg-opacity-80 
            dark:bg-opacity-80 
            backdrop-blur-lg`
            }
            `}
    >
      <div
        className=" 
            w-full
            flex
            flex-row
            items-center
            justify-between
            "
      >
        <Logo visible={visible} />

        <div
          className="
            flex
            items-center
            gap-3
        "
        >
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
