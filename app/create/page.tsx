"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Globe, Users, PenTool, Lightbulb } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const FORMATS = [
    {
        id: "digital",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="11" x2="15" y2="11" />
                <line x1="9" y1="15" x2="12" y2="15" />
            </svg>
        ),
        title: "Digital Story",
        desc: "Optimized for e-readers and mobile devices. Instant global distribution.",
        cta: "Create Digital",
        accent: "#5c2d8f",
    },
    {
        id: "print",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" />
                <path d="M4 15H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2" />
                <circle cx="18" cy="18" r="1" fill="currentColor" />
            </svg>
        ),
        title: "Print Edition",
        desc: "Beautifully bound physical copies with high-quality cream paper.",
        cta: "Order Print",
        accent: "#5c2d8f",
    },
    {
        id: "premium",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
        ),
        title: "Premium Edition",
        desc: "Hardcover with gold foil accents and silk ribbon bookmarks.",
        cta: "Design Premium",
        accent: "#5c2d8f",
    },
    {
        id: "collection",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="14" height="17" rx="2" />
                <path d="M7" y="4" x="2" />
                <path d="M11" y="4" x="2" />
                <rect x="7" y="7" width="6" height="2" rx="1" />
                <path d="M17 8h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9" />
            </svg>
        ),
        title: "Story Collection",
        desc: "A curated anthology of your short works and poetic compositions.",
        cta: "Compile Collection",
        accent: "#5c2d8f",
    },
];

