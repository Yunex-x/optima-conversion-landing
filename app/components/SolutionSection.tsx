export default function SolutionSection() {
    return (
<section className="w-full flex justify-center items-center p-4 md:p-8 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
                <div className="w-[95vw] max-w-7xl bg-slate-900/30 rounded-3xl md:rounded-[2. 5rem] p-6 md:p-12 border border-slate-800">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center max-w-7xl gap-12 px-4 relative z-10">
                {/* Right side - Enhanced visual */}
                <div className="flex-1 w-full max-w-2xl">
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-green-500/30 to-blue-500/30 rounded-2xl blur-2xl"></div>
                        <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30 shadow-2xl">
                            {/* Conversion funnel visualization */}
                            <div className="space-y-6">
                                <div className="text-center text-green-400 text-sm mb-6">Optimized Conversion Funnel</div>

                                {/* Funnel stages */}
                                <div className="space-y-3">
                                    <div className="bg-linear-to-r from-green-500/30 to-green-600/20 p-4 rounded-lg border border-green-500/40 shadow-lg shadow-green-500/20">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white font-semibold">Visitors Land</span>
                                            <span className="text-green-400 font-bold">1000</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-3 mt-2">
                                            <div className="bg-linear-to-r from-green-400 to-green-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-r from-green-500/30 to-green-600/20 p-4 rounded-lg border border-green-500/40 shadow-lg shadow-green-500/20 ml-8">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white font-semibold">Engage with Content</span>
                                            <span className="text-green-400 font-bold">850</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-3 mt-2">
                                            <div className="bg-linear-to-r from-green-400 to-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-r from-green-500/30 to-green-600/20 p-4 rounded-lg border border-green-500/40 shadow-lg shadow-green-500/20 ml-16">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white font-semibold">View CTA</span>
                                            <span className="text-green-400 font-bold">720</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-3 mt-2">
                                            <div className="bg-linear-to-r from-green-400 to-green-500 h-3 rounded-full" style={{ width: '72%' }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-r from-green-500/40 to-green-600/30 p-4 rounded-lg border-2 border-green-500/60 shadow-xl shadow-green-500/40 ml-24 animate-pulse">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white font-bold">Convert!  🎉</span>
                                            <span className="text-green-400 font-bold text-xl">287</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-3 mt-2">
                                            <div className="bg-linear-to-r from-green-400 to-green-500 h-3 rounded-full shadow-lg shadow-green-500/50" style={{ width: '28.7%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <span className="text-green-400 font-semibold">Conversion Rate</span>
                                        <span className="text-3xl font-bold text-green-400">28. 7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left side - Content */}
                <div className="flex-1 flex flex-col text-center lg:text-left gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        A landing page built for one goal:  <span className="text-green-500 hover:text-green-400 transition-colors">conversion</span>
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        We design focused landing pages that guide visitors toward one clear action — booking a call or requesting a quote.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-green-500/30">
                            <span className="text-green-500 text-xl">✓</span>
                            <span className="text-gray-300">Clear messaging</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-green-500/30">
                            <span className="text-green-500 text-xl">✓</span>
                            <span className="text-gray-300">Strategic CTAs</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-green-500/30">
                            <span className="text-green-500 text-xl">✓</span>
                            <span className="text-gray-300">Data-driven design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}