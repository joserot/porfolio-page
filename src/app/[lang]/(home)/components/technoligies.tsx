import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";

const technologiesList = [
  {
    name: "Tyepscript",
    color: "#358ef1",
    text: "#fff",
  },
  {
    name: "Javascript",
    color: "#F0DB4F",
    text: "#323330",
  },
  {
    name: "PHP",
    color: "#484C89",
    text: "#000000",
  },
  {
    name: "Python",
    color: "#ffde57",
    text: "#4584b6",
  },
  {
    name: "Node.js",
    color: "#3c873a",
    text: "#303030",
  },
  {
    name: "React.js",
    color: "#00d8ff",
    text: "#fff",
  },
  {
    name: "Next.js",
    color: "#000",
    text: "#fff",
  },
  {
    name: "Nest.js",
    color: "#171A1C",
    text: "#E92747",
  },
  {
    name: "Laravel",
    color: "#6c6c6c",
    text: "#f05340",
  },
  {
    name: "TailwindCSS",
    color: "#06b6d4",
    text: "#fff",
  },
  {
    name: "Sass",
    color: "#c69",
    text: "#fff",
  },
  {
    name: "MongoDB",
    color: "#589636",
    text: "#fff",
  },
  {
    name: "MySQL",
    color: "#00758F",
    text: "#F29111",
  },
  {
    name: "PostgreSQL",
    color: "#0064a5",
    text: "#fff",
  },
  {
    name: "Contentful",
    color: "#3ab2e6",
    text: "#fff",
  },
  {
    name: "Firebase",
    color: "#FF9100",
    text: "#fff",
  },
  {
    name: "Supabase",
    color: "#3ecf8e",
    text: "#000",
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
            console.log(technology.color);

            return (
              <Badge
                style={{
                  backgroundColor: technology.color,
                  color: technology.text,
                }}
                className={`md:text-base font-bold hover:scale-105 transition-all duration-300 ease-in-out`}
                key={technology.name}
              >
                {technology.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </article>
  );
}
