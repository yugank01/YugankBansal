import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const GithubProfileDetails = () => {
  return (
    <section className="pb-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={" col-span-full md:col-span-8 flex-col items-start"}
        >
          <h2 className="text-[#FEFE5B] font-bold text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-white text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-4 !p-0"}>
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=yugank01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            height="500"
            width="500"
            loading="lazy"
            className="w-full h-auto"
            alt="My Top used Languages"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            src="https://skillicons.dev/icons?i=nextjs,react,redux,mongodb,nodejs,tailwind,git,github,vercel,html,css,js,jquery,mysql,bootstrap,figma,aws,babel,ipfs,linux,netlify,npm,replit,sass,threejs,vite,vscode,yarn"
            height="500"
            width="500"
            loading="lazy"
            className="w-full h-auto"
            alt="My Skills"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            src="https://github-readme-streak-stats.herokuapp.com?user=yugank01&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            height="500"
            width="500"
            loading="lazy"
            className="w-full h-auto"
            alt="My Github Streak"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=yugank01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            height="500"
            width="500"
            loading="lazy"
            className="w-full h-auto"
            alt="My Github Stats"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default GithubProfileDetails;
