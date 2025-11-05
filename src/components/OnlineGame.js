import Image from 'next/image';
import Link from 'next/link';

const OnlineGame = () => {

  return (
    <div className=" bg-black w-[85%] mx-auto mt-[40px] md:mt-[200px] text-white font-sans">
      <h2 className="text-primary mt-[50px] md:mt-[10px] mb-[20px] md:mb-[50px] font-semibold text-center text-[22px] md:text-[40px]">Online Game</h2>
      <div className="relative w-full rounded-[30px] aspect-square md:aspect-video">
       
        <Image
          src="/online2.png" 
          alt="Netherworld Candel game background"
          layout="fill"
          objectFit="cover"
          className="rounded-[15px] md:rounded-[30px]"
        />

        <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 text-white sm:left-16">

          <h2 className="mb-6 text-[20px] md:text-[46px] font-bold text-primary md:text-5xl">
            Online Game Available Now
          </h2>

          <p className="w-[90%] md:w-1/2 md:font-light text-[10px] md:text-[20px] text-secondary">
            Netherworld Candel is now available online, supporting single-player challenges or multiplayer co-op mode. Start your adventure anytime, anywhere
          </p>

          <a href="https://netherworld-online-game-client.vercel.app/" className="mt-8 inline-flex items-center rounded-full 
                border-2 border-primary px-8 py-3 
                text-primary text-[14px] md:text-[24px] font-bold transition-colors duration-300 
                hover:bg-primary hover:text-white">Play Now</a>
      </div>
    </div>
    </div >
  )
}

export default OnlineGame;