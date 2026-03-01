"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Search, MessageSquare, Heart, MessageCircle, Filter, Plus } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const THREADS = [
    {
        id: 1,
        title: "How do you structure your first chapter to hook readers immediately?",
        author: "Sarah Jenkins",
        authorRole: "Master Author",
        time: "2 hours ago",
        status: "trending",
        replies: 24,
        likes: 89,
        category: "WRITING CRAFT"
    },
    {
        id: 2,
        title: "Best software for character relationship mapping?",
        author: "David Chen",
        authorRole: "Top Contributor",
        time: "5 hours ago",
        status: "active",
        replies: 12,
        likes: 34,
        category: "WRITING CRAFT"
    },
    {
        id: 3,
        title: "Overcoming writer's block when transitioning between acts",
        author: "Emma Watson",
        authorRole: "Rising Star",
        time: "Yesterday",
        status: "hot",
        replies: 45,
        likes: 120,
        category: "WRITING CRAFT"
    },
    {
        id: 4,
        title: "Show don't tell: When is it okay to just tell?",
        author: "Michael Brown",
        authorRole: "New Member",
        time: "2 days ago",
        status: "active",
        replies: 8,
        likes: 22,
        category: "WRITING CRAFT"
    },
];

export default function TopicListingPage() {
    const [activeNav] = useState("Community");

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

            <main className="flex-1 w-full max-w-[1100px] mx-auto p-5 md:p-10">

                {/* Header */}
                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/community" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Forum Home
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="text-[0.8rem] font-bold text-plum uppercase tracking-widest mb-1">Topic Listing</div>
                            <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-1.5 line-clamp-1">Writing Craft & Technique</h1>
                            <p className="text-muted text-[0.95rem]">Plotting, character development, world-building, and more.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3 px-6 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all">
                            <Plus size={18} />
                            Start New Discussion
                        </button>
                    </div>
                </div>

                {/* Sub-nav / Filters */}
                <div className="bg-white rounded-2xl border border-plum/[0.12] p-4 flex items-center justify-between flex-wrap gap-4 shadow-[0_4px_16px_rgba(92,45,143,0.03)] mb-8">
                    <div className="flex items-center gap-1.5 bg-[#faf8fd] p-1 rounded-xl">
                        {["Trending", "Latest", "Top", "Unanswered"].map((tab) => (
                            <button key={tab} className={`px-4 py-2 rounded-lg font-bold text-[0.82rem] border-none cursor-pointer transition-all ${tab === "Trending" ? "bg-white text-plum shadow-sm" : "bg-transparent text-muted hover:text-plum"}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                            <input className="bg-[#faf8fd] border border-plum/[0.1] rounded-xl py-2 pl-9 pr-4 text-[0.82rem] outline-none focus:border-plum" placeholder="Search in this topic..." />
                        </div>
                        <button className="p-2 px-3 flex items-center gap-1.5 rounded-xl border border-plum/[0.12] text-[0.82rem] font-bold text-muted hover:bg-[#faf8fd] transition-all">
                            <Filter size={14} />
                            Filter
                        </button>
                    </div>
                </div>

                {/* Discussions List */}
                <div className="flex flex-col gap-4">
                    {THREADS.map((thread) => (
                        <div key={thread.id} className="bg-white rounded-2xl border border-plum/[0.12] p-6 hover:shadow-[0_8px_32px_rgba(92,45,143,0.06)] transition-all cursor-pointer group animate-[fadeUp_0.4s_ease_both]">
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-plum/10 text-plum font-bold text-[0.7rem] grid place-items-center">
                                            {thread.author.charAt(0)}
                                        </div>
                                        <div className="text-[0.75rem]">
                                            <span className="font-bold text-ink">{thread.author}</span>
                                            <span className="text-muted ml-1.5">in {thread.category}</span>
                                            <span className="text-muted mx-1.5">·</span>
                                            <span className="text-muted">{thread.time}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-[1.1rem] font-bold text-ink group-hover:text-plum transition-colors mb-2.5 leading-[1.4] line-clamp-2">
                                        {thread.title}
                                    </h3>
                                    <div className="flex items-center gap-5">
                                        <div className="flex items-center gap-1.5 text-[0.82rem] text-muted">
                                            <MessageCircle size={16} strokeWidth={1.8} />
                                            {thread.replies} Replies
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[0.82rem] text-muted">
                                            <Heart size={16} strokeWidth={1.8} />
                                            {thread.likes} Likes
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end shrink-0 pt-1">
                                    <span className={`text-[0.6rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${thread.status === "trending" ? "bg-[#c4687a]/10 text-[#c4687a]" : thread.status === "hot" ? "bg-[#e8a830]/15 text-[#a07010]" : "bg-[#6bcb77]/10 text-[#3a9a48]"}`}>
                                        {thread.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button className="bg-white border border-plum/[0.15] text-plum font-bold py-3.5 px-10 rounded-xl hover:bg-[#faf8fd] transition-all shadow-sm">
                        Load More Discussions
                    </button>
                </div>
            </main>
        </div>
    );
}
