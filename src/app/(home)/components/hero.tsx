import Image from "next/image";

import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
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
            Frontend developer
          </h2>
          <p className="text-foreground mb-2 text-center md:text-left text-balance">
            Soy un desarrollador Full-stack especializado en Frontend, me
            apasiona crear interfaces de usuario enfocandome en la usabilidad,
            el performance y la estética.
          </p>
          <div className="flex gap-3 items-center">
            <Button className="flex items-center justify-center gap-3 font-bold">
              CV <FontAwesomeIcon icon={faFile} />
            </Button>
            <Button className="flex items-center justify-center gap-3 bg-[#0e76a8] hover:bg-[#0e77a8d5] font-bold">
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
