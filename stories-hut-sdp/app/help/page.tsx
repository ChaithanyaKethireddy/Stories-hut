"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Bell, Shield, BookOpen, PenSquare, Upload, HelpCircle, ArrowRight, Plus } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const TOPICS = [
    "Account & Payments",
    "Publishing & Formatting",
    "Marketing & Promotion",
    "Policies & Guidelines",
    "Getting Started",
];

const UPDATES = [
    {
        tag: "NOTICE",
        tagColor: "#fff0d5",
        tagText: "#a06010",
        title: "Important Notice regarding 2024 Royalty Structures",
        desc: "Updates to international payout methods are now live for all creators.",
    },
    {
        tag: "SECURITY",
        tagColor: "#fde8ec",
        tagText: "#b02040",
        title: "Security Update: Multi-Factor Authentication",
        desc: "Enhancing your story protection with new account verification layers.",
    },
];

const ONBOARDING = [
    { title: "What is Story Hut?", cta: "Learn Basics", icon: <BookOpen size={20} /> },
    { title: "Prepare Your Story", cta: "View Guide", icon: <PenSquare size={20} /> },
    { title: "Publish Your First Story", cta: "Start Now", icon: <Upload size={20} /> },
];

const POPULAR = [
    { label: "Managing Payments & Royalties" },
    { label: "Running Seasonal Promotions" },
    { label: "Formatting for Print Editions" },
    { label: "Account Privacy & Verification" },
];

