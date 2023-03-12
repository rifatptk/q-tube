import React from "react";
import Image from "next/image";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  title: string;
  thumbnailUrl: string;
  channelImageUrl: string;
  channelName: string;
  viewCount: number;
  createdAt: Date;
};

function VideoCard({
  title,
  thumbnailUrl,
  channelImageUrl,
  channelName,
  viewCount,
  createdAt,
}: Props) {
  return (
    <div key={title} className="flex flex-col gap-3">
      <div className="relative">
        <Image
          src={thumbnailUrl}
          height={200}
          width={400}
          alt="thumnail"
          className="rounded-lg"
        />
        <span className="absolute bottom-2 right-2 bg-zinc-900/80 rounded px-2 py-[2px] text-xs font-semibold">
          24:36
        </span>
      </div>
      {/* text-content-container */}
      <div className="flex gap-3">
        {/* channel-avatar */}
        <div className="">
          <Image
            src={channelImageUrl}
            width={40}
            height={40}
            alt="channelImage"
            className="rounded-full object-cover w-10 h-10"
          />
        </div>
        {/* text-content */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex justify-between gap-3">
            <span className="font-semibold text-white">
              {title.substring(0, 24)}...
            </span>
            <BsThreeDotsVertical className="shrink-0 cursor-pointer" />
          </div>
          <div className="text-sm text-zinc-400">
            <span>{channelName}</span>
            <div className="flex items-center">
              <span>{viewCount}</span>
              <BsDot />
              <span>{createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
