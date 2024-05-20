import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import Circle from "@/components/circle";
import Line from "@/components/line";

interface Props {
  lang: Lang;
}

export default async function Experience({ lang }: Props) {
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
            {dictionary.experienceTitle}
          </h2>
          <FontAwesomeIcon className="text-primary w-6 h-auto" icon={faReact} />
        </div>
        <div className="w-full flex flex-col gap-5 relative">
          {dictionary.experienceList.map((experience: any, index: any) => {
            const lastItem = index === dictionary.experienceList.length - 1;

            return (
              <div className="relative pl-10" key={experience.company}>
                <Circle />
                {!lastItem && <Line />}
                <div className="flex gap-x-1 items-center flex-wrap">
                  <h3 className="md:text-xl font-semibold">
                    {experience.position}
                  </h3>
                  <span>•</span>
                  <span className="md:text-xl font-semibold">
                    {experience.company}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-foreground">
                    {experience.startDate}
                  </span>
                  <span className="text-foreground">-</span>
                  <span className="text-foreground">{experience.endDate}</span>
                </div>
                <div className="w-full">
                  <ul className="py-2 pl-2 list-disc">
                    {experience.work.map((work: any) => {
                      return (
                        <li
                          className="text-sm md:text-base text-foreground"
                          key={work}
                        >
                          {work}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
