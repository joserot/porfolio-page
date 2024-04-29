import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import { educationList } from "@/data/data";

import Circle from "@/components/circle";
import Line from "@/components/line";

export default function Education() {
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
            Educación
          </h2>
          <FontAwesomeIcon
            className="text-primary w-6 h-auto"
            icon={faUserGraduate}
          />
        </div>
        <div className="w-full flex flex-col gap-5 relative">
          {educationList.map((education, index) => {
            const lastItem = index === educationList.length - 1;

            return (
              <div className="relative pl-10" key={education.title}>
                <Circle />
                {!lastItem && <Line />}
                <div className="flex items-center gap-x-1 flex-wrap">
                  <h3 className="md:text-xl font-semibold">
                    {education.title}
                  </h3>
                  <span>•</span>
                  <span className="md:text-xl font-semibold">
                    {education.instituttion}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-foreground">{education.startDate}</span>
                  <span className="text-foreground">-</span>
                  <span className="text-foreground">{education.endDate}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
