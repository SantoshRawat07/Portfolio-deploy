"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 0,
    title: "Foodland",
    year: "2025",
    category: "Web Development",
    description: "A modern recipe discovery and food ordering platform. Users can explore food categories, discover meals, and place orders through a clean and responsive interface with an intuitive browsing system.",
    image: "/Image/foodlandweb.png",
    link: "https://recipe-website-tqzk.vercel.app/",
    tags: ["React", "Tailwind", "UI/UX"],
    number: "01",
  },
  {
    id: 1,
    title: "Trading Dashboard",
    year: "2026",
    category: "Dashboard UI",
    description: "An interactive financial dashboard for visualizing stock and trading analytics. Features real-time chart sections, market overview panels, and trading performance indicators in a sleek dark interface.",
    image: "/Image/trading.png",
    link: "https://trading-dashboard-pi-ten.vercel.app/",
    tags: ["React", "Charts", "Analytics"],
    number: "02",
  },
  {
    id: 2,
    title: "Artist Website",
    year: "2026",
    category: "Creative Website",
    description: "A creative platform showcasing paintings, canvas artwork, art classes, and custom art services. Immersive visuals, elegant typography, and smooth layouts reflect the artistic identity of the brand.",
    image: "/Image/artist.png",
    link: "https://nepakanvas-uyd8.vercel.app/",
    tags: ["React", "GSAP", "Design"],
    number: "03",
  },
  {
    id: 3,
    title: "Homesphere",
    year: "2025",
    category: "E-commerce",
    description: "A full-featured e-commerce platform for home appliances and equipment. Includes product filtering, responsive layouts, and user-friendly navigation — delivering a professional online shopping experience.",
    image: "/Image/Homesphere.png",
    link: "https://homesphere-website.vercel.app/",
    tags: ["React", "E-commerce", "Responsive"],
    number: "04",
  },
  {
    id: 4,
    title: "Kayo Template",
    year: "2025",
    category: "Landing Page",
    description: "A high-end animated landing page template featuring GSAP-powered scroll animations, smooth section transitions, and a premium aesthetic designed for agencies and creative studios.",
    image: "/Image/kayo.png",
    link: "https://kayo-animated-website.vercel.app/",
    tags: ["GSAP", "Animation", "Template"],
    number: "05",
  },
  {
    id: 5,
    title: "Everest Travel",
    year: "2025",
    category: "Travel Website",
    description: "A stunning travel and tourism website for Everest trekking experiences. Features breathtaking imagery, route information, and booking-ready sections that inspire adventure.",
    image: "/Image/Everest.png",
    link: "https://recipe-website-vqzw.vercel.app/",
    tags: ["React", "Travel", "UI Design"],
    number: "06",
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef();
  const imageRef = useRef();
  const overlayRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, { scale: 1.05, duration: 0.6, ease: 'power2.out' });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.4 });
    gsap.to(textRef.current, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { scale: 1, duration: 0.6, ease: 'power2.out' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.4 });
    gsap.to(textRef.current, { y: 20, opacity: 0, duration: 0.3 });
  };

  return (
    <div ref={cardRef} className="flex flex-col gap-0">
      {/* Image container */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden block group"
        style={{ aspectRatio: '16/10' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4"
          style={{ opacity: 0 }}
        >
          <div
            ref={textRef}
            className="text-center px-6"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <p className="text-white/60 text-xs tracking-[4px] uppercase mb-3">{project.category}</p>
            <p className="text-white text-base md:text-lg font-medium leading-relaxed max-w-xs">
              {project.description}
            </p>
          </div>
          <div className="mt-4 px-6 py-2.5 border border-white text-white text-xs tracking-[3px] uppercase font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            View Project →
          </div>
        </div>
        {/* Number badge */}
        <div className="absolute top-3 left-3 text-white/60 text-xs font-bold tracking-[3px]">
          {project.number}
        </div>
      </a>

      {/* Info row */}
      <div className="flex items-start justify-between pt-4 pb-2 px-1">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-base md:text-lg text-gray-900">{project.title}</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold tracking-[2px] uppercase text-gray-500 border border-gray-200 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-gray-400 text-sm font-medium shrink-0 ml-4 mt-0.5">{project.year}</span>
      </div>
    </div>
  );
}

const Section = () => {
  const headerRef = useRef();

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('.header-anim'),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div id="projects" className="w-full">
      {/* Header */}
      <div
        ref={headerRef}
        className="px-6 md:px-16 lg:px-24 py-14 md:py-20 border-t border-gray-200"
      >
        <p className="header-anim text-xs font-bold tracking-[5px] uppercase text-gray-500 mb-4">
          Selected Work
        </p>
        <h1 className="header-anim font-black text-[clamp(3rem,10vw,8rem)] uppercase leading-none tracking-tight text-gray-900 mb-6">
          Projects
        </h1>
        <p className="header-anim font-medium text-lg md:text-2xl text-gray-500 max-w-2xl">
          A curated selection of recent projects showcasing creativity, technical depth, and purposeful design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
