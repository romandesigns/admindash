import React from "react";
import { Card } from "@radix-ui/themes";
import { MdSupervisedUserCircle } from "react-icons/md";

export const CardUi = () => {
  return (
    <Card className="w-full hover:bg-neutral-800 hover:cursor-pointer">
      <div className="flex items-center space-x-2">
        <MdSupervisedUserCircle size={24} />
        <span className="text-xs">Total Users</span>
      </div>
      <div className="text-sm flex flex-col pl-[2rem]">
        <p className="py-4 text-md font-700">10.273</p>
        <span className="flex text-xs space-x-1 lg:space-x-3 bg-white/5 rounded-md overflow-hidden">
          <span className="text-green-500 h-inherit self-center py-2 f-full bg-white/10 inline-block p-1">
            12%
          </span>
          <span className="self-center">more than previous week</span>
        </span>
      </div>
    </Card>
  );
};
