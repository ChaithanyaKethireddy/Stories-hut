"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TrendingUp, Download, BarChart3, PieChart } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const BY_FORMAT = [
    { label: "eBook", units: "1,240", royalty: "$8,680.00", percentage: 65, color: "#5c2d8f" },
    { label: "Paperback", units: "450", royalty: "$3,600.00", percentage: 25, color: "#7b4cb8" },
    { label: "Hardcover", units: "152", royalty: "$1,824.00", percentage: 10, color: "#b8d8d0" },
];

const BY_MARKETPLACE = [
    { label: "StoryHut.com", units: "980", royalty: "$6,860.00", percentage: 55 },
    { label: "StoryHut.in", units: "420", royalty: "$2,940.00", percentage: 22 },
    { label: "StoryHut.uk", units: "250", royalty: "$1,750.00", percentage: 13 },
    { label: "StoryHut.eu", units: "192", royalty: "$2,554.00", percentage: 10 },
];

export default function MonthToDateReport() {
    const [activeNav] = useState("Reports");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
            {/* ── UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.12] px-5 md:px-12 h-9 flex items-center justify-end gap-6 shrink-0">
                <Link href="#" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Your Account</Link>
                <Link href="/help" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 md:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 md:mr-10 shrink-0">
                    <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
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

            {/* ── CONTENT ── */}
            <main className="flex-1 w-full max-w-[1240px] mx-auto p-5 md:p-10">

                {/* Header */}
                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/reports" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Reports Dashboard
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="font-playfair text-[2rem] font-black text-ink mb-1.5">Month-to-Date (MTD) Sales</h1>
                            <p className="text-muted text-[0.95rem]">Tracking for the current calendar month across all channels.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-white border border-plum/[0.15] rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-bold text-text hover:bg-[#faf8fd] transition-all">
                            <Download size={18} />
                            Monthly CSV
                        </button>
                    </div>
                </div>

                {/* Big Number Summary */}
                <div className="bg-white rounded-[24px] border border-plum/[0.15] p-8 md:p-12 shadow-[0_8px_32px_rgba(92,45,143,0.04)] mb-8 text-center animate-[fadeUp_0.5s_ease_both]">
                    <div className="text-[0.95rem] font-bold text-plum/60 tracking-wider uppercase mb-3">Total MTD Net Royalties</div>
                    <div className="font-playfair text-[3.2rem] md:text-[4.5rem] font-black text-ink leading-tight mb-4">$14,104.00</div>
                    <div className="flex items-center justify-center gap-3 text-[#3a9a48] font-bold text-[1.1rem]">
                        <TrendingUp size={24} strokeWidth={2.5} />
                        +18.4% from last month
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Sales by Format */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-plum/5 text-plum grid place-items-center">
                                <BarChart3 size={20} />
                            </div>
                            <h2 className="text-[1.1rem] font-bold text-ink">Sales by Format</h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            {BY_FORMAT.map((f) => (
                                <div key={f.label}>
                                    <div className="flex items-center justify-between mb-2 text-[0.875rem] font-bold">
                                        <div className="text-ink">{f.label}</div>
                                        <div className="text-plum">{f.percentage}%</div>
                                    </div>
                                    <div className="w-full h-2.5 bg-[#faf8fd] rounded-full overflow-hidden border border-plum/[0.05]">
                                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${f.percentage}%`, background: f.color }} />
                                    </div>
                                    <div className="flex items-center justify-between mt-2.5 text-[0.78rem] text-muted">
                                        <div>{f.units} Units Sold</div>
                                        <div className="font-bold text-text">{f.royalty}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sales by Marketplace */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-plum/5 text-plum grid place-items-center">
                                <PieChart size={20} />
                            </div>
                            <h2 className="text-[1.1rem] font-bold text-ink">Marketplace Share</h2>
                        </div>
                        <div className="space-y-4">
                            {BY_MARKETPLACE.map((m) => (
                                <div key={m.label} className="flex items-center justify-between p-3.5 rounded-xl border border-plum/[0.05] hover:border-plum/20 transition-all">
                                    <div className="flex flex-col">
                                        <div className="text-[0.875rem] font-bold text-ink">{m.label}</div>
                                        <div className="text-[0.75rem] text-muted">{m.units} Units</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[0.9rem] font-bold text-plum">{m.royalty}</div>
                                        <div className="text-[0.72rem] font-bold text-[#3a9a48]">{m.percentage}% Share</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-ink rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-[1.2rem] font-bold text-white mb-2">Detailed Historical Analytics</h3>
                        <p className="text-[0.85rem] text-white/50 leading-relaxed max-w-[450px]">To see sales and royalty trends over a longer period, please visit our Primary Analytics portal.</p>
                    </div>
                    <button className="bg-plum text-white border-none rounded-xl py-3.5 px-8 font-sans text-[0.9rem] font-bold shadow-[0_4px_24px_rgba(92,45,143,0.5)] hover:bg-plum-light transition-all shrink-0">
                        Launch Analytics Dashboard
                    </button>
                </div>
            </main>
        </div>
    );
}
