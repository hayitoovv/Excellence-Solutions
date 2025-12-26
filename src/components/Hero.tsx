// src/components/Hero.tsx - ParticlesBackground bilan
import { ArrowRight, PlayCircle } from "lucide-react";
import { ImageSlider } from "./ImageSlider";
import { ParticlesBackground } from "./ParticlesBackground";
import ContactModal from './ContactModal';
import { useState } from 'react';

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const slides = [
        // {
        //     url: "https://images.unsplash.com/photo-1692133211836-52846376d66f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjByb29tfGVufDF8fHx8MTc2NDM4OTAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
        //     alt: "Modern Server Room",
        // },
        {
            url: "https://images.unsplash.com/photo-1722080826167-4ea87368cbc5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Modern Server Room",
        },
        // {
        //     url: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2NDM4OTAxMHww&ixlib=rb-4.1.0&q=80&w=1080",
        //     alt: "Software Development",
        // },
        {
            url: "https://plus.unsplash.com/premium_photo-1720430157103-985dfc0e6825?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Software Development",
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1764705638704-1ffba903b479?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Cloud Computing",
        },
        // {
        //     url: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MzQ3OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        //     alt: "Cloud Computing",
        // },
        {
            url: "https://plus.unsplash.com/premium_photo-1720556221767-990b2e11807c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Cybersecurity",
        },
        // {
        //     url: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjQyOTQ0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        //     alt: "Cybersecurity",
        // },
        {
            url: "https://plus.unsplash.com/premium_photo-1752326185528-2ae789bd1581?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Business Technology",
        },
        // {
        //     url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzY0MzY3MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        //     alt: "Business Technology",
        // },
    ];

    return (
        <section className="relative bg-gradient-to-br from-white via-[#F0F9F4] to-[#E8F5E9] overflow-hidden min-h-screen">
            {/* Particles Background - orqa fon effekti */}
            <ParticlesBackground id="hero-particles" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none " >
                <div className="absolute top-20 right-20 w-64 h-64 bg-[#00A651] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#16C172] opacity-5 rounded-full blur-3xl"></div>

                {/* Circuit Pattern */}
                <svg
                    className="absolute top-0 right-0 w-1/2 h-full opacity-5"
                    viewBox="0 0 100 100"
                >
                    <pattern
                        id="circuit"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="2" cy="2" r="1" fill="#00A651" />
                        <line
                            x1="2"
                            y1="2"
                            x2="10"
                            y2="2"
                            stroke="#00A651"
                            strokeWidth="0.3"
                        />
                        <line
                            x1="10"
                            y1="2"
                            x2="10"
                            y2="10"
                            stroke="#00A651"
                            strokeWidth="0.3"
                        />
                        <circle cx="10" cy="10" r="1" fill="#00A651" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#circuit)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00A651]/20 shadow-sm">
                            <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse"></div>
                            <span className="text-sm text-[#0E7A3B]">
                                Innovatsion IT yechimlari
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl text-[#2C3E50] leading-tight">
                                Texnologiya va <br />
                                <span className="text-[#00A651]">
                                    Barqarorlik
                                </span>{" "}
                                bilan <br />
                                kelajakni quring
                            </h1>
                        </div>

                        {/* CTA Buttons */}
                     <div className="flex flex-wrap items-center gap-4">
                            <button onClick={() => setIsModalOpen(true)} className="group bg-[#00A651] hover:bg-[#0E7A3B] text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-[#00A651]/30 hover:shadow-xl hover:shadow-[#00A651]/40">
                                <span>Biz bilan bog&apos;laning</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <ContactModal 
                            isOpen={isModalOpen} 
                            onClose={() => setIsModalOpen(false)} 
                            />

                            <button className="group bg-white hover:bg-[#E8F5E9] text-[#00A651] px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 border border-[#00A651]/20">
                                <PlayCircle className="w-5 h-5" />
                                <span>Xizmatlarni ko&apos;rish</span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
                            <div>
                                <div className="text-3xl text-[#00A651]">
                                    500+
                                </div>
                                <div className="text-sm text-gray-600">
                                    Mamnun mijozlar
                                </div>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div>
                                <div className="text-3xl text-[#00A651]">
                                    1000+
                                </div>
                                <div className="text-sm text-gray-600">
                                    Loyihalar
                                </div>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div>
                                <div className="text-3xl text-[#00A651]">
                                    99%
                                </div>
                                <div className="text-sm text-gray-600">
                                    Muvaffaqiyat
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Slider */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00A651]/20">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00A651]/20 to-transparent z-10 pointer-events-none"></div>
                            <ImageSlider
                                slides={slides}
                                autoPlayInterval={4000}
                            />
                        </div>

                        {/* Floating Card */}
                        <div
                            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1629] rounded-2xl p-4 shadow-2xl border border-[#3b82f6]/40 z-20  backdrop-blur-md"
                            style={{
                                boxShadow:
                                    "0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(99, 102, 241, 0.2)",
                            }}
                        >
                            <div className="space-y-2.5">
                                {/* Header */}
                                <div className="flex items-center justify-between pb-2 border-b border-[#3b82f6]/20">
                                    <div className="flex items-center space-x-1.5">
                                        <div className="relative">
                                            <div className="w-2.5 h-2.5 bg-[#3b82f6] rounded-full animate-pulse"></div>
                                            <div className="absolute inset-0 w-2.5 h-2.5 bg-[#3b82f6] rounded-full animate-ping"></div>
                                        </div>
                                        <span className="text-xs text-[#60a5fa]">
                                            Security Status
                                        </span>
                                    </div>
                                    <div
                                        className="px-2.5 py-0.5 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full text-xs text-white shadow-lg"
                                        style={{
                                            boxShadow:
                                                "0 0 15px rgba(16, 185, 129, 0.5)",
                                        }}
                                    >
                                        Protected
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-gradient-to-br from-[#1e293b]/50 to-[#0f172a]/30 rounded-xl p-2 border border-[#3b82f6]/20">
                                        <div className="text-xs text-gray-400 mb-0.5">
                                            Threats Blocked
                                        </div>
                                        <div
                                            className="text-xl text-[#3b82f6]"
                                            style={{
                                                textShadow:
                                                    "0 0 10px rgba(59, 130, 246, 0.5)",
                                            }}
                                        >
                                            248+
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#1e293b]/50 to-[#0f172a]/30 rounded-xl p-2 border border-[#10b981]/20">
                                        <div className="text-xs text-gray-400 mb-0.5">
                                            Firewall
                                        </div>
                                        <div className="text-xs text-[#10b981] flex items-center space-x-1">
                                            <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></div>
                                            <span>Active</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Scan Progress */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">
                                            Live Scan
                                        </span>
                                        <span className="text-xs text-[#3b82f6]">
                                            87%
                                        </span>
                                    </div>
                                    <div className="relative h-1.5 bg-[#1e293b] rounded-full overflow-hidden border border-[#3b82f6]/30">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#818cf8] rounded-full animate-pulse"
                                            style={{
                                                width: "87%",
                                                boxShadow:
                                                    "0 0 15px rgba(59, 130, 246, 0.6)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                                            style={{
                                                width: "30%",
                                                animation:
                                                    "shimmer 2s infinite",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <style>{`
                                @keyframes shimmer {
                                    0% {
                                        transform: translateX(-100%);
                                    }
                                    100% {
                                        transform: translateX(400%);
                                    }
                                }
                                .animate-shimmer {
                                    animation: shimmer 2s infinite;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}