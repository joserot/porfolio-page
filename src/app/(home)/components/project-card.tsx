"use client";

import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  href: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  href,
}: Props) {
  const handleClick = (link: string) => window.open(link, "_blank");

  return (
    <div
      className="
      w-full
      flex
      flex-col
      md:flex-row
      justify-start
      items-start
      gap-5
"
    >
      <div
        onClick={() => {
          handleClick(href);
        }}
        className="w-full md:w-1/2 relative overflow-hidden bg-cover bg-no-repeat cursor-pointer rounded-md overflow-hidden"
      >
        <Image
          src={image}
          className="w-full h-52 object-cover rounded-md overflow-hidden transition duration-300 ease-in-out hover:scale-110"
          alt={title}
          width={300}
          height={300}
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-foreground">{description}</p>
        <div className="flex gap-2 flex-wrap py-1 mb-2">
          {technologies.map((tech) => {
            return <Badge key={tech}>{tech}</Badge>;
          })}
        </div>
        <Link
          target="_blank"
          className="text-primary flex items-center gap-2 hover:gap-4 hover:underline font-bold transition-all"
          href={href}
        >
          Ver proyecto <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}