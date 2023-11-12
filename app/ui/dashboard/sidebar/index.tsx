import React from "react";
import { menuLinks } from "./utils/menuLinks";
import { MenuLink } from "./components/MenuLink";
import { Avatar, Button } from "@radix-ui/themes";
import { MdLogout } from "react-icons/md";

export const Sidebar = () => {
  return (
    <aside className="h-full fixed">
      {/* User details */}
      <div className="flex items-center gap-2 mb-10">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <div className="text-sm">
          <div>John Doe</div>
          <span className="text-neutral-500">Administrator</span>
        </div>
      </div>
      <ul className="flex flex-col">
        {menuLinks.map((link, index) => {
          return (
            <li key={index}>
              <span className="text-sm font-semibold block mt-6 mb-2">
                {link.title}
              </span>
              {link.links.map((item) => (
                <MenuLink {...item} key={item.path} />
              ))}
            </li>
          );
        })}
        <li className="mt-32">
          <Button
            variant="surface"
            className="hover:cursor-pointer w-full"
            size="2">
            <MdLogout size={18} />
            <span className="text-sm font-semibold">LOG OUT</span>
          </Button>
        </li>
      </ul>
    </aside>
  );
};
