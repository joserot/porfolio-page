import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const technologiesList = [
  {
    name: "Tyepscript",
    color: "#358ef1",
    text: "#fff",
    logo: "typescript.svg",
  },
  {
    name: "Javascript",
    color: "#F0DB4F",
    text: "#323330",
    logo: "javascript.svg",
  },
  {
    name: "PHP",
    color: "#484C89",
    text: "#000000",
    logo: "php.svg",
  },
  {
    name: "Python",
    color: "#ffde57",
    text: "#4584b6",
    logo: "python.svg",
  },
  {
    name: "Node.js",
    color: "#3c873a",
    text: "#303030",
    logo: "node.svg",
  },
  {
    name: "React.js",
    color: "#00d8ff",
    text: "#fff",
    logo: "react.png",
  },
  {
    name: "Next.js",
    color: "#000",
    text: "#fff",
    logo: "next.svg",
  },
  {
    name: "Angular.js",
    color: "#dd1b16",
    text: "#fff",
    logo: "angular.png",
  },
  {
    name: "Nest.js",
    color: "#171A1C",
    text: "#E92747",
    logo: "nest.svg",
  },
  {
    name: "Laravel",
    color: "#6c6c6c",
    text: "#f05340",
    logo: "laravel.png",
  },
  {
    name: "TailwindCSS",
    color: "#06b6d4",
    text: "#fff",
    logo: "tailwind.svg",
  },
  {
    name: "Sass",
    color: "#c69",
    text: "#fff",
    logo: "sass.svg",
  },
  {
    name: "MongoDB",
    color: "#589636",
    text: "#fff",
    logo: "mongodb.png",
  },
  {
    name: "MySQL",
    color: "#00758F",
    text: "#F29111",
    logo: "mysql.svg",
  },
  {
    name: "PostgreSQL",
    color: "#0064a5",
    text: "#fff",
    logo: "postgresql.png",
  },
  {
    name: "Firebase",
    color: "#FF9100",
    text: "#fff",
    logo: "firebase.svg",
  },
  {
    name: "Supabase",
    color: "#3ecf8e",
    text: "#000",
    logo: "supabase.svg",
  },
];

interface Props {
  lang: Lang;
}

export default async function Technologies({ lang }: Props) {
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
            items-start
            justify-start
            gap-5
            py-5
            md:py-10
           
            "
      >
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold text-primary">
            {dictionary.technologiesTitle}
          </h2>
          <FontAwesomeIcon
            className="text-primary w-6 h-auto"
            icon={faCircleNodes}
          />
        </div>
        <div className="w-full flex gap-2 flex-wrap">
          {technologiesList.map((technology) => {
            return (
              <Badge
                // style={{
                //   backgroundColor: technology.color,
                //   color: technology.text,
                // }}
                variant={"secondary"}
                className={`md:text-base font-bold hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-2`}
                key={technology.name}
              >
                <Image
                  src={`/logos/${technology.logo}`}
                  alt={technology.name}
                  width={35}
                  height={35}
                  className="w-9 h-auto"
                />
                {technology.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </article>
  );
}
