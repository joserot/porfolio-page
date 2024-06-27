import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import TabProjects from "./tab-projects";

interface Props {
  lang: Lang;
}

export default async function Projects({ lang }: Props) {
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
            {dictionary.projectsTitle}
          </h2>
          <FontAwesomeIcon className="text-primary w-6 h-auto" icon={faCode} />
        </div>
        <TabProjects dictionary={dictionary} />
      </div>
    </article>
  );
}
