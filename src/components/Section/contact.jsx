import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Copy,
  Check,
  ArrowUpRight,
  GitBranch,
  Camera,
  Briefcase,
  Phone,
  MapPin,
  Mail,
  MessageCircle,
} from "lucide-react";

const EMAIL = "santoshchettri216@gmail.com";
const WHATSAPP_NUMBER = "9779864926196";

const SERVICES = [
  { label: "Web Solutions", blue: true },
  { label: "3D & Animation", blue: false },
  { label: "API Integration", blue: true },
  { label: "SEO", blue: true },
  { label: "UI/UX Design", blue: true },
  { label: "System Architecture", blue: false },
  { label: "Digital Marketing", blue: false },
  { label: "React", blue: true },
  { label: "App development", blue: false },
  { label: "Graphic Design", blue: true },
  { label: "Landing website", blue: false },
  { label: "Social Media Ads", blue: true },
  { label: "Next.js", blue: false },
];

// Cursor proximity / repel settings
const NEAR_MARGIN = 70;
const REACT_RADIUS = 150;
const MAX_PUSH = 9;

// Both main panels share exactly the same shell + height
const PANEL =
  "relative overflow-hidden rounded-3xl border border-stone-200 " +
  "bg-[radial-gradient(120%_80%_at_50%_0%,#ffffff_0%,#f5f5f4_70%)] " +
  "shadow-[0_1px_0_#fff_inset,0_20px_40px_-24px_rgba(28,25,23,0.18)] " +
  "h-[340px] lg:h-[360px]";

const PILL_BASE =
  "absolute left-0 top-0 select-none whitespace-nowrap rounded-full " +
  "px-4 py-2 text-xs font-semibold tracking-[0.01em] will-change-transform";
const PILL_BLUE =
  "border border-white/20 text-white " +
  "bg-[linear-gradient(135deg,#3b82f6_0%,#1d4ed8_100%)] " +
  "shadow-[0_6px_16px_rgba(37,99,235,0.28),inset_0_1px_0_rgba(255,255,255,0.25)]";
const PILL_LIGHT =
  "border border-stone-200 text-stone-900 " +
  "bg-[linear-gradient(180deg,#ffffff_0%,#f5f5f4_100%)] " +
  "shadow-[0_4px_12px_rgba(28,25,23,0.07),inset_0_1px_0_#fff]";

const SUB_CARD =
  "rounded-3xl border border-[#2c2926] bg-[linear-gradient(160deg,#1f1d1b_0%,#141312_100%)] " +
  "p-5 text-stone-100 " +
  "shadow-[0_20px_36px_-24px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]";

