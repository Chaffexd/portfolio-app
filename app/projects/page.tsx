import { Metadata } from "next";
import AllProjects from "../components/Projects/AllProjects";
import { getAllProjects } from "../lib/api";

export const metadata: Metadata = {
  title: "Shane Chaffe - Projects",
  description: "Here is some of the cool stuff I have built!",
};
const ProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <section className="flex justify-center mx-8 xl:mx-48">
      <AllProjects
        // @ts-expect-error
        allProjects={projects}
      />
    </section>
  );
};

export default ProjectsPage;
