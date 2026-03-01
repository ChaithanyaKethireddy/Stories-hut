"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, DollarSign, Download, Search, ChevronRight, FileText } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const PRIOR_ROYALTIES = [
    { period: "January 2026", paymentDate: "March 28, 2026", amount: "$9,820.50", status: "Processing", id: "PAY-2026-01-SH" },
    { period: "December 2025", paymentDate: "Feb 28, 2026", amount: "$11,210.30", status: "Paid", id: "PAY-2025-12-SH" },
    { period: "November 2025", paymentDate: "Jan 28, 2026", amount: "$10,450.00", status: "Paid", id: "PAY-2025-11-SH" },
    { period: "October 2025", paymentDate: "Dec 28, 2025", amount: "$8,920.80", status: "Paid", id: "PAY-2025-10-SH" },
    { period: "September 2025", paymentDate: "Nov 28, 2025", amount: "$7,500.45", status: "Paid", id: "PAY-2025-09-SH" },
    { period: "August 2025", paymentDate: "Oct 28, 2025", amount: "$6,850.20", status: "Paid", id: "PAY-2025-08-SH" },
];

export default function PriorRoyaltiesReport() {
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

            <main className="flex-1 w-full max-w-[1240px] mx-auto p-5 md:p-10">

                {/* Header */}
                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/reports" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Reports
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="font-playfair text-[1.95rem] font-black text-ink mb-1.5">Historical Prior Royalties</h1>
                            <p className="text-muted text-[0.95rem]">A complete history of all your completed and processing royalty payments.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-white border border-plum/[0.15] rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-bold text-text hover:bg-[#faf8fd] transition-all">
                            <Download size={18} />
                            Full Payout CSV
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] p-4 flex items-center justify-between flex-wrap gap-4 shadow-[0_4px_16px_rgba(92,45,143,0.03)] mb-6">
                    <div className="flex items-center gap-3 flex-1 flex-wrap">
                        <div className="relative w-full md:w-[280px]">
                            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                                className="w-full bg-[#faf8fd] border border-plum/[0.12] rounded-xl py-2.5 pl-10 pr-4 font-sans text-[0.85rem] outline-none focus:border-plum transition-all"
                                type="text"
                                placeholder="Search by Royalty ID"
                            />
                        </div>
                        <div className="relative">
                            <select className="appearance-none bg-white border border-plum/[0.12] rounded-xl py-2.5 pl-4 pr-10 font-sans text-[0.85rem] font-bold text-text cursor-pointer outline-none hover:border-plum transition-all">
                                <option>All Statuses</option>
                                <option>Paid</option>
                                <option>Processing</option>
                                <option>Failed</option>
                            </select>
                            <ChevronRight size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none rotate-90" />
                        </div>
                        <div className="relative">
                            <select className="appearance-none bg-white border border-plum/[0.12] rounded-xl py-2.5 pl-4 pr-10 font-sans text-[0.85rem] font-bold text-text cursor-pointer outline-none hover:border-plum transition-all">
                                <option>Last 12 Months</option>
                                <option>2025 Full Year</option>
                                <option>2024 Full Year</option>
                                <option>Custom Range</option>
                            </select>
                            <ChevronRight size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none rotate-90" />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] overflow-hidden shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#faf8fd] text-[0.72rem] font-bold text-muted uppercase tracking-wider">
                                    <th className="px-6 py-4">Accrual Period</th>
                                    <th className="px-6 py-4">Royalty ID</th>
                                    <th className="px-6 py-4">Payment Date</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4 text-center">Receipt</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-plum/[0.05]">
                                {PRIOR_ROYALTIES.map((p) => (
                                    <tr key={p.id} className="hover:bg-[#faf8fd] transition-colors">
                                        <td className="px-6 py-4 font-bold text-ink text-[0.875rem]">{p.period}</td>
                                        <td className="px-6 py-4 text-[0.8rem] text-muted">{p.id}</td>
                                        <td className="px-6 py-4 text-[0.82rem] text-text">{p.paymentDate}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[0.68rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${p.status === "Paid" ? "bg-[#6bcb77]/10 text-[#3a9a48]" : "bg-[#e8a830]/15 text-[#a07010]"}`}>
                                                {p.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-black text-ink text-[1rem]">{p.amount}</td>
                                        <td className="px-6 py-4 text-center">
                                            <button className="p-2.5 rounded-lg border border-plum/[0.1] hover:bg-[#ede5f8] hover:border-plum text-plum transition-all" title="Download Receipt">
                                                <FileText size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-2xl border border-plum/[0.1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#fdfcff] border border-plum/10 grid place-items-center text-plum">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <div className="text-[0.85rem] font-bold text-ink">Need a customized fiscal report?</div>
                            <div className="text-[0.78rem] text-muted">Generate a summary for custom date ranges and marketplaces.</div>
                        </div>
                    </div>
                    <button className="bg-transparent border border-plum text-plum font-bold py-2.5 px-6 rounded-xl hover:bg-[#f5f0fc] transition-all text-[0.85rem]">
                        Custom Fiscal Report
                    </button>
                </div>
            </main>
        </div>
    );
}
