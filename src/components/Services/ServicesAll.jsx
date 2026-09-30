"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    category: "Branding Services",
    description:
      "Crafting impactful brand identities that connect with audiences and drive lasting business growth through discovery, identity, and promotions.",
    image: "/Image/book.webp",
    tags: ["Brand Discovery", "Brand Identity"],
    year: "2024",
  },
  {
    id: "02",
    title: "Website Design",
    category: "Web Services",
    description:
      "Custom, responsive, and conversion-focused websites that elevate your digital presence, engage users, and deliver measurable results.",
    image: "/Image/website.jpg",
    tags: ["Website Design", "Framer", "Webflow"],
    year: "2024",
  },
  {
    id: "03",
    title: "UI/UX Design",
    category: "Design Services",
    description:
      "Intuitive, user-centered design experiences that balance beauty and function for maximum usability, retention, and satisfaction.",
    image: "/Image/phone.webp",
    tags: ["User Research", "Wireframing", "UI/UX Audits"],
    year: "2025",
  },
  {
    id: "04",
    title: "Digital Marketing",
    category: "Marketing Services",
    description:
      "Data-driven digital marketing strategies that amplify your reach, improve SEO rankings, and grow your audience consistently.",
    image: "/Image/marketing.jpg",
    tags: ["SEO", "Content Strategy", "Analytics"],
    year: "2025",
  },
];

/* ───────────────────────── Card ───────────────────────── */
function ServiceCard({ service }) {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  // Hover animation only where a real hover exists (desktop mouse).
  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (min-width: 768px)").matches;

  const handleEnter = () => {
    if (!canHover()) return;
    gsap.to(imageRef.current, { scale: 1.06, duration: 0.6, ease: "power2.out", overwrite: "auto" });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.35, overwrite: "auto" });
    gsap.to(textRef.current, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
  };

  const handleLeave = () => {
    if (!canHover()) return;
    gsap.to(imageRef.current, { scale: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, overwrite: "auto" });
    gsap.to(textRef.current, { y: 20, opacity: 0, duration: 0.3, overwrite: "auto" });
  };

  return (
    <article className="flex flex-col w-full">
      {/* Image */}
      <div
        className="relative overflow-hidden w-full cursor-pointer bg-gray-100"
        style={{ aspectRatio: "16 / 10" }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <img
          ref={imageRef}
          src={service.image}
          alt={service.title}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover will-change-transform"
        />

        {/* Hover overlay (desktop only) */}
        <div
          ref={overlayRef}
          className="hidden md:flex absolute inset-0 bg-black/70 flex-col items-center justify-center gap-5 px-6"
          style={{ opacity: 0 }}
        >
          <div
            ref={textRef}
            className="text-center"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <p className="text-white/60 text-[11px] tracking-[4px] uppercase mb-3">
              {service.category}
            </p>
            <p className="text-white text-sm lg:text-base font-medium leading-relaxed max-w-xs mx-auto">
              {service.description}
            </p>
          </div>
          {/* <span className="px-6 py-2.5 border border-white text-white text-xs tracking-[3px] uppercase font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Learn More →
          </span> */}
        </div>

        {/* Number badge */}
        <span className="absolute top-3 left-3 text-white text-xs font-bold tracking-[3px] drop-shadow">
          {service.id}
        </span>
      </div>

      {/* Info row */}
      <div className="flex items-start justify-between gap-4 pt-4 pb-2 px-0.5">
        <div className="flex flex-col gap-2 min-w-0">
          <h3 className="font-bold text-base md:text-lg text-gray-900 leading-tight">
            {service.title}
          </h3>

          {/* Description visible on mobile (no hover on touch) */}
          <p className="md:hidden text-gray-500 text-sm leading-relaxed">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-[2px] uppercase text-gray-500 border border-gray-200 px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-gray-400 text-sm font-medium shrink-0">{service.year}</span>
      </div>
    </article>
  );
}

/* ───────────────────────── Section ───────────────────────── */
const ServicesAll = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduce } = context.conditions;

        /* Header intro (both breakpoints) */
        if (!reduce) {
          gsap.fromTo(
            section.querySelectorAll(".left-anim"),
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power4.out",
              stagger: 0.12,
              scrollTrigger: { trigger: section, start: "top 80%", once: true },
            }
          );
        }

        if (desktop) {
          /* ── Horizontal pinned scroll ── */
          const getDistance = () =>
            Math.max(0, track.scrollWidth - viewport.clientWidth);

          gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${getDistance()}`,
              scrub: reduce ? true : 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        } else if (!reduce) {
          /* ── Mobile: normal vertical flow, reveal each card ── */
          gsap.utils.toArray(".service-item", section).forEach((el) => {
            gsap.fromTo(
              el,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              }
            );
          });
        }
      }
    );

    /* Re-measure once images have loaded (widths/heights change) */
    const imgs = Array.from(section.querySelectorAll("img"));
    const onLoad = () => ScrollTrigger.refresh();
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad, { once: true });
    });

    return () => {
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
      mm.revert();
    };
  }, { scope: sectionRef });

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="w-full bg-white overflow-hidden border-t border-gray-200"
      >
        <div className="flex flex-col w-full md:h-screen md:min-h-[640px]">
        {/* ── Centered heading ── */}
        <div className="shrink-0 flex flex-col items-center text-center px-5 pt-10 pb-4 md:pt-8 md:pb-2">
          <p className="left-anim text-[10px] font-bold tracking-[5px] uppercase text-gray-400 mb-3">
            What I Offer
          </p>
          <h2 className="left-anim font-black text-[clamp(2rem,5vw,3.75rem)] uppercase leading-none tracking-tight text-gray-900">
            Services <span className="text-gray-300">Offered</span>
          </h2>
          <p className="left-anim mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
            Tailored digital services designed to elevate your brand, drive growth, and create memorable experiences.
          </p>
        </div>

        {/* ── Cards viewport (clips the sliding track on desktop) ── */}
        <div ref={viewportRef} className="flex-1 min-h-0 min-w-0 md:overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-col gap-10 px-5 py-8 sm:px-8
                       md:flex-row md:items-center md:gap-8 md:h-full md:w-max md:py-0 md:pl-[8vw] md:pr-[8vw]
                       will-change-transform"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item w-full max-w-xl mx-auto md:mx-0 md:max-w-none md:shrink-0 md:w-[clamp(300px,30vw,440px)]"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

      </div>
      </section>

      <div className="marquee-wrap border-y border-gray-200 bg-gray-50" aria-label="Services offered">
        <div className="marquee-track items-center py-4" aria-hidden="true">
          {[...services, ...services].map((service, index) => (
            <span
              key={`${service.id}-${index}`}
              className="mx-5 flex shrink-0 items-center gap-5 whitespace-nowrap text-xl font-semibold uppercase text-gray-800 md:text-3xl"
            >
              {service.title}
              <span className="text-gray-300">/</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesAll;