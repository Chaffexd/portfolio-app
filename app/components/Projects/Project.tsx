import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

type ProjectProps = {
  projectData: {
    title: string;
    deployedSiteLink: string;
    gitHubRepository: string;
    projectDescription: string;
    technologiesUsed: string[];
    image: {
      metadata: {};
      sys: {};
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
        };
      };
    };
  };
};

const Project = ({ projectData }: ProjectProps) => {
  const { description } = projectData.image.fields;

  return (
    <article className="rounded p-4 md:p-8 h-fit flex flex-col lg:flex-row gap-8 dark:bg-zinc-800 bg-gray-50 w-full">
      <div className="1/4">
        <Image
          src={`https://${projectData.image.fields.file.url}`}
          alt={description}
          width={200}
          height={100}
          className="rounded"
        />
      </div>
      <div className="w-3/4">
        <h1 className="font-bold text-xl mb-4">{projectData.title}</h1>
        <Link
          href={projectData.deployedSiteLink}
          target="_blank"
          className="font-semibold hover:underline flex items-center"
        >
          <LinkIcon width={16} height={16} className="mr-1" />
          Live Site
        </Link>
        <Link
          href={projectData.gitHubRepository}
          target="_blank"
          className="font-semibold hover:underline flex items-center"
        >
          <LinkIcon width={16} height={16} className="mr-1" />
          GitHub Repository
        </Link>
        <p className="mt-4">{projectData.projectDescription}</p>
        <div className="flex mt-4 flex-wrap">
          {projectData.technologiesUsed.map((item, index) => (
            <span
              key={index}
              className="mr-2 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;
/* 
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
</div> */
