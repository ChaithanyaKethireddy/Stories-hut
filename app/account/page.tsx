"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, ShieldCheck, CreditCard, Bell, Globe, HelpCircle, ChevronRight, LogOut } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const ACCOUNT_SECTIONS = [
    {
        id: "profile",
        title: "Personal Information",
        desc: "Manage your legal name, pen names, and profile picture.",
        icon: <User size={22} />,
        link: "/account/profile",
    },
    {
        id: "identity",
        title: "Identity Verification",
        desc: "Required for publishing and royalty distribution.",
        icon: <ShieldCheck size={22} />,
        link: "/account/identity",
        status: "Verified",
    },
    {
        id: "payouts",
        title: "Payout Methods",
        desc: "Manage your bank accounts and payment preferences.",
        icon: <CreditCard size={22} />,
        link: "/account/payouts",
        status: "Active",
    },
    {
        id: "security",
        title: "Security & Login",
        desc: "Change your password and enable multi-factor authentication.",
        icon: <ShieldCheck size={22} />,
        link: "/account/security",
    },
    {
        id: "notifications",
        title: "Notifications",
        desc: "Choose what updates you want to receive about your stories.",
        icon: <Bell size={22} />,
        link: "/account/notifications",
    },
    {
        id: "preferences",
        title: "Global Preferences",
        desc: "Manage your default marketplace, language, and currency.",
        icon: <Globe size={22} />,
        link: "/account/preferences",
    },
];

export default function AccountHubPage() {
    const [activeNav] = useState("Bookshelf");

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
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <Link href="/help" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-40 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 sm:mr-10 shrink-0">
                    <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
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

            <main className="flex-1 w-full max-w-[1000px] mx-auto p-5 md:p-10 animate-[fadeUp_0.5s_ease_both]">
                <div className="mb-10 text-center md:text-left">
                    <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-2">Account Settings</h1>
                    <p className="text-muted text-[0.95rem]">Manage your publishing account, payments, and personal preferences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                    {ACCOUNT_SECTIONS.map((section) => (
                        <Link
                            key={section.id}
                            href={section.link}
                            className="bg-white rounded-2xl border border-plum/[0.12] p-6 flex items-start gap-4 transition-all hover:shadow-[0_8px_24px_rgba(92,45,143,0.08)] hover:border-plum/20 group no-underline"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-plum/5 text-plum grid place-items-center shrink-0 transition-all group-hover:bg-plum group-hover:text-white">
                                {section.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-[1rem] font-bold text-ink group-hover:text-plum transition-colors">{section.title}</h3>
                                    {section.status && (
                                        <span className={`text-[0.65rem] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${section.status === 'Verified' || section.status === 'Active' ? 'bg-[#3a9a48]/10 text-[#3a9a48]' : 'bg-[#e8a830]/10 text-[#a07010]'}`}>
                                            {section.status}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[0.82rem] text-muted leading-relaxed">{section.desc}</p>
                            </div>
                            <ChevronRight size={18} className="text-muted mt-1 group-hover:text-plum group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white border border-plum/[0.12] shadow-[0_4px_16px_rgba(92,45,143,0.03)]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-plum/10 text-plum grid place-items-center">
                            <HelpCircle size={22} />
                        </div>
                        <div>
                            <div className="text-[0.95rem] font-bold text-ink">Need assistance?</div>
                            <p className="text-[0.82rem] text-muted">Visit our Help Center for common questions about account management.</p>
                        </div>
                    </div>
                    <Link href="/help" className="bg-transparent border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-bold text-plum no-underline transition-all hover:border-plum hover:bg-[#ede5f8]">
                        Go to Help Center
                    </Link>
                </div>

                <div className="mt-10 pt-10 border-t border-plum/[0.12] flex justify-center">
                    <Link href="/" className="text-[0.9rem] font-bold text-[#c4687a] flex items-center gap-2 no-underline hover:underline">
                        <LogOut size={18} />
                        Sign out of all sessions
                    </Link>
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
