"use client";

import Link from "next/link";
import Image from "next/image";

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
            font-extrabold
            text-primary
            flex
            gap-2
            items-center
            ${visible ? "opacity-1" : "opacity-0"}
            transition-all
            `}
      >
        <Image
          src={"/user.webp"}
          alt="Jose Rotchen"
          width={80}
          height={80}
          className="rounded-full w-10 h-10 object-cover"
        />
        Jose Rotchen
      </Link>
    </section>
  );
}
