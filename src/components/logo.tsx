"use client";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  visible: boolean;
}

export default function Logo({ visible }: Props) {
  return (
    <section>
      <Link
        href="/"
        className={`
            md:text-xl
            font-bold
            text-primary
            flex
            gap-2
            items-center
            ${visible ? "translate-y-0" : "-translate-y-40"}
            transition-all
            `}
      >
        <Avatar className="w-10 h-10 object-cover rounded-full border-2 border-gray-300">
          <AvatarImage
            className="object-cover"
            src={"/user.webp"}
            alt="Jose Rotchen"
          />
          <AvatarFallback className="text-md rounded">JR</AvatarFallback>
        </Avatar>
        Jose Rotchen
      </Link>
    </section>
  );
}
