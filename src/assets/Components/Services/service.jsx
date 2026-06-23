import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import book from './../../Image/book.webp';

const Service = () => {
  const textContainerRef = useRef();

  useEffect(() => {
    const node = textContainerRef.current;
    if (!node) return;

    const elements = node.querySelectorAll('.gsap-animate');
    let hasAnimated = false;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            gsap.from(elements, {
              y: 100,
              opacity: 0,
              duration: 1.2,
              ease: 'power4.out',
              stagger: 0.15,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-0 m-0 w-full">
   <div id="services" className="project mb-10 px-4 md:px-16 lg:px-32 lg:-ml-8">
  <h1 className="gsap-animate font-extrabold uppercase text-[50px] sm:text-[80px] md:text-[120px] lg:text-[80px] leading-none mb-4 text-left">
    Services
  </h1>

  <div className="flex flex-col gap-[2px]">
    <p className="gsap-animate font-semibold text-[22px] sm:text-[32px] md:text-[45px] lg:text-[40px] leading-tight">
      Discover our tailored services
    </p>

    <p className="gsap-animate font-semibold text-[22px] sm:text-[32px] md:text-[45px] lg:text-[40px] leading-tight">
      designed to elevate your brand.
    </p>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="w-full h-[300px] md:h-[590px]">
          <img src={book} alt="Book" className="w-full h-full object-cover" />
        </div>

        <div className="bg-gray-200 text-black p-6 md:p-8">
          <div className="max-w-xl" ref={textContainerRef}>
            <h1 className="gsap-animate text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight">
              BRAND<br />STRATEGY
            </h1>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              Crafting impactful brands and
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              and websites that drive growth
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              and success.
            </p>
            <p className="gsap-animate italic text-gray-500 mt-6 text-sm md:text-base">
              (Branding Services)
            </p>
            <div className="grid grid-cols-2 mt-6 font-semibold text-sm md:text-base lg:text-lg">
              <div className="space-y-2">
                <div className="gsap-animate">Brand Discovery</div>
                <div className="gsap-animate">Brand Identity</div>
              </div>
              <div className="space-y-2 text-right">
                <div className="gsap-animate">Customer Satisfaction</div>
                <div className="gsap-animate">Brand Promotions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;