import Image from "next/image";
import Intro from "../components/About/Intro";
import { SocialIcon } from "react-social-icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shane Chaffe - About",
  description: "About me, have a read!",
};

const AboutPage = () => {
  return (
    <div className="sm:px-20 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="max-w-xs px-2.5 lg:max-w-none flex justify-center">
              <Image
                src={"/images/me.webp"}
                width={350}
                height={350}
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                alt="A photo of Shane Chaffe"
              />
            </div>
            <Intro />
            <div className="lg:pl-24 flex justify-end flex-col">
              <div className="flex gap-4">
                <SocialIcon url="https://github.com/Chaffexd" target="_blank" />
                <SocialIcon
                  url="https://www.linkedin.com/in/shane-chaffe/"
                  target="_blank"
                />
                <SocialIcon
                  url="https://www.frontendmentor.io/profile/Chaffexd"
                  target="_blank"
                />
              </div>
              <div className="mt-8 flex">
                <Link
                  href={
                    "https://www.credly.com/badges/cc868f25-a58c-4516-a806-eb80792ad891/public_url"
                  }
                  target="_blank"
                >
                  <Image
                    src="/images/aws-certified-cloud-practitioner.png"
                    alt="AWS Certification"
                    height={180}
                    width={180}
                  />
                </Link>
                <Link
                  href={
                    "https://www.credly.com/badges/55cc2566-39c1-4213-9fe3-7b1ecf05acb6/public_url"
                  }
                  target="_blank"
                >
                  <Image
                    src="/images/contentful-certified-professional.png"
                    alt="Contentful Certification"
                    height={180}
                    width={180}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
