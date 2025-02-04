"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";
import { handleRedirect } from "@/app/utils/utils";

export const Header = () => {

  return (
    <div className="w-full hidden gap-2 justify-between items-center p-7 px-8 lg:flex">
      <p className="text-[1.7rem] jetbrains-mono">
        <span className="khula-extrabold text-[#00FF99]">{`{`} </span>
        Pablo
        <span className="khula-extrabold text-[#00FF99]"> {`}`}</span>
      </p>

      <div className="flex items-center justify-center gap-5">
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
