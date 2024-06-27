import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProjectCard from "./project-card";

interface Props {
  dictionary: any;
}

export default function TabProjects({ dictionary }: Props) {
  const webApps = dictionary.projectsList.filter((project: any) => {
    return project.type === "web";
  });

  const landingPages = dictionary.projectsList.filter((project: any) => {
    return project.type === "landing";
  });

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2  mb-5">
        <TabsTrigger value="account">Web apps</TabsTrigger>
        <TabsTrigger value="password">Landing pages</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="w-full flex flex-col gap-10 md:gap-5">
          {webApps.map((project: any, i: any) => {
            return (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                href={project.href}
                seeProject={dictionary.seeProject}
              />
            );
          })}
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="w-full flex flex-col gap-10 md:gap-5">
          {landingPages.map((project: any, i: any) => {
            return (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                href={project.href}
                seeProject={dictionary.seeProject}
              />
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
}
