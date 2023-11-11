import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-Icons/md";

export const menuLinks = [
  {
    title: "Pages",
    links: [
      {
        title: "Dashboard",
        path: "/dashboard",
        Icon: MdDashboard,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        Icon: MdSupervisedUserCircle,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        Icon: MdShoppingBag,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        Icon: MdAttachMoney,
      },
    ],
  },
  {
    title: "Analytics",
    links: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        Icon: MdWork,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        Icon: MdAnalytics,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        Icon: MdPeople,
      },
    ],
  },
  {
    title: "User",
    links: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        Icon: MdOutlineSettings,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        Icon: MdHelpCenter,
      },
    ],
  },
];
