"use client";

import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { TfiYoutube } from "react-icons/tfi";

interface MenuItem {
  icon: IconType;
  text: string;
  pathname: string;
}

const MenuItems: Array<MenuItem> = [
  {
    icon: HiHome,
    text: "Home",
    pathname: "/",
  },
  {
    icon: TfiYoutube,
    text: "Shorts",
    pathname: "/shorts",
  },
  {
    icon: BsCollectionPlay,
    text: "Subscriptions",
    pathname: "/feed/subscriptions",
  },
  {
    icon: AiOutlineYoutube,
    text: "Originals",
    pathname: "/originals",
  },
  {
    icon: BiPlayCircle,
    text: "YouTube Music",
    pathname: "/music",
  },
];
type Props = {};

function SideNavigation({}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (item: MenuItem) => {
    router.push(item.pathname);
  };
  return (
    <div className="p-[4px] lg:w-[260px] lg:p-3">
      {MenuItems.map((item, i) => (
        <div
          key={i}
          onClick={() => handleClick(item)}
          className={`${
            pathname === item.pathname && "bg-zinc-800 hover:bg-zinc-500"
          } flex flex-col gap-1 p-4 items-center cursor-pointer hover:bg-zinc-800  rounded-lg lg:flex-row lg:gap-6 lg:py-2`}
        >
          <item.icon size={24} />
          <span className="text-xs lg:text-base">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default SideNavigation;
