"use client";

import Link from "next/link";
import { routes } from "./utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import { handleRedirect } from "@/app/utils/utils";

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full hidden gap-2 justify-between items-center p-7 px-8 lg:flex">
      <p className="text-[1.7rem] jetbrains-mono">
        <span className="khula-extrabold text-[#00FF99]">{`{`} </span>
        Pablo
        <span className="khula-extrabold text-[#00FF99]"> {`}`}</span>
      </p>

      <div className="flex items-center justify-center gap-5">
        <div className="flex gap-16 items-center flex-1 max-w-96">
          {routes.map((route) => {
            // Verificação específica para evitar que `/` ative outras rotas
            const isActive =
              route.path === "/"
                ? pathname === route.path
                : pathname.startsWith(route.path);
            return (
              <Link
                key={route.id}
                href={route.path}
                className={`flex gap-2 flex-col place-items-center min-h-10 ${
                  isActive ? "text-accent" : ""
                }`}
              >
                <span className="inter text-base">{route.label}</span>
                {isActive && (
                  <div className="flex w-2 h-2 rounded-lg bg-white" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="w-auto h-auto">
          <motion.button
            onClick={() => handleRedirect()}
            className="relative flex w-32 h-14 cursor-pointer items-center justify-center rounded-md border-none p-2 animate-pulse"
            style={
              {
                backgroundColor: "#000000",
                color: "#ffffff",
                "--pulse-color": "#212222",
                "--duration": "1.5s",
              } as CSSProperties
            }
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              key="reaction"
              initial={{ x: 0 }}
              className="relative block font-semibold"
              exit={{ x: 50, transition: { duration: 0.1 } }}
            >
              WhatsApp
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
