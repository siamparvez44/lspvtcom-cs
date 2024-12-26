"use client"
import DockLive from "./dock-live"
import Globe from "./ui/globe"
import IconCloud from "./ui/icon-cloud"

const Hero = () => {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "flutter",
    "android",
    "ios",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "python",
    "php",
    "bootstrap",
    "reactbootstrap",
    "sass",
    "tailwindcss",
    "asana",
    "vite",
    "jquery",
    "threedotjs",
    "terraform",
    "redux",
    "wordpress",
    "pycharm",
  ];
  
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-lg bg-background">
      <section className="z-20 flex flex-col items-center justify-center space-y-5 sm:space-y-10">
        <div className="w-full px-4 text-center sm:px-0">
          <h1 className="font-display text-2xl font-bold lowercase leading-tight text-black dark:text-white sm:text-4xl lg:text-6xl">
            Coming Soon to LevelUP the World!
          </h1>
          <p className="text-md mt-6 italic text-neutral-600 dark:text-neutral-300 sm:text-xl">
            {/* This landing Landing page is built specially to{" "}
            <b>save your time</b>. Find the <b>product-market-fit</b> before you
            launch. */}
            We&apos;re working behind the scenes to bring you innovative IT solutions, training, and services — stay tuned for the launch!
          </p>
          <div className="mx-auto mt-4 flex w-full max-w-full flex-col items-center justify-center gap-1 py-5">
           <p className=" text-sm text-neutral-600 dark:text-neutral-300 sm:text-lg">
            Follow us on
          </p>
            <DockLive />
          </div>
        </div>
      </section>
      <div className="absolute z-10 opacity-10">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  )
}

export default Hero


