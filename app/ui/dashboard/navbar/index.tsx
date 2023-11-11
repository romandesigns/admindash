"use client";

import { TextField } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdSearch,
  MdOutlineChat,
  MdNotifications,
  MdPublic,
} from "react-icons/md";

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-neutral-900 p-[2rem] py-[1rem] rounded-md flex items-center ">
      <h2 className="uppercase font-800 text-lg mr-auto">
        {pathName.split("/").pop()}
      </h2>
      <div className="flex items-center justify-between space-x-4">
        <div className="flex-1">
          <TextField.Root>
            <TextField.Slot>
              <MdSearch size={18} />
            </TextField.Slot>
            <TextField.Input placeholder="Search for ..." size="3" />
          </TextField.Root>
        </div>
        <div className="flex gap-3">
          <MdOutlineChat size={18} />
          <MdNotifications size={18} />
          <MdPublic size={18} />
        </div>
      </div>
    </nav>
  );
};
