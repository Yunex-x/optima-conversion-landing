export default function PainPoint() {
    return (
<section className="w-full flex justify-center items-center p-4 md:p-8 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
                <div className="w-[95vw] max-w-7xl bg-slate-900/30 rounded-3xl md:rounded-[2. 5rem] p-6 md:p-12 border border-slate-800">

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage:  `radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="flex flex-col lg:flex-row max-w-7xl gap-12 px-4 relative z-10">
                {/* Left side - Image/Visual */}
                <div className="flex-1  flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-3xl"></div>
                        <div className="relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30 shadow-2xl">
                            {/* Sad analytics mockup */}
                            <div className="space-y-4">
                                <div className="text-center text-red-400 text-sm mb-4">Poor Performance Metrics</div>
                                
                                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Bounce Rate</span>
                                        <span className="text-red-400 text-xl font-bold">87%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{width: '87%'}}></div>
                                    </div>
                                </div>

                                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Conversion Rate</span>
                                        <span className="text-red-400 text-xl font-bold">0.8%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{width: '8%'}}></div>
                                    </div>
                                </div>

                                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Avg. Time on Page</span>
                                        <span className="text-red-400 text-xl font-bold">12s</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{width: '15%'}}></div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                    <div className="flex items-center gap-2 text-red-400">
                                        <span className="text-2xl">⚠️</span>
                                        <span className="text-sm">Critical:  Low engagement detected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 flex flex-col justify-center text-center lg:text-left gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Why most websites fail to convert
                    </h2>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-800 hover:border-red-500/30 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl text-red-400">✗</div>
                                <p className="text-gray-300 text-lg text-left">
                                    Visitors leave without taking action
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-800 hover:border-red-500/30 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl text-red-400">✗</div>
                                <p className="text-gray-300 text-lg text-left">
                                    No clear message or call-to-action
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-800 hover:border-red-500/30 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl text-red-400">✗</div>
                                <p className="text-gray-300 text-lg text-left">
                                    Design looks good but doesn't drive results
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-800 hover:border-red-500/30 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl text-red-400">✗</div>
                                <p className="text-gray-300 text-lg text-left">
                                    Poor mobile experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}