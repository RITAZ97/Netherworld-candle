"use client";
import Image from 'next/image';


const AboutUs = () => {

  return (
    <div id="about" className="w-full md:w-[85%] mt-[60px] md:mt-[120px] mx-auto mb-[80px]">
      <h2 className="text-primary mt-[50px] md:mt-[10px] mb-[50px] font-semibold text-center text-[22px] md:text-[40px]">About Us</h2>
      <div className="relative w-full rounded-[30px] aspect-square md:aspect-video">
        <Image
          src="/aboutusbg.png"
          alt="background img"
          layout="fill"
          objectFit="cover"
          className="md:rounded-[30px]"
        />
        <div className="absolute p-[20px] md:p-[80px]">
        <h3 className="text-primary text-[12px] md:text-[32px] font-bold">
          We Don't Just Make Games. We Build Worlds!
        </h3>
          <h5 className="text-secondary w-full md:w-3/5 mt-[20px] md:mt-[30px] font-extralight text-[11px] md:text-[18px]">
            Our mission is to create unforgettable, narrative-driven experiences for the modern tabletop gamer. We believe the best games are more than just rules and components; they are gateways to other worlds, engines for legendary stories, and catalysts for shared moments of triumph and challenge.
          </h5>
          <h5 className="text-secondary w-full md:w-3/5 mt-[20px] md:mt-[30px] font-extralight text-[11px] md:text-[18px]">
            InfinityHex Games was founded on a simple, powerful idea: that the most compelling gameplay emerges when elegant mechanics are forged in the heart of an immersive narrative. We are a studio that bridges worlds—uniting the intricate strategy of classic tabletop gaming with the rich, thematic depth of epic storytelling. We blend inspirations from the East and West to create something truly unique and universal.
          </h5>
        </div>
        <div className="absolute bottom-[30px] md:bottom-[80px] pl-[20px] md:pl-[80px] flex justify-between gap-[15px] md:gap-[30px]">
            <div className="border-2 md:border-3 border-primary rounded-[10px] md:rounded-[20px] p-[10px] md:p-[20px]">
              <h2 className="font-bold text-secondary text-[24px] md:text-[40px]">2 MILLION<span className='text-[10px] md:text-[16px] text-secondary font-light pl-[5px] md:pl-[10px]'>RMB</span></h2>
              <p className="text-secondary text-[10px] md:text-[16px]">Funding</p>       
            </div>
            <div className="border-2 md:border-3 border-primary rounded-[10px] md:rounded-[20px] p-[10px] md:p-[20px]">
              <h2 className="font-bold text-secondary text-[24px] md:text-[40px]">2K PLUS</h2>
              <p className="text-secondary text-[10px] md:text-[16px]">Backers</p>       
            </div>
        </div>
      </div>
    </div>

  )
}

export default AboutUs;