export default function CreateNewPage() {
    const [activeNav, setActiveNav] = useState("Bookshelf");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* ── TOP UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.15] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <div className="flex items-center gap-1 text-[0.78rem] text-muted cursor-pointer hover:text-plum transition-colors">
                    English
                    <ChevronDown size={10} strokeWidth={2} />
                </div>
                <Link href="/help" className="hidden sm:inline text-[0.78rem] text-muted no-underline transition-colors hover:text-plum">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline font-normal transition-colors hover:text-plum">Sign Out</Link>
            </div>

            {/* ── MAIN NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 md:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 md:mr-12 shrink-0">
                    <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>

                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar hidden sm:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Marketing" ? "/marketing" : "#"}
                            className={`px-3 md:px-[18px] h-[60px] flex items-center justify-center font-sans text-[0.82rem] md:text-[0.875rem] font-normal no-underline border-b-2 transition-all duration-200 cursor-pointer bg-transparent whitespace-nowrap ${activeNav === link
                                ? "text-plum font-semibold border-plum"
                                : "text-muted border-transparent hover:text-plum"
                                }`}
                            onClick={() => setActiveNav(link)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>

                <Link href="/create" className="ml-auto bg-plum text-white border-none cursor-pointer font-sans text-[0.875rem] font-semibold px-4 md:px-[22px] py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 no-underline whitespace-nowrap hover:bg-plum-light hover:-translate-y-[1px] shrink-0">
                    <PenTool size={14} />
                    <span className="hidden sm:inline">Create New Story</span>
                    <span className="sm:hidden">Create</span>
                </Link>
            </nav>

            {/* ── MAIN CONTENT ── */}
            <main className="flex-1 w-full max-w-[1100px] mx-auto px-5 py-8 md:py-10 md:px-12 animate-[fadeUp_0.55s_ease_both]">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 mb-7 text-[0.82rem]">
                    <Link href="/dashboard" className="text-muted no-underline transition-colors duration-200 hover:text-plum">Bookshelf</Link>
                    <span className="text-muted opacity-50">/</span>
                    <span className="text-plum font-medium">Create New</span>
                </nav>

                {/* Heading */}
                <div className="mb-2.5">
                    <h1 className="font-playfair text-[clamp(2rem,4vw,2.8rem)] font-black text-ink leading-[1.1]">
                        What would you like to create?
                    </h1>
                    <p className="mt-3 text-[0.95rem] text-muted leading-[1.6] max-w-[520px]">
                        Choose the format that best brings your literary vision to life. Each choice offers unique tools to reach your readers.
                    </p>
                </div>

                {/* Format Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-9 md:mb-[52px]">
                    {FORMATS.map((f, i) => (
                        <div
                            key={f.id}
                            className="bg-white rounded-2xl p-6 md:pt-8 md:px-6 md:pb-7 border-[1.5px] border-plum/[0.12] flex flex-col items-center text-center cursor-pointer transition-all duration-200 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(92,45,143,0.12)] hover:border-plum/25"
                            style={{ animation: `fadeUp 0.55s ${0.05 + i * 0.07}s both` }}
                        >
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-plum to-plum-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                            <div className="w-[52px] h-[52px] rounded-[14px] bg-[#ede5f8] grid place-items-center text-plum mb-5 transition-all duration-200 group-hover:bg-plum group-hover:text-white group-hover:scale-110">
                                {f.icon}
                            </div>
                            <div className="font-playfair text-[1.05rem] font-bold text-ink mb-2.5">
                                {f.title}
                            </div>
                            <p className="text-[0.82rem] leading-[1.6] text-muted flex-1 mb-6">
                                {f.desc}
                            </p>
                            <Link href={f.id === 'digital' ? '/create/digital' : '#'} className="w-full text-center bg-plum text-white border-none cursor-pointer font-sans text-[0.82rem] font-semibold py-[11px] px-5 rounded-lg transition-all duration-200 no-underline hover:bg-plum-light hover:-translate-y-[1px] block">
                                {f.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Story Hut Select section */}
                <div className="bg-white rounded-[20px] border border-plum/[0.12] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_4px_24px_rgba(92,45,143,0.06)] mb-8 animate-[fadeUp_0.6s_0.15s_ease_both]">
                    <div className="p-8 lg:p-11 border-l-4 border-[#e8a830] flex flex-col justify-center">
                        <h2 className="font-playfair text-[1.6rem] font-black text-ink leading-[1.2] mb-4">
                            Reach more readers with Story Hut Select
                        </h2>
                        <p className="text-[0.875rem] text-muted leading-[1.7] mb-6">
                            Leverage our exclusive literary community to reach more readers and build your brand as an author. Our algorithms focus on narrative quality and reader engagement, ensuring your voice is heard by those who appreciate fine storytelling.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6">
                            <div className="flex items-center gap-2 text-[0.8rem] text-text font-medium">
                                <Globe size={16} className="text-plum shrink-0" />
                                Global Distribution
                            </div>
                            <div className="flex items-center gap-2 text-[0.8rem] text-text font-medium">
                                <Users size={16} className="text-plum shrink-0" />
                                Author Network
                            </div>
                        </div>
                        <button className="self-start inline-flex items-center gap-1.5 font-sans text-[0.85rem] font-semibold text-plum bg-transparent border-none cursor-pointer p-0 transition-all duration-200 hover:gap-2.5 group">
                            Learn more about Select benefits
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    <div className="relative overflow-hidden min-h-[220px] lg:min-h-[320px] bg-gradient-to-br from-[#e8dcc8] to-[#d4c4a8]">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            {[
                                { h: 200, bg: "#3a4a5a", spine: "#2a3a4a", z: 10 },
                                { h: 240, bg: "#4a3a2a", spine: "#3a2a1a", z: 20 },
                                { h: 190, bg: "#5a4a3a", spine: "#4a3a2a", z: 30 },
                                { h: 220, bg: "#2a4a4a", spine: "#1a3a3a", z: 40 },
                                { h: 210, bg: "#4a3a5a", spine: "#3a2a4a", z: 50 },
                            ].map((book, i) => (
                                <div
                                    key={i}
                                    className="w-[60px] rounded-r-lg rounded-l-md shadow-[3px_3px_12px_rgba(0,0,0,0.15)] relative transition-transform duration-200 hover:-translate-y-2 hover:-rotate-2"
                                    style={{
                                        height: book.h,
                                        background: `linear-gradient(90deg, ${book.spine} 0%, ${book.spine} 8px, ${book.bg} 8px)`,
                                        marginLeft: i === 0 ? 0 : -2,
                                        zIndex: book.z
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pro Tip */}
                <div className="bg-white rounded-[14px] border border-plum/[0.12] py-4 px-5 flex items-start gap-3.5 animate-[fadeUp_0.6s_0.25s_ease_both]">
                    <div className="w-8 h-8 rounded-lg bg-[#e8a830]/15 grid place-items-center text-[0.9rem] shrink-0 mt-[1px]">
                        <Lightbulb size={16} className="text-[#a07010]" />
                    </div>
                    <p className="text-[0.83rem] text-text leading-[1.6]">
                        <strong className="font-semibold text-ink">Pro Tip: </strong>
                        Publishing timelines vary depending on format and distribution settings. Most authors find that starting with a Digital Story allows for quicker feedback from our community before committing to a Premium Print edition.
                    </p>
                </div>

            </main >

            {/* Footer */}
            < footer className="bg-ink py-7 px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shrink-0" >
                <Link href="/" className="flex items-center gap-2.5 font-playfair text-[1rem] font-bold text-white/90 no-underline">
                    <Image src="/logo.png" alt="Story Hut" width={28} height={28} className="rounded-md bg-white object-contain" />
                    Story Hut
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
                    <Link href="#" className="font-sans text-[0.8rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Terms of Use</Link>
                    <Link href="#" className="font-sans text-[0.8rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Privacy Policy</Link>
                    <Link href="#" className="font-sans text-[0.8rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Contact</Link>
                    <Link href="#" className="font-sans text-[0.8rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Support Center</Link>
                </div>
                <span className="text-[0.78rem] text-white/30 text-center md:text-left">© 2024 Story Hut Publishing. All rights reserved.</span>
            </footer >
        </div >
    );
}
