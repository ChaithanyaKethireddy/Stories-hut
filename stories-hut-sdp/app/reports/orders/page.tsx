"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Download, Filter, Search } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const ORDERS = [
    { id: "ORD-88219", story: "Whispers of the Eternal Woods", type: "eBook", marketplace: "StoryHut.com", date: "Feb 27, 2026", price: "$14.99", royalty: "$10.49", status: "Completed" },
    { id: "ORD-88218", story: "Neon Horizons", type: "Paperback", marketplace: "StoryHut.uk", date: "Feb 27, 2026", price: "$19.99", royalty: "$11.20", status: "Completed" },
    { id: "ORD-88217", story: "The Alchemist's Legacy", type: "Hardcover", marketplace: "StoryHut.in", date: "Feb 26, 2026", price: "$29.99", royalty: "$18.50", status: "Completed" },
    { id: "ORD-88216", story: "Whispers of the Eternal Woods", type: "eBook", marketplace: "StoryHut.eu", date: "Feb 26, 2026", price: "$14.99", royalty: "$10.49", status: "Completed" },
    { id: "ORD-88215", story: "Neon Horizons", type: "eBook", marketplace: "StoryHut.com", date: "Feb 25, 2026", price: "$9.99", royalty: "$6.99", status: "Completed" },
    { id: "ORD-88214", story: "Whispers of the Eternal Woods", type: "Paperback", marketplace: "StoryHut.com", date: "Feb 25, 2026", price: "$19.99", royalty: "$11.20", status: "Processing" },
];

export default function OrdersReport() {
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
                            <h1 className="font-playfair text-[1.9rem] font-black text-ink mb-1.5">Orders Report</h1>
                            <p className="text-muted text-[0.9rem]">A comprehensive list of all customer orders for your stories.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3 px-6 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all">
                            <Download size={18} />
                            Download Report
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] p-4 flex items-center justify-between flex-wrap gap-4 shadow-[0_4px_16px_rgba(92,45,143,0.03)] mb-6">
                    <div className="flex items-center gap-3">
                        <div className="relative w-full md:w-[280px]">
                            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                                className="w-full bg-[#faf8fd] border border-plum/[0.12] rounded-xl py-2.5 pl-10 pr-4 font-sans text-[0.85rem] outline-none focus:border-plum transition-all"
                                type="text"
                                placeholder="Search by Order ID or Story Title"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-plum/[0.12] text-[0.85rem] font-semibold text-text hover:bg-[#faf8fd] transition-all">
                            <Filter size={16} />
                            Filter
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-[0.82rem] text-muted">
                        Showing 1–6 of 152 orders
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] overflow-hidden shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#faf8fd] text-[0.72rem] font-bold text-muted uppercase tracking-wider">
                                    <th className="px-6 py-4">Order ID & Date</th>
                                    <th className="px-6 py-4">Story Details</th>
                                    <th className="px-6 py-4">Marketplace</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Royalty</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-plum/[0.05]">
                                {ORDERS.map((order) => (
                                    <tr key={order.id} className="hover:bg-[#faf8fd] transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="text-[0.875rem] font-bold text-ink mb-0.5">{order.id}</div>
                                            <div className="text-[0.75rem] text-muted">{order.date}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-[0.875rem] font-bold text-ink mb-0.5">{order.story}</div>
                                            <div className="text-[0.75rem] text-muted">{order.type} • Marketplace Price: {order.price}</div>
                                        </td>
                                        <td className="px-6 py-4 text-[0.82rem] text-text">{order.marketplace}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-full ${order.status === "Completed" ? "bg-[#6bcb77]/10 text-[#3a9a48]" : "bg-[#e8a830]/10 text-[#a07010]"}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-plum text-[1rem]">{order.royalty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
