"use client";
import { use } from 'react';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import brandingData from '../../../components/Data/BloginnerData';
import Link from 'next/link';
import Navbar from '../../../components/Navbar/Navbarr.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function BlogInnerPage({ params }) {
  const { id } = use(params);
  const blog = brandingData.find((b) => b.id === parseInt(id));

  const heroRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!heroRef.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-anim'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power4.out',
          stagger: 0.15,
          delay: 0.2,
        }
      );

      gsap.fromTo(
        heroRef.current.querySelector('.hero-image'),
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.05 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.4,
          ease: 'power4.out',
          delay: 0.4,
        }
      );
    }, heroRef);

    return () => context.revert();
  }, [id]);

  useEffect(() => {
    if (!contentRef.current) return;
    const context = gsap.context(() => {
      const sections = contentRef.current.querySelectorAll('.section-anim');
      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll('.anim-el'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, contentRef);

    return () => context.revert();
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <p className="text-xs tracking-[4px] uppercase text-gray-500 mb-4">404 — Not Found</p>
        <h1 className="font-black text-5xl md:text-7xl text-gray-900 mb-8">Blog not found</h1>
        <Link
          href="/#blog"
          className="px-6 py-3 border border-gray-900 text-sm font-bold tracking-[3px] uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar visible={true} />
      {/* Hero */}
      <section ref={heroRef} className="px-6 md:px-16 lg:px-24 pt-28 md:pt-36 pb-12">
        <Link
          href="/#blog"
          className="hero-anim inline-flex items-center gap-2 text-xs font-bold tracking-[4px] uppercase text-gray-500 mb-10 hover:text-gray-900 transition-colors duration-200"
        >
          ← Back
        </Link>

        <p className="hero-anim text-xs font-bold tracking-[5px] uppercase text-gray-400 mb-5">
          Article
        </p>

        <h1 className="hero-anim font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900 max-w-4xl mb-6">
          {blog.title}
        </h1>

        <p className="hero-anim text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed mb-12">
          {blog.subtitle}
        </p>

        {/* Hero Image */}
        <div className="hero-image w-full overflow-hidden" style={{ clipPath: 'inset(100% 0% 0% 0%)' }}>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[520px] object-cover"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-6 md:mx-16 lg:mx-24" />

      {/* Content sections */}
      <section ref={contentRef} className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {blog.sections.map((section, i) => (
            <div key={i} className="section-anim flex flex-col gap-4">
              {/* Section number */}
              <span className="anim-el text-xs font-bold tracking-[4px] text-gray-400 uppercase">
                0{i + 1}
              </span>

              {/* Section heading */}
              <h2 className="anim-el font-black text-xl md:text-2xl lg:text-3xl text-gray-900 leading-snug">
                {section.heading}
              </h2>

              {/* Separator */}
              <div className="anim-el w-12 h-0.5 bg-gray-300" />

              {/* Section content */}
              <p className="anim-el text-gray-600 text-base md:text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
