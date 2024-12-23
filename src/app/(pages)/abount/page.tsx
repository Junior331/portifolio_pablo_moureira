"use client";

import React, { CSSProperties } from "react";

import { Layout, Timeline } from "@/app/components/organism";
import { Text, Title } from "@/app/components/elements";
import Image from "next/image";
import { mocks } from "@/app/services/mocks";
import { cn, handleRedirect } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { images } from "@/app/assets/images";
import { data } from "./utils";

export default function Abount() {


  return (
    <Layout>
      <div className="w-full h-auto flex flex-col justify-center items-start gap-4">
        <div className="w-full h-full gap-5 grid grid-cols-1 lg:grid-cols-2 pb-5 place-items-end lg:pr-20 ">
          <div className="flex flex-col w-full h-full px-9 gap-4 lg:order-1 order-2">
            <Title className="text-5xl mb-5 mt-10">Top ? Vamos lá =)</Title>
            <Text className="text-lg max-w-4xl">
              Meu nome é Pablo Moreira, especialista backend e apaixonado por
              javascript. Normalmente, trabalho com aplicações node e suas
              tecnologias aliadas, a exemplo do Express, serviços AWS, MySQL,
              MongoDB, Docker e etc, das quais sou entusiasta.
            </Text>
            <Text className="text-lg max-w-4xl">
              Hoje presto serviço para uma startup fintech, em uma grande
              empresa multinacional do setor de varejo, com foco em bank as
              service. Antes passei por algumas outras empresas e consultorias,
              aonde destacaria a TV Globo e as Lojas Americanas SA.
            </Text>
            <Text className="text-lg max-w-4xl">
              Fico à disposição para dúvidas e poder contribuir com soluções aos
              seus problemas.
            </Text>

            <div className="w-auto h-auto mt-10">
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
          </div>

          <div
            className={cn(
              `mx-auto my-0 max-h-[23rem] max-w-[23rem] order-1 w-screen h-screen relative rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] lg:max-h-[34rem] lg:max-w-[34rem] lg:order-2 lg:mr-0`
            )}
          >
            <Image
              alt={`Image avatar`}
              src={images.avatar}
              className="max-h-[20rem] max-w-[20rem] w-screen h-screen object-cover rounded-full brightness-[0.6] lg:max-h-[30rem] lg:max-w-[30rem]"
            />
            <div
              className={cn(
                `rounded-full absolute right-[-18px] z-10 w-screen h-screen max-w-[5rem] max-h-[5rem] bottom-[-30px] flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] lg:max-w-[6.5rem] lg:max-h-[6.5rem]`
              )}
            ></div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto px-9 gap-10 mb-10">
          <Title className="text-4xl">Skills & Expertise</Title>

          <div className="flex w-full h-auto">
            <div className="flex flex-wrap items-center w-screen gap-3 justify-start">
              {[
                ...mocks.projects[0].stacks,
                ...mocks.projects[0].stacks,
                ...mocks.projects[0].stacks,
                ...mocks.projects[0].stacks,
              ].map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    `h-12 w-12 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`
                  )}
                >
                  <Image
                    src={item.url}
                    className="h-6 w-6"
                    alt={`Icons ${item.name}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[100dvw] w-full h-auto px-9 gap-4">
          <Title className="text-4xl">Professional Experience</Title>
          <Text className="max-w-[550px] leading-6">
            Tenho me dedicado ao desenvolvimento de soluções criativas e
            impactantes ao longo dos últimos anos. Aqui está um resumo das
            minhas experiências e aprendizados no setor.
          </Text>

          <div className="flex justify-start items-start w-full h-auto">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
