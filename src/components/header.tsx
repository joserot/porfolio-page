"use client";

import Logo from "./logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

const languages = [
  {
    label: (
      <div className="flex items-center gap-2">
        <Image
          src={"/en.png"}
          width={20}
          height={20}
          alt="Bandera de Inglaterra"
        />
        <span className="text-xs">English</span>
      </div>
    ),
    value: "en",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <Image src={"/es.png"} width={20} height={20} alt="Bandera de España" />
        <span className="text-xs">Español</span>
      </div>
    ),
    value: "es",
  },
];

interface Props {
  lang: Lang;
}

export default function Header({ lang }: Props) {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      if (moving > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lang]);

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
          <Select
            defaultValue={lang}
            required
            onValueChange={(value) => {
              router.replace(`/${value}`);
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              ref={(ref) => {
                if (!ref) return;
                ref.ontouchstart = (e) => {
                  e.preventDefault();
                };
              }}
            >
              <SelectGroup>
                {languages.map((language) => {
                  return (
                    <SelectItem key={language.value} value={language.value}>
                      {language.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
