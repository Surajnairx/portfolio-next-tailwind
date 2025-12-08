import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenereateEffect";

function Hero() {
  return (
    <div className="pb-20 pt-36 bg-black w-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 md:left-32 md:-top-20 h-screen"
          fill="blue"
        />
      </div>
      <div>
        <div className="absolute top-0 left-0 flex h-200 w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "bg-size-[40px_40px]",
              "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <p className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"></p>
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w--[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h1 className="uppercase tracking-widest text-center text-xs text-blue-400">
              Dynamic Web Magic with Next.js
            </h1>

            <TextGenerateEffect
              className=""
              words="Transforming Concepts into Seamless Experience"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm">
              Hi, I'm Suraj, a Front-End Developer based in Pune
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
