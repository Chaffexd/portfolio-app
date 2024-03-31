import React from "react";

const Intro = () => {
  return (
    <div className="lg:order-first lg:row-span-2">
      <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
        I'm Shane Chaffe, born and raised in London, UK.
      </h1>
      <div className="mt-6 space-y-7 text-base text-zinc-100 dark:text-white">
        <p className="dark:text-white text-zinc-600">
          I've loved building and playing with computers ever since I was a
          young boy. I would recycle old parts from the family computer and
          continuously take our family PC apart to repair it, clean it, or make
          improvements to it.
        </p>
        <p className="dark:text-white text-zinc-600">
          There was nothing more important to me than computers since a young
          age, whether it be building them, playing with them, or disassembling
          them. That's what struck my interest with hardware, not so much my
          love for software.
        </p>
        <p className="dark:text-white text-zinc-600">
          I found my love for software only a few years ago in my adult life,
          which is what lead me to creating this portfolio, a culmination of
          learning, using new technologies like Next.js and Tailwind which is
          used here, or taking a look at CI/CD pipelines to automated processes,
          learning more about the intricacies of JavaScript and it's
          libraries/frameworks. It's a never ending learning experience.
        </p>
        <p className="dark:text-white text-zinc-600">
          Today, I'm proudly a Senior Technical Account Manager at Contentful with an
          extensive background in troubleshooting hardware and software. Soon,
          I'll be a Software Engineer I hope. That's where I'm headed.
        </p>
      </div>
    </div>
  );
};

export default Intro;
