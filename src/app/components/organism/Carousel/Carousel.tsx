"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Props } from "./@types";
import { cn } from "@/app/utils/utils";
import { project } from "@/app/utils/types";

export const Carousel = ({ projects }: Props) => {
  const router = useRouter();

  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    containScroll: "trimSnaps",
  });
  const [list, setList] = useState<project[]>(projects);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = useCallback(() => {
    if (!embla) return;
    autoScrollInterval.current = setInterval(() => {
      embla.scrollNext();
    }, 1500);
  }, [embla]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, [startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    if (projects.length < 15) {
        const newList = Array(3).fill(null).flatMap(() => projects);
        setList(newList);
    }
  }, [projects]);

  return (
    <div
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#000000] via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#000000] via-transparent to-transparent" />
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex w-screen gap-3">
          {list.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "rounded-lg overflow-hidden border-2 border-white cursor-pointer w-28 h-32 relative flex-shrink-0",
                index + 1 === list.length ? "mr-3" : ""
              )}
              onClick={() => router.push(`/pages/projects/${item.id}`)}
            >
              <Image
                src={item.image}
                alt={`Image project ${item.title}`}
                className="object-cover w-full h-full brightness-[0.48]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
