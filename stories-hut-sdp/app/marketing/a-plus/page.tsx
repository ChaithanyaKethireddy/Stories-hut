"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Image as ImageIcon, Layout, Plus, ChevronRight, HelpCircle, Eye, Trash2, Edit3, CheckCircle2 } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const MODULES = [
    {
        id: "standard",
        title: "Standard Image & Text",
        desc: "A classic balanced layout for story atmosphere.",
        type: "Free"
    },
    {
        id: "hero",
        title: "Full-Width Hero Image",
        desc: "Stunning cinematic visuals to hook readers.",
        type: "Premium"
    },
    {
        id: "comparison",
        title: "Story Comparison Table",
        desc: "Highlight differences between your works.",
        type: "Free"
    },
    {
        id: "gallery",
        title: "Character Gallery",
        desc: "Showcase your story's cast with portraits.",
        type: "Premium"
    }
];

const EXISTING_CONTENT = [
    {
        id: "ap-101",
        title: "World Building - Eternal Woods",
        story: "Whispers of the Eternal Woods",
        status: "Live",
        lastModified: "Mar 12, 2024",
    },
    {
        id: "ap-102",
        title: "Cyberpunk Aesthetic Gallery",
        story: "Neon Horizons",
        status: "In Review",
        lastModified: "Yesterday",
    }
];

export default function APlusContentPage() {
    const [activeNav] = useState("Marketing");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-text">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* ── UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="#" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Your Account</Link>
                <Link href="/help" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-40 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 sm:mr-10 shrink-0">
                    <img src="/logo.png" alt="Story Hut" className="w-[30px] h-[30px] rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">Story Hut</span>
                </Link>
                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Marketing" ? "/marketing" : link === "Reports" ? "/reports" : link === "Story Hut Academy" ? "/academy" : "#"}
                            className={`px-4 h-[60px] flex items-center justify-center font-sans text-[0.85rem] no-underline border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap ${activeNav === link ? "text-plum font-bold border-plum" : "text-muted border-transparent hover:text-plum"}`}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>

            <main className="flex-1 w-full max-w-[1100px] mx-auto p-5 md:p-10 animate-[fadeUp_0.5s_ease_both]">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 mb-8 text-[0.82rem]">
                    <Link href="/marketing" className="text-muted no-underline hover:text-plum flex items-center gap-1">
                        <ArrowLeft size={14} /> Marketing
                    </Link>
                    <span className="text-muted opacity-50">/</span>
                    <span className="text-plum font-bold">A+ Content Manager</span>
                </nav>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
                    <div>
                        <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-3 leading-tight">Enhanced Story Content</h1>
                        <p className="text-muted text-[0.95rem] max-w-[600px] leading-relaxed">
                            Create a richer reading experience with images, character cards, and atmosphere modules. Enhanced content is proven to increase reader retention and shares.
                        </p>
                    </div>
                    <button className="bg-plum text-white border-none rounded-xl py-3 px-6 font-sans text-[0.875rem] font-bold flex items-center gap-2 shadow-[0_4px_16px_rgba(92,45,143,0.28)] transition-all hover:bg-plum-light hover:-translate-y-px">
                        <Plus size={18} />
                        Create New Content
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
                    {/* Left: Content List */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[1.1rem] font-bold text-ink">Your Enhanced Content</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {EXISTING_CONTENT.map((content) => (
                                <div key={content.id} className="bg-white rounded-2xl border border-plum/[0.12] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all hover:shadow-[0_8px_24px_rgba(92,45,143,0.06)] group">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 rounded-xl bg-plum/5 flex items-center justify-center text-plum shrink-0">
                                            <Layout size={24} />
                                        </div>
                                        <div>
                                            <div className="text-[0.95rem] font-bold text-ink group-hover:text-plum transition-colors">{content.title}</div>
                                            <div className="text-[0.8rem] text-muted flex items-center gap-2 mt-1">
                                                <span>Applied to:</span>
                                                <span className="font-medium text-text">{content.story}</span>
                                            </div>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className={`text-[0.7rem] font-bold px-2 py-0.5 rounded-full ${content.status === 'Live' ? 'bg-[#3a9a48]/10 text-[#3a9a48]' : 'bg-[#e8a830]/10 text-[#a07010]'}`}>
                                                    {content.status}
                                                </span>
                                                <span className="text-[0.7rem] text-muted flex items-center gap-1">
                                                    Modified: {content.lastModified}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 border-t sm:border-t-0 pt-4 sm:pt-0 sm:pl-4 border-plum/[0.08]">
                                        <button className="p-2 rounded-lg bg-plum/5 text-plum hover:bg-plum hover:text-white transition-all" title="Edit">
                                            <Edit3 size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg bg-plum/5 text-plum hover:bg-plum hover:text-white transition-all" title="Preview">
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg bg-[#c4687a]/5 text-[#c4687a] hover:bg-[#c4687a] hover:text-white transition-all" title="Delete">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Module Showcase */}
                        <div className="mt-10">
                            <h2 className="text-[1.1rem] font-bold text-ink mb-6">Available Modules</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {MODULES.map((m) => (
                                    <div key={m.id} className="bg-white rounded-2xl border border-plum/[0.12] p-5 flex items-start gap-4 hover:border-plum/30 transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-plum/5 flex items-center justify-center text-plum shrink-0">
                                            {m.id === 'hero' ? <ImageIcon size={20} /> : <Layout size={20} />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="text-[0.875rem] font-bold text-ink">{m.title}</div>
                                                <span className={`text-[0.65rem] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${m.type === 'Premium' ? 'bg-plum text-white' : 'bg-plum/10 text-plum'}`}>
                                                    {m.type}
                                                </span>
                                            </div>
                                            <p className="text-[0.78rem] text-muted leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Quick Insights */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white rounded-2xl border border-plum/[0.12] p-6 shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                            <h3 className="text-[0.95rem] font-bold text-ink mb-4">Content Guidelines</h3>
                            <div className="space-y-4">
                                {[
                                    "Images must be minimum 970px wide",
                                    "No promotional text within images",
                                    "All characters must be age-appropriate",
                                    "Content must relate directly to story"
                                ].map((tip) => (
                                    <div key={tip} className="flex items-start gap-3 text-[0.8rem] text-muted">
                                        <CheckCircle2 size={16} className="text-[#3a9a48] shrink-0 mt-0.5" />
                                        {tip}
                                    </div>
                                ))}
                            </div>
                            <Link href="#" className="mt-6 block text-[0.8rem] font-bold text-plum no-underline hover:underline flex items-center justify-between">
                                Full Content Policy
                                <ChevronRight size={14} />
                            </Link>
                        </div>

                        <div className="bg-plum/5 rounded-2xl border border-plum/[0.15] p-6">
                            <h3 className="text-[0.9rem] font-bold text-plum mb-3 flex items-center gap-2">
                                <Sparkles size={18} />
                                Creator Tip
                            </h3>
                            <p className="text-[0.78rem] text-muted leading-relaxed">
                                Stories with at least 3 Enhanced Modules see an average of <strong>28% higher engagement</strong> during launch week. Try adding a Character Gallery to introduce your lead cast early.
                            </p>
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
                    </div>
                </div>
                <div className="border-t border-white/5 pt-5 text-[0.75rem] text-white/20 text-center">
                    © 2024 Story Hut Direct Publishing. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
