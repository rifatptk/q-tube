import VideoGrid from "@/components/VideoGrid";
import { feedVideos } from "@/data";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <VideoGrid videos={feedVideos} />
    </main>
  );
}
