import { Metadata } from "next";
import AllProjects from "../components/Projects/AllProjects";

export const metadata: Metadata = {
  title: "Shane Chaffe - Projects",
  description: "Here is some of the cool stuff I have built!",
};
const ProjectsPage = () => {
  return (
    <section className="flex justify-center mx-8 xl:mx-48">
      <AllProjects />
    </section>
  );
};

export default ProjectsPage;
