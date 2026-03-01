"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Gift, Plus, Search, Filter, HelpCircle, ChevronRight, CheckCircle2, Star, Sparkles, MessageCircle } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const NOMINATIONS = [
    { id: "NM-821", name: "Cyberpunk Summer Deal", story: "Neon Horizons", type: "Marketplace Deal", market: "StoryHut.com (Global)", status: "In Review", submission: "Feb 20, 2026" },
    { id: "NM-820", name: "Spring Mystery Reveal", story: "Whispers of the Eternal Woods", type: "Prime Reading", market: "StoryHut.uk (United Kingdom)", status: "Eligible", submission: "N/A" },
    { id: "NM-819", name: "Alchemist Legacy Feature", story: "The Alchemist's Legacy", type: "Marketplace Deal", market: "StoryHut.in (India)", status: "Active", submission: "Jan 12, 2026" },
];

export default function DealsPage() {
    const [activeNav] = useState("Marketing");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
            <nav className="bg-white border-b border-plum/[0.12] px-5 mobile:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 md:mr-10 shrink-0">
                    <img src="/logo.png" alt="Story Hut" className="w-[30px] h-[30px] rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>
                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Reports" ? "/reports" : link === "Marketing" ? "/marketing" : "#"}
                            className={`px-4 h-[60px] flex items-center justify-center font-sans text-[0.85rem] no-underline border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap ${activeNav === link ? "text-plum font-bold border-plum" : "text-muted border-transparent hover:text-plum"}`}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>

            <main className="flex-1 w-full max-w-[1240px] mx-auto p-5 mobile:p-10 animate-[fadeUp_0.5s_ease_both]">

                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/marketing" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Marketing Hub
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex items-start gap-5">
                            <div className="w-16 h-16 rounded-[22px] bg-plum/5 text-plum grid place-items-center shrink-0 border border-plum/[0.1]">
                                <Sparkles size={32} />
                            </div>
                            <div>
                                <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-1.5 leading-tight">Deals & Prime Reading</h1>
                                <p className="text-muted text-[1rem]">Nominate your stories for platform-curated promotions, editorial features, and exclusive reading programs.</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3.5 px-7 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all shrink-0">
                            <Plus size={18} />
                            Nominate Story
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white rounded-3xl p-8 border border-plum/[0.12] shadow-sm flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-plum/5 text-plum grid place-items-center mb-5">
                            <Zap size={28} />
                        </div>
                        <h3 className="text-[1.25rem] font-black text-ink mb-3">Marketplace Deals</h3>
                        <p className="text-[0.85rem] text-muted leading-[1.6] mb-6 max-w-[400px]">Limited-time featured discounts ranging from 1 day to 1 month. Selected stories are featured on regional homepages.</p>
                        <button className="bg-transparent border-[1.5px] border-plum text-plum font-bold px-6 py-2.5 rounded-xl hover:bg-[#ede5f8] transition-all text-[0.85rem]">Learn About Eligibility</button>
                    </div>
                    <div className="bg-white rounded-3xl p-8 border border-plum/[0.12] shadow-sm flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-[#6bcb77]/10 text-[#3a9a48] grid place-items-center mb-5">
                            <Gift size={28} />
                        </div>
                        <h3 className="text-[1.25rem] font-black text-ink mb-3">Prime Reading</h3>
                        <p className="text-[0.85rem] text-muted leading-[1.6] mb-6 max-w-[400px]">Get your story in front of millions of Story Hut Prime members. A curated catalog of stories available at no extra cost to subscribers.</p>
                        <button className="bg-transparent border-[1.5px] border-[#3a9a48] text-[#3a9a48] font-bold px-6 py-2.5 rounded-xl hover:bg-[#d9f5e0] transition-all text-[0.85rem]">Nomination Guidelines</button>
                    </div>
                </div>

                {/* Nomination Table */}
                <div className="bg-white rounded-3xl border border-plum/[0.12] overflow-hidden shadow-[0_8px_32px_rgba(92,45,143,0.03)] pb-4">
                    <div className="p-7 border-b border-plum/[0.12] flex items-center justify-between">
                        <h2 className="text-[1.15rem] font-bold text-ink m-0">Active Nominations</h2>
                        <span className="text-[0.8rem] text-muted font-bold">Total: {NOMINATIONS.length}</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="bg-[#faf8fd] text-[0.7rem] font-black text-muted uppercase tracking-[0.1em] border-b border-plum/[0.12]">
                                    <th className="px-7 py-4">Nomination Name & Story</th>
                                    <th className="px-7 py-4">Program</th>
                                    <th className="px-7 py-4">Marketplace</th>
                                    <th className="px-7 py-4">Status</th>
                                    <th className="px-7 py-4">Date Submitted</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-plum/[0.05]">
                                {NOMINATIONS.map((n) => (
                                    <tr key={n.id} className="hover:bg-[#faf8fd] transition-colors group">
                                        <td className="px-7 py-6">
                                            <div className="text-[0.95rem] font-bold text-ink mb-1 group-hover:text-plum transition-colors">{n.name}</div>
                                            <div className="text-[0.8rem] text-muted">{n.story}</div>
                                        </td>
                                        <td className="px-7 py-6 text-[0.85rem] text-text font-bold">{n.type}</td>
                                        <td className="px-7 py-6 text-[0.82rem] text-muted">{n.market}</td>
                                        <td className="px-7 py-6">
                                            <span className={`text-[0.68rem] font-black uppercase tracking-widest px-3 py-1 rounded-full ${n.status === "Active" ? "bg-[#3a9a48]/10 text-[#3a9a48]" : n.status === "In Review" ? "bg-[#e8a830]/15 text-[#a07010]" : "bg-plum/5 text-muted"}`}>
                                                {n.status}
                                            </span>
                                        </td>
                                        <td className="px-7 py-6 text-[0.8rem] text-muted font-bold">{n.submission}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 bg-ink rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-center md:text-left">
                        <h3 className="text-[1.4rem] md:text-[1.8rem] font-black text-white mb-3">Maximize Your Promotional Reach</h3>
                        <p className="text-[0.9rem] text-white/50 leading-relaxed max-w-[500px]">Our editorial team reviews nominations based on story quality, reader ratings, and market trends. Nominate early to be considered for major upcoming seasonal events.</p>
                    </div>
                    <button className="bg-[#e8a830] text-white border-none rounded-xl py-4 px-10 font-sans text-[0.95rem] font-black shadow-[0_8px_32px_rgba(232,168,48,0.4)] hover:bg-[#d49820] hover:-translate-y-px transition-all shrink-0">
                        View Editorial Calendar
                    </button>
                </div>
            </main>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />
        </div>
    );
}
