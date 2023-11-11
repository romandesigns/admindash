import { Link } from "@radix-ui/themes";
import { IconType } from "react-icons";

type MenuLinkPropTypes = {
  title: string;
  path: string;
  Icon: IconType;
};

export const MenuLink = (item: MenuLinkPropTypes) => {
  return (
    <Link href={item.path}>
      <span>
        <item.Icon />
      </span>
      <span>{item.title}</span>
    </Link>
  );
};
