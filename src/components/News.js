"use client";
import { useState } from "react";
import Image from 'next/image';

const newsData = [
  {
    id: 1,
    image: '/news1.jpg',
    title: 'Crafting New Adventures',
    details: 'New board games are in development and testing.',
    description: `Our dedicated team is hard at work designing and playtesting exciting new board games. We are exploring innovative mechanics and immersive themes to expand our universe and bring fresh adventures to your tabletop. Get ready for what's coming next!
`,
  },
  {
    id: 2,
    image: '/news2.jpg',
    title: 'Expanding Our Story Universe',
    details: 'Collaborating with famed writers for new spin-off games.',
    description: 'We are thrilled to announce collaborations with renowned scriptwriters to develop new projects and captivating spin-off series. This partnership will enrich our lore, introducing compelling narratives and characters that deepen the world of our games, offering you more intricate stories to explore.',
  },
  {
    id: 3,
    image: '/news3.jpg',
    title: 'The Digital Frontier Awaits',
    details: 'An online multiplayer version of our board game is coming.',
    description: 'Get ready to experience our board game in a whole new way! The team is developing a full-featured digital version with online multiplayer support. This will allow you to connect and play with friends from anywhere in the world, bringing our community closer together.',
  },
  {
    id: 4,
    image: '/News4.jpeg',
    title: ' Shipping Timeline Update',
    details: 'Important information on our delivery schedule.',
    description: `Important information about our production schedule and expected delivery dates. We're working diligently with our partners and are happy to confirm that we're still on track for our summer delivery! Thank you for your incredible patience and support.`,
  }
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(newsData[0]);

  return (
    <section id="news" className="bg-black w-[85%] mx-auto mt-[60px] md:mt-[150px] text-white font-sans">
      <div className="container mx-auto">
        <h2 className="text-primary mt-[50px] md:mt-[10px] mb-[50px] font-semibold text-center text-[22px] md:text-[40px]">Recent Updates</h2>
        <div className="flex flex-col md:flex-row gap-1 md:gap-15 items-center">

          <div className="w-full md:h-[600px] md:w-2/3 flex justify-center items-center">
            <div className="bg-gray-800 p-4 border-1 border-secondary rounded-lg">
              <div className="relative w-full h-[260px] md:h-96 mb-4">
                <Image
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="bg-gray-300 p-[12px] md:p-[15px] text-left rounded-b-lg">
                <p className="text-black text-[12px] md:text-[16px]">{selectedNews.description}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] md:w-2/5 flex flex-col gap-4 md:gap-7 justify-center items-center">
            {newsData.map((newsItem) => (
              <button
                key={newsItem.id}
                onClick={() => setSelectedNews(newsItem)}
                className={`w-full bg-gray-800 p-2 md:p-4 rounded-lg flex items-center transition-all duration-300 
                  ${selectedNews.id === newsItem.id ? 'border-2 border-primary' : 'border-2 border-transparent'
                  }`}
              >
                <div className="relative w-16 h-16 rounded-md mr-3 md:mr-4 aspect-square">
                  <Image
                    src={newsItem.image}
                    alt={newsItem.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded "
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium text-[14px] md:text-[20px]">{newsItem.title}</p>
                  <p className="text-sm text-gray-400 text-[12px] md:text-[16px]">{newsItem.details}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default News;