const Contact = () => {
  const boxRef = useRef(null);
  const emailRef = useRef(null);
  const startBtnRef = useRef(null);
  const chatBtnRef = useRef(null);
  const toastRef = useRef(null);
  const copyIconRef = useRef(null);
  const pillRefs = useRef([]);
  const pillDataRef = useRef([]);
  const hasDroppedRef = useRef(false);
  const settledRef = useRef(false);
  const wasNearRef = useRef(false);
  const copiedRef = useRef(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const startIdleFloat = (pill, i) => {
      const amp = 7 + Math.random() * 9;
      const dur = 1.9 + Math.random() * 1.3;
      gsap.to(pill, {
        y: `+=${amp}`,
        duration: dur,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.06,
      });
    };

    const initPositions = () => {
      const bw = box.clientWidth;
      const bh = box.clientHeight;
      const sidePadding = 20;
      const gapX = 10;
      const floatRowHeight = 40;
      const landRowHeight = 44;
      const bottomPadding = 20;
      const availableWidth = bw - sidePadding * 2;

      const rows = [];
      let row = [];
      let rowWidth = 0;

      pillRefs.current.forEach((pill) => {
        if (!pill) return;
        const w = pill.offsetWidth;
        const addedWidth = row.length > 0 ? gapX + w : w;
        if (row.length > 0 && rowWidth + addedWidth > availableWidth) {
          rows.push(row);
          row = [];
          rowWidth = 0;
        }
        row.push({ pill, w });
        rowWidth += row.length > 1 ? gapX + w : w;
      });
      if (row.length) rows.push(row);

      const blockHeight = rows.length * landRowHeight;
      const landStartY = Math.max(14, bh - bottomPadding - blockHeight);

      rows.forEach((rowItems, rowIndex) => {
        let x = sidePadding;
        const yLand = landStartY + rowIndex * landRowHeight;
        const yTop = 14 + rowIndex * floatRowHeight;

        rowItems.forEach(({ pill, w }) => {
          const i = pillRefs.current.indexOf(pill);
          pillDataRef.current[i] = {
            x,
            targetY: yLand,
            w,
            h: pill.offsetHeight,
            rot: 0,
          };

          gsap.set(pill, {
            x,
            y: yTop,
            rotation: (Math.random() - 0.5) * 18,
            opacity: 1,
          });

          startIdleFloat(pill, i);
          x += w + gapX;
        });
      });
    };

    const dropPills = () => {
      if (hasDroppedRef.current) return;
      hasDroppedRef.current = true;

      pillRefs.current.forEach((pill, i) => {
        const d = pillDataRef.current[i];
        if (!d) return;
        d.rot = (Math.random() - 0.5) * 9;
        gsap.killTweensOf(pill);
        gsap.to(pill, {
          x: d.x,
          y: d.targetY,
          rotation: d.rot,
          duration: 0.65 + Math.random() * 0.45,
          ease: "bounce.out",
          delay: i * 0.04,
        });
      });

      setTimeout(() => {
        settledRef.current = true;
      }, 1900);
    };

    const resetPills = () => {
      pillRefs.current.forEach((pill, i) => {
        const d = pillDataRef.current[i];
        if (!pill || !d) return;
        gsap.to(pill, {
          x: d.x,
          y: d.targetY,
          rotation: d.rot,
          duration: 0.9,
          ease: "elastic.out(1,0.5)",
          overwrite: "auto",
        });
      });
    };

    const onPointerMove = (e) => {
      if (!settledRef.current) return;
      const rect = box.getBoundingClientRect();
      const near =
        e.clientX > rect.left - NEAR_MARGIN &&
        e.clientX < rect.right + NEAR_MARGIN &&
        e.clientY > rect.top - NEAR_MARGIN &&
        e.clientY < rect.bottom + NEAR_MARGIN;

      if (!near) {
        if (wasNearRef.current) {
          wasNearRef.current = false;
          resetPills();
        }
        return;
      }
      wasNearRef.current = true;

      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      pillRefs.current.forEach((pill, i) => {
        const d = pillDataRef.current[i];
        if (!pill || !d) return;
        const cx = d.x + d.w / 2;
        const cy = d.targetY + d.h / 2;
        const dx = cx - px;
        const dy = cy - py;
        const dist = Math.hypot(dx, dy) || 1;
        const falloff = Math.max(0, 1 - dist / REACT_RADIUS);
        const push = falloff * falloff * MAX_PUSH;

        gsap.to(pill, {
          x: d.x + (dx / dist) * push,
          y: d.targetY + (dy / dist) * push - falloff * 3,
          rotation: d.rot + (dx / REACT_RADIUS) * falloff * 3,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    const initTimer = setTimeout(initPositions, 80);
    const dropTimer = setTimeout(dropPills, 3080);

    window.addEventListener("mousemove", onPointerMove);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(dropTimer);
      window.removeEventListener("mousemove", onPointerMove);
      pillRefs.current.filter(Boolean).forEach((el) => gsap.killTweensOf(el));
    };
  }, []);

  const makeMouseMove = (ref) => (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const cy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    gsap.to(el, { x: cx * 8, y: cy * 8, duration: 0.35, ease: "power2.out" });
  };

  const makeMouseLeave = (ref) => () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: "elastic.out(1,0.45)",
    });
  };

  const copyEmail = () => {
    if (copiedRef.current) return;
    navigator.clipboard.writeText(EMAIL).then(() => {
      copiedRef.current = true;
      if (copyIconRef.current) copyIconRef.current.dataset.copied = "true";
      const t = toastRef.current;
      gsap.killTweensOf(t);
      gsap.set(t, { opacity: 0, y: 40 });
      gsap.to(t, { opacity: 1, y: 0, duration: 0.32, ease: "back.out(1.6)" });
      gsap.to(t, {
        opacity: 0,
        y: 16,
        duration: 0.28,
        ease: "power2.in",
        delay: 1.9,
      });
      setTimeout(() => {
        copiedRef.current = false;
        if (copyIconRef.current) copyIconRef.current.dataset.copied = "";
      }, 2200);
    });
  };

  const handleStartProjectClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  // Opens the FloatingChatbot widget (it listens for this event)
  const handleStartChatClick = () => {
    window.dispatchEvent(new CustomEvent("open-floating-chatbot"));
  };

  return (
    <>
      <section
        id="contact"
        className="w-full border-b border-stone-300 bg-stone-50 font-sans text-stone-900 antialiased"
      >
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:py-12">
          {/* ── Heading ── */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-[clamp(40px,6vw,72px)] font-black uppercase leading-none tracking-[-0.045em]">
              Projects
            </h1>
            <p className="mt-1.5 text-[clamp(16px,2.4vw,28px)] font-semibold uppercase tracking-[0.02em] text-stone-400">
              in your mind?
            </p>
          </div>

          {/* ── Two equal panels ── */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Panel 1: floating services */}
            <div className={PANEL} ref={boxRef}>
              <div className="pointer-events-none absolute inset-0">
                {SERVICES.map((service, index) => (
                  <div
                    key={service.label}
                    ref={(el) => {
                      pillRefs.current[index] = el;
                    }}
                    className={`${PILL_BASE} ${
                      service.blue ? PILL_BLUE : PILL_LIGHT
                    }`}
                  >
                    {service.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Panel 2: Let's talk */}
            <div className={`${PANEL} flex flex-col p-6 lg:p-7`}>
              <div className="group mb-2 inline-block self-start">
                <div className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-stone-400">
                  Direct Line
                </div>
                <div className="text-4xl font-black leading-none tracking-[-0.03em] transition-colors duration-200 group-hover:text-blue-600">
                  Let's talk.
                </div>
              </div>

              <p className="mb-4 max-w-[46ch] text-[13px] leading-relaxed text-stone-500">
                Have a project? We would love to hear from you. Send us a
                message and we'll get back to you within 24 hours.
              </p>

              <div className="mb-4 flex items-center justify-between gap-3 border-b border-stone-200 pb-3">
                <span
                  ref={emailRef}
                  onMouseMove={makeMouseMove(emailRef)}
                  onMouseLeave={makeMouseLeave(emailRef)}
                  className="inline-flex min-w-0 cursor-default items-center gap-2 truncate text-sm font-semibold will-change-transform"
                >
                  <Mail size={13} className="shrink-0 opacity-50" />
                  <span className="truncate">{EMAIL}</span>
                </span>
                <button
                  ref={copyIconRef}
                  onClick={copyEmail}
                  title="Copy email"
                  aria-label="Copy email"
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-600 transition-colors hover:border-stone-900 hover:bg-stone-900 hover:text-white data-[copied=true]:border-green-600 data-[copied=true]:bg-green-600 data-[copied=true]:text-white"
                >
                  <Copy size={14} />
                </button>
              </div>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <button
                  ref={startBtnRef}
                  onMouseMove={makeMouseMove(startBtnRef)}
                  onMouseLeave={makeMouseLeave(startBtnRef)}
                  onClick={handleStartProjectClick}
                  className="flex min-w-0 flex-1 cursor-pointer items-center justify-between rounded-full border border-stone-900 bg-[linear-gradient(180deg,#292524_0%,#1c1917_100%)] py-3 pl-6 pr-3 text-[15px] font-bold tracking-[0.01em] text-white shadow-[0_10px_20px_-10px_rgba(28,25,23,0.5)] will-change-transform"
                >
                  <span className="truncate">Start Project</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-stone-900">
                    <ArrowUpRight size={18} />
                  </span>
                </button>

                <button
                  ref={chatBtnRef}
                  onMouseMove={makeMouseMove(chatBtnRef)}
                  onMouseLeave={makeMouseLeave(chatBtnRef)}
                  onClick={handleStartChatClick}
                  className="flex min-w-0 flex-1 cursor-pointer items-center justify-between rounded-full border border-stone-300 bg-white py-3 pl-6 pr-3 text-[15px] font-bold tracking-[0.01em] text-stone-900 shadow-[0_8px_18px_-12px_rgba(28,25,23,0.25)] will-change-transform"
                >
                  <span className="truncate">Start Chat</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white">
                    <MessageCircle size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Info row: full width, two cards side by side ── */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className={SUB_CARD}>
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                Contact
              </div>
              <div className="mb-1 text-[13px] font-extrabold text-white">
                Let's Work Together
              </div>
              <p className="mb-3 text-[11.5px] leading-relaxed text-white/65">
                Contact me for projects, collaborations, or any creative ideas.
                I'm always open to discussing new opportunities and bringing
                innovative solutions to life.
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Mail size={13} className="shrink-0 opacity-50" />
                  <span className="truncate">{EMAIL}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Phone size={13} className="shrink-0 opacity-50" />
                  <span>+977 9864926196</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <MapPin size={13} className="shrink-0 opacity-50" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            <div className={SUB_CARD}>
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                Connect
              </div>
              <div className="mb-1 text-[13px] font-extrabold text-white">
                Socials
              </div>
              <p className="mb-3 text-[11.5px] leading-relaxed text-white/65">
                Follow my journey and stay updated with the latest creative
                projects.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  {
                    href: "https://instagram.com/yours_suntosh",
                    label: "Instagram",
                    Icon: Camera,
                  },
                  {
                    href: "https://linkedin.com/in/suntosh-rc-4325a525b",
                    label: "LinkedIn",
                    Icon: Briefcase,
                  },
                  {
                    href: "https://github.com/SantoshRawat07",
                    label: "GitHub",
                    Icon: GitBranch,
                  },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[12.5px] font-medium text-white/90 no-underline transition-all hover:translate-x-[3px] hover:text-blue-400 motion-reduce:transition-none"
                  >
                    <Icon size={14} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={toastRef}
        className="pointer-events-none fixed bottom-8 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2 rounded-full bg-stone-900 px-5 py-2 text-[12.5px] font-semibold text-white opacity-0"
      >
        <Check size={13} /> Copied to clipboard
      </div>
    </>
  );
};

export default Contact;