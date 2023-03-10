import "./globals.css";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

export const metadata = {
  title: "Q-Tube",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className="h-screen flex flex-col">
          <TopNavigation />

          <div className="border-4 border-blue-500 flex-1 flex">
            <SideNavigation />
            <main className="border-4 border-green-500 flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}