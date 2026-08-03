import { useState } from "react";
import { X } from "lucide-react";

// Use the standard, correct format without '971' and leading '+'
const PHONE = "971526232321"; // Check this phone number, it must be correct.
const WHATSAPP_URL = `https://wa.me/${PHONE}`;

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-auto min-w-[240px] overflow-hidden rounded-lg border border-border bg-card p-4 shadow-2xl transition-all duration-300 ease-out animate-in slide-in-from-bottom-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#1ebe57]"
          >
            Chat on WhatsApp, tell us more
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp widget" : "Open WhatsApp widget"}
        className="flex h-14 w-14 items-center justify-center rounded-full cursor-pointer bg-[#25D366] text-white shadow-xl transition-all hover:scale-105 active:scale-95"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="32" // Set a proper size
            height="32"
            fill="currentColor" // This ensures the icon color is controlled by the parent text color (white)
            className="block"
          >
            <path d="M12.004 2C6.48 2 2.004 6.477 2.004 12c0 1.83.488 3.542 1.334 5.038L2.004 22l5.122-1.314c1.472.775 3.14 1.223 4.878 1.223a9.966 9.966 0 0 0 10-10c0-5.523-4.477-10-10-10zm0 18.174a8.136 8.136 0 0 1-4.053-1.077l-.29-.168-3.013.774.787-2.875-.184-.294a8.13 8.13 0 0 1-1.246-4.334c0-4.507 3.667-8.174 8.174-8.174 4.508 0 8.174 3.667 8.174 8.174 0 4.508-3.667 8.174-8.174 8.174zm4.568-6.108c-.25-.125-1.477-.73-1.704-.813-.227-.083-.393-.125-.558.125-.165.25-.64.813-.785.979-.145.166-.29.187-.54.062-.25-.125-1.057-.39-2.013-1.242-.744-.663-1.246-1.482-1.391-1.732-.145-.25-.016-.385.11-.51.11-.11.25-.29.375-.436.125-.145.166-.25.25-.416.083-.166.042-.313-.02-.437-.063-.125-.558-1.348-.765-1.848-.2-.483-.404-.417-.558-.425-.142-.007-.309-.009-.475-.009-.166 0-.437.062-.665.312-.227.25-.87.854-.87 2.083s.896 2.416 1.021 2.583c.125.167 1.762 2.69 4.27 3.774.597.258 1.063.412 1.425.527.6.19 1.146.163 1.577.098.482-.072 1.477-.604 1.684-1.187.208-.584.208-1.084.146-1.188-.063-.104-.227-.166-.477-.292z" />
          </svg>
        )}
      </button>
    </div>
  );
}
