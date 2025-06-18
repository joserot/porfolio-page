import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props {
  lang: Lang;
}

export default async function Hero({ lang }: Props) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`);

  return (
    <article
      className="
            flex
            flex-col
            items-center
            justify-center
            "
    >
      <div
        className="
            w-11/12
            max-w-3xl
            flex
            flex-col
            md:flex-row
            items-center
            justify-start
            gap-5
            py-5
            md:py-10
            border-b
            border-gray-300"
      >
        <Avatar className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-gray-300">
          <AvatarImage
            className="object-cover"
            src={"/user.webp"}
            alt="Jose Rotchen"
          />
          <AvatarFallback className="text-md rounded">JR</AvatarFallback>
        </Avatar>
        <div className="w-full max-w-[500px] md:max-w-none md:w-9/12 justify-center items-center flex flex-col md:items-start">
          <h1 className="text-2xl md:text-4xl font-bold">Jose Rotchen</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
            {dictionary.position}
          </h2>
          <Badge className="flex gap-2 items-center mb-2 bg-gray-300/50 hover:bg-gray-300/50 text-foreground text-sm">
            <FontAwesomeIcon className="w-3 h-auto" icon={faLocationDot} />
            Posadas, Misiones - Argentina
          </Badge>
          <p className="text-foreground mb-2 text-center md:text-left text-balance">
            {dictionary.title}
          </p>

          <div className="flex gap-3 items-center">
            {/* <Button
              className="flex items-center justify-center gap-3 font-bold text-white"
              asChild
            >
              <a href={dictionary.cvLink} target="_blank">
                {dictionary.resumeBtnText}{" "}
                <FontAwesomeIcon className="w-3 h-auto" icon={faFile} />
              </a>
            </Button> */}

            <Button
              className="flex items-center justify-center gap-3 text-white bg-[#0e76a8] hover:bg-[#0e77a8d5] font-bold"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/jose-rotchen/"
                target="_blank"
              >
                LinkedIn{" "}
                <FontAwesomeIcon className="w-4 h-auto" icon={faLinkedin} />
              </a>
            </Button>
            <Button
              className="flex items-center justify-center gap-3 text-white bg-[#24292e] hover:bg-[#24292ed5] font-bold"
              asChild
            >
              <a
                href="https://github.com/joserot?tab=repositories"
                target="_blank"
              >
                Github{" "}
                <FontAwesomeIcon className="w-4 h-auto" icon={faGithub} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
