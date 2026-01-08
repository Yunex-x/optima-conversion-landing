'use client';
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function CTASection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full flex justify-center items-center p-4 md:p-8 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <div className="flex justify-center w-[95vw] max-w-7xl bg-slate-900/30 rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 border border-slate-800">
                {/* Animated background elements */}

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-900/50 to-slate-950"></div>

                <div className="flex flex-col max-w-5xl text-center gap-10 py-16 px-4 relative z-10">
                    {/* Icon/Visual element */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl animate-pulse"></div>
                            <div className="relative bg-linear-to-br from-green-500/20 to-green-600/10 p-8 rounded-full border-2 border-green-500/50 shadow-2xl">
                                <div className="text-7xl">🚀</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 ">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Ready to get more leads from your website?
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Join the growing businesses that transformed their landing pages into conversion machines
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                        <button className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-green-600/30 hover:shadow-green-600/50" onClick={() => setIsOpen(true)}>
                            Book a free call
                        </button>


                    </div>

                    {/* Trust elements */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-lg">✓</span>
                            <span>Free consultation</span>
                        </div>
                        <div className="hidden sm:block text-gray-600">•</div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-lg">✓</span>
                            <span>No commitment required</span>
                        </div>
                        <div className="hidden sm:block text-gray-600">•</div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 text-lg">✓</span>
                            <span>Quick 15-min call</span>
                        </div>
                    </div>

                    {/* Urgency element */}
                    <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg max-w-md mx-auto">
                        <div className="flex items-center justify-center gap-2 text-orange-400">
                            <span className="text-xl">⚡</span>
                            <span className="font-semibold">Limited spots available this month</span>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </section>
    );
}