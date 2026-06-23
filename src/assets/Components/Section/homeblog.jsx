import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../Card/Blogcard';
import BlogData from '../Data/BlogData';
import { FiArrowUpRight } from 'react-icons/fi';

function Blog() {
  const headingRef = useRef(null);
  const [randomCards, setRandomCards] = useState([]);
  const [circleOffsets, setCircleOffsets] = useState({});

  // Pick a random set of blogs to feature (3 cards) on mount.
  useEffect(() => {
    const shuffled = [...BlogData].sort(() => 0.5 - Math.random());
    setRandomCards(shuffled.slice(0, 3));
  }, []);

  // Make the little arrow-circle follow the cursor inside the card.
  const handleMouseMove = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCircleOffsets((prev) => ({
      ...prev,
      [index]: { x: x * 0.3, y: y * 0.3 },
    }));
  };

  const handleMouseLeave = (index) => {
    setCircleOffsets((prev) => ({
      ...prev,
      [index]: { x: 0, y: 0 },
    }));
  };

  return (
    <div id='blog' className="w-full px-4 md:px-16 mt-0 lg:px-20 lg:py-10">
      <div className="pt-4 border-t border-gray-300 text-center mb-10">
        <h1
          ref={headingRef}
          className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[100px] xl:text-[150px] uppercase font-extrabold leading-none"
        >
          Explore Our Latest Blogs
        </h1>
        <p className="font-semibold text-[14px] md:text-[20px] lg:text-[24px] lg:mt-6 mt-4 text-gray-600">
          Fresh ideas, stories and insights about latest new global from the the tech and innovations.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap w-full mt-0 px-0">
        {randomCards.map((card, index) => (
          <div
            key={card.id}
            className="w-full md:w-1/2 lg:w-1/3 p-2 group relative"
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Link to={`/blog/${card.id}`}>
              <BlogCard {...card}>
                <div
                  className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full
                    bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                    group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transform: `translate(-50%, -50%) translate(${circleOffsets[index]?.x || 0}px, ${circleOffsets[index]?.y || 0}px)`,
                  }}
                >
                  <FiArrowUpRight />
                </div>
              </BlogCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;