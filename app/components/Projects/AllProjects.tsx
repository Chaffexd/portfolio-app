import Project from "./Project";
import { projectData } from "./projectsList";

const AllProjects = () => {
  return (
    <div className="flex flex-col w-full gap-8 mt-20 max-w-7xl">
      {projectData.map((project) => (
        <Project key={project.id} projectData={project} />
      ))}
    </div>
  );
};

export default AllProjects;
