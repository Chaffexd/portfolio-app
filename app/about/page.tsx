import Image from "next/image";
import Intro from "../components/About/Intro";
import { SocialIcon } from "react-social-icons";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Shane Chaffe - About',
  description: 'About me, have a read!',
}

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
            <div className="lg:pl-24 flex gap-4">
              <SocialIcon url="https://github.com/Chaffexd" target="_blank" />
              <SocialIcon url="https://www.linkedin.com/in/shane-chaffe/" target="_blank" />
              <SocialIcon url="https://www.frontendmentor.io/profile/Chaffexd" target="_blank" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
