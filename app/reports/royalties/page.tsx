"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calculator, Wallet, Calendar, BarChart2 } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const PAYMENTS = [
    { date: "May 28", amount: "$14,580.00", status: "Projected", marketplace: "StoryHut.com (Global)" },
    { date: "April 28", amount: "$12,450.00", status: "Coming Soon", marketplace: "StoryHut.com (Global)" },
    { date: "March 28", amount: "$9,820.00", status: "Processing", marketplace: "StoryHut.com (Global)" },
    { date: "Feb 28", amount: "$11,210.00", status: "Paid", marketplace: "StoryHut.com (Global)" },
];

export default function RoyaltiesEstimator() {
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
                        Back to Reports
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="font-playfair text-[1.95rem] font-black text-ink mb-1.5 line-clamp-1">Royalties Estimator & Payouts</h1>
                            <p className="text-muted text-[0.9rem]">Forecast your future earnings and track upcoming payments scheduled for your account.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3 px-6 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all">
                            <Calculator size={18} />
                            Recalculate Projections
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

                    {/* Est. Yearly Income */}
                    <div className="bg-white rounded-[20px] p-7 md:p-9 border border-plum/[0.12] shadow-[0_4px_24px_rgba(92,45,143,0.03)] flex flex-col justify-center animate-[fadeUp_0.5s_0.1s_ease_both]">
                        <div className="text-[0.82rem] font-bold text-plum tracking-wider uppercase mb-1">Est. Yearly Net Royalties</div>
                        <div className="font-playfair text-[2.8rem] font-black text-ink leading-tight mb-3">$168,450.00</div>
                        <div className="flex items-center gap-2 text-[#3a9a48] font-bold text-[0.85rem] bg-[#6bcb77]/10 w-fit px-2.5 py-1 rounded-full">
                            <BarChart2 size={14} />
                            Trending Up
                        </div>
                    </div>

                    {/* Next Payout */}
                    <div className="bg-white rounded-[20px] p-7 md:p-9 border border-plum/[0.12] shadow-[0_4px_24px_rgba(92,45,143,0.03)] flex flex-col justify-center animate-[fadeUp_0.5s_0.2s_ease_both]">
                        <div className="text-[0.82rem] font-bold text-[#a07010] tracking-wider uppercase mb-1">Next Scheduled Payout</div>
                        <div className="font-playfair text-[2.8rem] font-black text-ink leading-tight mb-3">$12,450.00</div>
                        <div className="flex items-center gap-2 text-[#a07010] font-bold text-[0.85rem] bg-[#e8a830]/15 w-fit px-2.5 py-1 rounded-full">
                            <Calendar size={14} />
                            April 28, 2026
                        </div>
                    </div>

                    {/* Pending Balance */}
                    <div className="bg-white rounded-[20px] p-7 md:p-9 border border-plum/[0.12] shadow-[0_4px_24px_rgba(92,45,143,0.03)] flex flex-col justify-center animate-[fadeUp_0.5s_0.3s_ease_both]">
                        <div className="text-[0.82rem] font-bold text-muted tracking-wider uppercase mb-1">Current Unpaid Payouts</div>
                        <div className="font-playfair text-[2.8rem] font-black text-ink leading-tight mb-3">$36,850.00</div>
                        <div className="flex items-center gap-2 text-muted font-bold text-[0.85rem] bg-plum/5 w-fit px-2.5 py-1 rounded-full">
                            <Wallet size={14} />
                            Across 3 Marketplaces
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Payment Schedule */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] overflow-hidden shadow-[0_4px_24px_rgba(92,45,143,0.03)]">
                        <div className="p-6 border-b border-plum/[0.12] flex items-center justify-between">
                            <h2 className="text-[1.1rem] font-bold text-ink">Scheduled Payouts</h2>
                            <Link href="#" className="font-bold text-plum text-[0.82rem] no-underline hover:underline">Full Payment History</Link>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col gap-4">
                                {PAYMENTS.map((payment) => (
                                    <div key={payment.date} className="flex items-center justify-between p-4 rounded-xl border border-plum/[0.05] hover:bg-[#faf8fd] transition-all">
                                        <div className="flex flex-col">
                                            <div className="text-[1rem] font-bold text-ink">{payment.amount}</div>
                                            <div className="text-[0.75rem] text-muted">{payment.marketplace}</div>
                                        </div>
                                        <div className="text-right flex flex-col items-end gap-1.5">
                                            <div className="text-[0.82rem] font-bold text-text">Expected: {payment.date}</div>
                                            <span className={`text-[0.65rem] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full ${payment.status === "Paid" ? "bg-[#6bcb77]/10 text-[#3a9a48]" : payment.status === "Processing" ? "bg-[#e8a830]/15 text-[#a07010]" : "bg-plum/5 text-plum"}`}>
                                                {payment.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* How it works info */}
                    <div className="bg-[#5c2d8f]/5 rounded-2xl border border-plum/[0.12] p-8 md:p-10">
                        <h2 className="text-[1.15rem] font-black text-plum mb-6">About Payouts & Estimations</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Estimation Window", desc: "Estimations are updated daily and reflect your net royalty share after marketplace fees, delivery costs, and applicable taxes." },
                                { title: "Payment Threshold", desc: "Payments are issued once your accrued royalties reach the minimum threshold ($10 USD or equivalent currency)." },
                                { title: "Payment Cycle", desc: "Royalties earned in any given calendar month are paid approximately 60 days after the end of that month." },
                                { title: "Currency Conversion", desc: "International sales are converted to your bank account's base currency using the exchange rate on the day of payment." },
                            ].map((item) => (
                                <div key={item.title}>
                                    <h4 className="text-[0.9rem] font-bold text-ink mb-1.5">{item.title}</h4>
                                    <p className="text-[0.82rem] text-muted leading-[1.6]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
