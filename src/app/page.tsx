import React from "react";
import Image from "next/image";
import { HeroParallax } from "../components/ui/hero-parallax";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { ContainerScroll } from "../components/ui/container-scroll-animation.tsx";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { matches, videos } from "../app/const";
import pptable from "../assets/pptable.png";
import iyer from "../assets/iyer.webp";
import russell from "../assets/russell.webp";
import rana from "../assets/rana.webp";
import rinku from "../assets/rinku.webp";
import { PinContainer } from "@/components/ui/3d-pin";
import logo from "../assets/kkr-logo.webp";
import vc from "../assets/VC.webp";

export default function HeroParallaxDemo() {
  return (
    <div>
      <HeroParallax products={matches} />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1
                className="text-4xl font-semibold  dark:text-white"
                style={{
                  color: "#3C215e",
                }}
              >
                IPL 2024 <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  POINTS TABLE
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={pptable}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div
        className=" flex    flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
        style={{
          background: "#3c215e",
        }}
      >
        <h1
          className="max-w-2xl text-4xl md:text-6xl font-bold"
          style={{
            color: "hsl(45 100% 56%)",
            margin: "2rem",
          }}
        >
          Top Performances
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 ">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600"
                style={{
                  color: " #3a225d",
                }}
              >
                Top Batter KKR 2024
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-1 "
                style={{
                  color: " #3a225d",
                }}
              >
                TOTAL RUNS 450 RUNS | STIKE RATE 170.0
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={iyer}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600"
                style={{
                  color: " #3a225d",
                }}
              >
                Top Bowler KKR 2024
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 "
                style={{
                  color: "#3a225d",
                }}
              >
                TOTAL WICKETS 13 | ECONOMY RATE - 5.7
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={vc}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
      <div
        className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
        style={{
          background: "hsl(0 0 95%)",
        }}
      >
        <InfiniteMovingCards items={videos} direction="right" speed="slow" />
      </div>

      <div
        className="p-10"
        style={{
          background: "#3C215e",
        }}
      >
        <StickyScroll content={content} />
      </div>

      <footer className="bg-gray-900 text-gray-300 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; Kolata Kinght Riders</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const content = [
  {
    title: "Shreyas Iyer",
    description:
      "The metropolitan city of Mumbai has always produced high-quality batters in their 'maidans' and Shreyas Iyer is one such player whose natural ability is on display every time he walks onto the field with the bat in his hand. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={iyer}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Andre Russell",
    description:
      "Andre Russell is an all-time legend of T20 cricket around the globe. He is someone whose explosive batting, thunderous bowling, and athletic fielding make him a force to be reckoned with on the cricket field.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={russell}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Rinku Singh",
    description:
      "Rinku Singh - A young boy from Aligarh who dreamt big, believed in his skill, never gave up on his sport and went on to become one of the most inspiring cricketers of this generation. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={rinku}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Nitish Rana",
    description:
      "As they normally say in cricket, left-handed batters are elegance personified, one can definitely say that's the case of Nitish Rana. A fluent middle-order batter with peculiar className & grace to his batting coupled with an impressive power game.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={rana}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "More Players",
    description:
      "Varun Chakravarthy, Sunil Narine (WI), Vaibhav Arora, Chetan Sakariya, Harshit Rana, Suyash Sharma, Mitchell Starc (AUS), Gus Atkinson (ENG), Sakib Hussain, Mujeeb Ur Rahman (AFG) . Click the beside image to know more.",
    content: (
      <PinContainer title="/kkr.in" href="https://kkr.in">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            KKR Offical Website
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              KKR is an online platform for cricket.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
              src={logo}
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        </div>
      </PinContainer>
    ),
  },
];
