import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { ContainerScroll } from "../../components/ui/container-scroll-animation.tsx";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import match1 from "../../assets/match1.webp";
import match2 from "../../assets/match2.webp";
import match3 from "../../assets/match3.webp";
import match4 from "../../assets/match4.webp";
import match5 from "../../assets/match5.webp";
import match6 from "../../assets/match6.webp";
import match7 from "../../assets/match7.webp";
import match8 from "../../assets/match8.webp";
import match9 from "../../assets/match9.webp";
import match10 from "../../assets/match10.webp";
import match11 from "../../assets/match11.webp";
import match12 from "../../assets/match12.webp";
import match13 from "../../assets/match13.webp";
import match14 from "../../assets/match14.webp";
import pptable from "../../assets/pptable.png";
import model1 from "../../assets/model1.webp";
import iyer from "../../assets/iyer.webp";
import russell from "../../assets/russell.webp";
import rana from "../../assets/rana.webp";
import rinku from "../../assets/rinku.webp";
import sunil from "../../assets/sunil.webp";
import { PinContainer } from "@/components/ui/3d-pin";
import cb from "../../assets/cricbuzz.png";
import crex from "../../assets/crex.jpg";
import logo from "../../assets/kkr-logo.webp";
import vc from "../../assets/VC.webp";


const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};


export default function HeroParallaxDemo() {
  return (
    <div>
      <HeroParallax products={products} />
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  dark:text-white"
             style={{
              color : '#3C215e',
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
    <div className=" flex    flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      style={{
        background : '#3c215e',
      }}
      >
        <h1 className="max-w-2xl text-4xl md:text-6xl font-bold"
      style={{
        color : 'hsl(45 100% 56%)',
        margin : '2rem',
    }}
      >
        Top Performances
      </h1>
      <div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 "
      >



      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 "
        
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600"
            style={{
              color : ' #3a225d',
            }}
          >
            Top Batter KKR 2024
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-1 "
            style={{
            color : ' #3a225d',
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
     
      
     
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
        
        
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600"
            style={{
              color : ' #3a225d',
            }}
          >
            Top Bowler KKR 2024
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 "
            style={{
              color : '#3a225d',
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
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      style={{
        background : 'hsl(0 0 95%)',
      }}
      >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

    <div className="p-10"     style={{
        background : '#3C215e',
    }}>
     
      <StickyScroll content={content} />
 
    </div>

    



    <footer class="bg-gray-900 text-gray-300 p-4">
    <div class="container mx-auto">
        <div class="flex justify-between items-center">
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
      <div className="h-full w-full  flex items-center justify-center text-white" >
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
      <div className="h-full w-full  flex items-center justify-center text-white" >
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
      <div className="h-full w-full  flex items-center justify-center text-white" >
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
      "As they normally say in cricket, left-handed batters are elegance personified, one can definitely say that's the case of Nitish Rana. A fluent middle-order batter with peculiar class & grace to his batting coupled with an impressive power game.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white" >
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
      <PinContainer
      title="/kkr.in"
      href="https://kkr.in"
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          KKR Offical Website
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">
            KKR is an online platform for cricket.
          </span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
          
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


const testimonials = [
  {
    quote:
      "https://www.youtube.com/embed/gWImwVXk_U8?si=OqOUvhNFv0Yd5y8N",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "https://www.youtube.com/embed/vna8NtTV5gA?si=d0xqMcYqcGlRlgcj",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "https://www.youtube.com/embed/fc5N4YrZtgs?si=KPxe_J5RmglWHq0o",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "https://www.youtube.com/embed/sgeLNLTl0FI?si=DgBhaM7xf6R5msIN",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "https://www.youtube.com/embed/lBI0hBA-ALk?si=CovPxQB84JUijJRw",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const products = [
  {
    title: "KKR VS SRH Match 3",
    link: "https://www.kkr.in/scores-fixtures/kolkata-knight-riders-vs-sunrisers-hyderabad-live-scores-krsh03232024237773",
    thumbnail: match1,
  },
  {
    title: "RCB VS KKR Match 10",
    link: "https://www.kkr.in/scores-fixtures/royal-challengers-bengaluru-vs-kolkata-knight-riders-live-scores-bckr03292024241756",
    thumbnail: match2,
  },
  {
    title: "DC VS KKR Match 16",
    link: "https://www.kkr.in/scores-fixtures/delhi-capitals-vs-kolkata-knight-riders-live-scores-ddkr04032024241767",
    thumbnail: match3,
  },

  {
    title: "CSK VS KKR Match 22",
    link: "https://www.kkr.in/scores-fixtures/chennai-super-kings-vs-kolkata-knight-riders-live-scores-ckkr04082024243024",
    thumbnail: match4,
  },
  {
    title: "KKR VS LSG Match 28",
    link: "https://www.kkr.in/scores-fixtures/kolkata-knight-riders-vs-rajasthan-royals-live-scores-krrr04162024243034",
    thumbnail: match5,
  },
  {
    title: "KKR VS RR Match 31",
    link: "https://www.kkr.in/scores-fixtures/kolkata-knight-riders-vs-rajasthan-royals-live-scores-krrr04162024243034",
    thumbnail: match6,
  },
  {
    title: "KKR VS RCB Match 36",
    link: "https://www.kkr.in/scores-fixtures/kolkata-knight-riders-vs-royal-challengers-bengaluru-live-scores-krbc04212024243038",
    thumbnail: match7,
  },

  {
    title: "KKR VS PBKS Match 42",
    link: "https://www.kkr.in/scores-fixtures/kolkata-knight-riders-vs-punjab-kings-live-scores-krkp04262024243044",
    thumbnail: match8,
  },
  {
    title: "KKR VS DC Match 47",
    link: "https://www.kkr.in/scores-fixtures/kolkata-knight-riders-vs-delhi-capitals-live-scores-krdd04292024243052",
    thumbnail: match9,
  },
  {
    title: "MI VS KKR Match 51",
    link: "https://www.kkr.in/scores-fixtures/mumbai-indians-vs-kolkata-knight-riders-live-scores-mikr05032024243056",
    thumbnail: match10,
  },
  {
    title: "LSG VS KKR Match 54",
    link: "https://www.kkr.in/scores-fixtures/lucknow-super-giants-vs-kolkata-knight-riders-live-scores-lkokr05052024243059",
    thumbnail: match11,
  },
  {
    title: "KKR VS MI Match 60",
    link: "https://www.kkr.in/scores-fixtures/kolkata-knight-riders-vs-mumbai-indians-live-scores-krmi05112024243065",
    thumbnail: match12,
  },

  {
    title: "GT VS KKR Match 63",
    link: "https://www.kkr.in/scores-fixtures/gujarat-titans-vs-kolkata-knight-riders-live-scores-ahmkr05132024243068",
    thumbnail: match13,
  },
  {
    title: "RR VS KKR Match 70",
    link: "https://www.kkr.in/scores-fixtures/rajasthan-royals-vs-kolkata-knight-riders-live-scores-rrkr05192024243075",
    thumbnail: match14,
  },
];
