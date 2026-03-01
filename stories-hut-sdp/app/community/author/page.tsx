"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, PenTool, Image, Plus, Search, MessageCircle, Heart, ChevronRight } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const THREADS = [
    {
        id: "A1",
        title: "Optimizing your author bio for high conversion rates.",
        author: "Sarah Jenkins",
        time: "10 hours ago",
        replies: 58,
        likes: 112,
        tag: "AUTHOR BIO",
        tagColor: "#e8dff5",
        tagText: "#5c2d8f"
    },
    {
        id: "A2",
        title: "Best profile picture dimensions for Story Hut author pages.",
        author: "Marcus Kales",
        time: "Yesterday",
        replies: 12,
        likes: 34,
        tag: "DESIGN",
        tagColor: "#d9f5e0",
        tagText: "#2a7a3a"
    },
    {
        id: "A3",
        title: "Linking your social media in the author dashboard correctly.",
        author: "Emma Thorne",
        time: "2 days ago",
        replies: 45,
        likes: 120,
        tag: "TECH SUPPORT",
        tagColor: "#fff0d5",
        tagText: "#a06010"
    },
];

export default function AuthorPageDiscussions() {
    const [activeNav] = useState("Community");

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

            <main className="flex-1 w-full max-w-[1100px] mx-auto p-5 mobile:p-10">

                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/community" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Community Home
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex items-start gap-5">
                            <div className="w-16 h-16 rounded-[20px] bg-plum/5 text-plum grid place-items-center shrink-0 border border-plum/[0.1]">
                                <Users size={32} />
                            </div>
                            <div>
                                <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-1.5">Author Page Discussions</h1>
                                <p className="text-muted text-[0.95rem]">Crafting your author presence, bios, profiles, and cross-platform identity.</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3.5 px-6 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all">
                            <Plus size={18} />
                            Start New Discussion
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">

                    <div className="flex flex-col gap-4">
                        {THREADS.map((thread) => (
                            <div key={thread.id} className="bg-white rounded-2xl border border-plum/[0.12] p-6 hover:shadow-[0_8px_32px_rgba(92,45,143,0.06)] transition-all cursor-pointer group">
                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[0.65rem] font-black uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: thread.tagColor, color: thread.tagText }}>
                                                {thread.tag}
                                            </span>
                                            <span className="text-[0.72rem] text-muted">· Posted by <span className="font-bold text-ink">{thread.author}</span> · {thread.time}</span>
                                        </div>
                                        <h3 className="text-[1.1rem] font-bold text-ink group-hover:text-plum transition-colors mb-4 line-clamp-2 leading-[1.4]">
                                            {thread.title}
                                        </h3>
                                        <div className="flex items-center gap-5 text-muted text-[0.82rem]">
                                            <div className="flex items-center gap-1.5">
                                                <MessageCircle size={16} strokeWidth={1.8} /> {thread.replies} Replies
                                            </div>
                                            <div className="flex items-center gap-1.5 font-bold">
                                                <Heart size={16} strokeWidth={1.8} /> {thread.likes} Likes
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity translate-y-1" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <aside className="flex flex-col gap-6">
                        <div className="bg-[#5c2d8f]/5 rounded-2xl p-7 border border-plum/10 text-center">
                            <h4 className="text-[1rem] font-black text-plum mb-3">Optimize Profile</h4>
                            <p className="text-[0.78rem] text-muted leading-[1.6] mb-5">Authors with complete profiles see 40% higher engagement on their stories.</p>
                            <Link href="/account" className="bg-plum text-white border-none rounded-xl py-2 px-5 font-sans text-[0.82rem] font-bold shadow-[0_4px_12px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all no-underline inline-block">Update Profile Now</Link>
                        </div>

                        <div className="bg-white rounded-2xl border border-plum/[0.1] p-6">
                            <h4 className="text-[0.9rem] font-bold text-ink mb-4">Quick Tips</h4>
                            <ul className="space-y-4 list-none m-0 p-0">
                                {[
                                    { icon: <PenTool size={16} />, text: "Use third-person for bios." },
                                    { icon: <Image size={16} />, text: "Professional headshots only." },
                                    { icon: <Users size={16} />, text: "Link to your social circle." },
                                ].map((tip, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[0.82rem] text-text">
                                        <div className="text-plum shrink-0">{tip.icon}</div>
                                        {tip.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
