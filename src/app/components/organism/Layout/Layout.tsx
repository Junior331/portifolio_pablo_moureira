"use client";

import { LayoutProps } from "./@types";
import { BackgroundBeamsWithCollision } from "..";
import { Header, Menu } from "@/app/components/modules";

export const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className="w-screen min-h-screen flex items-center justify-between dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative overflow-y-auto">
    //   <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    //   <div className="flex flex-col w-full min-h-screen h-auto items-center justify-items-center overflow-y-auto relative z-10">
    //     <Header />
    //     {children}
    //   </div>
    // </div>

    <div className="w-screen min-h-screen flex items-center justify-between dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative overflow-y-auto">
      <BackgroundBeamsWithCollision />
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="flex flex-col w-full min-h-screen h-auto items-center justify-items-center overflow-y-auto relative z-10">
        <Menu />
        <Header />
        {children}
      </div>
    </div>
  );
};
