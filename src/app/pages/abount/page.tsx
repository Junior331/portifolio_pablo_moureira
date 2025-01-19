"use client";

import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";

import { useTheme } from "next-themes";
import { mocks } from "@/app/services/mocks";
import { data as dataTimeLine } from "./utils";
import { cn, fetchIcons } from "@/app/utils/utils";
import { RenderIcon, Title } from "@/app/components/elements";
import { Layout, Timeline } from "@/app/components/organism";
import { IconData } from "@/app/components/organism/CloudStack/@types";
import Image from "next/image";
import { icons } from "@/app/assets/icons";

export default function Abount() {
  const { theme } = useTheme();
  const [data, setData] = useState<IconData | null>(null);

  useEffect(() => {
    fetchIcons(mocks.slugs).then((response) => {
      console.log("Icons fetched:", response.simpleIcons);
      setData(response);
    });
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) => (
      <div
        key={icon.slug}
        className={cn(
          `h-12 w-12 p-3 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`
        )}
      >
        {icon.slug.includes("azure") ? (
          <Image src={icons.azure} className="h-6 w-6" alt={`Icons azure`} />
        ) : (
          <RenderIcon icon={icon} theme={theme || "light"} />
        )}
      </div>
    ));
  }, [data, theme]);

  return (
    <Layout>
      <div className="w-full h-auto flex flex-col justify-center items-start gap-4">
        <div className="flex flex-col w-full h-auto px-9 gap-10 mb-10">
          <Title className="text-4xl">Skills & Expertise</Title>

          <div className="flex w-full h-auto">
            <div className="flex flex-wrap items-center w-screen gap-3 justify-start">
              {renderedIcons}
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[100dvw] w-full h-auto px-9 gap-4">
          <Title className="text-4xl">JORNADA</Title>

          <div className="flex justify-start items-start w-full h-auto">
            <Timeline data={dataTimeLine} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
