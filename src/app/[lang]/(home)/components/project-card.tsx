"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: any[];
  href: string;
  seeProject: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  href,
  seeProject,
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
      rounded-md
      md:p-5
"
    >
      <div
        onClick={() => {
          handleClick(href);
        }}
        className="w-full md:w-1/2 relative bg-cover bg-no-repeat cursor-pointer rounded-md overflow-hidden"
      >
        <Avatar className="object-cover w-full h-52 rounded border border-gray-300">
          <AvatarImage
            className="object-cover overflow-hidden transition duration-300 ease-in-out hover:scale-110"
            src={image}
            alt={title}
          />
          <AvatarFallback className="text-md rounded text-center">
            {title}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full p-3 md:p-0 md:w-1/2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-foreground">{description}</p>
        <div className="flex gap-2 flex-wrap py-1 mb-2">
          {technologies.map((technology) => {
            return (
              <Badge
                variant={"secondary"}
                className={`md:text-base font-bold hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-2`}
                key={technology.name}
              >
                <Image
                  src={`/logos/${technology.logo}`}
                  alt={technology.name}
                  width={20}
                  height={20}
                  className="w-6 h-auto"
                />
                {technology.name}
              </Badge>
            );
          })}
        </div>
        <Link
          target="_blank"
          className="text-primary flex items-center gap-2 hover:gap-3 hover:underline font-bold transition-all"
          href={href}
        >
          {seeProject}{" "}
          <FontAwesomeIcon className="w-3 h-auto" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
