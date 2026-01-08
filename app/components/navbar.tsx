'use client';
import Link from "next/link";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full justify-between items-center px-6 md:px-12 lg:px-16 py-4 text-white flex bg-slate-900  opacity-95 sticky top-0 z-50 shadow-lg shadow-slate-900/50">
            <div className="flex items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white hover:text-green-400 transition-colors cursor-pointer tracking-tight">
                    <span className="text-5xl text-emerald-600">o</span>ptima
                </h1>
            </div>


            <div className="flex items-center gap-4">
                <button className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-green-600/30 hover:shadow-green-600/50" onClick={() => setIsOpen(true)}>
                    Book a free call
                </button>
            </div>

            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </nav>
    );
}