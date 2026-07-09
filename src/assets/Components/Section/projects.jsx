import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import foodland from '../../Image/foodlandweb.png';
import trading from '../../Image/trading.png';
import Everest from '../../Image/Everest.png';
import Kayo from '../../Image/kayo.png';
import Homesphere from '../../Image/Homesphere.png';
import Artist from '../../Image/artist.png';

const Section = () => {
  const [circleOffsets, setCircleOffsets] = useState({});

  // Mouse movement for circle (10px clamp)
  const handleMouseMove = (idx, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const clamp = (val) => Math.max(-10, Math.min(10, val));
    setCircleOffsets((prev) => ({
      ...prev,
      [idx]: { x: clamp(x), y: clamp(y) }
    }));
  };

  const handleMouseLeave = (idx) => {
    setCircleOffsets((prev) => ({
      ...prev,
      [idx]: { x: 0, y: 0 }
    }));
  };

  const projectLinks = {
    0: 'https://recipe-website-tqzk.vercel.app/',
    1: 'https://trading-dashboard-pi-ten.vercel.app/',
    2: 'https://nepakanvas-uyd8.vercel.app/',
    3: 'https://recipe-website-vqzw.vercel.app/',
    4: 'https://kayo-animated-website.vercel.app/',
    5: 'https://homesphere-website.vercel.app/'
  };

  return (
    <div id="projects" className="p-0 m-0 w-full lg:mt-8">
<div className="project mb-10 px-4 md:px-16 lg:px-32 lg:-ml-8">
  <h1 className="font-extrabold uppercase text-[50px] sm:text-[80px] md:text-[120px] lg:text-[80px] leading-none mb-4 text-left">
    Projects
  </h1>

  <div className="flex flex-col gap-[2px]">
    <p className="font-semibold text-[22px] sm:text-[32px] md:text-[45px] lg:text-[40px] leading-tight">
      Explore my recent projects
    </p>

    <p className="font-semibold text-[22px] sm:text-[32px] md:text-[45px] lg:text-[40px] leading-tight">
      showcasing creativity, innovation.
    </p>
  </div>
</div>


      {/* 2x2 Grid Without .map */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Image 1 */}
        <div className="w-full mb-4 md:mb-2 lg:mb-4">
          <a 
            href={projectLinks[0]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group block overflow-hidden"
            onMouseMove={(e) => handleMouseMove(0, e)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <img src={foodland} alt="Foodland Website" className="w-full object-cover" />
            <div
              className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${circleOffsets[0]?.x || 0}px, ${circleOffsets[0]?.y || 0}px)`
              }}
            >
              <FiArrowUpRight />
            </div>
          </a>
          <div className="flex mt-1 justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Foodland Website</b>
            <b>2025</b>
          </div>
        </div>

        {/* Image 2 */}
        <div className="w-full">
          <a 
            href={projectLinks[1]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group block overflow-hidden"
            onMouseMove={(e) => handleMouseMove(1, e)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <img src={trading} alt="Trading Dashboard" className="w-full object-cover" />
            <div
              className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${circleOffsets[1]?.x || 0}px, ${circleOffsets[1]?.y || 0}px)`
              }}
            >
              <FiArrowUpRight />
            </div>
          </a>
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Trading Dashboard</b>
            <b>2026</b>
          </div>
        </div>
 
        {/* Image 3 */}
        <div className="w-full">
          <a 
            href={projectLinks[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group block overflow-hidden"
            onMouseMove={(e) => handleMouseMove(2, e)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <img src={Artist} alt="Artist Website" className="w-full object-cover" />
            <div
              className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${circleOffsets[2]?.x || 0}px, ${circleOffsets[2]?.y || 0}px)`
              }}
            >
              <FiArrowUpRight />
            </div>
          </a>
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Artist website</b>
            <b>2026</b>
          </div>
        </div>

        {/* Image 4 */}
        <div className="w-full">
          <a 
            href={projectLinks[3]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group block overflow-hidden"
            onMouseMove={(e) => handleMouseMove(3, e)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <img src={Homesphere} alt="Homesphere Website" className="w-full object-cover" />
            <div
              className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${circleOffsets[3]?.x || 0}px, ${circleOffsets[3]?.y || 0}px)`
              }}
            >
              <FiArrowUpRight />
            </div>
          </a>
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Homesphere Website</b>
            <b>2025</b>
          </div>
        </div>
      </div>
     <div className="w-full">
          <a 
            href={projectLinks[4]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group block overflow-hidden"
            onMouseMove={(e) => handleMouseMove(4, e)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <img src={Kayo} alt="Kayo Website" className="w-full object-cover" />
            <div
              className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${circleOffsets[4]?.x || 0}px, ${circleOffsets[4]?.y || 0}px)`
              }}
            >
              <FiArrowUpRight />
            </div>
          </a>
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Kayo Template Website</b>
            <b>2025</b>
          </div>
          </div>
          <div className="w-full">
          <a 
            href={projectLinks[3]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group block overflow-hidden"
            onMouseMove={(e) => handleMouseMove(3, e)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <img src={Everest} alt="Everest travel Website" className="w-full object-cover" />
            <div
              className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${circleOffsets[3]?.x || 0}px, ${circleOffsets[3]?.y || 0}px)`
              }}
            >
              <FiArrowUpRight />
            </div>
          </a>
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Everest travel Website</b>
            <b>2025</b>
          </div>
          </div>
    </div>
  );
};

export default Section;
