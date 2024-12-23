"use client";

import { motion } from "framer-motion";
import React, { CSSProperties, useState } from "react";

import {
  ulVariant,
  liVariant,
  fadeInVariant,
  mobileMenuVariant,
  hideNavItemsVariant,
} from "./utils";
import { routes } from "../Header/utils";
import { handleRedirect } from "@/app/utils/utils";
import "./styles.css";
import Link from "next/link";

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
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Menu">
                  <rect
                    id="Rectangle"
                    fill-rule="nonzero"
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
                    stroke-width="2"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="5"
                    y1="17"
                    x2="19"
                    y2="17"
                    id="Path"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    id="Path"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></line>
                </g>
              </g>
            </g>
          </svg>
        </motion.h2>
        <motion.div
          variants={mobileMenuVariant}
          className="flex flex-col items-center bg-black fixed top-0 left-0 h-screen w-screen z-20"
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66 6.66L1 1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.button>
          <motion.ul variants={ulVariant} className="mt-10">
            {routes.map((navItem) => (
              <motion.li
                whileTap={{ scale: 0.95 }}
                key={navItem.id}
                className="mx-0 my-5 hover:italic cursor-pointer"
              >
                <motion.div
                  variants={liVariant}
                  className="text-center text-4xl"
                >
                  <Link href={navItem.path}>{navItem.label}</Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
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
