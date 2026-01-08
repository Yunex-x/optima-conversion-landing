export default function Footer() {
    return (
        <footer className="w-full flex justify-center items-center p-8 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-green-500/30 rounded-full blur-3xl"></div>
            </div>

            <div className="flex flex-col  w-full  px-4">
                {/* Main footer content */}
                <div className="grid grid-cols-1">
                    {/* Brand section */}
                    {/* Contact */}
                    <div className="w-full max-w-md mx-auto space-y-4 text-center ">
                        <h4 className="text-white font-semibold text-lg mb-4">Get Started</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Ready to increase your conversions? Let's talk.
                        </p>

                        <p className="text-gray-500 text-center text-lg mt-4">
                            📧 hello@optima.com<br />
                            📞 (555) 123-4567
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-800/50 text-center">
                    <div className="flex flex-col gap-4 text-gray-500 text-sm">
                        <p>
                            © {new Date().getFullYear()} Optima. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}