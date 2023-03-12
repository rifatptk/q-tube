"use client";
import React, { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { MdMic } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";

type Props = {};

function TopNavigation({}: Props) {
  const [search, setsearch] = useState("");

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-6">
        <div className="cursor-pointer hover:bg-zinc-800 p-2 rounded-full">
          <HiOutlineMenu size={26} />
        </div>
        <div className="flex items-center gap-1">
          <BsYoutube size={30} className="text-red-500" />
          <span className="text-xl font-semibold">
            YouTube <sup className="text-xs font-normal text-zinc-400">BD</sup>
          </span>
        </div>
      </div>

      <div className="flex items-center md:min-w-[300px] lg:w-[620px] rounded-full">
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="hidden md:block w-full px-4 py-2 bg-zinc-900 border-[1px] border-zinc-700 rounded-l-full placeholder:text-zinc-500 focus:outline-none focus:border-sky-500"
        />
        <div
          className="md:bg-zinc-800 px-4 py-2 md:border-[1px] border-l-0 border-zinc-700 rounded-r-full cursor-pointer"
          title="Search"
        >
          <HiOutlineSearch size={24} />
        </div>
        <div
          title="Search with your voice"
          className="rounded-full bg-zinc-800 hover:bg-zinc-700 p-2 mx-2 cursor-pointer"
        >
          <MdMic size={24} />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="p-2 rounded-full hover:bg-zinc-800 cursor-pointer">
          <AiOutlineVideoCameraAdd size={24} />
        </div>
        <div className="p-2 rounded-full hover:bg-zinc-800 cursor-pointer">
          <IoIosNotificationsOutline size={24} />
        </div>
        <div className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer">
          <FiUser size={24} />
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
