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

const Contact = () => {
  const boxRef = useRef(null);
  const stageRef = useRef(null);
  const emailRef = useRef(null);
  const startBtnRef = useRef(null);
  const chatBtnRef = useRef(null);
  const toastRef = useRef(null);
  const copyIconRef = useRef(null);
  const pillRefs = useRef([]);
  const pillDataRef = useRef([]);
  const hasDroppedRef = useRef(false);
  const copiedRef = useRef(false);

  useEffect(() => {
    const box = boxRef.current;
    const stage = stageRef.current;
    if (!box || !stage) return;

    const createPills = () => {
      // Only shrink pill size for the md/tablet breakpoint (769–1024px
      // viewport). Desktop always keeps the original fixed pill size.
      const vw = window.innerWidth;
      const isMd = vw >= 769 && vw <= 1024;
      const fontSize = isMd ? 12 : 13;
      const padY = isMd ? 8 : 10;
      const padX = isMd ? 17 : 22;

      pillRefs.current = SERVICES.map((s) => {
        const el = document.createElement("div");
        el.textContent = s.label;
        el.style.cssText = `
          position:absolute; padding:${padY}px ${padX}px; border-radius:999px;
          font-size:${fontSize}px; font-weight:600; white-space:nowrap;
          user-select:none; letter-spacing:0.01em; will-change:transform;
          background:${s.blue ? "#2563eb" : "#ffffff"};
          color:${s.blue ? "#fff" : "#111"};
          border:${s.blue ? "none" : "1.5px solid #e0e0e0"};
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        `;
        stage.appendChild(el);
        return el;
      });
    };

    const initPositions = () => {
      const bw = box.clientWidth;
      const bh = box.clientHeight;
      const sidePadding = 24;
      const gapX = 10;
      const floatRowHeight = 46;
      const landRowHeight = 54;
      const vw = window.innerWidth;
      const isMd = vw >= 769 && vw <= 1024;
      const bottomPadding = isMd ? 40 : 24;
      const availableWidth = bw - sidePadding * 2;

      // Greedy-wrap pills into rows so each row spans the full width of the box
      const rows = [];
      let row = [];
      let rowWidth = 0;

      pillRefs.current.forEach((pill) => {
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

      const numRows = rows.length;
      const blockHeight = numRows * landRowHeight;
      const landStartY = Math.max(16, bh - bottomPadding - blockHeight);

      rows.forEach((rowItems, rowIndex) => {
        let x = sidePadding;
        const yLand = landStartY + rowIndex * landRowHeight;
        const yTop = 16 + rowIndex * floatRowHeight;

        rowItems.forEach(({ pill, w }) => {
          const i = pillRefs.current.indexOf(pill);
          pillDataRef.current[i] = { x, targetY: yLand };

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

    const dropPills = () => {
      if (hasDroppedRef.current) return;
      hasDroppedRef.current = true;

      pillRefs.current.forEach((pill, i) => {
        gsap.killTweensOf(pill);
        gsap.to(pill, {
          x: pillDataRef.current[i].x,
          y: pillDataRef.current[i].targetY,
          rotation: (Math.random() - 0.5) * 9,
          duration: 0.65 + Math.random() * 0.45,
          ease: "bounce.out",
          delay: i * 0.04,
        });
      });
    };

    const initTimer = setTimeout(() => {
      createPills();
      initPositions();
    }, 80);
    const dropTimer = setTimeout(dropPills, 3080); // float for ~3s, then settle at the bottom

    return () => {
      clearTimeout(initTimer);
      clearTimeout(dropTimer);
      pillRefs.current.forEach((el) => el.remove());
    };
  }, []);

  const handleEmailMouseMove = (e) => {
    const el = emailRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const cy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    gsap.to(el, { x: cx * 10, y: cy * 10, duration: 0.35, ease: "power2.out" });
  };

  const handleEmailMouseLeave = () => {
    gsap.to(emailRef.current, {
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

  // Shared tilt-on-hover handlers for both pill buttons
  const makeMouseMove = (ref) => (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const cy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    gsap.to(el, { x: cx * 10, y: cy * 10, duration: 0.35, ease: "power2.out" });
  };

  const makeMouseLeave = (ref) => () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: "elastic.out(1,0.45)",
    });
  };

  const handleStartProjectClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  // Opens the FloatingChatbot widget directly, without navigating away.
  // FloatingChatbot listens for this event and calls setOpen(true).
  const handleStartChatClick = () => {
    window.dispatchEvent(new CustomEvent("open-floating-chatbot"));
  };

  return (
    <>
      <style>{`
        .cw {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          width: 100%;
          background: #fff;
          font-family: 'Inter', system-ui, sans-serif;
          color: #111;
        }
          @media (max-width: 1024px) {
  .cw-btn-row {
    flex-direction: column;
    width: 100%;
  }

  .cw-start-btn {
    width: 100%;
    justify-content: space-between;
  }
}
        @media (max-width: 768px) {
          .cw { grid-template-columns: 1fr; }
          .cw-bottom-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .cw-hero { padding: 32px 28px 16px; }
          .cw-hero h1 { font-size: clamp(38px, 6vw, 60px); letter-spacing: -1px; }
          .cw-hero .cw-sub { font-size: clamp(16px, 2.6vw, 26px); }
          .cw-services-box { margin: 0 16px 20px; min-height: 440px; }
        }
        .cw-left {
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .cw-hero { padding: 48px 48px 24px; }
        .cw-hero h1 {
          font-size: clamp(50px, 7vw, 92px);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1;
          letter-spacing: -2px;
          color: #111;
        }
        .cw-hero .cw-sub {
          font-size: clamp(20px, 3vw, 38px);
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          margin-top: 6px;
        }
        .cw-services-box {
          flex: 1;
          position: relative;
          overflow: hidden;
          border: 1.5px solid #e5e5e5;
          border-radius: 20px;
          margin: 0 24px 24px;
          background: #f9f9f9;
          min-height: 280px;
          cursor: default;
        }
        .cw-stage {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .cw-right {
          background: #f4f4f4;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 24px;
        }
        .cw-card {
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid #ebebeb;
          padding: 30px 30px 26px;
        }
        .cw-eyebrow {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 14px;
        }
        .cw-talk-title {
          font-size: 40px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 10px;
        }
        .cw-talk-desc {
          font-size: 13px;
          color: #888;
          line-height: 1.65;
          margin-bottom: 22px;
        }
        .cw-email-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1.5px solid #ebebeb;
          padding-bottom: 14px;
          margin-bottom: 18px;
          gap: 12px;
        }
        .cw-email-text {
          font-size: 14.5px;
          font-weight: 600;
          color: #111;
          display: inline-block;
          cursor: default;
          will-change: transform;
        }
        .cw-copy-btn {
          background: none;
          border: 1.5px solid #e2e2e2;
          border-radius: 9px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          flex-shrink: 0;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }
        .cw-copy-btn:hover { background: #111; color: #fff; border-color: #111; }
        .cw-btn-row {
          display: flex;
          gap: 16px;
        }
        .cw-start-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 17px 18px 17px 26px;
          font-size: 15.5px;
          font-weight: 700;
          cursor: pointer;
          flex: 1 1 0;
          min-width: 0;
          letter-spacing: 0.01em;
          will-change: transform;
        }
        .cw-start-btn--chat {
          background: #fff;
          color: #111;
          border: 1.5px solid #111;
        }
        .cw-start-btn span:first-child {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cw-arrow-circle {
          width: 38px; height: 38px;
          background: #fff; color: #111;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cw-start-btn--chat .cw-arrow-circle {
          background: #111;
          color: #fff;
        }
        .cw-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .cw-sub-card {
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid #ebebeb;
          padding: 20px 20px 18px;
        }
        .cw-sub-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 14px;
        }
        .cw-office-block { margin-bottom: 12px; }
        .cw-office-detail {
          font-size: 12px;
          color: #777;
          line-height: 1.65;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cw-socials-title { font-size: 12.5px; font-weight: 800; color: #111; margin-bottom: 5px; }
        .cw-socials-desc { font-size: 11.5px; color: #888; line-height: 1.55; margin-bottom: 14px; }
        .cw-social-links { display: flex; flex-direction: column; gap: 8px; }
        .cw-social-link {
          display: flex; align-items: center; gap: 8px;
          font-size: 12.5px; color: #444; text-decoration: none; font-weight: 500;
          transition: color 0.15s;
        }
        .cw-social-link:hover { color: #2563eb; }
        .cw-toast {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: #111; color: #fff;
          padding: 9px 20px;
          border-radius: 999px;
          font-size: 12.5px; font-weight: 600;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          display: flex;
          align-items: center;
          gap: 7px;
        }
      `}</style>

      <div id="contact" className="cw">
        {/* ── LEFT ── */}
        <div className="cw-left">
          <div className="cw-hero">
            <h1>Projects</h1>
            <p className="cw-sub">in your mind?</p>
          </div>
          <div className="cw-services-box" ref={boxRef}>
            <div className="cw-stage" ref={stageRef} />
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="cw-right">
          <div className="cw-card">
            <div className="cw-eyebrow">Direct Line</div>
            <div className="cw-talk-title">Let's talk.</div>
            <div className="cw-talk-desc">
              Have a project? We would love to hear from you.
              <br />
              Send us a message and we'll get back to you within 24 hours.
            </div>

            <div className="cw-email-row">
              <span
                className="cw-email-text"
                ref={emailRef}
                onMouseMove={handleEmailMouseMove}
                onMouseLeave={handleEmailMouseLeave}
              >
                <Mail
                  size={13}
                  style={{
                    display: "inline",
                    marginRight: 7,
                    verticalAlign: "middle",
                    opacity: 0.5,
                  }}
                />
                {EMAIL}
              </span>
              <button
                className="cw-copy-btn"
                ref={copyIconRef}
                onClick={copyEmail}
                title="Copy email"
              >
                <Copy size={14} />
              </button>
            </div>

            <div className="cw-btn-row">
              <button
                className="cw-start-btn"
                ref={startBtnRef}
                onMouseMove={makeMouseMove(startBtnRef)}
                onMouseLeave={makeMouseLeave(startBtnRef)}
                onClick={handleStartProjectClick}
              >
                <span>Start Project</span>
                <span className="cw-arrow-circle">
                  <ArrowUpRight size={18} />
                </span>
              </button>

              <button
                className="cw-start-btn cw-start-btn--chat"
                ref={chatBtnRef}
                onMouseMove={makeMouseMove(chatBtnRef)}
                onMouseLeave={makeMouseLeave(chatBtnRef)}
                onClick={handleStartChatClick}
              >
                <span>Start Chat</span>
                <span className="cw-arrow-circle">
                  <MessageCircle size={16} />
                </span>
              </button>
            </div>
          </div>

          <div className="cw-bottom-grid">
            {/* Contact Card */}
            <div className="cw-sub-card">
              <div className="cw-sub-label">Contact</div>
              <div className="cw-socials-title">Let's Work Together</div>
              <div className="cw-socials-desc">
                Contact me for projects, collaborations, or any creative ideas.
                I'm always open to discussing new opportunities and bringing
                innovative solutions to life.
              </div>
              <div className="cw-office-block">
                <div className="cw-office-detail">
                  <Mail size={13} style={{ opacity: 0.5, flexShrink: 0 }} />
                  <span>santoshchettri216@gmail.com</span>
                </div>
                <div className="cw-office-detail">
                  <Phone size={13} style={{ opacity: 0.5, flexShrink: 0 }} />
                  <span>+977 9864926196</span>
                </div>
                <div className="cw-office-detail">
                  <MapPin size={13} style={{ opacity: 0.5, flexShrink: 0 }} />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            {/* Social Card */}
           <div className="cw-sub-card">
              <div className="cw-sub-label">Connect</div>
              <div className="cw-socials-title">Socials</div>
              <div className="cw-socials-desc">
                Follow my journey and stay updated with the latest creative
                projects.
              </div>
              <div className="cw-social-links">
                <a
                  className="cw-social-link"
                  href="https://instagram.com/yours_suntosh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Camera size={14} /> Instagram
                </a>
                <a
                  className="cw-social-link"
                  href="https://linkedin.com/in/suntosh-rc-4325a525b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Briefcase size={14} /> LinkedIn
                </a>
                <a
                  className="cw-social-link"
                  href="https://github.com/SantoshRawat07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cw-toast" ref={toastRef}>
        <Check size={13} /> Copied to clipboard
      </div>
    </>
  );
};

export default Contact;