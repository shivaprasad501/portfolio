import { cn } from "@/lib/utils";
import React from "react";
import { TypewriterEffectSmooth } from "./type_writeeffect";
import { words } from "@/data";
import Button from "./Button";

export function GridBackground() {
    return (
        <div className="relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="relative z-20 text-white py-8 text-4xl font-bold  sm:text-6xl">

                <div className="flex justify-center ">
                    <TypewriterEffectSmooth words={words}  />
                </div>

                <div className="text-white text-sm sm:text-xl  text-center  sm:max-w-200 px-10 ">
                I&apos;m a full-stack developer focused on building scalable, high-performance applications with a seamless user experience.
                </div >
                <div className="text-center mt-3 sm:mt-0">
                    <Button text="See my work" />
                </div>


            </div>
        </div>
    );
}
