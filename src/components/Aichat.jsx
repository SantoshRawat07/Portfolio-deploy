import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Rocket,
  Code2,
  Phone,
  CheckCircle,
  XCircle,
  Briefcase,
  Brain,
  Mail,
  Globe,
  Link,
  User,
  Lightbulb,
  Handshake,
  Smile,
  GraduationCap,
  Heart,
  Zap,
  MessageCircle,
} from "lucide-react";
import { profile, about, projects, skills, contact, projectIdeaSuggestions } from "./Data/data";

// ─── AI Avatar — "S" letter circle ──────────────────────────────────────────
const Avatar = ({ size = 32, ring = false }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "linear-gradient(140deg,#818cf8 0%,#6366f1 45%,#7c3aed 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: size * 0.44,
      flexShrink: 0,
      userSelect: "none",
      boxShadow: ring
        ? "0 0 0 2px rgba(255,255,255,0.35), 0 4px 12px rgba(0,0,0,0.2)"
        : "0 2px 6px rgba(99,102,241,0.35)",
    }}
  >
    S
  </div>
);

// ─── Typing indicator ───────────────────────────────────────────────────────
const TypingIndicator = () => (
  <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 12 }}>
    <Avatar size={26} />
    <div className="fc-bubble-ai" style={{ display: "flex", gap: 5, alignItems: "center", padding: "12px 16px" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#a5b4fc",
            display: "inline-block",
            animation: "fc-bounce 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// ─── Helpers ────────────────────────────────────────────────────────────────
const extractName = (text) => {
  const t = text.trim();
  const patterns = [/my name is\s+(\w+)/i, /i(?:'m| am)\s+(\w+)/i, /call me\s+(\w+)/i];
  for (const p of patterns) {
    const m = t.match(p);
    if (m) return m[1].charAt(0).toUpperCase() + m[1].slice(1).toLowerCase();
  }
  const first = t.split(/\s+/)[0];
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
};

// Heuristic check — catches most non-name junk
const isLikelyName = (candidate) => {
  if (!candidate) return false;
  if (!/^[A-Za-z'-]{2,20}$/.test(candidate)) return false;
  if (!/[aeiouAEIOU]/.test(candidate)) return false;
  if (/(.)\1{2,}/.test(candidate)) return false;
  const blacklist = [
    "test", "testing", "asdf", "asdfgh", "qwerty", "unknown", "none",
    "idk", "hi", "hello", "hey", "na", "abc", "xyz", "random", "name",
    "anonymous", "user", "guest", "nobody",
  ];
  return !blacklist.includes(candidate.toLowerCase());
};

const detectIntent = (text) => {
  const t = text.toLowerCase();
  return {
    yes: /\b(yes|yeah|yep|sure|ok|okay|absolutely|definitely|yup|of course)\b/.test(t),
    no: /\b(no|nope|nah|not really|nothing|none|skip|dont|don't)\b/.test(t),
  };
};

const projectsListText = projects.map((p) => `• ${p.title}`).join("\n");
const skillsListText = skills.map((s) => `• ${s}`).join("\n");
const projectIdeaSuggestionsText = projectIdeaSuggestions.map((s) => `• ${s}`).join("\n");
const aboutText = `👤 About Me\n\n${about.summary}\n\n${about.traits.map((t) => `• ${t}`).join("\n")}`;
const contactBlock = `📧 Email\n${contact.email}\n\n💬 WhatsApp\n${contact.whatsapp || "+977 9864926196"}\n\n💼 LinkedIn\n${contact.linkedin}\n\n💻 GitHub\n${contact.github}`;

// ─── Icon row helper ────────────────────────────────────────────────────────
const IconRow = ({ icon: Icon, color = "#6366f1", children, bold = false, mb = 2 }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: mb, fontWeight: bold ? 700 : 400 }}>
    <Icon size={14} color={color} style={{ marginTop: 3, flexShrink: 0 }} />
    <span style={{ wordBreak: "break-word" }}>{children}</span>
  </div>
);

// ─── AI message renderer ────────────────────────────────────────────────────
const AiMessageContent = ({ text }) => {
  const lines = text.split("\n");
  return (
    <div style={{ fontSize: 14, lineHeight: 1.6, color: "#1f2937" }}>
      {lines.map((line, i) => {
        const t = line.trim();

        if (t === "") return <div key={i} style={{ height: 6 }} />;

        if (t.startsWith("🚀") || t === "My Projects")
          return <IconRow key={i} icon={Rocket} color="#6366f1" bold mb={6}>{t.replace(/^🚀\s*/, "")}</IconRow>;
        if (t.startsWith("💻 My Skills") || t === "My Skills")
          return <IconRow key={i} icon={Code2} color="#6366f1" bold mb={6}>{t.replace(/^💻\s*/, "")}</IconRow>;
        if (t.startsWith("👤"))
          return <IconRow key={i} icon={GraduationCap} color="#6366f1" bold mb={6}>{t.replace(/^👤\s*/, "")}</IconRow>;

        if (t.startsWith("📧"))
          return <IconRow key={i} icon={Mail} color="#6366f1" bold>{t.replace(/^📧\s*/, "")}</IconRow>;
        if (t.startsWith("💬"))
          return <IconRow key={i} icon={MessageCircle} color="#25D366" bold>{t.replace(/^💬\s*/, "")}</IconRow>;
        if (t.startsWith("💼"))
          return <IconRow key={i} icon={Link} color="#0a66c2" bold>{t.replace(/^💼\s*/, "")}</IconRow>;
        if (t.startsWith("💻 GitHub") || t.startsWith("💻 github"))
          return <IconRow key={i} icon={Globe} color="#333" bold>{t.replace(/^💻\s*/, "")}</IconRow>;

        if (t.startsWith("👋"))
          return <IconRow key={i} icon={Smile} color="#f59e0b" mb={6}>{t.replace(/^👋\s*/, "")}</IconRow>;
        if (t.includes("That's okay") || t.includes("already have my contact"))
          return <IconRow key={i} icon={Smile} color="#f59e0b">{t.replace(/^😊\s*/, "")}</IconRow>;
        if (t.includes("Nice to meet you"))
          return <IconRow key={i} icon={User} color="#6366f1">{t}</IconRow>;
        if (t.includes("Awesome") || t.includes("interesting idea"))
          return <IconRow key={i} icon={Rocket} color="#6366f1" bold>{t.replace(/^🚀\s*/, "")}</IconRow>;

        if (t === "Project Idea:")
          return <IconRow key={i} icon={Lightbulb} color="#6366f1" bold mb={4}>Project Idea:</IconRow>;

        if (t.startsWith('"') || t.startsWith("\u201c"))
          return (
            <div key={i} style={{ background: "#f5f3ff", borderLeft: "3px solid #6366f1", borderRadius: 8, padding: "7px 11px", margin: "4px 0", fontStyle: "italic", color: "#4f46e5" }}>
              {t}
            </div>
          );

        if (t.startsWith("If you") || t.startsWith("feel free"))
          return <IconRow key={i} icon={Handshake} color="#6366f1">{t}</IconRow>;

        if (t.startsWith("•")) {
          const label = t.replace(/^•\s*/, "");
          const isProjAI = /personal ai|portfolio chatbot/i.test(label);
          const isProjDoc = /ocr|loan/i.test(label);
          const isCode = /python|fastapi|react|next\.js|postgresql|langchain|rag|ai agents/i.test(label);
          const isAI = /ai development|ocr systems/i.test(label);
          const isHardworking = /hardworking/i.test(label);
          const isPassionate = /passionate/i.test(label);
          const isLearner = /learn|student/i.test(label);
          const Icon =
            isProjAI || isAI ? Brain :
            isProjDoc ? Briefcase :
            isHardworking ? Zap :
            isPassionate ? Heart :
            isLearner ? GraduationCap :
            isCode ? Code2 :
            Lightbulb;
          return <IconRow key={i} icon={Icon} color="#8b5cf6">{label}</IconRow>;
        }

        return <div key={i} style={{ marginBottom: 2 }}>{line}</div>;
      })}
    </div>
  );
};

// ─── Chip button ────────────────────────────────────────────────────────────
const ChipBtn = ({ icon: Icon, label, color = "#4f46e5", onClick }) => (
  <button className="fc-chip" onClick={onClick} style={{ color }}>
    {Icon && <Icon size={15} />}
    {label}
  </button>
);

// ─── Main component ─────────────────────────────────────────────────────────
function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("name");
  const [visitorName, setVisitorName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const initializedRef = useRef(false); // ref guard: avoids double greeting in StrictMode
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Open from the Contact section's "Start Chat" button
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-floating-chatbot", handler);
    return () => window.removeEventListener("open-floating-chatbot", handler);
  }, []);

  // Close with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!open) return;
    if (!initializedRef.current) {
      initializedRef.current = true;
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{ role: "ai", text: profile.greeting }]);
      }, 1000);
    }
    const t = setTimeout(() => inputRef.current?.focus(), 350);
    return () => clearTimeout(t);
  }, [open]);

  // Keep typing field focused after the assistant replies
  useEffect(() => {
    if (open && !isTyping) inputRef.current?.focus();
  }, [isTyping, open]);

  const addMessage = (role, text) => setMessages((prev) => [...prev, { role, text }]);

  const aiReply = (text, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage("ai", text);
    }, delay);
  };

  const askForIdea = (name = visitorName) => {
    aiReply(`Awesome, ${name}!\n\nPlease describe your project idea in a few sentences.\n\n${projectIdeaSuggestionsText}`);
    setStep("ideaDescription");
  };

  const declineIdea = () => {
    aiReply(`That's okay!\n\nIf you ever have an idea in the future, feel free to reach out:\n\n${contactBlock}`);
    setStep("done");
  };

  const finishIdea = (text) => {
    aiReply(`That's an interesting idea, ${visitorName}!\n\nProject Idea:\n"${text}"\n\nIf you'd like to discuss this or build it with me, feel free to reach out:\n\n${contactBlock}\n\nThank you for visiting my portfolio.`);
    setStep("done");
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text || isTyping) return;
    addMessage("user", text);
    setInput("");

    if (step === "name") {
      const name = extractName(text);
      if (!isLikelyName(name)) {
        aiReply(`It seems like that's not a real name 🤔\n\nCould you please tell me your real name?`);
        return;
      }
      setVisitorName(name);
      setStep("menu");
      aiReply(`Nice to meet you, ${name}!\n\nWhat would you like to know about me?`);
      return;
    }

    if (step === "menu") {
      aiReply(`Please pick one of the options below 👇`);
      return;
    }

    if (step === "projectIdea") {
      const { yes, no } = detectIntent(text);
      if (no) return declineIdea();
      if (yes) return askForIdea();
      // The prompt says "describe it below", so treat other text as the idea itself
      return finishIdea(text);
    }

    if (step === "ideaDescription") {
      finishIdea(text);
    }
  };

  const showAbout = () => {
    addMessage("user", "About");
    aiReply(aboutText, 600);
  };

  const showProjects = () => {
    addMessage("user", "Projects");
    aiReply(`🚀 My Projects\n\n${projectsListText}\n\nDo you have a project idea you'd like to build?\n\nPlease describe it below — or say No if not.`);
    setStep("projectIdea");
  };

  const showSkills = () => {
    addMessage("user", "Skills");
    aiReply(`💻 My Skills\n\n${skillsListText}\n\nDo you have a project idea you'd like to build?\n\nPlease describe it below — or say No if not.`);
    setStep("projectIdea");
  };

  const showContact = () => {
    addMessage("user", "Contact");
    if (!contactShown) {
      aiReply(`${contactBlock}\n\nThank you for visiting my portfolio.`);
      setContactShown(true);
    } else {
      aiReply(`You already have my contact info above 👆 Feel free to reach out anytime!`);
    }
    setStep("done");
  };

  return (
    <>
      <style>{`
        @keyframes fc-bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes fc-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes fc-open {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fc-msg {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fc-label-in {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fc-ring {
          0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.45); }
          100% { box-shadow: 0 0 0 16px rgba(99,102,241,0); }
        }

        .fc-root {
          position: fixed; right: 24px; bottom: 24px; z-index: 9999;
          font-family: 'Inter', system-ui, sans-serif;
          display: flex; flex-direction: column; align-items: flex-end;
        }
        .fc-panel {
          width: 380px; max-width: calc(100vw - 32px);
          height: 560px; max-height: calc(100vh - 48px);
          background: #fff;
          border-radius: 26px;
          overflow: hidden;
          display: flex; flex-direction: column;
          border: 1px solid rgba(99,102,241,0.12);
          box-shadow: 0 2px 4px rgba(17,24,39,0.04), 0 24px 70px -12px rgba(49,46,129,0.35);
          transform-origin: bottom right;
          animation: fc-open 0.32s cubic-bezier(.2,.8,.2,1);
        }
        .fc-header {
          position: relative;
          padding: 16px 16px 16px 18px;
          display: flex; align-items: center; gap: 12px;
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(255,255,255,0.22) 0%, transparent 55%),
            linear-gradient(135deg,#4f46e5 0%,#6d28d9 100%);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .fc-title { color: #fff; font-weight: 700; font-size: 15px; letter-spacing: -0.01em; }
        .fc-status { color: rgba(255,255,255,0.75); font-size: 12px; display: flex; align-items: center; gap: 6px; margin-top: 2px; }
        .fc-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; display: inline-block; animation: fc-pulse 2s ease-in-out infinite; }
        .fc-close {
          background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.18);
          color: #fff; cursor: pointer; border-radius: 50%;
          width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.2s;
        }
        .fc-close:hover { background: rgba(255,255,255,0.28); transform: rotate(90deg); }

        .fc-messages {
          flex: 1; overflow-y: auto; padding: 18px 14px 10px;
          background: linear-gradient(180deg,#f8f8fc 0%,#f4f4fa 100%);
          scrollbar-width: thin; scrollbar-color: #d4d4e8 transparent;
        }
        .fc-row { display: flex; align-items: flex-end; gap: 8px; margin-bottom: 12px; animation: fc-msg 0.28s ease-out; }
        .fc-row--user { justify-content: flex-end; }
        .fc-bubble { max-width: 78%; padding: 11px 15px; font-size: 14px; line-height: 1.55; }
        .fc-bubble-ai {
          background: #fff; color: #1f2937;
          border-radius: 18px 18px 18px 5px;
          border: 1px solid #ececf6;
          box-shadow: 0 2px 8px rgba(49,46,129,0.05);
        }
        .fc-bubble-user {
          background: linear-gradient(135deg,#6366f1 0%,#7c3aed 100%); color: #fff;
          border-radius: 18px 18px 5px 18px;
          box-shadow: 0 6px 16px -6px rgba(99,102,241,0.55);
          word-break: break-word;
        }
        .fc-chips { display: flex; flex-direction: column; gap: 8px; margin: 12px 0 4px 34px; }
        .fc-chips--wrap { flex-direction: row; flex-wrap: wrap; }
        .fc-chip {
          padding: 10px 16px; border-radius: 14px;
          border: 1px solid #e0e0f5; background: #fff;
          font-weight: 600; font-size: 13px; cursor: pointer;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 1px 2px rgba(49,46,129,0.05);
          transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s, background 0.18s;
        }
        .fc-chip:hover { transform: translateY(-1px); border-color: #a5b4fc; background: #faf9ff; box-shadow: 0 8px 18px -10px rgba(99,102,241,0.5); }

        .fc-input-bar { padding: 12px 14px 14px; background: #fff; border-top: 1px solid #efeff7; }
        .fc-input-wrap {
          display: flex; align-items: center; gap: 8px;
          padding: 5px 5px 5px 16px; border-radius: 999px;
          background: #f6f6fb; border: 1px solid #e8e8f3;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .fc-input-wrap:focus-within { background: #fff; border-color: #a5b4fc; box-shadow: 0 0 0 4px rgba(99,102,241,0.12); }
        .fc-input { flex: 1; min-width: 0; border: none; outline: none; background: transparent; font-size: 14px; color: #111827; font-family: inherit; }
        .fc-input::placeholder { color: #9ca3af; }
        .fc-send {
          width: 38px; height: 38px; border-radius: 50%; border: none; cursor: pointer; color: #fff;
          background: linear-gradient(135deg,#6366f1,#7c3aed);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 14px -6px rgba(99,102,241,0.7);
          transition: transform 0.18s, opacity 0.18s;
        }
        .fc-send:hover:not(:disabled) { transform: scale(1.06); }
        .fc-send:disabled { opacity: 0.45; cursor: default; }

        /* Launcher (only shown while the chat is closed, so there is one close button only) */
        .fc-launcher-wrap { display: flex; align-items: center; gap: 12px; animation: fc-label-in 0.4s ease-out; }
        .fc-label {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 18px; border-radius: 999px; cursor: pointer;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(10px);
          border: 1px solid rgba(99,102,241,0.14);
          color: #1e1b4b; font-weight: 700; font-size: 14px; letter-spacing: -0.01em;
          box-shadow: 0 10px 30px -10px rgba(49,46,129,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .fc-label:hover { transform: translateX(-2px); box-shadow: 0 14px 34px -10px rgba(49,46,129,0.45); }
        .fc-launcher {
          width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer; color: #fff;
          background: linear-gradient(140deg,#6366f1 0%,#7c3aed 100%);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 26px -6px rgba(99,102,241,0.65), inset 0 1px 0 rgba(255,255,255,0.3);
          animation: fc-ring 2.4s ease-out infinite;
          transition: transform 0.2s;
        }
        .fc-launcher:hover { transform: scale(1.06); }

        @media (max-width: 480px) {
          .fc-root { right: 16px; bottom: 16px; }
          .fc-panel { height: min(560px, calc(100vh - 32px)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-panel, .fc-row, .fc-launcher-wrap, .fc-launcher, .fc-dot { animation: none; }
        }
      `}</style>

      <div className="fc-root">
        {open && (
          <div className="fc-panel" role="dialog" aria-label={`${profile.name}'s assistant`}>
            {/* Header — the only close button lives here */}
            <div className="fc-header">
              <Avatar size={40} ring />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="fc-title">{profile.name}'s Assistant</div>
                <div className="fc-status">
                  <span className="fc-dot" />
                  AI Assistant Online
                </div>
              </div>
              <button className="fc-close" onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="fc-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`fc-row ${msg.role === "user" ? "fc-row--user" : ""}`}>
                  {msg.role === "ai" && <Avatar size={26} />}
                  <div className={`fc-bubble ${msg.role === "ai" ? "fc-bubble-ai" : "fc-bubble-user"}`}>
                    {msg.role === "ai" ? <AiMessageContent text={msg.text} /> : msg.text}
                  </div>
                </div>
              ))}

              {isTyping && <TypingIndicator />}

              {step === "menu" && !isTyping && (
                <div className="fc-chips">
                  <ChipBtn icon={GraduationCap} label="About" onClick={showAbout} />
                  <ChipBtn icon={Rocket} label="Projects" onClick={showProjects} />
                  <ChipBtn icon={Code2} label="Skills" onClick={showSkills} />
                  <ChipBtn icon={Phone} label="Contact" onClick={showContact} />
                </div>
              )}

              {step === "projectIdea" && !isTyping && (
                <div className="fc-chips fc-chips--wrap">
                  <ChipBtn
                    icon={CheckCircle}
                    label="Yes, I have an idea!"
                    color="#059669"
                    onClick={() => {
                      addMessage("user", "Yes, I have an idea!");
                      askForIdea();
                    }}
                  />
                  <ChipBtn
                    icon={XCircle}
                    label="No, not right now"
                    color="#dc2626"
                    onClick={() => {
                      addMessage("user", "No, not right now");
                      declineIdea();
                    }}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {step !== "done" && (
              <div className="fc-input-bar">
                <div className="fc-input-wrap">
                  <input
                    ref={inputRef}
                    className="fc-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
                    placeholder={
                      step === "name" ? "Enter your name..." :
                      step === "projectIdea" ? "Type Yes, No, or your idea..." :
                      step === "ideaDescription" ? "Describe your project idea..." :
                      "Pick an option above..."
                    }
                  />
                  <button
                    className="fc-send"
                    onClick={sendMessage}
                    disabled={!input.trim() || isTyping}
                    aria-label="Send message"
                  >
                    <Send size={15} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Closed state: "Let's talk" label beside the chat button. Hidden while open. */}
        {!open && (
          <div className="fc-launcher-wrap">
            <div className="fc-label" onClick={() => setOpen(true)} role="button" tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(true)}>
              <span className="fc-dot" />
              Let's talk
            </div>
            <button className="fc-launcher" onClick={() => setOpen(true)} aria-label="Open chat">
              <MessageSquare size={25} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FloatingChatbot;