import Image from "next/image";

import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
        <Image
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
          src={"/user.webp"}
          width={200}
          height={200}
          alt="Jose Rotchen"
        />
        <div className="w-full max-w-[500px] md:max-w-none md:w-9/12 justify-center items-center flex flex-col md:items-start">
          <h1 className="text-2xl md:text-4xl font-bold">Jose Rotchen</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
            {dictionary.position}
          </h2>
          <p className="text-foreground mb-2 text-center md:text-left text-balance">
            {dictionary.title}
          </p>
          <div className="flex gap-3 items-center">
            <Button
              className="flex items-center justify-center gap-3 font-bold"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1lfg87toLceIyrK6WYQdeBh_HxIVjtxid/view?usp=sharing"
                target="_blank"
              >
                {dictionary.resumeBtnText} <FontAwesomeIcon icon={faFile} />
              </a>
            </Button>

            <Button
              className="flex items-center justify-center gap-3 bg-[#0e76a8] hover:bg-[#0e77a8d5] font-bold"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/jose-rotchen/"
                target="_blank"
              >
                LinkedIn <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
