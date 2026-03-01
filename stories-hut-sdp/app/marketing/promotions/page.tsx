"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Tag, Calendar, Plus, Search, Filter, HelpCircle, ChevronRight, TrendingUp, Clock, Info, CheckCircle2 } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const CAMPAIGNS = [
    { id: "PR-121", name: "Spring Flash Sale", story: "Whispers of the Eternal Woods", type: "Discount Deal", start: "March 15, 2026", end: "March 20, 2026", status: "Upcoming", discount: "50% Off" },
    { id: "PR-120", name: "Free Weekend Giveaway", story: "Neon Horizons", type: "Free Book Promotion", start: "March 1, 2026", end: "March 3, 2026", status: "Active", discount: "100% Off" },
    { id: "PR-119", name: "New Release Promo", story: "The Alchemist's Legacy", type: "Discount Deal", start: "Feb 10, 2026", end: "Feb 15, 2026", status: "Completed", discount: "30% Off" },
];

export default function PricePromotionsPage() {
    const [activeNav] = useState("Marketing");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
            <nav className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
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

            <main className="flex-1 w-full max-w-[1240px] mx-auto p-5 sm:p-10">

                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/marketing" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Marketing Hub
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex items-start gap-5">
                            <div className="w-16 h-16 rounded-[22px] bg-plum/5 text-plum grid place-items-center shrink-0 border border-plum/[0.1]">
                                <Tag size={32} />
                            </div>
                            <div>
                                <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-1.5 leading-tight">Price Promotions</h1>
                                <p className="text-muted text-[1rem]">Boost your story's visibility and reach new readers by scheduling limited-time discounts or free deals.</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3.5 px-7 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all shrink-0">
                            <Plus size={18} />
                            Create New Promotion
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-2xl p-6 border border-plum/[0.12] shadow-sm flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-plum/5 text-plum grid place-items-center shrink-0">
                            <Clock size={24} />
                        </div>
                        <div>
                            <div className="text-[0.8rem] text-muted font-bold tracking-wider uppercase mb-0.5">Upcoming Deals</div>
                            <div className="text-[1.3rem] font-black text-ink">4 Campaigns</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-plum/[0.12] shadow-sm flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#6bcb77]/10 text-[#3a9a48] grid place-items-center shrink-0">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <div className="text-[0.8rem] text-muted font-bold tracking-wider uppercase mb-0.5">Conversion Boost (Avg.)</div>
                            <div className="text-[1.3rem] font-black text-ink">+320.5% Weekly</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-plum/[0.12] shadow-sm flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#e8a830]/15 text-[#a07010] grid place-items-center shrink-0">
                            <Plus size={24} />
                        </div>
                        <div>
                            <div className="text-[0.8rem] text-muted font-bold tracking-wider uppercase mb-0.5">Total New Readers (Feb)</div>
                            <div className="text-[1.3rem] font-black text-ink">12,450 Users</div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] overflow-hidden shadow-[0_4px_16px_rgba(92,45,143,0.03)] mb-10">
                    <div className="p-6 border-b border-plum/[0.12] flex items-center justify-between">
                        <h2 className="text-[1.1rem] font-bold text-ink m-0">Ongoing & Recent Promotions</h2>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-lg text-muted hover:bg-plum/5 hover:text-plum transition-all border border-plum/[0.08] bg-transparent cursor-pointer">
                                <Search size={18} />
                            </button>
                            <button className="p-2 rounded-lg text-muted hover:bg-plum/5 hover:text-plum transition-all border border-plum/[0.08] bg-transparent cursor-pointer">
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="bg-[#faf8fd] text-[0.7rem] font-black text-muted uppercase tracking-[0.1em] border-b border-plum/[0.12]">
                                    <th className="px-6 py-4">Campaign & Story</th>
                                    <th className="px-6 py-4">Promo Type</th>
                                    <th className="px-6 py-4">Date Range</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-center">Benefit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-plum/[0.05]">
                                {CAMPAIGNS.map((c) => (
                                    <tr key={c.id} className="hover:bg-[#faf8fd] transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="text-[0.9rem] font-bold text-ink mb-1 group-hover:text-plum transition-colors">{c.name}</div>
                                            <div className="text-[0.78rem] text-muted">{c.story}</div>
                                        </td>
                                        <td className="px-6 py-5 text-[0.82rem] text-text font-medium">{c.type}</td>
                                        <td className="px-6 py-5 text-[0.8rem] text-muted">{c.start} – {c.end}</td>
                                        <td className="px-6 py-5">
                                            <span className={`text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${c.status === "Active" ? "bg-[#3a9a48]/10 text-[#3a9a48]" : c.status === "Upcoming" ? "bg-[#e8a830]/15 text-[#a07010]" : "bg-plum/5 text-plum"}`}>
                                                {c.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-center font-bold text-plum text-[0.9rem]">{c.discount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-[#5c2d8f]/5 rounded-2xl border border-plum/15 p-8 md:p-12 text-center max-w-[800px] mx-auto">
                    <h3 className="text-[1.4rem] font-black text-plum mb-4">Strategic Tip: Timing Your Deals</h3>
                    <p className="text-[0.9rem] text-muted leading-[1.7] mb-8">
                        Price promotions are most effective during high-traffic periods like holidays or when you release a new story in a series. Scheduling deals in multiple marketplaces simultaneously helps build a global reader base.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { title: "Increase Rank", desc: "Climb category charts." },
                            { title: "New Reviews", desc: "Gain reader social proof." },
                            { title: "Boost Reads", desc: "Maximize SENP pages." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-plum/5 text-plum grid place-items-center mb-3">
                                    <CheckCircle2 size={18} />
                                </div>
                                <div className="text-[0.82rem] font-bold text-ink mb-1">{item.title}</div>
                                <div className="text-[0.72rem] text-muted">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
