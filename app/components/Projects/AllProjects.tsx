import Project from "./Project";
import { projectData } from "./projectsList";

type ProjectsProps = {
  allProjects: {
    items: {
      fields: {
        projectsPage: string;
        projects: {
          metadata: { tags: [] };
          sys: {
            space: []
            id: string;
            type: string;
            createdAt: string;
            updatedAt: string;
            locale: string
          }
          fields: {
            title: string
          }
        }[]
      }
    }[]
  }
}

const AllProjects = ({ allProjects }: ProjectsProps) => {
  const { projects } = allProjects.items[0].fields;

  return (
    <div className="flex flex-col w-5/6 gap-8 mt-20 max-w-7xl">
      {projects.map((project) => (
        // @ts-expect-error
        <Project key={project.fields.title} projectData={project.fields} />
      ))}
    </div>
  );
};

export default AllProjects;
