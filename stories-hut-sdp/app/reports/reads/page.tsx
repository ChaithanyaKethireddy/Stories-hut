"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Download, ChevronRight, BarChart2 } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const READ_REPORT = [
    { id: "SENP-29831", story: "Whispers of the Eternal Woods", marketplace: "StoryHut.com", pages: "12,450", date: "Feb 27, 2026", estimatedRoyalty: "$62.25" },
    { id: "SENP-29830", story: "Neon Horizons", marketplace: "StoryHut.uk", pages: "8,920", date: "Feb 27, 2026", estimatedRoyalty: "$44.60" },
    { id: "SENP-29829", story: "The Alchemist's Legacy", marketplace: "StoryHut.in", pages: "15,800", date: "Feb 26, 2026", estimatedRoyalty: "$79.00" },
    { id: "SENP-29828", story: "Whispers of the Eternal Woods", marketplace: "StoryHut.com", pages: "11,200", date: "Feb 26, 2026", estimatedRoyalty: "$56.00" },
    { id: "SENP-29827", story: "Neon Horizons", marketplace: "StoryHut.eu", pages: "7,500", date: "Feb 25, 2026", estimatedRoyalty: "$37.50" },
];

export default function SENPReadReport() {
    const [activeNav] = useState("Reports");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
            {/* ── UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.12] px-5 md:px-12 h-9 flex items-center justify-end gap-6 shrink-0">
                <Link href="#" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Your Account</Link>
                <Link href="/help" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Help Center</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 md:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
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

            <main className="flex-1 w-full max-w-[1240px] mx-auto p-5 md:p-10">

                {/* Header */}
                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/reports" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Reports Dashboard
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="font-playfair text-[1.9rem] font-black text-ink mb-1.5">SENP Read Report</h1>
                            <p className="text-muted text-[0.9rem]">Track your Story Hut Exclusive Network Pages read and estimated royalties from subscriptions.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3 px-6 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all">
                            <Download size={18} />
                            Download CSV
                        </button>
                    </div>
                </div>

                {/* Info Card */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_4px_16px_rgba(92,45,143,0.03)] mb-8 flex flex-col md:flex-row gap-8">
                    <div className="flex-1 flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-plum/5 text-plum grid place-items-center shrink-0">
                            <BookOpen size={28} />
                        </div>
                        <div>
                            <div className="text-[0.82rem] font-medium text-muted mb-0.5">Total Pages Read (Last 30 Days)</div>
                            <div className="text-[1.5rem] font-black text-ink">56,590 <span className="text-[0.85rem] font-bold text-[#3a9a48] ml-2">+4.2%</span></div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-[#6bcb77]/10 text-[#3a9a48] grid place-items-center shrink-0">
                            <BarChart2 size={28} />
                        </div>
                        <div>
                            <div className="text-[0.82rem] font-medium text-muted mb-0.5">Estimated Royalty from Reads</div>
                            <div className="text-[1.5rem] font-black text-ink">$282.95 <span className="text-[0.85rem] font-bold text-[#3a9a48] ml-2">+3.8%</span></div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] overflow-hidden shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#faf8fd] text-[0.72rem] font-bold text-muted uppercase tracking-wider">
                                    <th className="px-6 py-4">Story Title</th>
                                    <th className="px-6 py-4">Marketplace</th>
                                    <th className="px-6 py-4">Pages Read</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4 text-right">Estimated Royalty</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-plum/[0.05]">
                                {READ_REPORT.map((read) => (
                                    <tr key={read.id} className="hover:bg-[#faf8fd] transition-colors">
                                        <td className="px-6 py-4 font-bold text-ink text-[0.875rem]">{read.story}</td>
                                        <td className="px-6 py-4 text-[0.82rem] text-text">{read.marketplace}</td>
                                        <td className="px-6 py-4 text-[0.85rem] font-bold text-text">{read.pages}</td>
                                        <td className="px-6 py-4 text-[0.8rem] text-muted">{read.date}</td>
                                        <td className="px-6 py-4 text-right font-bold text-plum text-[0.95rem]">{read.estimatedRoyalty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 p-5 bg-[#faf8fd] rounded-xl border border-plum/[0.1] text-center">
                    <p className="text-[0.8rem] text-muted leading-relaxed max-w-[600px] mx-auto">
                        <strong className="text-ink">Note:</strong> Estimated royalties from SENP reads are calculated based on the monthly Global Fund and your share of total pages read across the network. These data are updated daily.
                    </p>
                </div>
            </main>
        </div>
    );
}
