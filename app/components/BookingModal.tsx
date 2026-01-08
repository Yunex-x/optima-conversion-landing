import { useState, useEffect } from "react";
import { submitLead } from "../lib/submitLead";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Status = "idle" | "loading" | "success" | "error";

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleClose() {
    setStatus("idle");
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const result = await submitLead({
      name,
      email,
      message,
      source: "book-call-modal",
      page: "optima-landing",
    });

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <div className="bg-slate-900 rounded-xl p-8 w-full max-w-md relative border border-slate-800 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition-colors"
        >
          ×
        </button>

        {/* SUCCESS */}
        {status === "success" && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              ✅ Request received
            </h2>
            <p className="text-gray-300 mb-6">
              Thanks! We’ll contact you shortly.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Close
            </button>
          </div>
        )}

        {/* FORM */}
        {(status === "idle" || status === "loading" || status === "error") && (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">
              Book a Free Call
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />

              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />

              <textarea
                placeholder="Tell us about your project (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white resize-none"
              />

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg"
              >
                {status === "loading" ? "Submitting..." : "Book a free call"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
