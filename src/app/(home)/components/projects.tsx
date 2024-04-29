import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh } from "@fortawesome/free-solid-svg-icons";

import ProjectCard from "./project-card";
import { projectsList } from "@/data/data";

export default function Projects() {
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
            Proyectos
          </h2>
          <FontAwesomeIcon
            className="text-primary w-6 h-auto"
            icon={faFaceLaugh}
          />
        </div>
        <div className="w-full flex flex-col gap-5 md:gap-10">
          {projectsList.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                href={project.href}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
