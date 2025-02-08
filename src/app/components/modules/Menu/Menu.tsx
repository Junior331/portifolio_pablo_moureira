"use client";

import { motion } from "framer-motion";
import React, { CSSProperties, useState } from "react";

import {
  fadeInVariant,
  mobileMenuVariant,
  hideNavItemsVariant,
} from "./utils";
import { handleRedirect } from "@/app/utils/utils";
import "./styles.css";

export const Menu = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="w-full flex gap-2 justify-between items-center p-7 px-8 lg:hidden">
      <motion.nav
        initial="closed"
        className="flex w-full justify-between"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        <div className="logo-container">
          <motion.h1 variants={hideNavItemsVariant}>
            {" "}
            <p className="text-[1.7rem] jetbrains-mono">
              <span className="khula-extrabold text-[#00FF99]">{`{`} </span>
              Pablo
              <span className="khula-extrabold text-[#00FF99]"> {`}`}</span>
            </p>
          </motion.h1>
        </div>
        <motion.h2
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          <svg
            width="40px"
            height="40px"
            version="1.1"
            fill="#fff"
            stroke="#fff"
            viewBox="0 0 24 24"
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Menu">
                  <rect
                    id="Rectangle"
                    fillRule="nonzero"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  ></rect>
                  <line
                    x1="5"
                    y1="7"
                    x2="19"
                    y2="7"
                    id="Path"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="5"
                    y1="17"
                    x2="19"
                    y2="17"
                    id="Path"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    id="Path"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                </g>
              </g>
            </g>
          </svg>
        </motion.h2>
        <motion.div
          variants={mobileMenuVariant}
          className="flex flex-col items-center bg-black fixed top-0 left-0 h-screen w-screen z-50"
        >
          <motion.button
            variants={fadeInVariant}
            className="self-end mt-9 mr-11 mb-0 ml-0 outline-none bg-transparent"
            onClick={() => setMobileNavOpen(false)}
          >
            <svg
              fill="#fff"
              width="25px"
              height="25px"
              viewBox="0 0 8 8"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.66L6.66 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66 6.66L1 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.div
            variants={fadeInVariant}
            className="flex flex-1 items-end mb-10"
          >
            <div className="w-auto h-auto">
              <motion.button
                onClick={() => handleRedirect()}
                className="relative flex w-80 h-14 cursor-pointer items-center justify-center rounded-md border-none p-2 animate-pulse"
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
                  Iniciar Conversa no WhatsApp
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
};
