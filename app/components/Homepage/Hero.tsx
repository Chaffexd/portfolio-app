import Image from "next/image";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import WorkExperience from "./WorkExperience";
import BlogPosts from "../Blog/BlogPosts";

const Hero = () => {
  return (
    <section>
      <div className="max-sm:w-full max-sm:mx-2 max-w-3xl mt-4 sm:mt-16 ml-48 md:pr-36">
        <Link href={"/"} className="block w-1/6 mb-4" aria-label="Home">
          <Image
            className="rounded-full object-cover h-16 w-16"
            src={"/images/me.webp"}
            width={80}
            height={80}
            alt="A photo of me, Shane"
          />
        </Link>
        <h1 className="mb-4 text-4xl text-zinc-800 font-bold dark:text-zinc-100 px-2 sm:px-0">
          Software Developer, Frontend Engineer, and Poodle enthusiast...
        </h1>
        <p className="mt-6 text-zinc-600 text-base dark:text-zinc-400 px-2 sm:px-0">
          I&apos;m Shane, a Senior Technical Account Manager and developer based in
          London, UK. I enjoy fixing things that are broken and creating from
          scratch.
        </p>
      </div>
      <div className="mt-16 overflow-visible">
        <ImageGallery />
      </div>
      <div className="mx-auto w-full max-w-7xl mt-20">
        <div className="max-sm:mx-2 mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 gap-8">
          <BlogPosts />
          <WorkExperience />
        </div>
      </div>
    </section>
  );
};

export default Hero;
