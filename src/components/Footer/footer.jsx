"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowUpRight, ArrowUp } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const NAME = "SANTOSH";
const EMAIL = "santoshchettri216@gmail.com";

/* Reveal panel colours — change these two to restyle the hover */
const REVEAL_BG = "#fc7f4e";
const REVEAL_TEXT = "#0a0a0a";

const MARQUEE = [
  "Web Solutions",
  "UI/UX Design",
  "React & Next.js",
  "API Integration",
  "3D & Animation",
  "SEO",
  "Digital Marketing",
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/yours_suntosh" },
  { label: "LinkedIn", href: "https://linkedin.com/in/suntosh-rc-4325a525b" },
  { label: "GitHub", href: "https://github.com/SantoshRawat07" },
  { label: "Facebook", href: "https://facebook.com" },
];

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ────────────────────────────────────────────────
   Masked line: text slides up from behind a clip
──────────────────────────────────────────────── */
const MaskLine = ({ children, className = "" }) => (
  <span className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${className}`}>
    <span className="mask-inner block will-change-transform">{children}</span>
  </span>
);

/* ────────────────────────────────────────────────
   Big name: outlined letters + circular colour reveal on hover
──────────────────────────────────────────────── */
const Letters = ({ cls }) => (
  <>
    {NAME.split("").map((ch, i) => (
      <span key={i} className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em]">
        <span className={`${cls} inline-block will-change-transform`}>{ch}</span>
      </span>
    ))}
  </>
);

const rowClasses =
  "flex justify-between items-center w-full px-4 md:px-10 py-4 md:py-6 " +
  "font-black uppercase leading-none tracking-tight whitespace-nowrap " +
  "text-[15.5vw]";

const NameReveal = () => {
  const wrapRef = useRef(null);
  const revealRef = useRef(null);
  const circle = useRef({ r: 0, x: 0, y: 0 });
  const touchRevealed = useRef(false);

  const q = (sel) => wrapRef.current.querySelectorAll(sel);

  const paint = () => {
    const { r, x, y } = circle.current;
    if (revealRef.current) {
      revealRef.current.style.clipPath = `circle(${r}px at ${x}px ${y}px)`;
    }
  };

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || prefersReduced()) return;

    const ctx = gsap.context(() => {
      gsap.set(".rev-letter", { yPercent: 110 });
      gsap.set(".base-letter", { yPercent: 115, rotate: 8 });
      paint();

      // Letters rise from the centre outward when the name enters the viewport
      ScrollTrigger.create({
        trigger: wrap,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(".base-letter", {
            yPercent: 0,
            rotate: 0,
            duration: 1.3,
            ease: "expo.out",
            stagger: { each: 0.07, from: "center" },
          });
          gsap.fromTo(
            ".footer-star",
            { opacity: 0.2, scale: 0.7 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "sine.inOut",
              stagger: { each: 0.25, from: "random" },
              repeat: -1,
              yoyo: true,
            }
          );
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  const pointFromEvent = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top, rect };
  };

  const handleEnter = (e) => {
    const { x, y, rect } = pointFromEvent(e);
    const c = circle.current;
    c.x = x;
    c.y = y;
    const maxR = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));

    gsap.to(c, { r: maxR, duration: 0.9, ease: "power3.inOut", overwrite: true, onUpdate: paint });
    gsap.to(q(".rev-letter"), {
      yPercent: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.045,
      delay: 0.12,
      overwrite: true,
    });
  };

  const handleLeave = (e) => {
    const { x, y } = pointFromEvent(e);
    const c = circle.current;
    c.x = x;
    c.y = y;

    gsap.to(c, { r: 0, duration: 0.75, ease: "power3.inOut", overwrite: true, onUpdate: paint });
    gsap.to(q(".rev-letter"), {
      yPercent: -110,
      duration: 0.5,
      ease: "power3.in",
      stagger: 0.02,
      overwrite: true,
      onComplete: () => gsap.set(q(".rev-letter"), { yPercent: 110 }),
    });
  };

  const handlePointerEnter = (e) => {
    if (e.pointerType !== "touch") handleEnter(e);
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== "touch") handleLeave(e);
  };

  const handlePointerDown = (e) => {
    if (e.pointerType !== "touch") return;
    touchRevealed.current = !touchRevealed.current;
    if (touchRevealed.current) handleEnter(e);
    else handleLeave(e);
  };

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden cursor-pointer select-none border-y border-white/10"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      role="img"
      aria-label={NAME}
    >
      <div
        className={rowClasses}
        aria-hidden="true"
        style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.45)" }}
      >
        <Letters cls="base-letter" />
      </div>

      <div
        ref={revealRef}
        className={`${rowClasses} absolute inset-0 pointer-events-none`}
        aria-hidden="true"
        style={{ background: REVEAL_BG, color: REVEAL_TEXT, clipPath: "circle(0px at 0px 0px)" }}
      >
        <Letters cls="rev-letter" />
      </div>

      <Sparkles aria-hidden="true" className="footer-star absolute left-[15%] top-[16%] h-4 w-4 text-amber-300" />
      <Sparkles aria-hidden="true" className="footer-star absolute left-[48%] top-[64%] h-3 w-3 text-yellow-200" />
      <Sparkles aria-hidden="true" className="footer-star absolute left-[83%] top-[18%] h-5 w-5 text-amber-300" />
    </div>
  );
};

/* ────────────────────────────────────────────────
   Marquee: loops forever, speeds up with scroll velocity
──────────────────────────────────────────────── */
const Marquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReduced()) return;

    const loop = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    let settle;
    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const boost = Math.min(Math.abs(self.getVelocity()) / 250, 6);
        settle?.kill();
        settle = gsap
          .timeline()
          .to(loop, { timeScale: (1 + boost) * self.direction, duration: 0.25, ease: "power2.out" })
          .to(loop, { timeScale: 1, duration: 1.2, ease: "power2.inOut" });
      },
    });

    return () => {
      st.kill();
      settle?.kill();
      loop.kill();
    };
  }, []);

  const group = (
    <div className="flex shrink-0 items-center">
      {MARQUEE.map((item) => (
        <div key={item} className="flex items-center">
          <span className="px-6 md:px-10 text-[clamp(1.75rem,5vw,4rem)] font-extrabold uppercase tracking-tight text-white/90">
            {item}
          </span>
          <Sparkles aria-hidden="true" className="h-5 w-5 md:h-7 md:w-7" style={{ color: REVEAL_BG }} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-b border-white/10 py-6 md:py-8" aria-hidden="true">
      <div ref={trackRef} className="flex w-max will-change-transform">
        {group}
        {group}
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────
   Footer
──────────────────────────────────────────────── */
const Footer = () => {
  const footerRef = useRef(null);
  const innerRef = useRef(null);
  const shadeRef = useRef(null);
  const [time, setTime] = useState("");

  // Kathmandu local time
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kathmandu",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || prefersReduced()) return;

    const ctx = gsap.context(() => {
      /* 1. Curtain reveal: footer content sits under the contact section
            and slides into place as you scroll, settling at the page bottom. */
      gsap.fromTo(
        innerRef.current,
        { yPercent: -40, scale: 0.94, transformOrigin: "50% 100%" },
        {
          yPercent: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        shadeRef.current,
        { opacity: 0.75 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "center bottom",
            scrub: true,
          },
        }
      );

      /* 2. Masked text reveal — lines slide up with a slight tilt */
      gsap.fromTo(
        ".mask-inner",
        { yPercent: 115, rotate: 4, transformOrigin: "0% 100%" },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".cta-block",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* 3. Divider line draws across, then small items fade up */
      gsap.fromTo(
        ".draw-line",
        { scaleX: 0, transformOrigin: "0% 50%" },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".cta-block", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".fade-up",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".bottom-bar", start: "top 95%" },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-black font-sans text-white"
    >
      <div ref={innerRef} className="will-change-transform">
        {/* ── CTA ── */}
        <div className="cta-block px-4 pb-10 pt-16 md:px-10 md:pb-14 md:pt-24">
          <h2 className="text-[clamp(2.75rem,9vw,8rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em]">
            <MaskLine>Have an idea?</MaskLine>
            <MaskLine className="text-white/40">Let&apos;s build it.</MaskLine>
          </h2>
        </div>

        {/* <Marquee /> */}

        {/* ── Name ── */}
        <NameReveal />

        <div
          className="draw-line mx-4 h-px origin-left bg-white/15 md:mx-10"
          aria-hidden="true"
        />

        {/* ── Bottom bar ── */}
        <div className="bottom-bar flex flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="fade-up flex flex-col gap-1 text-sm text-white/70 md:text-base">
            <p>Copyright © 2026 Santosh Rawat. All rights reserved.</p>
            <p className="text-xs text-white/40">
              Kathmandu, Nepal{time && ` · ${time}`}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {SOCIALS.map(({ label, href }) => (
              <li key={label} className="fade-up">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-[#fc7f4e]"
                >
                  {label}
                  <ArrowUpRight
                    size={13}
                    className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
            <li className="fade-up">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-1 transition-colors hover:text-[#fc7f4e]"
              >
                Contact
                <ArrowUpRight
                  size={13}
                  className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Darkening shade that fades out as the footer is revealed */}
      <div
        ref={shadeRef}
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: 0.75 }}
        aria-hidden="true"
      />
    </footer>
  );
};

export default Footer;