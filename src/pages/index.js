import { Main } from "next/document";
import Image from "next/image";
import Video from "@/components/Video";
import CharHoverExpand from "@/components/Character";
import Contact from "@/components/ContactUs";
import News from "@/components/News";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import DropdownMenu from "@/components/DropdownMenu";
import OnlineGame from "@/components/OnlineGame";

export default function Home() {
  return (<main className="min-h-screen overflow-hidden mx-auto">
    <div id="game" className="mx-auto w-[90%] max-w-[1440px] mt-[20px] lg:mt-[34px] flex justify-between">
      <div className="flex items-center">
        <img src="/NC logo.png" alt="logo" className="w-[20px] h-auto mr -[5px] md:w-[40px] h-auto mr-[10px]" />
        <h4 className="text-primary font-semibold text-[16px] md:text-[18px] lg:text-[20px]">INFINITYHEX GAMES</h4>
      </div>
      <div className="flex justify-between items-center gap-15 ">
        <div className="hidden md:flex items-center gap-[10px]">
          <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="30" height="30" stroke="black" />
            <path d="M12.9998 11.9167H8.6665V19.5H12.9998V11.9167ZM12.9998 11.9167L14.0832 14.0833M10.8332 2.16667C10.8332 2.16667 8.6665 4.225 8.6665 5.41667C8.6665 6.60834 9.6415 7.58334 10.8332 7.58334C12.0248 7.58334 12.9998 6.60834 12.9998 5.41667C12.9998 4.225 10.8332 2.16667 10.8332 2.16667Z" stroke="#00D87B" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.4998 19.5C19.4998 20.6493 19.0433 21.7515 18.2306 22.5641C17.418 23.3768 16.3158 23.8333 15.1665 23.8333H6.49984C5.35057 23.8333 4.24837 23.3768 3.43571 22.5641C2.62305 21.7515 2.1665 20.6493 2.1665 19.5H21.6665C22.095 19.5 22.5139 19.3729 22.8702 19.1349C23.2265 18.8968 23.5043 18.5584 23.6682 18.1625C23.8322 17.7666 23.8751 17.3309 23.7915 16.9106C23.7079 16.4904 23.5016 16.1043 23.1986 15.8013C22.8956 15.4983 22.5095 15.2919 22.0892 15.2083C21.6689 15.1247 21.2333 15.1676 20.8374 15.3316C20.4414 15.4956 20.1031 15.7733 19.865 16.1296C19.6269 16.4859 19.4998 16.9048 19.4998 17.3333V19.5Z" stroke="#00D87B" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <a href="#online" className="hidden md:block text-primary font-semibold text-[16px] xl:text-[18px]">GAMES</a>
        </div>
        <a href="#about" className="hidden md:block text-secondary font-semibold text-[16px] xl:text-[18px]">ABOUT US</a>
        <a href="#contact" className="hidden md:block text-secondary font-semibold text-[16px] xl:text-[18px]">CONTACT</a>
        <div className="flex">
          <a id="sign in" href="" className="hidden md:block text-primary border:solid border-2 border-primary font-semibold px-[26px] xl:px-[30px] py-[10px] text-[16px] xl:text-[18px] mr-[15px]">SIGN IN</a>
          <a href="" className="">
            <svg className="hidden md:block text-primary h-[45px] w-[45px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </a>
        </div>
        
      </div>
      <div className="md:hidden">
        <DropdownMenu/>
      </div>
    </div>
    <section className="mx-auto w-[90%] max-w-[1440px] hidden md:flex">
      <div className="relative w-[35%] flex-col leading-tight z-10 ">
        <div className="absolute mt-[50px] flex-col font-bold bottom-[100px] xl:bottom-[120px]">
          <h1 className="text-primary text-[30px] mt-[100px] md:text-[48px] xl:text-[60px]">NETHERWORLD</h1>
          <h1 className="text-primary text-[48px] xl:text-[60px] pl-[60px]">CANDLE&nbsp;<span className="text-secondary">ADVENTURE</span></h1>
          <h1 className="text-secondary text-[48px] xl:text-[60px] pl-[30px]">LIKE NO OTHER</h1>
        </div>
        <h4 className="absolute text-nowrap flex-col bottom-[54px] text-[16px] xl:text-[20px] text-secondary font-extralight z-10">
          A 1-4 player cooperative board game inspired by
        </h4>
        <h4 className="absolute text-nowrap bottom-[27px] text-[16px] xl:text-[20px] flex-col text-secondary font-extralight z-10">
          Chinese folklore. Explore tombs, face spirits, and
        </h4>
        <h4 className="absolute text-nowrap bottom-0 flex-col text-[16px] xl:text-[20px] text-secondary font-extralight z-10">
          uncover lost treasures.
        </h4>
      </div>
      <div className="w-[65%] pt-[75px]">
        <Video src="/NW video new.mp4" />
      </div>
    </section>
    <div className="mx-auto mt-[30px] absolute left-0 right-0 hidden md:flex justify-center animate-bounce">
      <a href="#aboutGame">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-8 text-primary">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </a>
    </div>
          <section className="mx-auto w-[90%] max-w-[1440px] flex flex-col items-center md:hidden">
        <div className="relative w-full z-10 mt-4">
        <div className="absolute font-bold  leading-tight">
          <h1 className="text-primary text-[24px] ml-6">NETHERWORLD</h1>
          <h1 className="text-primary text-[24px] ml-14">CANDLE <span className="text-secondary">ADVENTURE</span></h1>
          <h1 className="text-secondary text-[24px] ml-9">LIKE NO OTHER</h1>
        </div>
        </div>
        
        <div className="w-full mt-10">
          <Video src="/test.mp4" />
        </div>
        <div className="text-center mt-8">
            <h4 className="text-[12px] md:text-[16px] text-secondary font-extralight">
                A 1-4 player cooperative board game inspired by Chinese folklore. Explore tombs, face spirits, and uncover lost treasures.
            </h4>
        </div>
        <div className="mx-auto mt-[30px] left-0 right-0 flex justify-center animate-bounce">
      <a href="#aboutGame">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-8 text-primary">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </a>
    </div>
    </section>

      <section id="online">
        <OnlineGame/>     
      </section>

    <section id="aboutGame" className="mx-auto w-[90%] md:mt-[100px] max-w-[1440px] pt-1.5">
      <h2 className="text-primary  mt-[60px] md:mt-[120px] font-semibold text-center text-[22px] md:text-[40px]">About the Game</h2>
      <div className="w-full flex flex-col md:flex-row justify-between mt-[50px] md:mt-[100px]">
        <div className="felx flex-col w-full md:w-1/2 mb-[20px]">
          <div className="md:mt-[50px] flex justify-center">
            <svg width="150" height="24" viewBox="0 0 131 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H49.375" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M130 8H81.625" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8L57.4375 1L41.3125 8L57.4375 15L65.5 8Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8.00004L60.6625 3.33337L49.375 8.00004L60.6625 12.6667L65.5 8.00004Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8L73.5625 1L89.6875 8L73.5625 15L65.5 8Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8.00004L70.3375 3.33337L81.625 8.00004L70.3375 12.6667L65.5 8.00004Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M62.2749 8H68.7249" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h4 className="text-primary font-semibold mt-[10px] md:mt-[25px] text-[18px] md:text-[22px] flex justify-center">Game Overview</h4>
          <div className="w-full md:w-[90%] m2:w-1/2 flex justify-center items-center mx-auto">
          <p className="text-secondary text-[12px] md:text-[14px] xl:text-[18px] font-extralight mt-[15px]">
            Netherworld Candle is a 1-4 player cooperative campaign
            game that fuses Eastern mythology with supernatural
            horror. Players embark on a branching, story-driven journey
            where every decision shapes the fate of their world.
            Through beautifully illustrated storybooks and immersive
            exploration, you'll uncover ancient tombs, confront dark
            spirits, and experience a tale where every success or failure
            leaves a lasting mark.
          </p>
          </div>
        </div>
        <div className="w-[90%] md:w-1/2 aspect-video overflow-hidden mx-auto">
          <img src="/aboutus1.2.png" alt="game photo" className="w-full h-full object-cover" />
        </div>
      </div>


      <div className="w-full flex flex-col md:flex-row justify-between mt-[60px]">
        <div className="hidden md:block w-[50%] aspect-video overflow-hidden">
          <img src="/about us2.2.png" alt="game photo" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-auto">
          <div className="mt-[20px] md:mt-[50px] flex justify-center">
            <svg width="150" height="24" viewBox="0 0 131 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H49.375" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M130 8H81.625" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8L57.4375 1L41.3125 8L57.4375 15L65.5 8Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8.00004L60.6625 3.33337L49.375 8.00004L60.6625 12.6667L65.5 8.00004Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8L73.5625 1L89.6875 8L73.5625 15L65.5 8Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M65.5 8.00004L70.3375 3.33337L81.625 8.00004L70.3375 12.6667L65.5 8.00004Z" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M62.2749 8H68.7249" stroke="#00D87B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="w-full md:w-[90%] mx-auto">
          <h4 className="text-primary font-semibold mt-[10px] md:mt-[25px] text-[18px] md:text-[22px] flex justify-center">Unique Features</h4>
          </div>
          <div className="w-full md:w-[90%] mx-auto">
          <p className=" text-secondary text-[12px] md:text-[14px] xl:text-[18px] font-extralight mt-[15px]">
            Combining narrative depth with tactical mastery, the game's
            dual-phase design offers both story-driven adventure and
            intense strategy.
            Its signature Candle Track adds mounting tension as time runs
            out, while the Yin & Yang Encounter System forces meaningful
            risk-reward decisions. Every session is a cinematic balance of
            danger and discovery, delivering an experience unlike any other
            cooperative game.
          </p>
          </div>
        </div>
        <div className="w-[90%] md:hidden aspect-video overflow-hidden mx-auto mt-[20px]">
          <img src="/about us2.png" alt="game photo" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
    <h2 className="text-primary mt-[60px] md:mt-[150px] font-semibold text-center text-[22px] md:text-[40px]">
      Characters</h2>
    <div className="relative mx-auto mt-[50px] w-full max-w-[1440p] aspect-video">
      <img src="/bgimg.jpg" alt="background image" className="absolute w-full aspect-[15/8] object-cover" />
      <CharHoverExpand className="w-[80%] aspect-video" />
    </div>
    <section className="">
      <AboutUs />
    </section>
    <section className="">
      <Contact />
    </section>
    {/* <section className="">
          <ContactForm/>
      </section> */}
    <section className="">
      <News />
    </section>
    <section className="">
      <Footer />
    </section>
  </main >)
}
