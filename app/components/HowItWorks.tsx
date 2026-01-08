export default function HowItWorks() {
    return (
<section className="w-full flex justify-center items-center p-4 md:p-8 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
                <div className="w-[95vw] max-w-7xl bg-slate-900/30 rounded-3xl md:rounded-[2. 5rem] p-6 md:p-12 border border-slate-800">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="flex flex-col max-w-6xl text-center gap-8 py-12 px-4 relative z-10">
                <div className="space-y-4">
                    <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
                        Simple Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        How it works
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Three simple steps to transform your landing page into a conversion machine
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
                    
                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-4 p-8 rounded-xl hover:bg-slate-900/50 transition-all duration-300 group relative">
                        <div className="w-20 h-20 bg-linear-to-br from-green-500/30 to-green-600/20 rounded-full flex items-center justify-center border-3 border-green-500 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <span className="text-3xl font-bold text-green-500">1</span>
                        </div>
                        
                        <div className="w-16 h-16 mb-4 text-5xl">📞</div>
                        
                        <h3 className="text-xl font-semibold text-white">
                            Book a free call
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Schedule a no-pressure consultation to discuss your business goals and challenges
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center gap-4 p-8 rounded-xl hover:bg-slate-900/50 transition-all duration-300 group relative">
                        <div className="w-20 h-20 bg-linear-to-br from-green-500/30 to-green-600/20 rounded-full flex items-center justify-center border-3 border-green-500 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <span className="text-3xl font-bold text-green-500">2</span>
                        </div>
                        
                        <div className="w-16 h-16 mb-4 text-5xl">🎯</div>
                        
                        <h3 className="text-xl font-semibold text-white">
                            We analyze your goals
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Deep dive into your target audience, value proposition, and conversion objectives
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center gap-4 p-8 rounded-xl hover:bg-slate-900/50 transition-all duration-300 group relative">
                        <div className="w-20 h-20 bg-linear-to-br from-green-500/30 to-green-600/20 rounded-full flex items-center justify-center border-3 border-green-500 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300 relative z-10 animate-pulse">
                            <span className="text-3xl font-bold text-green-500">3</span>
                        </div>
                        
                        <div className="w-16 h-16 mb-4 text-5xl">🚀</div>
                        
                        <h3 className="text-xl font-semibold text-white">
                            We design & deliver a high-converting page
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Receive a professionally crafted landing page optimized for maximum conversions
                        </p>
                    </div>
                </div>

                {/* Timeline estimate */}
                <div className="mt-12 p-6 bg-linear-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/30 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-3 text-white">
                        <span className="text-2xl">⏱️</span>
                        <span className="font-semibold">Average timeline: </span>
                        <span className="text-green-400 font-bold">7-14 days from start to launch</span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}