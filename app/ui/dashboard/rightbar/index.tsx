import { Button } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";
import astronautImage from "./astronout-midjourney-generated.png";

export const RightBar = () => {
  return (
    <aside className="p-[2rem] pr-0 fixed mr-10 space-y-4">
      <div className="relative bg-neutral-900 p-6 rounded-md bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="absolute w-32 h-32 bottom-0 right-0 opacity-[.27] z-0">
          <Image
            src={astronautImage}
            alt="astronout-midjourney-generated"
            fill
            className="absolute"
          />
        </div>
        <div className="relative z-[1]">
          <span className="text-xs mb-4 inline-block">Available Now 🔥</span>
          <h3 className="text-sm font-800">
            How to use the new version of the admin dashboard
          </h3>
          <span className="text-xs my-4 inline-block bg-white/10 p-1">
            It takes 4 minutes to learn 😉
          </span>
          <p className="text-[.75rem]">
            Discover the latest update: 'How to Use the New Admin Dashboard.'
            <br />
            <br />
            This guide, now available, makes mastering the dashboard easy in
            just 4 minutes!
          </p>
          <Button mt="4">
            <MdPlayCircleFilled />
            <span>Watch</span>
          </Button>
        </div>
      </div>
      <div className="relative bg-neutral-900 p-6 rounded-md bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="relative z-[1]">
          <span className="text-xs mb-4 inline-block">Coming soon 🚀</span>
          <h3 className="text-sm font-800">
            New Server actions are not officially supported in NextJs
          </h3>
          <span className="text-xs my-4 inline-block bg-white/10 p-1">
            Boost your productivity 💻
          </span>
          <p className="text-[.75rem]">
            Explore Next.js Server Actions! A concise guide to enhance your web
            development skills, available now. Master this tool in just 4
            minutes!
          </p>
          <Button mt="4">
            <MdPlayCircleFilled />
            <span>Watch</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};
