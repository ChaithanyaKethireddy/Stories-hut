"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Wallet, Building2, CreditCard, Plus, HelpCircle, ChevronRight, CheckCircle2, AlertCircle, Info, MoreVertical, Settings } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const PAYOUT_METHODS = [
    { id: "PM-1", type: "Bank Deposit", account: "**** 4521", market: "StoryHut.com (Global)", status: "Active", primary: true, currency: "USD" },
    { id: "PM-2", type: "Wire Transfer", account: "**** 9830", market: "StoryHut.in (India)", status: "Pending", primary: false, currency: "INR" },
];

export default function PayoutMethodsPage() {
    const [activeNav] = useState("Your Account");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-text">
            <nav className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
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

            <main className="flex-1 w-full max-w-[1100px] mx-auto p-5 sm:p-10 animate-[fadeUp_0.5s_ease_both]">

                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/dashboard" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Dashboard
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex items-start gap-5">
                            <div className="w-16 h-16 rounded-[22px] bg-plum/5 text-plum grid place-items-center shrink-0 border border-plum/[0.1]">
                                <Wallet size={32} />
                            </div>
                            <div>
                                <h1 className="font-playfair text-[2.2rem] font-black text-ink mb-1.5 leading-tight">Payments & Bank Setup</h1>
                                <p className="text-muted text-[1rem]">Manage your payout methods, link bank accounts, and configure tax residency for royalties.</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-plum text-white border-none rounded-xl py-3.5 px-7 font-sans text-[0.9rem] font-bold shadow-[0_4px_16px_rgba(92,45,143,0.25)] hover:bg-plum-light transition-all shrink-0">
                            <Plus size={18} />
                            Add Payout Method
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

                    <div className="flex flex-col gap-6">

                        {/* Status Alert */}
                        <div className="bg-[#6bcb77]/5 border-2 border-[#6bcb77]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-[0_4px_16px_rgba(0,180,90,0.02)]">
                            <div className="w-14 h-14 rounded-full bg-[#6bcb77]/10 text-[#3a9a48] grid place-items-center shrink-0 shadow-sm border border-[#6bcb77]/10">
                                <CheckCircle2 size={28} />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-[1.1rem] font-bold text-[#3a9a48] mb-1">Account Ready for Payouts</h3>
                                <p className="text-[0.875rem] text-[#3a9a48]/70 leading-relaxed font-medium">Your tax information and primary bank account have been verified. No further action is required for global sales.</p>
                            </div>
                            <button className="bg-[#3a9a48] text-white border-none py-2.5 px-6 rounded-xl text-[0.82rem] font-bold shadow-lg hover:bg-[#2a7a3a] transition-all whitespace-nowrap">View Tax Form</button>
                        </div>

                        {/* Payout Methods List */}
                        <div className="space-y-4">
                            <h2 className="text-[1.1rem] font-black text-ink flex items-center gap-2 mb-2 px-1">
                                <Building2 size={20} className="text-plum" /> Configured Payout Methods
                            </h2>
                            {PAYOUT_METHODS.map((method) => (
                                <div key={method.id} className="bg-white rounded-2xl border border-plum/[0.12] p-6 pr-4 shadow-sm group hover:border-plum/30 transition-all flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-[#faf8fd] border border-plum/[0.05] text-plum grid place-items-center shrink-0">
                                        {method.type === "Bank Deposit" ? <Building2 size={28} /> : <CreditCard size={28} />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                                            <span className="text-[1rem] font-black text-ink">{method.type} · {method.account}</span>
                                            {method.primary && <span className="text-[0.62rem] font-black tracking-widest text-plum bg-plum/5 px-2.5 py-0.5 rounded-full border border-plum/10 uppercase">Primary</span>}
                                        </div>
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <span className="text-[0.78rem] text-muted flex items-center gap-1.5 font-bold"><Info size={14} className="opacity-40" /> {method.market}</span>
                                            <span className={`text-[0.7rem] font-bold uppercase tracking-widest ${method.status === "Active" ? "text-[#3a9a48]" : "text-[#a07010]"}`}>{method.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0 px-4">
                                        <div className="text-[1.1rem] font-black text-ink mb-1">{method.currency}</div>
                                        <div className="text-[0.72rem] text-muted font-bold">Base Currency</div>
                                    </div>
                                    <button className="p-2.5 rounded-lg text-muted hover:bg-plum/5 hover:text-plum transition-all border-none bg-transparent cursor-pointer">
                                        <Settings size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Info Block */}
                        <div className="bg-ink rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mt-6">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-plum/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="text-[1.3rem] font-bold mb-3 flex items-center gap-3"><HelpCircle className="text-[#e8a830]" /> About Royalty Payouts</h3>
                                <p className="text-[0.9rem] text-white/50 leading-relaxed mb-6 max-w-[500px]">Payments are processed automatically between the 20th and 30th of each month for royalties accrued 60 days prior.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[0.82rem] text-white/40">
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-plum/40 mt-1.5 shrink-0" />
                                        <span>Direct deposits typically arrive in 1-5 business days.</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-plum/40 mt-1.5 shrink-0" />
                                        <span>Wire transfers may incur intermediary bank fees.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="flex flex-col gap-6 ">
                        <div className="bg-white border border-plum/[0.12] rounded-3xl p-8 shadow-sm">
                            <h4 className="text-[1rem] font-bold text-ink mb-6">Payment Settings</h4>
                            <div className="space-y-6">
                                {[
                                    { title: "Payout Threshold", desc: "Default set to $10.00 USD.", action: "Change" },
                                    { title: "Tax Profile", desc: "US Person (W-9 Form active).", action: "Update" },
                                    { title: "Communication", desc: "Payout notifications enabled.", action: "Edit" },
                                ].map((s, i) => (
                                    <div key={i} className="flex flex-col gap-1.5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[0.85rem] font-bold text-ink">{s.title}</span>
                                            <button className="bg-transparent border-none p-0 text-plum font-bold text-[0.78rem] cursor-pointer hover:underline">{s.action}</button>
                                        </div>
                                        <p className="text-[0.75rem] text-muted m-0">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-plum/5 border border-plum/10 rounded-3xl p-8 text-center">
                            <h4 className="text-[1rem] font-black text-plum mb-3">Multi-Currency Setup</h4>
                            <p className="text-[0.8rem] text-muted leading-[1.6] mb-5">You can link different bank accounts for specific regional marketplaces to avoid currency conversion fees.</p>
                            <Link href="#" className="font-bold text-plum text-[0.82rem] no-underline hover:underline flex items-center justify-center gap-1">Read Regional Guide <ChevronRight size={14} /></Link>
                        </div>
                    </aside>

                </div>
            </main>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />
        </div>
    );
}
