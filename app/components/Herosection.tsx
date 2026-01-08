'use client';
import { useState } from "react";
import BookingModal from "./BookingModal";
export default function Herosection() {
    const [isOpen, setIsOpen] = useState(false);

    return (




        <section className="w-full min-h-screen flex justify-center items-center p-4 text-white bg-linear-to-br from-blue-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            {/* Bottom fade-out gradient for seamless transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-slate-950 z-10"></div>

            <div className="flex flex-col lg:flex-row items-center max-w-7xl gap-12 px-4 animate-fade-in relative z-10">
                {/* Text Content */}
                <div className="flex flex-col text-center lg:text-left gap-6 flex-1">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        We optimize landing pages that turn <span className="text-green-500 hover:text-green-400 transition-colors animate-pulse">visitors</span> into real leads.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0">
                        Optima helps businesses increase conversions with clear messaging, focused structure, and conversion-driven design — not just visuals.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col items-center justify-center lg:items-start gap-4 mt-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-green-600/30 hover:shadow-green-600/50" onClick={() => setIsOpen(true)}>
                                Book a free call
                            </button>

                            <BookingModal
                                isOpen={isOpen}
                                onClose={() => setIsOpen(false)}
                            />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                            No pressure · No commitment · Free consultation
                        </p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 w-full max-w-2xl">
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                        <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-2xl">
                            {/* Mockup:  Analytics Dashboard */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-sm text-gray-400">Conversion Analytics</div>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-linear-to-br from-green-500/10 to-green-600/5 p-4 rounded-lg border border-green-500/20">
                                        <div className="text-3xl font-bold text-green-500">+247%</div>
                                        <div className="text-sm text-gray-400 mt-1">Conversion Rate</div>
                                    </div>
                                    <div className="bg-linear-to-br from-blue-500/10 to-blue-600/5 p-4 rounded-lg border border-blue-500/20">
                                        <div className="text-3xl font-bold text-blue-400">+189%</div>
                                        <div className="text-sm text-gray-400 mt-1">Lead Generation</div>
                                    </div>
                                </div>

                                {/* Chart visualization */}
                                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/30 mt-4">
                                    <div className="flex items-end justify-between h-32 gap-2">
                                        <div className="flex-1 bg-linear-to-t from-green-600 to-green-400 rounded-t h-16 opacity-50"></div>
                                        <div className="flex-1 bg-linear-to-t from-green-600 to-green-400 rounded-t h-20 opacity-60"></div>
                                        <div className="flex-1 bg-linear-to-t from-green-600 to-green-400 rounded-t h-24 opacity-70"></div>
                                        <div className="flex-1 bg-linear-to-t from-green-600 to-green-400 rounded-t h-28 opacity-90"></div>
                                        <div className="flex-1 bg-linear-to-t from-green-600 to-green-400 rounded-t h-32 shadow-lg shadow-green-500/50"></div>
                                    </div>
                                    <div className="text-center text-sm text-gray-400 mt-3">Monthly Performance Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </section>

    );
}