export default function HelpPage() {
    const [activeTopic, setActiveTopic] = useState("Account & Payments");
    const [search, setSearch] = useState("");
    const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-text">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* ── TOP UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <div className="flex items-center gap-1 text-[0.78rem] text-muted cursor-pointer hover:text-plum transition-colors">
                    English
                    <ChevronDown size={10} strokeWidth={1.5} />
                </div>
                <Link href="/help" className="text-[0.78rem] text-plum font-bold no-underline transition-colors hover:text-plum">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline transition-colors hover:text-plum">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-40 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 sm:mr-10 shrink-0">
                    <img src="/logo.png" alt="Story Hut" className="w-[30px] h-[30px] rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>
                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar hidden md:flex h-full">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Marketing" ? "/marketing" : link === "Reports" ? "/reports" : link === "Story Hut Academy" ? "/academy" : "#"}
                            className={`px-4 h-full flex items-center justify-center font-sans text-[0.85rem] font-normal no-underline border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap text-muted border-transparent hover:text-plum`}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
                <Link href="/create" className="ml-auto bg-plum text-white border-none cursor-pointer font-sans text-[0.875rem] font-semibold px-4 md:px-[22px] py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 no-underline hover:bg-plum-light hover:-translate-y-[1px] shrink-0">
                    <Plus size={14} strokeWidth={2.5} />
                    <span className="hidden sm:inline">Create New Story</span>
                    <span className="sm:hidden">Create</span>
                </Link>
            </nav>

            {/* ── HERO ── */}
            <section className="bg-white px-5 py-12 sm:py-16 text-center border-b border-plum/[0.12] animate-[fadeUp_0.5s_ease_both]">
                <h1 className="font-playfair text-[clamp(1.7rem,3.5vw,2.4rem)] font-black text-ink mb-6">How can we help you today?</h1>
                <form className="flex max-w-[520px] mx-auto bg-white border-[1.5px] border-plum/[0.12] rounded-[40px] overflow-hidden shadow-[0_4px_20px_rgba(92,45,143,0.08)] transition-all focus-within:border-plum-light focus-within:shadow-[0_0_0_4px_rgba(123,76,184,0.1)]" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="flex-1 border-none outline-none py-3.5 px-6 font-sans text-[0.9rem] text-text bg-transparent placeholder:text-[#b9aec9]"
                        type="text"
                        placeholder="Search for articles, guides, and more..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="bg-plum text-white border-none py-2.5 px-6 font-sans text-[0.875rem] font-semibold rounded-[40px] m-1 cursor-pointer transition-all hover:bg-plum-light shrink-0">Search</button>
                </form>
            </section>

            {/* ── BODY ── */}
            <div className="flex-1 w-full max-w-[1060px] mx-auto py-10 px-5 md:px-12 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 animate-[fadeUp_0.5s_0.1s_ease_both] fill-mode-both">

                {/* Sidebar */}
                <aside className="bg-white rounded-2xl border border-plum/[0.12] py-5 shadow-[0_2px_12px_rgba(92,45,143,0.04)] h-fit sticky top-[80px]">
                    <div className="flex items-center gap-2 px-4.5 pb-3.5 text-[0.83rem] font-bold text-text border-b border-plum/[0.12] mb-2 px-5">
                        <div className="flex flex-col gap-0.5 shrink-0">
                            <div className="w-3.5 h-[2px] bg-plum-light rounded-full" />
                            <div className="w-3.5 h-[2px] bg-plum-light rounded-full" />
                            <div className="w-2.5 h-[2px] bg-plum-light rounded-full" />
                        </div>
                        Browse Topics
                    </div>
                    {TOPICS.map((t) => (
                        <button
                            key={t}
                            className={`w-full bg-none border-none text-left py-2.5 px-5 font-sans text-[0.84rem] cursor-pointer transition-all ${activeTopic === t ? "text-plum font-bold bg-plum/5 border-l-[3px] border-plum pl-[17px]" : "text-muted hover:text-plum hover:bg-plum/5"}`}
                            onClick={() => setActiveTopic(t)}
                        >
                            {t}
                        </button>
                    ))}
                </aside>

                {/* Content */}
                <div className="flex flex-col gap-6">

                    {/* Important Updates */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_2px_12px_rgba(92,45,143,0.04)]">
                        <h2 className="font-playfair text-[1.1rem] font-bold text-plum mb-4">Important Updates</h2>
                        <div className="flex flex-col gap-3">
                            {UPDATES.map((u) => (
                                <div key={u.title} className="border border-plum/[0.12] rounded-xl p-[16px_20px] border-l-[3px] border-plum flex items-start justify-between gap-4 transition-all hover:shadow-[0_4px_16px_rgba(92,45,143,0.08)] group cursor-pointer">
                                    <div>
                                        <span className="text-[0.67rem] font-bold tracking-wider py-0.5 px-2 rounded-full mb-1.5 inline-block" style={{ background: u.tagColor, color: u.tagText }}>{u.tag}</span>
                                        <div className="text-[0.875rem] font-bold text-ink mb-1 group-hover:text-plum transition-colors">{u.title}</div>
                                        <div className="text-[0.78rem] text-muted leading-relaxed">{u.desc}</div>
                                    </div>
                                    <Link href="#" className="text-[0.78rem] font-semibold text-plum no-underline whitespace-nowrap shrink-0 transition-opacity hover:opacity-75">Read More</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New Here */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_2px_12px_rgba(92,45,143,0.04)]">
                        <h2 className="text-[0.95rem] font-bold text-ink mb-4">New here?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                            {ONBOARDING.map((o) => (
                                <div key={o.title} className="bg-[#faf8fd] border-[1.5px] border-plum/[0.12] rounded-xl p-5 flex flex-col items-center text-center gap-2.5 cursor-pointer transition-all hover:border-plum/30 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(92,45,143,0.1)] group">
                                    <div className="w-11 h-11 rounded-xl bg-plum/5 text-plum grid place-items-center transition-colors group-hover:bg-plum group-hover:text-white">
                                        {o.icon}
                                    </div>
                                    <div className="text-[0.82rem] font-bold text-ink">{o.title}</div>
                                    <button className="w-full bg-plum text-white border-none rounded-lg py-2 px-4 shadow-[0_4px_12px_rgba(92,45,143,0.15)] font-sans text-[0.75rem] font-bold cursor-pointer transition-all hover:bg-plum-light group-hover:scale-[1.02]">
                                        {o.cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Help Topics */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_2px_12px_rgba(92,45,143,0.04)]">
                        <h2 className="font-playfair text-[1.1rem] font-bold text-plum mb-4">Popular Help Topics</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {POPULAR.map((p) => (
                                <Link key={p.label} href="#" className="flex items-center gap-3 bg-[#faf8fd] border border-plum/[0.12] rounded-xl p-3.5 transition-all hover:border-plum/25 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(92,45,143,0.08)] group no-underline">
                                    <div className="w-9 h-9 rounded-lg bg-plum/5 text-plum grid place-items-center shrink-0 transition-all group-hover:bg-plum group-hover:text-white">
                                        <HelpCircle size={18} />
                                    </div>
                                    <div className="text-[0.84rem] font-bold text-ink leading-tight">{p.label}</div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Feedback */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_2px_12px_rgba(92,45,143,0.04)] text-center">
                        <div className="text-[0.95rem] font-bold text-ink mb-4">Was this article helpful?</div>
                        {feedback ? (
                            <p className="text-[0.83rem] text-muted animate-[fadeUp_0.3s_ease_both]">
                                {feedback === "yes" ? "🎉 Thanks for the positive feedback!" : "😔 Sorry to hear that. We'll work on improving this."}
                            </p>
                        ) : (
                            <div className="flex justify-center gap-3">
                                <button className="bg-transparent border-[1.5px] border-plum/[0.12] rounded-full py-2 px-7 font-sans text-[0.875rem] font-medium text-text cursor-pointer transition-all hover:border-plum hover:text-plum" onClick={() => setFeedback("yes")}>Yes</button>
                                <button className="bg-transparent border-[1.5px] border-plum/[0.12] rounded-full py-2 px-7 font-sans text-[0.875rem] font-medium text-text cursor-pointer transition-all hover:border-plum hover:text-plum" onClick={() => setFeedback("no")}>No</button>
                            </div>
                        )}
                    </div>

                    {/* Contact Us */}
                    <div className="text-center py-9 px-5">
                        <h2 className="font-playfair text-[1.4rem] font-black text-ink mb-2">Contact Us</h2>
                        <p className="text-[0.875rem] text-muted mb-5">Have feedback? Can't find your answer in our Help pages?</p>
                        <button className="bg-plum text-white border-none rounded-xl py-3 px-8 font-sans text-[0.9rem] font-bold cursor-pointer transition-all shadow-[0_4px_16px_rgba(92,45,143,0.28)] hover:bg-plum-light hover:-translate-y-px">Contact Us</button>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="bg-ink p-10 sm:p-[40px_120px] border-t border-white/5 mt-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    <div className="flex flex-col md:items-start items-center">
                        <Link href="/" className="flex items-center gap-2.5 font-playfair text-[1rem] font-bold text-white/90 no-underline mb-1">
                            <img src="/logo.png" alt="Story Hut" className="w-7 h-7 rounded-md bg-white object-contain" />
                            Story Hut
                        </Link>
                        <p className="text-[0.78rem] text-white/35 leading-[1.6] max-w-[200px] text-center md:text-left pt-2">The premier destination for creators to publish, share, and grow.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Terms of Service</Link>
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Privacy Policy</Link>
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Contact</Link>
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Support Center</Link>
                    </div>
                    <div className="flex gap-2.5">
                        <Link href="#" className="w-[30px] h-[30px] rounded-lg bg-white/5 flex items-center justify-center text-[0.78rem] text-white/40 no-underline transition-all hover:bg-plum hover:text-white">𝕏</Link>
                        <Link href="#" className="w-[30px] h-[30px] rounded-lg bg-white/5 flex items-center justify-center text-[0.78rem] text-white/40 no-underline transition-all hover:bg-plum hover:text-white">📷</Link>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.75rem] text-white/20 text-center">
                    <span>Empowering the world's storytellers, one chapter at a time.</span>
                    <span>© 2024 Story Hut Inc. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
}
