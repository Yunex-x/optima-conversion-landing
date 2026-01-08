export default function SocialProofSection() {
    return (
<section className="w-full flex justify-center items-center p-4 md:p-8 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
                <div className="w-[95vw] max-w-7xl bg-slate-900/30 rounded-3xl md:rounded-[2. 5rem] p-6 md:p-12 border border-slate-800">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="flex flex-col max-w-6xl text-center gap-8 py-12 px-4 relative z-10">
                <div className="space-y-4">
                    <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-4">
                        Client Success Stories
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Trusted by growing businesses
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how we've helped companies transform their landing pages into lead-generating machines
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {/* Testimonial 1 - Featured */}
                    <div className="group bg-linear-to-br from-slate-900/60 to-slate-900/40 p-8 rounded-xl border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                        
                        <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                            "Our leads increased <span className="text-green-400 font-bold">within weeks</span>. The conversion rate jumped from 2% to 8.5%!"
                        </p>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 bg-linear-to-br from-green-500/30 to-green-600/20 rounded-full border-2 border-green-500/50 flex items-center justify-center text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform">
                                SC
                            </div>
                            <div className="text-left">
                                <p className="text-white font-semibold">Sarah Chen</p>
                                <p className="text-gray-400 text-sm">Founder, TechFlow Solutions</p>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-slate-700/50">
                            <div className="flex justify-between text-sm">
                                <div>
                                    <div className="text-green-400 font-bold text-2xl">+325%</div>
                                    <div className="text-gray-500 text-xs">Lead increase</div>
                                </div>
                                <div>
                                    <div className="text-green-400 font-bold text-2xl">8.5%</div>
                                    <div className="text-gray-500 text-xs">Conv.  rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="group bg-linear-to-br from-slate-900/60 to-slate-900/40 p-8 rounded-xl border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                        
                        <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                            "Clear process and great communication. They understood our vision perfectly."
                        </p>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 bg-linear-to-br from-blue-500/30 to-blue-600/20 rounded-full border-2 border-blue-500/50 flex items-center justify-center text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform">
                                MR
                            </div>
                            <div className="text-left">
                                <p className="text-white font-semibold">Michael Rodriguez</p>
                                <p className="text-gray-400 text-sm">CEO, GrowthWave Marketing</p>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-slate-700/50">
                            <div className="flex justify-between text-sm">
                                <div>
                                    <div className="text-green-400 font-bold text-2xl">+180%</div>
                                    <div className="text-gray-500 text-xs">ROI increase</div>
                                </div>
                                <div>
                                    <div className="text-green-400 font-bold text-2xl">12%</div>
                                    <div className="text-gray-500 text-xs">Conv.  rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="group bg-linear-to-br from-slate-900/60 to-slate-900/40 p-8 rounded-xl border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                        
                        <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                            "Exactly what we needed for our campaign. The results speak for themselves."
                        </p>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 bg-linear-to-br from-purple-500/30 to-purple-600/20 rounded-full border-2 border-purple-500/50 flex items-center justify-center text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform">
                                EP
                            </div>
                            <div className="text-left">
                                <p className="text-white font-semibold">Emily Patel</p>
                                <p className="text-gray-400 text-sm">Director, Nova Consulting</p>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-slate-700/50">
                            <div className="flex justify-between text-sm">
                                <div>
                                    <div className="text-green-400 font-bold text-2xl">+245%</div>
                                    <div className="text-gray-500 text-xs">Lead quality</div>
                                </div>
                                <div>
                                    <div className="text-green-400 font-bold text-2xl">15%</div>
                                    <div className="text-gray-500 text-xs">Conv.  rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">✓</span>
                        <span>50+ Projects Delivered</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">✓</span>
                        <span>4.9/5 Client Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">✓</span>
                        <span>100% Satisfaction Guarantee</span>
                    </div>
                </div>
            </div>
              </div>              
        </section>
    );
}