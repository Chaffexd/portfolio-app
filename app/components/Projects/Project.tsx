import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  projectData: {
    id: string;
    title: string;
    excerpt: string;
    imageSource: string;
    link: string;
    repo: string;
  };
};

const Project = ({ projectData }: ProjectProps) => {
  return (
    <article className="rounded bg-slate-200 p-8 h-fit flex flex-col lg:flex-row gap-8 items-center dark:bg-zinc-800">
      <Image
        src={projectData.imageSource}
        alt={projectData.title}
        width={500}
        height={400}
        className="rounded h-auto"
      />
      <div className="text-center flex flex-col items-center">
        <p className="font-bold text-xl mt-4">{projectData.title}</p>
        <Link
          href={projectData.repo}
          target="_blank"
          className="w-12 font-semibold hover:underline"
        >
          Repo
        </Link>
        <Link
          href={projectData.link}
          target="_blank"
          className="w-20 font-semibold hover:underline"
        >
          Live Site
        </Link>
        <p>{projectData.excerpt}</p>
      </div>
    </article>
  );
};

export default Project;
