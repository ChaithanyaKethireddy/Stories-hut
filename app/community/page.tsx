"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, MessageSquare, Megaphone, PenSquare, Coins, HelpCircle, Heart, MessageCircle } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const TOPICS = [
    {
        id: "marketing",
        icon: <Megaphone size={18} strokeWidth={1.7} />,
        title: "Marketing & Growth",
        desc: "Master the art of promoting your stories.",
    },
    {
        id: "publishing",
        icon: <PenSquare size={18} strokeWidth={1.7} />,
        title: "Publishing Help",
        desc: "Formatting, covers, and technical guides.",
    },
    {
        id: "craft",
        icon: <PenSquare size={18} strokeWidth={1.7} />,
        title: "Writing Craft",
        desc: "Plotting, character arcs, and dialogue.",
    },
    {
        id: "monetization",
        icon: <Coins size={18} strokeWidth={1.7} />,
        title: "Monetization",
        desc: "Earnings, royalties, and subscriptions.",
    },
    {
        id: "feedback",
        icon: <MessageSquare size={18} strokeWidth={1.7} />,
        title: "Community Feedback",
        desc: "Share ideas and get critique.",
    },
    {
        id: "support",
        icon: <HelpCircle size={18} strokeWidth={1.7} />,
        title: "Platform Support",
        desc: "Bugs, features, and site updates.",
    },
];

const ANNOUNCEMENTS = [
    { title: "Summer Writing Challenge 2024", time: "2 days ago" },
    { title: "Platform Update: Version 2.4.0", time: "5 days ago" },
    { title: "New: AI Storyboard Tools Released", time: "1 week ago" },
];

const CONTRIBUTORS = [
    { initials: "EV", name: "Elena Vance", role: "Master Author", karma: "4.2k", color: "#c4687a" },
    { initials: "MK", name: "Marcus K.", role: "Rising Star", karma: "3.8k", color: "#7b4cb8" },
    { initials: "AT", name: "Aria Thorne", role: "Top Commenter", karma: "2.9k", color: "#3a9a48" },
];

const CIRCLES = ["Getting Started", "Self-Publishing Tips", "Success Stories", "Technical Support"];

const RESOURCES = [
    { icon: "📄", label: "User Guide (PDF)" },
    { icon: "🎬", label: "Video Tutorials" },
    { icon: "🔗", label: "Contact Support" },
];

const DISCUSSIONS = [
    {
        id: 1,
        avatar: "SJ",
        avatarColor: "#5c2d8f",
        title: "How do you structure your first chapter to hook readers immediately?",
        author: "Sarah Jenkins",
        time: "2 hours ago",
        tag: "CRAFT",
        tagColor: "#e8dff5",
        tagText: "#5c2d8f",
        comments: 24,
        likes: 89,
    },
    {
        id: 2,
        avatar: "JM",
        avatarColor: "#c4687a",
        title: "Marketing update: Using TikTok Series for book promotions.",
        author: "James Miller",
        time: "5 hours ago",
        tag: "GROWTH",
        tagColor: "#d9f5e0",
        tagText: "#2a7a3a",
        comments: 58,
        likes: 112,
    },
    {
        id: 3,
        avatar: "SH",
        avatarColor: "#e8a830",
        title: "The December Community Challenge is now live!",
        author: "Story Hut Team",
        time: "Yesterday",
        tag: "EVENTS",
        tagColor: "#fff0d5",
        tagText: "#a06010",
        comments: 142,
        likes: 405,
    },
];

