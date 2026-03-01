"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, BarChart3, TrendingUp, DollarSign, BookOpen, Clock, ArrowUpRight, ArrowDownRight, Printer, Download, ChevronRight } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const STATS = [
    { label: "Net Royalties", value: "$4,285.50", change: "+12.5%", positive: true, icon: <DollarSign size={20} /> },
    { label: "Total Units Sold", value: "1,842", change: "+8.2%", positive: true, icon: <TrendingUp size={20} /> },
    { label: "SENP Pages Read", value: "45,200", change: "-2.1%", positive: false, icon: <BookOpen size={20} /> },
    { label: "Avg. Daily Sales", value: "$142.85", change: "+5.4%", positive: true, icon: <Clock size={20} /> },
];

const RECENT_ORDERS = [
    { id: "ORD-88219", story: "Whispers of the Eternal Woods", type: "eBook", marketplace: "StoryHut.com", date: "Today, 2:15 PM", price: "$14.99", royalty: "$10.49" },
    { id: "ORD-88218", story: "Neon Horizons", type: "Paperback", marketplace: "StoryHut.uk", date: "Today, 11:40 AM", price: "$19.99", royalty: "$11.20" },
    { id: "ORD-88217", story: "The Alchemist's Legacy", type: "Hardcover", marketplace: "StoryHut.in", date: "Yesterday", price: "$29.99", royalty: "$18.50" },
    { id: "ORD-88216", story: "Whispers of the Eternal Woods", type: "eBook", marketplace: "StoryHut.eu", date: "Yesterday", price: "$14.99", royalty: "$10.49" },
];

export default function ReportsDashboard() {
    const [activeNav] = useState("Reports");
    const [timeframe, setTimeframe] = useState("Last 30 Days");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* ── UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <div className="flex items-center gap-1 text-[0.78rem] text-muted cursor-pointer hover:text-plum transition-colors">
                    English
                    <ChevronDown size={10} strokeWidth={1.5} />
                </div>
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
            </nav>

            {/* ── CONTENT ── */}
            <main className="flex-1 w-full max-w-[1240px] mx-auto p-5 md:p-10 animate-[fadeUp_0.5s_ease_both]">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-2">Reports Dashboard</h1>
                        <p className="text-muted text-[0.95rem]">Track your sales, royalties, and reader engagement across all marketplaces.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select
                                className="appearance-none bg-white border border-plum/[0.15] rounded-xl py-2.5 pl-4 pr-10 font-sans text-[0.85rem] font-bold text-text cursor-pointer outline-none focus:border-plum transition-all"
                                value={timeframe}
                                onChange={(e) => setTimeframe(e.target.value)}
                            >
                                <option>Today</option>
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>Last 90 Days</option>
                                <option>This Year</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                        </div>
                        <button className="flex items-center gap-2 bg-white border border-plum/[0.15] rounded-xl py-2.5 px-4 font-sans text-[0.85rem] font-bold text-text hover:bg-[#faf8fd] transition-all">
                            <Download size={16} />
                            Export
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="bg-white rounded-2xl p-6 border border-plum/[0.12] shadow-[0_4px_16px_rgba(92,45,143,0.03)] hover:shadow-[0_8px_24px_rgba(92,45,143,0.06)] transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-plum/5 text-plum grid place-items-center">
                                    {stat.icon}
                                </div>
                                <div className={`flex items-center gap-1 text-[0.75rem] font-bold ${stat.positive ? "text-[#3a9a48]" : "text-[#c4687a]"}`}>
                                    {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                    {stat.change}
                                </div>
                            </div>
                            <div className="text-[0.82rem] font-medium text-muted mb-1">{stat.label}</div>
                            <div className="font-playfair text-[1.6rem] font-black text-ink">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

                    {/* Left Panel: Recent Orders */}
                    <div className="bg-white rounded-2xl border border-plum/[0.12] overflow-hidden shadow-[0_4px_16px_rgba(92,45,143,0.03)] flex flex-col">
                        <div className="p-6 border-b border-plum/[0.12] flex items-center justify-between">
                            <h2 className="text-[1.1rem] font-bold text-ink">Recent Orders</h2>
                            <Link href="/reports/orders" className="text-[0.82rem] font-bold text-plum no-underline hover:underline">View All Orders</Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#faf8fd] text-[0.72rem] font-bold text-muted uppercase tracking-wider">
                                        <th className="px-6 py-4">Story Title</th>
                                        <th className="px-6 py-4">Marketplace</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Royalty</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-plum/[0.05]">
                                    {RECENT_ORDERS.map((order) => (
                                        <tr key={order.id} className="hover:bg-[#faf8fd] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="text-[0.875rem] font-bold text-ink mb-0.5">{order.story}</div>
                                                <div className="text-[0.75rem] text-muted">{order.type} • {order.date}</div>
                                            </td>
                                            <td className="px-6 py-4 text-[0.82rem] text-text">{order.marketplace}</td>
                                            <td className="px-6 py-4">
                                                <span className="text-[0.7rem] font-bold bg-[#6bcb77]/10 text-[#3a9a48] px-2.5 py-1 rounded-full">Completed</span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-bold text-plum text-[0.9rem]">{order.royalty}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-5 mt-auto border-t border-plum/[0.05] text-center">
                            <Link href="/reports/orders" className="text-[0.82rem] font-bold text-plum no-underline hover:underline">Download Detailed CSV Report</Link>
                        </div>
                    </div>

                    {/* Right Panel: Quick Navigation */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                            <h2 className="text-[1rem] font-bold text-ink mb-5">Quick Links</h2>
                            <div className="flex flex-col gap-3">
                                {[
                                    { label: "Orders Report", path: "/reports/orders" },
                                    { label: "SENP Read Report", path: "/reports/reads" },
                                    { label: "Month-to-Date Sales", path: "/reports/mtd" },
                                    { label: "Royalties Estimator", path: "/reports/royalties" },
                                    { label: "Prior Royalties", path: "/reports/prior" },
                                ].map((link) => (
                                    <Link key={link.path} href={link.path} className="flex items-center justify-between p-3.5 rounded-xl border border-plum/[0.1] hover:border-plum hover:bg-[#faf8fd] transition-all group no-underline">
                                        <span className="text-[0.85rem] font-bold text-text group-hover:text-plum">{link.label}</span>
                                        <ChevronRight size={16} className="text-muted group-hover:text-plum group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Summary Widget */}
                        <div className="bg-plum/5 rounded-2xl border border-plum/[0.15] p-6">
                            <h3 className="text-[0.9rem] font-bold text-plum mb-3">Royalties Summary</h3>
                            <p className="text-[0.78rem] text-muted leading-[1.6] mb-5">Estimated royalties are based on marketplace sales minus delivery costs and applicable taxes. Payouts are made 60 days after the end of the month.</p>
                            <div className="space-y-3">
                                <div className="flex justify-between text-[0.85rem]">
                                    <span className="text-muted">Total Available:</span>
                                    <span className="font-bold text-ink">$1,250.00</span>
                                </div>
                                <div className="flex justify-between text-[0.85rem]">
                                    <span className="text-muted">Next Payout:</span>
                                    <span className="font-bold text-ink">April 28</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

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
                </div>
            </footer>
        </div>
    );
}
