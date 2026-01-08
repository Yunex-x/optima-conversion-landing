export default function BenefitsSection() {
    return (
<section className="w-full flex justify-center items-center p-4 md:p-8 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
                <div className="w-[95vw] max-w-7xl bg-slate-900/30 rounded-3xl md:rounded-[2. 5rem] p-6 md:p-12 border border-slate-800">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgb(34 197 94 / 0.1) 1px, transparent 1px), linear-gradient(90deg, rgb(34 197 94 / 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="flex flex-col max-w-6xl text-center gap-8 py-12 px-4 relative z-10">
                <div className="space-y-4">
                    <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-4">
                        The Optima Advantage
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Why businesses choose Optima
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="group bg-linear-to-br from-slate-900/70 to-slate-900/50 p-8 rounded-xl border border-green-500/30 hover:border-green-500/60 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105">
                        <div className="flex items-start gap-4">
                            <div className="text-4xl p-3 bg-green-500/10 rounded-lg border border-green-500/30 group-hover:scale-110 transition-transform">
                                🎯
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Conversion-first structure
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Every element strategically placed to guide visitors toward action
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-linear-to-br from-slate-900/70 to-slate-900/50 p-8 rounded-xl border border-green-500/30 hover:border-green-500/60 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105">
                        <div className="flex items-start gap-4">
                            <div className="text-4xl p-3 bg-green-500/10 rounded-lg border border-green-500/30 group-hover:scale-110 transition-transform">
                                📊
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Clear messaging & hierarchy
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Information organized to make decision-making effortless
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-linear-to-br from-slate-900/70 to-slate-900/50 p-8 rounded-xl border border-green-500/30 hover:border-green-500/60 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105">
                        <div className="flex items-start gap-4">
                            <div className="text-4xl p-3 bg-green-500/10 rounded-lg border border-green-500/30 group-hover:scale-110 transition-transform">
                                📱
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Mobile-first design
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Perfect experience on every device, from phone to desktop
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-linear-to-br from-slate-900/70 to-slate-900/50 p-8 rounded-xl border border-green-500/30 hover:border-green-500/60 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105">
                        <div className="flex items-start gap-4">
                            <div className="text-4xl p-3 bg-green-500/10 rounded-lg border border-green-500/30 group-hover:scale-110 transition-transform">
                                ⚡
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Fast loading & clean code
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Optimized performance that keeps visitors engaged
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats row */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto w-full px-4">
    <div className="p-4 md:p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-green-500/30 transition-all duration-300 hover:scale-105">
        <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">3x</div>
        <div className="text-gray-400 text-xs md:text-sm">Average conversion increase</div>
    </div>
    <div className="p-4 md:p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-green-500/30 transition-all duration-300 hover:scale-105">
        <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">&lt;2s</div>
        <div className="text-gray-400 text-xs md:text-sm">Page load time</div>
    </div>
    <div className="p-4 md:p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-green-500/30 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
        <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">100%</div>
        <div className="text-gray-400 text-xs md:text-sm">Mobile optimized</div>
    </div>
</div>            </div>
        </div>
        </section>
    );
}