"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Plus, Megaphone, Target, UserCircle, Rocket, Award, Star, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const STORIES = ["Start With a Story...", "Whispers of the Eternal Woods", "Neon Horizons", "The Alchemist's Legacy"];
const ENHANCE_STORIES = ["Select a Story to Enhance", "Whispers of the Eternal Woods", "Neon Horizons", "The Alchemist's Legacy"];
const MARKETPLACES = ["StoryHut.com (Global)", "StoryHut.in (India)", "StoryHut.uk (United Kingdom)", "StoryHut.eu (Europe)"];

export default function MarketingPage() {
    const [activeNav, setActiveNav] = useState("Marketing");
    const [campaignType, setCampaignType] = useState("countdown");
    const [adsMarket, setAdsMarket] = useState(MARKETPLACES[0]);
    const [profileMarket, setProfileMarket] = useState(MARKETPLACES[0]);
    const [enhanceStory, setEnhanceStory] = useState(ENHANCE_STORIES[0]);
    const [growStory, setGrowStory] = useState(STORIES[0]);

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-[#2e1f40]">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}} />

            {/* ── UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.13] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <div className="flex items-center gap-1 text-[0.78rem] text-muted cursor-pointer hover:text-plum transition-colors">
                    English
                    <ChevronDown size={10} strokeWidth={1.5} />
                </div>
                <Link href="/help" className="hidden sm:inline text-[0.78rem] text-muted no-underline transition-colors hover:text-plum">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline transition-colors hover:text-plum">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.13] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-40 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
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
                    <Plus size={14} strokeWidth={2.5} />
                    <span className="hidden sm:inline">Create New Story</span>
                    <span className="sm:hidden">Create</span>
                </Link>
            </nav>

            {/* ── MAIN CONTENT ── */}
            <main className="flex-1 w-full max-w-[860px] mx-auto py-10 px-5 sm:px-12 flex flex-col gap-5 animate-[fadeUp_0.5s_ease_both]">

                {/* Page Header */}
                <div className="mb-2">
                    <h1 className="font-playfair text-[2rem] font-black text-ink leading-tight mb-1.5">Marketing & Growth Tools</h1>
                    <p className="text-[0.9rem] text-muted leading-relaxed">Maximize your reach and connect with readers across the Story Hut ecosystem.</p>
                </div>

                {/* ── Story Hut Select ── */}
                <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 sm:p-9 shadow-[0_2px_16px_rgba(92,45,143,0.05)]">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                        <div className="flex-1">
                            <h2 className="text-[1rem] font-bold text-plum mb-2 flex items-center gap-2">
                                <Award size={18} className="shrink-0" />
                                Story Hut Select
                            </h2>
                            <p className="text-[0.83rem] text-muted leading-[1.65] mb-2.5">
                                Reach more readers through exclusive inclusion in the Story Hut Subscription Library and access specialized promotional tools. Enroll your story to increase visibility and earn shares of the global fund.
                            </p>
                            <Link href="#" className="text-[0.8rem] text-plum font-medium no-underline hover:underline">Learn more about Story Hut Select</Link>
                        </div>
                        <button className="bg-plum text-white border-none rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-semibold transition-all duration-200 shadow-[0_4px_14px_rgba(92,45,143,0.28)] hover:bg-plum-light hover:-translate-y-px whitespace-nowrap shrink-0">
                            Enroll in Select
                        </button>
                    </div>
                </div>

                {/* ── Two Col: Ads & Profile ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Story Ads */}
                    <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 shadow-[0_2px_16px_rgba(92,45,143,0.05)] flex flex-col gap-4">
                        <div>
                            <h2 className="text-[1rem] font-bold text-plum mb-2 flex items-center gap-2">
                                <Megaphone size={18} className="shrink-0" />
                                Story Ads
                            </h2>
                            <p className="text-[0.83rem] text-muted leading-[1.65] mb-1.5">
                                Target readers who are actively looking for stories like yours. Set your own budget and only pay when readers click.
                            </p>
                            <Link href="#" className="text-[0.8rem] text-plum font-medium no-underline hover:underline">See more about Story Ads</Link>
                        </div>
                        <div className="relative mt-auto">
                            <select
                                className="w-full appearance-none font-sans text-[0.84rem] text-ink border-[1.5px] border-plum/[0.13] rounded-xl p-[10px_36px_10px_14px] bg-[#fdfcff] outline-none cursor-pointer transition-all duration-200 focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%237a6890' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center'
                                }}
                                value={adsMarket}
                                onChange={(e) => setAdsMarket(e.target.value)}
                            >
                                {MARKETPLACES.map((m) => <option key={m}>{m}</option>)}
                            </select>
                        </div>
                        <button className="w-full bg-transparent border-[1.5px] border-plum/[0.13] rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-medium text-plum transition-all duration-200 hover:border-plum hover:bg-plum-pale">Learn More</button>
                    </div>

                    {/* Author Profile */}
                    <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 shadow-[0_2px_16px_rgba(92,45,143,0.05)] flex flex-col gap-4">
                        <div>
                            <h2 className="text-[1rem] font-bold text-plum mb-2 flex items-center gap-2">
                                <UserCircle size={18} className="shrink-0" />
                                Author Profile
                            </h2>
                            <p className="text-[0.83rem] text-muted leading-[1.65] mb-1.5">
                                Create a professional home for your work. Share your biography, photos, and keep fans updated on new releases.
                            </p>
                            <Link href="#" className="text-[0.8rem] text-plum font-medium no-underline hover:underline">Visit Author Central</Link>
                        </div>
                        <div className="relative mt-auto">
                            <select
                                className="w-full appearance-none font-sans text-[0.84rem] text-ink border-[1.5px] border-plum/[0.13] rounded-xl p-[10px_36px_10px_14px] bg-[#fdfcff] outline-none cursor-pointer transition-all duration-200 focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%237a6890' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center'
                                }}
                                value={profileMarket}
                                onChange={(e) => setProfileMarket(e.target.value)}
                            >
                                {MARKETPLACES.map((m) => <option key={m}>{m}</option>)}
                            </select>
                        </div>
                        <button className="w-full bg-transparent border-[1.5px] border-plum/[0.13] rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-medium text-plum transition-all duration-200 hover:border-plum hover:bg-plum-pale">Manage Profile</button>
                    </div>
                </div>

                {/* ── Enhanced Story Content ── */}
                <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 sm:p-8 shadow-[0_2px_16px_rgba(92,45,143,0.05)]">
                    <h2 className="text-[1rem] font-bold text-plum mb-3 flex items-center gap-2">
                        <Star size={18} className="shrink-0" />
                        Enhanced Story Content
                    </h2>
                    <div className="flex items-center gap-5 flex-wrap mb-5">
                        <Link href="#" className="group inline-flex items-center gap-1.5 text-[0.8rem] text-plum font-semibold transition-all hover:gap-2.5 no-underline">
                            Getting Started
                            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                        <Link href="#" className="group inline-flex items-center gap-1.5 text-[0.8rem] text-plum font-semibold transition-all hover:gap-2.5 no-underline">
                            Content Guidelines
                            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                        <Link href="#" className="group inline-flex items-center gap-1.5 text-[0.8rem] text-plum font-semibold transition-all hover:gap-2.5 no-underline">
                            Examples
                            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                        <div className="relative w-full sm:min-w-[240px]">
                            <select
                                className="w-full appearance-none font-sans text-[0.84rem] text-ink border-[1.5px] border-plum/[0.13] rounded-xl p-[10px_36px_10px_14px] bg-[#fdfcff] outline-none cursor-pointer transition-all duration-200 focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%237a6890' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center'
                                }}
                                value={enhanceStory}
                                onChange={(e) => setEnhanceStory(e.target.value)}
                            >
                                {ENHANCE_STORIES.map((s) => <option key={s}>{s}</option>)}
                            </select>
                        </div>
                        <Link href="/marketing/a-plus" className="w-full sm:w-auto bg-transparent border-[1.5px] border-plum/[0.13] rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-medium text-plum transition-all duration-200 hover:border-plum hover:bg-plum-pale whitespace-nowrap no-underline text-center">Manage Content</Link>
                    </div>
                </div>

                {/* ── Run a Promotional Campaign ── */}
                <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 sm:p-8 shadow-[0_2px_16px_rgba(92,45,143,0.05)]">
                    <h2 className="text-[1rem] font-bold text-plum mb-3 flex items-center gap-2">
                        <Rocket size={18} className="shrink-0" />
                        Run a Promotional Campaign
                    </h2>
                    <Link href="#" className="text-[0.78rem] text-plum font-medium no-underline hover:underline mb-4 block">How to choose a campaign type</Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                        <label
                            className={`flex items-start gap-3 p-4 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 ${campaignType === "countdown" ? "border-plum-light bg-plum-pale shadow-[0_4px_12px_rgba(92,45,143,0.06)]" : "border-plum/[0.13] bg-white hover:border-plum/30"}`}
                            onClick={() => setCampaignType("countdown")}
                        >
                            <input
                                type="radio" name="campaign"
                                className="w-4 h-4 mt-0.5 accent-plum shrink-0 cursor-pointer"
                                checked={campaignType === "countdown"}
                                onChange={() => setCampaignType("countdown")}
                            />
                            <div>
                                <div className="text-[0.875rem] font-bold text-ink mb-1">Countdown Campaign</div>
                                <p className="text-[0.75rem] text-muted leading-[1.45]">Limited-time discounted pricing to drive urgency.</p>
                            </div>
                        </label>

                        <label
                            className={`flex items-start gap-3 p-4 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 ${campaignType === "free" ? "border-plum-light bg-plum-pale shadow-[0_4px_12px_rgba(92,45,143,0.06)]" : "border-plum/[0.13] bg-white hover:border-plum/30"}`}
                            onClick={() => setCampaignType("free")}
                        >
                            <input
                                type="radio" name="campaign"
                                className="w-4 h-4 mt-0.5 accent-plum shrink-0 cursor-pointer"
                                checked={campaignType === "free"}
                                onChange={() => setCampaignType("free")}
                            />
                            <div>
                                <div className="text-[0.875rem] font-bold text-ink mb-1">Free Promotion</div>
                                <p className="text-[0.75rem] text-muted leading-[1.45]">Offer your story for free for up to 5 days to build readership.</p>
                            </div>
                        </label>
                    </div>

                    <Link
                        href="/marketing/promotions"
                        className="bg-plum text-white border-none rounded-xl py-3 px-8 font-sans text-[0.875rem] font-bold transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.28)] flex items-center justify-center gap-2.5 hover:bg-plum-light hover:-translate-y-px no-underline"
                    >
                        Launch Campaign
                        <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>
                </div>

                {/* ── Deals & Spotlight ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Story Deals */}
                    <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 shadow-[0_2px_16px_rgba(92,45,143,0.05)] flex flex-col gap-5">
                        <div>
                            <h2 className="text-[1rem] font-bold text-plum mb-2 flex items-center gap-2">
                                <Award size={18} className="shrink-0" />
                                Story Deals
                            </h2>
                            <p className="text-[0.83rem] text-muted leading-[1.65] mb-2">
                                Nominate your story to be featured in our curated daily deals or seasonal sales events.
                            </p>
                            <Link href="#" className="text-[0.8rem] text-plum font-semibold no-underline hover:underline">Nomination requirements</Link>
                        </div>
                        <Link href="/marketing/deals" className="mt-auto w-full bg-plum text-white border-none rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-bold transition-all duration-200 shadow-[0_4px_14px_rgba(92,45,143,0.15)] hover:bg-plum-light no-underline text-center">Nominate Story</Link>
                    </div>

                    {/* Prime Spotlight */}
                    <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 shadow-[0_2px_16px_rgba(92,45,143,0.05)] flex flex-col gap-5">
                        <div>
                            <h2 className="text-[1rem] font-bold text-plum mb-2 flex items-center gap-2">
                                <Target size={18} className="shrink-0" />
                                Prime Spotlight
                            </h2>
                            <p className="text-[0.83rem] text-muted leading-[1.65] mb-2">
                                Put your story in front of our most active community members through spotlight carousels.
                            </p>
                            <Link href="#" className="text-[0.8rem] text-plum font-semibold no-underline hover:underline">Nomination requirements</Link>
                        </div>
                        <Link href="/marketing/deals" className="mt-auto w-full bg-plum text-white border-none rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-bold transition-all duration-200 shadow-[0_4px_14px_rgba(92,45,143,0.15)] hover:bg-plum-light no-underline text-center">Nominate Story</Link>
                    </div>
                </div>

                {/* ── Additional Growth Tools ── */}
                <div className="bg-white rounded-2xl border border-plum/[0.13] p-7 sm:p-8 shadow-[0_2px_16px_rgba(92,45,143,0.05)]">
                    <h2 className="text-[1rem] font-bold text-plum mb-4">Additional Growth Tools</h2>
                    <div className="flex flex-col">
                        <Link href="/marketing/a-plus" className="flex-1 flex items-center justify-between no-underline p-3 rounded-lg hover:bg-plum/5 transition-colors group">
                            <div className="flex items-center gap-2.5">
                                <Sparkles size={16} className="text-plum opacity-40 group-hover:opacity-100 transition-opacity" />
                                <span className="text-[0.82rem] font-bold text-ink">A+ Content Manager</span>
                            </div>
                            <ChevronRight size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>

                {/* ── Ready to Grow CTA ── */}
                <div className="bg-white border-[1.5px] border-dashed border-plum/25 rounded-2xl py-10 px-8 text-center mt-3 animate-[fadeUp_0.6s_0.2s_ease_both]">
                    <h2 className="font-playfair text-[1.45rem] font-black text-ink mb-6">Ready to grow your audience?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                        <div className="relative w-full sm:min-w-[260px]">
                            <select
                                className="w-full appearance-none font-sans text-[0.875rem] text-ink border-[1.5px] border-plum/[0.13] rounded-xl p-[11px_38px_11px_16px] bg-white outline-none cursor-pointer mt-0 transition-all focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%237a6890' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 16px center'
                                }}
                                value={growStory}
                                onChange={(e) => setGrowStory(e.target.value)}
                            >
                                {STORIES.map((s) => <option key={s}>{s}</option>)}
                            </select>
                        </div>
                        <button className="w-full sm:w-auto bg-plum text-white border-none rounded-xl py-3 px-8 font-sans text-[0.9rem] font-bold flex items-center justify-center gap-2 group transition-all duration-200 hover:bg-plum-light hover:-translate-y-px shadow-[0_4px_16px_rgba(92,45,143,0.18)]">
                            Continue
                            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

            </main>

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
                        <Link href="#" className="text-[0.78rem] text-white/40 no-underline transition-colors hover:text-white/85">Terms of Service</Link>
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
