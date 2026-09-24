"use client";

import { useState } from "react";
import { Mail, Phone, Share2, X } from "lucide-react";

// --- Brand icons not in lucide-react, kept as small inline SVGs so no extra
// dependency is needed. Each is a single-color glyph that inherits currentColor.
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.51.6-.67 1.02-.12.31-.26.78-.3 1.65C4.27 6.75 4.26 7.07 4.26 9.74v.02c0 2.67.01 2.99.06 4.04.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.51 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.51-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.73 2.73 0 0 0-.67-1.02 2.73 2.73 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5.88-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.56-.48-.49-.65-.5h-.56c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.19 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.11.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
    <path d="M12.04 2C6.58 2 2.13 6.42 2.13 11.85c0 1.98.58 3.83 1.58 5.39L2 22l4.9-1.28a9.9 9.9 0 0 0 5.14 1.41h.01c5.46 0 9.91-4.42 9.91-9.85C21.96 6.42 17.5 2 12.04 2zm0 18.03h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.81.83-3.02-.2-.31a8.13 8.13 0 0 1-1.25-4.33c0-4.49 3.68-8.15 8.22-8.15 4.53 0 8.21 3.66 8.21 8.15 0 4.5-3.68 8.18-8.21 8.18z" />
  </svg>
);

const ViberIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.03 2C7.1 2 3.1 5.24 3.1 9.55c0 2.6 1.46 4.9 3.72 6.3-.13.75-.5 2.05-.58 2.35-.1.36.13.36.28.26.11-.08 1.79-1.2 2.5-1.68.65.13 1.32.2 2.01.2 4.93 0 8.93-3.24 8.93-7.43C19.96 5.24 15.96 2 12.03 2zm3.98 10.03c-.15.42-.86.8-1.19.85-.31.05-.7.07-1.13-.07-.26-.09-.6-.2-1.03-.4-1.82-.79-3-2.62-3.1-2.74-.09-.12-.74-.98-.74-1.87 0-.89.47-1.32.63-1.5.16-.18.36-.22.48-.22h.34c.11 0 .26-.04.4.31.15.36.51 1.25.55 1.34.05.09.08.2.02.32-.06.12-.09.2-.18.3-.09.11-.19.24-.27.32-.09.09-.18.19-.08.37.11.18.48.79 1.03 1.28.71.63 1.31.83 1.49.92.18.09.29.08.4-.05.11-.13.46-.53.58-.71.12-.18.24-.15.4-.09.16.06 1.03.49 1.21.58.18.09.3.14.34.21.05.08.05.42-.1.84z" />
    <path d="M12.16 5.13a5.9 5.9 0 0 1 5.82 5.07.5.5 0 1 1-.99.14 4.9 4.9 0 0 0-4.85-4.22.5.5 0 1 1 .02-1zm-.1 1.86a3.9 3.9 0 0 1 3.87 3.36.5.5 0 1 1-.99.14 2.9 2.9 0 0 0-2.9-2.51.5.5 0 0 1 .02-1z" />
  </svg>
);

const WeChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M9.2 3.5C4.8 3.5 1.3 6.5 1.3 10.2c0 2.1 1.15 4 3 5.27l-.75 2.26 2.62-1.3c.65.18 1.34.29 2.05.32a5.6 5.6 0 0 1-.1-1c0-3.75 3.67-6.79 8.2-6.79.24 0 .48.01.71.03C16.4 5.8 13.1 3.5 9.2 3.5zM6.5 8.4a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9zm5.4 0a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z" />
    <path d="M16.3 10.8c-3.83 0-6.93 2.6-6.93 5.8 0 3.2 3.1 5.8 6.93 5.8.64 0 1.26-.08 1.85-.22l2.24 1.12-.62-1.98C21.3 20.15 22.3 18.6 22.3 16.6c0-3.2-3.1-5.8-6.93-5.8h.93zm-2.5 4.1a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm4.6 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
  </svg>
);

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  bg: string;
}

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/arcenalcore",
    icon: <FacebookIcon />,
    bg: "bg-[#1877F2] hover:bg-[#1465cc]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/arcenalcore",
    icon: <InstagramIcon />,
    bg: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/10000000000",
    icon: <WhatsAppIcon />,
    bg: "bg-[#25D366] hover:bg-[#1ebc59]",
  },
  {
    label: "Viber",
    href: "viber://chat?number=%2B10000000000",
    icon: <ViberIcon />,
    bg: "bg-[#7360F2] hover:bg-[#5f4de0]",
  },
  {
    label: "WeChat",
    href: "weixin://dl/chat?arcenalcore",
    icon: <WeChatIcon />,
    bg: "bg-[#07C160] hover:bg-[#06a854]",
  },
  {
    label: "Email",
    href: "mailto:contact@arcenalcore.com",
    icon: <Mail className="h-5 w-5" />,
    bg: "bg-slate-600 hover:bg-slate-500",
  },
  {
    label: "Call us",
    href: "tel:+10000000000",
    icon: <Phone className="h-5 w-5" />,
    bg: "bg-orange-500 hover:bg-orange-400",
  },
];

const SocialIconLink = ({ link }: { link: SocialLink }) => (
  <a
    href={link.href}
    target={link.href.startsWith("http") ? "_blank" : undefined}
    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
    aria-label={link.label}
    className={`group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 ${link.bg}`}
  >
    {link.icon}
    <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
      {link.label}
    </span>
  </a>
);

/**
 * Floating social links widget.
 * - Desktop (sm and up): full vertical stack of icons on the right edge.
 * - Mobile (below sm): collapses into a single "share" FAB. Tapping it uses
 *   the native Web Share API when available (real share sheet); if the
 *   browser doesn't support it, it fans open the same icon list instead.
 */
export const SocialShareBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleShareClick = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "ArcenalCore",
          text: "Check out ArcenalCore - Professional Firearms & Ammunition",
          url: typeof window !== "undefined" ? window.location.href : undefined,
        });
      } catch {
        // User cancelled the native share sheet — nothing to do.
      }
      return;
    }
    // No native share support: fall back to revealing the icon list.
    setIsMobileOpen((v) => !v);
  };

  return (
    <>
      {/* Desktop: always-visible vertical icon stack, centered on the viewport height.
          Using an inset-y-0 + flex items-center wrapper instead of top-1/2 + translate:
          it's not affected by mobile browsers' dynamic viewport height (address bar
          show/hide), which can make a translate-based center drift downward. */}
      <div className="pointer-events-none fixed inset-y-0 right-4 z-40 hidden items-center sm:flex">
        <div className="pointer-events-auto flex flex-col gap-3">
          {socialLinks.map((link) => (
            <SocialIconLink key={link.label} link={link} />
          ))}
        </div>
      </div>

      {/* Mobile: single share-style FAB, centered on the viewport height */}
      <div className="pointer-events-none fixed inset-y-0 right-4 z-40 flex items-center sm:hidden">
        <div className="pointer-events-auto flex flex-col items-end gap-3">
          {isMobileOpen && (
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <SocialIconLink key={link.label} link={link} />
              ))}
            </div>
          )}
          <button
            aria-label={isMobileOpen ? "Close share options" : "Share"}
            onClick={handleShareClick}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 hover:bg-orange-400"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Share2 className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
