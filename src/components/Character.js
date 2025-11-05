"use client";
import { useState } from "react";

const charData = [
  {
    id: 1,
    image: "/char1.png",
    name: 'Whisperlark',
    details: 'Once a member of a secret intelligence group, later trained by the Tomb-Digging Sect master. A Mountraisers disciple skilled in stealth, swift strikes, and unseen movement.',
  },
  {
    id: 2,
    image: "/char2.png",
    name: 'Dr.Liang',
    details: `A wealthy returnee, descendant of tomb raiders. Found his father's ancient notes and returned home to seek hidden tombs, skilled in analysis and team inspiration.`,
  },
  {
    id: 3,
    image: "/char3.png",
    name: 'Big Guo',
    details: 'A wandering sorcerer disguised as a tavern chef, descendant of the Tomb-Raiding Sect, master of alchemy and grave arts, gifted with strength beyond ordinary men.',
  },
  {
    id: 4,
    image: "/char4.png",
    name: 'Iron Abacus',
    details: 'A blind fortune-teller with sharp hearing, master of ancient and modern divination. A Sky-Gazer Sect disciple skilled in Feng Shui and remarkably accurate predictions.',
  },
  {
    id: 5,
    image: "/char5.png",
    name: 'Secret Character',
    details: 'A hidden figure shrouded in mystery. Discover the truth behind this secret character — waiting for you to unveil her story.',
  }
]

const CharHoverExpand = ({
  images = [],
  expandedBasis = "basis-1/2",
  collapsedBasis = "basis-1/6",
  dimOpacity = 0.2,
  className = "",
}) => {
  const [active, setSelectedChar] = useState(charData[0]);

  return (
    <div
      className={`flex w-[90%] md:w-[80%] max-w-[1440px] aspect-[15/9] mx-auto px-[10px] md:px-[20px] py-[10px] md:py-[50px] gap-[2.8%] overflow-hidden ${className}`} >
      {charData.map((char) => (
        <div
          key={char.id}
          onMouseEnter={() => setSelectedChar(char)}
          className={`relative overflow-hidden rounded-[10px] md:rounded-[25px] transition-[flex-basis]
             duration-500 ease-[cubic-bezier(.05,.61,.41,.95)]
          {active.id === char.id ? "ring-white" : "ring-white/20"} 
          ${active.id === char.id ? expandedBasis : collapsedBasis}
          ring-1 ring-white/80
          hover:ring-primary
          hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]`
          }
        >
          <div className="absolute inset-0 bg-top bg-cover"
            style={{
              backgroundImage: `url(${char.image})`,
              backgroundPosition: active.id === char.id ? "50% 12%" : "50% 15%"
            }} />
          <div className="absolute inset-0 bg-black transition-opacity duration-500"
            style={{ opacity: active.id === char.id ? 0 : dimOpacity }} />
          <div className={`
        absolute bottom-[20px] text-secondary text-[16px] left-0 right-0 
        transition-all duration-500 ease-in-out
        ${active.id === char.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
            <h4 className="text-primary font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] text-[12px] text-center md:text-[22px]">{char.name}</h4>
            <h5 className="hidden md:block mt-[10px] font-light mx-[20px]">{char.details}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharHoverExpand;