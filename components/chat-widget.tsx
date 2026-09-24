"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export const ChatWidgetButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { from: "bot" | "user"; text: string }[]
  >([{ from: "bot", text: "Hi! How can we help you today?" }]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: message.trim() }]);
    setMessage("");
    // Placeholder auto-reply — wire this up to a real chat backend when ready.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for your message! A team member will follow up shortly.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 flex h-96 w-80 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-orange-500/30 bg-slate-900 shadow-2xl">
          <div className="flex items-center justify-between border-b border-orange-500/30 bg-slate-800 px-4 py-3">
            <span className="font-semibold text-white">ArcenalCore Chat</span>
            <button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  m.from === "bot"
                    ? "bg-slate-700 text-white"
                    : "ml-auto bg-orange-500 text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-orange-500/30 p-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none"
            />
            <button
              aria-label="Send message"
              onClick={handleSend}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-orange-500 text-white hover:bg-orange-400"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 hover:bg-orange-400"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};
