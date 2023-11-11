import { Link } from "@radix-ui/themes";
import { IconType } from "react-icons";

type MenuLinkPropTypes = {
  title: string;
  path: string;
  Icon: IconType;
};

export const MenuLink = (item: MenuLinkPropTypes) => {
  return (
    <Link
      href={item.path}
      className="flex items-baseline space-x-2 p-2 hover:bg-neutral-800 rounded-md hover:no-underline hover:rounded-md">
      <span>
        <item.Icon />
      </span>
      <span className="hover:underline-none text-sm">{item.title}</span>
    </Link>
  );
};
