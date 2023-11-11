import React from "react";
import { menuLinks } from "./utils/menuLinks";
import { MenuLink } from "./components/MenuLink";
import { Link } from "@radix-ui/themes";

export const Sidebar = () => {
  return (
    <aside>
      <ul>
        {menuLinks.map((link, index) => {
          return (
            <li key={index}>
              <span>{link.title}</span>
              {link.links.map((item) => (
                <MenuLink {...item} key={item.path} />
              ))}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
