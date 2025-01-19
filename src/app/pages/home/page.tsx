"use client";

import React from "react";

import { mocks } from "@/app/services/mocks";
import { Button, Title } from "@/app/components/elements";
import { Layout, CloudStack } from "@/app/components/organism";
import { BoxReveal, BlurIn, NumberTicker } from "@/app/components/modules";
const curriculo = "/assets/lorem_ipsum.pdf";

export default function Home() {
  return (
    <Layout>
      <div className="w-screen h-auto flex-1 flex flex-col justify-between items-center pb-6 relative">
        <div className="flex h-auto mt-10 items-center justify-between w-full px-14 max-[1000px]:flex-wrap max-[1000px]:px-6 ">
          <div className="flex flex-col gap-14 w-full ">
            <BoxReveal boxColor={"#262626"} duration={0.5}>
              <Title className="text-5xl leading-[55px] font-extrabold">
                Olá, eu sou
                <br />
                PABLO MOUREIRA
              </Title>
            </BoxReveal>

            <div className="flex flex-col gap-3 max-w-[760px] ">
              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  Sou especialista em soluções tecnológicas e apaixonado por
                  inovação. Ao longo da minha trajetória, enfrentei desafios
                  diversos, desde o desenvolvimento de ferramentas para
                  transmissões esportivas baseadas em scouts até soluções de
                  pagamento e financeiras alinhadas a rigorosos padrões
                  regulatórios governamentais.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  Minha experiência é fruto de uma carreira dedicada à
                  engenharia de produtos, onde trabalhei com uma ampla gama de
                  tecnologias: de Java a JavaScript, passando por linguagens de
                  script, desenvolvimento de aplicações mobile e web, além de
                  práticas de segurança e infraestrutura.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  Estou à disposição para ajudar a transformar suas ideias em
                  soluções práticas e eficazes. Vamos conversar?
                </p>
              </BoxReveal>

              <div className="z-10 flex mt-16 items-center justify-start padding-button">
                <BoxReveal boxColor={"#262626"} duration={0.5}>
                  <Button
                    downloadStatus={false}
                    initialText={
                      <span className="group inline-flex items-center">
                        Baixe o meu curriculo
                        {/* <DownloadIcon className="ml-2 size-4 transition-transform duration-300" /> */}
                      </span>
                    }
                    changeText={
                      <span className="group inline-flex items-center">
                        {/* <CheckIcon className="mr-2 size-4" /> */}
                        Baixado
                      </span>
                    }
                    downloadFileUrl={curriculo}
                  />
                </BoxReveal>
              </div>
            </div>
          </div>
          <div className="m-auto relative flex h-auto max-w-[530px] w-full flex-col items-center justify-center overflow-hidden background">
            <CloudStack iconSlugs={mocks.slugs} />
          </div>
        </div>
        <div className="flex max-[465px]:flex-col-reverse max-[1000px]:flex-wrap-reverse max-[608px]:gap-16 max-[608px]:mt-14 gap-8 place-items-end justify-between bottom-8 w-screen px-8">
          <div className="flex gap-8">
            <a
              className="inter capitalize text-base cursor-pointer"
              href="https://www.linkedin.com/in/pablo-moreira-a18848165/"
              target="_blank"
            >
              <BlurIn
                word="Linkedin"
                className="inter capitalize text-base cursor-pointer"
              />
            </a>
            <BlurIn
              word="Github"
              className="inter capitalize text-base cursor-pointer"
            />
          </div>
          <div className="flex gap-12 max-[420px]:flex-wrap max-[465px]:flex-1 items-center justify-between flex-1 max-w-[755px]">
            <div className="w-auto">
              <p className="text-3xl font-bold ">
                + <NumberTicker value={7} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Anos de <br /> expêrincia
              </p>
            </div>
            <div className="w-auto">
              <p className="inter text-3xl font-bold ">
                + <NumberTicker value={8} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Tecnologias <br /> Dominadas
              </p>
            </div>
            <div className="w-auto">
              <p className="inter text-3xl font-bold ">
                + <NumberTicker value={980} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Commits em <br /> Projetos
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