export default function CommunityPage() {
    const [activeNav, setActiveNav] = useState("Community");
    const [search, setSearch] = useState("");
    const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
    const [activeTopic, setActiveTopic] = useState<string | null>(null);

    const toggleLike = (id: number) =>
        setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-text relative">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* ── UTILITY ── */}
            <div className="bg-white border-b border-plum/[0.12] px-5 md:px-12 h-9 flex items-center justify-end gap-6 shrink-0 text-muted">
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <div className="flex items-center gap-1 text-[0.78rem] text-muted cursor-pointer hover:text-plum transition-colors">
                    English
                    <ChevronDown size={10} strokeWidth={1.5} />
                </div>
                <Link href="/help" className="hidden sm:inline text-[0.78rem] text-muted no-underline transition-colors hover:text-plum">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline transition-colors hover:text-plum">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-40 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 sm:mr-10 shrink-0">
                    <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>
                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar hidden md:flex h-full">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Marketing" ? "/marketing" : link === "Reports" ? "/reports" : link === "Story Hut Academy" ? "/academy" : "#"}
                            className={`px-4 h-full flex items-center justify-center font-sans text-[0.85rem] font-normal no-underline border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap ${activeNav === link
                                ? "text-plum font-semibold border-plum"
                                : "text-muted border-transparent hover:text-plum"
                                }`}
                            onClick={() => setActiveNav(link)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
                <Link href="/create" className="ml-auto bg-plum text-white border-none cursor-pointer font-sans text-[0.875rem] font-semibold px-4 md:px-[22px] py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 no-underline hover:bg-plum-light hover:-translate-y-[1px] shrink-0">
                    <PenSquare size={14} />
                    <span className="hidden sm:inline">Create New Story</span>
                    <span className="sm:hidden">Create</span>
                </Link>
            </nav>

            {/* ── HERO ── */}
            <section className="bg-white px-5 sm:px-20 grid grid-cols-1 md:grid-cols-2 items-center min-h-[320px] relative overflow-hidden shrink-0">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(184,201,176,0.2)_0%,transparent_60%)]" />
                <div className="py-12 animate-[fadeUp_0.6s_ease_both] z-10">
                    <h1 className="font-playfair text-[clamp(2.2rem,4vw,3rem)] font-black text-ink leading-[1.1] mb-4">
                        Story Hut
                        <span className="text-plum block">Community</span>
                    </h1>
                    <p className="text-[0.95rem] text-muted leading-[1.65] max-w-[360px] mb-7">
                        Connect. Learn. Grow together. Join thousands of creators building the future of storytelling.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <Link href="#discussions" className="bg-plum text-white border-none rounded-xl py-3 px-6 font-sans text-[0.875rem] font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.28)] no-underline hover:bg-plum-light hover:-translate-y-px">Explore Discussions</Link>
                        <Link href="#" className="bg-transparent border-[1.5px] border-plum/30 rounded-xl py-3 px-6 font-sans text-[0.875rem] font-medium text-plum transition-all duration-200 no-underline hover:border-plum hover:bg-[#ede5f8]">Visit Academy</Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-center py-8 animate-[fadeUp_0.6s_0.15s_ease_both] shrink-0">
                    <div className="w-[280px] h-[260px] rounded-[20px] bg-gradient-to-br from-[#e8dfc8] to-[#d4c9a0] flex items-center justify-center shadow-[0_20px_60px_rgba(92,45,143,0.12),0_4px_16px_rgba(0,0,0,0.08)] relative overflow-hidden text-[5rem]">
                        🌵
                        <div className="absolute w-[200px] h-[200px] rounded-full bg-white/15 -bottom-[60px] -right-[60px]" />
                    </div>
                </div>
            </section>

            {/* ── BODY GRID ── */}
            <div className="flex-1 w-full max-w-[1100px] mx-auto py-10 px-5 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">

                {/* Left */}
                <div className="flex flex-col gap-10">

                    {/* Browse by Topic */}
                    <div>
                        <h2 className="font-playfair text-[1.35rem] font-bold text-ink mb-4">Browse by Topic</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                            {TOPICS.map((t) => (
                                <div
                                    key={t.id}
                                    className={`bg-white rounded-xl border-2 transition-all duration-200 p-5 cursor-pointer relative overflow-hidden group hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(92,45,143,0.1)] ${activeTopic === t.id ? "border-plum-light bg-[#ede5f8]" : "border-plum/[0.08] hover:border-plum/20"}`}
                                    onClick={() => setActiveTopic(activeTopic === t.id ? null : t.id)}
                                >
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-plum to-plum-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                                    <div className={`w-9 h-9 rounded-lg grid place-items-center mb-3 transition-colors duration-200 ${activeTopic === t.id ? "bg-plum text-white" : "bg-plum/10 text-plum group-hover:bg-plum group-hover:text-white"}`}>
                                        {t.icon}
                                    </div>
                                    <div className="text-[0.875rem] font-bold text-ink mb-1">{t.title}</div>
                                    <p className="text-[0.75rem] text-muted leading-[1.5]">{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trending Discussions */}
                    <div id="discussions">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-playfair text-[1.35rem] font-bold text-ink m-0">Trending Discussions</h2>
                            <Link href="#" className="text-[0.82rem] font-medium text-plum no-underline transition-opacity hover:opacity-75">View All</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            {DISCUSSIONS.map((d) => (
                                <div key={d.id} className="bg-white rounded-xl border border-plum/[0.12] p-[18px_20px] flex items-start gap-3.5 cursor-pointer transition-all duration-150 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(92,45,143,0.08)]">
                                    <div className="w-10 h-10 rounded-full grid place-items-center text-[0.8rem] font-bold text-white shrink-0" style={{ background: d.avatarColor }}>
                                        {d.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[0.875rem] font-bold text-ink leading-[1.4] mb-1.5">{d.title}</div>
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            <span className="text-[0.75rem] text-muted">{d.author}</span>
                                            <span className="text-[0.72rem] text-muted">· {d.time}</span>
                                            <span className="text-[0.68rem] font-bold px-2 py-0.5 rounded-full tracking-wider" style={{ background: d.tagColor, color: d.tagText }}>
                                                {d.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3.5 shrink-0">
                                        <button className="flex items-center gap-1 text-[0.78rem] text-muted bg-transparent border-none p-0 transition-colors hover:text-plum cursor-pointer">
                                            <MessageCircle size={14} strokeWidth={1.8} />
                                            {d.comments}
                                        </button>
                                        <button
                                            className={`flex items-center gap-1 text-[0.78rem] bg-transparent border-none p-0 transition-colors cursor-pointer ${likedPosts[d.id] ? "text-[#c4687a]" : "text-muted hover:text-plum"}`}
                                            onClick={(e) => { e.stopPropagation(); toggleLike(d.id); }}
                                        >
                                            <Heart size={14} strokeWidth={1.8} fill={likedPosts[d.id] ? "currentColor" : "none"} />
                                            {d.likes + (likedPosts[d.id] ? 1 : 0)}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <aside className="flex flex-col gap-5">

                    {/* Search */}
                    <div className="relative">
                        <Search size={14} strokeWidth={2.2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                            className="w-full bg-white border-[1.5px] border-plum/[0.12] rounded-xl p-[10px_14px_10px_38px] font-sans text-[0.83rem] text-text outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)]"
                            type="text"
                            placeholder="Search discussions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Announcements */}
                    <div className="bg-white rounded-xl border border-plum/[0.12] p-[18px_20px] shadow-[0_2px_12px_rgba(92,45,143,0.04)]">
                        <div className="text-[0.875rem] font-bold text-ink mb-3.5 flex items-center gap-1.5">
                            📣 Announcements
                        </div>
                        <div className="flex flex-col gap-3">
                            {ANNOUNCEMENTS.map((a, i) => (
                                <div key={i}>
                                    <div className="text-[0.8rem] font-bold text-text mb-0.5">{a.title}</div>
                                    <div className="text-[0.72rem] text-muted">{a.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Contributors */}
                    <div className="bg-white rounded-xl border border-plum/[0.12] p-[18px_20px] shadow-[0_2px_12px_rgba(92,45,143,0.04)]">
                        <div className="text-[0.875rem] font-bold text-ink mb-3.5 flex items-center gap-1.5">
                            ⭐ Top Contributors
                        </div>
                        <div className="flex flex-col gap-3">
                            {CONTRIBUTORS.map((c) => (
                                <div key={c.name} className="flex items-center gap-2.5">
                                    <div className="w-[34px] h-[34px] rounded-full grid place-items-center text-[0.72rem] font-bold text-white shrink-0" style={{ background: c.color }}>
                                        {c.initials}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[0.8rem] font-bold text-ink truncate">{c.name}</div>
                                        <div className="text-[0.72rem] text-muted truncate">{c.role}</div>
                                    </div>
                                    <div className="text-[0.82rem] font-bold text-plum">{c.karma}</div>
                                </div>
                            ))}
                        </div>
                        <Link href="#" className="block text-center mt-3 text-[0.78rem] font-bold text-plum no-underline transition-opacity hover:opacity-75">See Full Rankings</Link>
                    </div>

                    {/* Popular Circles */}
                    <div className="bg-white rounded-xl border border-plum/[0.12] p-[18px_20px] shadow-[0_2px_12px_rgba(92,45,143,0.04)]">
                        <div className="text-[0.875rem] font-bold text-ink mb-3 flex items-center gap-1.5">
                            Popular Circles
                        </div>
                        <div className="flex flex-col gap-1.5">
                            {CIRCLES.map((c) => (
                                <Link key={c} href="#" className="text-[0.83rem] font-medium text-plum no-underline py-1 transition-opacity hover:opacity-75 border-b border-plum/[0.05] last:border-none">
                                    {c}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="bg-white rounded-xl border border-plum/[0.12] p-[18px_20px] shadow-[0_2px_12px_rgba(92,45,143,0.04)]">
                        <div className="text-[0.875rem] font-bold text-ink mb-3.5 flex items-center gap-1.5">
                            Resources
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {RESOURCES.map((r) => (
                                <Link key={r.label} href="#" className="flex items-center gap-2.5 text-[0.82rem] text-text no-underline transition-colors hover:text-plum">
                                    <span className="text-[0.9rem]">{r.icon}</span>
                                    {r.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Onboarding CTA */}
                    <div className="bg-ink rounded-xl p-[22px_20px] text-center">
                        <div className="text-[0.875rem] font-bold text-white mb-2">New to Story Hut?</div>
                        <p className="text-[0.77rem] text-white/50 leading-[1.55] mb-4">Learn how to make the most of our community features in our guide.</p>
                        <button className="w-full bg-[#e8a830] text-white border-none rounded-lg py-2.5 font-sans text-[0.82rem] font-bold cursor-pointer transition-all duration-200 shadow-[0_4px_12px_rgba(232,168,48,0.35)] hover:bg-[#d49820] hover:-translate-y-px">Start Onboarding</button>
                    </div>

                </aside>
            </div>

            {/* Footer */}
            <footer className="bg-ink p-10 sm:p-[40px_120px] border-t border-white/5 mt-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    <div className="flex flex-col md:items-start items-center">
                        <Link href="/" className="flex items-center gap-2.5 font-playfair text-[1rem] font-bold text-white/90 no-underline mb-1">
                            <Image src="/logo.png" alt="Story Hut" width={28} height={28} className="rounded-md bg-white object-contain" />
                            Story Hut
                        </Link>
                        <p className="text-[0.78rem] text-white/35 leading-[1.6] max-w-[180px] text-center md:text-left pt-2">The premier destination for creators to publish, share, and grow.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Terms of Use</Link>
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Privacy Policy</Link>
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Contact</Link>
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Support Center</Link>
                    </div>
                    <div className="flex gap-2.5">
                        <Link href="#" className="w-[30px] h-[30px] rounded-lg bg-white/5 flex items-center justify-center text-[0.78rem] text-white/40 no-underline transition-all hover:bg-plum hover:text-white">𝕏</Link>
                        <Link href="#" className="w-[30px] h-[30px] rounded-lg bg-white/5 flex items-center justify-center text-[0.78rem] text-white/40 no-underline transition-all hover:bg-plum hover:text-white">📷</Link>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-5 text-[0.75rem] text-white/20 text-center">© 2024 Story Hut Publishing. All rights reserved.</div>
            </footer>
        </div>
    );
}
