import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Bot, CheckCircle } from "lucide-react";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
}

const PRESET_QUESTIONS = [
  "What solutions do you build?",
  "How long does CRM/ERP implementation take?",
  "Can you integrate AI into existing software?",
  "How can I get a project estimate?",
];

const AI_RESPONSES: Record<string, string> = {
  "What solutions do you build?":
    "We specialize in enterprise CRM platforms, ERP operations software, autonomous AI workflow agents, and digital marketing engines.",
  "How long does CRM/ERP implementation take?":
    "Our typical delivery timeframe is 2 to 4 weeks for initial deployment, followed by continuous agile enhancement and scaling.",
  "Can you integrate AI into existing software?":
    "Yes! We integrate predictive AI, natural language processing, and workflow automation into your existing stack without disruption.",
  "How can I get a project estimate?":
    "You can use our interactive ROI calculator on this page or send a message via our contact form below to receive a custom proposal!",
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "ai",
      text: "Hi there! I'm the ByteX AI Assistant. How can I help you transform your business today?",
    },
  ]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    // Simulate AI response
    setTimeout(() => {
      const responseText =
        AI_RESPONSES[text] ||
        "Thank you for your message! Our engineering team will review your requirement. Feel free to leave your contact details or email hello@bytexsolutions.com.";

      const aiMsg: Message = { id: (Date.now() + 1).toString(), sender: "ai", text: responseText };
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating launcher button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#2563EB] text-white flex items-center justify-center shadow-xl shadow-purple-500/30 relative group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
              <Bot size={26} />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute bottom-18 right-0 w-[350px] sm:w-[380px] h-[480px] rounded-2xl bg-[#0F0A1F] border border-white/10 shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    ByteX AI Assistant
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[10px] font-mono text-white/40">Online · Powered by AI</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 text-white/50 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed ${
                      m.sender === "user"
                        ? "bg-[#7C3AED] text-white rounded-br-none"
                        : "bg-white/10 text-white/90 rounded-bl-none border border-white/5"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-3 border-t border-white/5 bg-white/[0.02] flex flex-col gap-1.5">
              <div className="text-[10px] font-mono text-white/40 px-1">Suggested Questions:</div>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {PRESET_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#7C3AED]/20 border border-white/10 hover:border-[#7C3AED]/30 text-white/70 hover:text-white transition-all text-left truncate max-w-full"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white/5 border-t border-white/10 flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask about CRM, ERP, AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl text-xs bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7C3AED] placeholder:text-white/30"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-colors flex items-center justify-center shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
