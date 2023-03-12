import { IFeedVideo } from "@/types";
import React from "react";
import VideoCard from "./VideoCard";

type Props = {
  videos: Array<IFeedVideo>;
};

function VideoGrid({ videos }: Props) {
  return (
    <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-10">
      {videos.map((video) => (
        <VideoCard {...video} key={video.title} />
      ))}
    </div>
  );
}

export default VideoGrid;
