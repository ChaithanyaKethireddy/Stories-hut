"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Check } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];
const STEPS = ["Story Details", "Upload Content", "Publishing Settings"];

const MARKETPLACES = [
    { name: "StoryHut.com", currency: "$", price: "9.99", delivery: "$0.00", rate: "70%", royalty: "$6.99", royaltyRaw: 6.99 },
    { name: "StoryHut.in", currency: "₹", price: "449", delivery: "₹0.00", rate: "70%", royalty: "₹314", royaltyRaw: 314 },
    { name: "StoryHut.uk", currency: "£", price: "7.99", delivery: "£0.00", rate: "70%", royalty: "£5.59", royaltyRaw: 5.59 },
    { name: "StoryHut.eu", currency: "€", price: "8.99", delivery: "€0.00", rate: "70%", royalty: "€6.29", royaltyRaw: 6.29 },
];

export default function PublishingSettingsPage() {
    const [activeNav, setActiveNav] = useState("Bookshelf");
    const [selectEnroll, setSelectEnroll] = useState(false);
    const [territories, setTerritories] = useState("all");
    const [marketplace, setMarketplace] = useState("StoryHut.com (Global)");
    const [royaltyPlan, setRoyaltyPlan] = useState("70");
    const [prices, setPrices] = useState(
        Object.fromEntries(MARKETPLACES.map((m) => [m.name, m.price]))
    );
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [publishing, setPublishing] = useState(false);

    const updatePrice = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setPrices((prev) => ({ ...prev, [name]: e.target.value }));

    const calcRoyalty = (row: typeof MARKETPLACES[0]) => {
        const p = parseFloat(prices[row.name]) || 0;
        const rate = parseFloat(royaltyPlan) / 100;
        const val = p * rate;
        const sym = row.currency;
        return `${sym}${val.toFixed(2)}`;
    };

    const handlePublish = () => {
        if (!termsAccepted) return;
        setPublishing(true);
        setTimeout(() => {
            setPublishing(false);
            window.location.href = "/dashboard?published=true";
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-text relative">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}} />

            {/* ── UTILITY ── */}
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
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 sm:mr-12 shrink-0">
                    <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>
                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar hidden md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Marketing" ? "/marketing" : "#"}
                            className={`px-3 md:px-[18px] h-[60px] flex items-center justify-center font-sans text-[0.875rem] font-normal no-underline border-b-2 transition-all duration-200 cursor-pointer bg-transparent whitespace-nowrap ${activeNav === link
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
                    <span>Create New Story</span>
                </Link>
            </nav>

            {/* ── STEPPER ── */}
            <div className="bg-white border-b border-plum/[0.13] px-5 sm:px-12 flex items-stretch justify-center shrink-0">
                {STEPS.map((step, i) => (
                    <div key={step} className={`flex items-center gap-2 py-4 px-4 sm:px-8 text-[0.83rem] font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${i === 2 ? "text-plum font-semibold border-plum" : "text-[#3a9a48] border-transparent"}`}>
                        <div className={`w-[22px] h-[22px] rounded-full grid place-items-center text-[0.7rem] font-bold shrink-0 ${i < 2 ? "bg-[#3a9a48] text-white" : "bg-plum text-white"}`}>
                            {i < 2 ? <Check size={11} strokeWidth={2.2} /> : (i + 1)}
                        </div>
                        {i + 1 === 3 ? "" : "✓ "}{step}
                    </div>
                ))}
            </div>

            {/* ── MAIN ── */}
            <main className="flex-1 w-full max-w-[860px] mx-auto pt-9 pb-12 px-5 sm:px-12 animate-[fadeUp_0.5s_ease_both]">
                <div className="bg-white rounded-[16px] border border-plum/[0.13] p-6 sm:p-9 shadow-[0_4px_24px_rgba(92,45,143,0.05)] flex flex-col gap-7">

                    <h1 className="font-playfair text-[1.7rem] font-black text-ink">Publishing Settings</h1>

                    {/* ── Select Enrollment ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-3.5">Story Hut Select Enrollment</h2>
                        <div className="border-l-[3px] border-plum p-[14px_16px] bg-[#faf8fd] rounded-r-lg">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-[18px] h-[18px] border-2 border-plum/[0.13] rounded mt-[1px] shrink-0 appearance-none bg-white checked:bg-plum checked:border-plum transition-all duration-200"
                                    style={{
                                        backgroundImage: selectEnroll ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E")` : 'none',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                    checked={selectEnroll}
                                    onChange={(e) => setSelectEnroll(e.target.checked)}
                                />
                                <div className="flex flex-col">
                                    <span className="text-[0.875rem] font-bold text-ink mb-1">Enroll my story in Story Hut Select</span>
                                    <span className="text-[0.8rem] text-muted leading-[1.6]">
                                        Story Hut Select reaches more readers through exclusive distribution. By enrolling, you make your story available in the Story Hut Subscription Library and earn a share of the Global Fund based on pages read.{" "}
                                        <Link href="#" className="text-plum font-medium no-underline hover:underline">Learn more about enrollment benefits</Link>.
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.13] m-0" />

                    {/* ── Territories ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-1.5">Territories</h2>
                        <p className="text-[0.8rem] text-muted leading-[1.6] mb-3">
                            Select the territories for which you hold distribution rights.
                        </p>
                        <div className="bg-[#faf8fd] border-l-[3px] border-plum p-[14px_16px] rounded-r-lg mb-3.5 text-[0.8rem] text-text leading-[1.6]">
                            <strong className="font-semibold">Worldwide rights</strong> allow your story to be sold in all Story Hut marketplaces globally. Choose <strong className="font-semibold">Individual territories</strong> if you only hold rights for specific regions.
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="flex items-center gap-2.5 text-[0.875rem] text-text cursor-pointer">
                                <input type="radio" name="territories" value="all" className="w-4 h-4 accent-plum shrink-0" checked={territories === "all"} onChange={() => setTerritories("all")} />
                                All territories (worldwide rights)
                            </label>
                            <label className="flex items-center gap-2.5 text-[0.875rem] text-text cursor-pointer">
                                <input type="radio" name="territories" value="individual" className="w-4 h-4 accent-plum shrink-0" checked={territories === "individual"} onChange={() => setTerritories("individual")} />
                                Individual territories
                            </label>
                        </div>
                        <div className="flex items-center gap-4 mt-2.5">
                            <Link href="#" className="text-[0.78rem] text-plum font-medium no-underline hover:underline">What are publishing rights?</Link>
                            <Link href="#" className="text-[0.78rem] text-plum font-medium no-underline hover:underline">Territory availability guide</Link>
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.13] m-0" />

                    {/* ── Primary Marketplace ── */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className="text-[1rem] font-bold text-ink">Primary Marketplace</h2>
                        <div className="bg-[#faf8fd] border-l-[3px] border-plum p-[14px_16px] rounded-r-lg mb-3.5 text-[0.8rem] text-text leading-[1.6]">
                            Your Primary Marketplace determines the default currency for your list price and is typically where you expect the majority of your sales.
                        </div>
                        <p className="text-[0.8rem] text-muted leading-[1.6] mb-1.5">
                            Select the marketplace where you expect the majority of your sales.
                        </p>
                        <div className="relative max-w-[300px]">
                            <select
                                className="w-full appearance-none font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.13] rounded-xl p-[11px_38px_11px_14px] bg-[#fdfcff] outline-none cursor-pointer transition-all duration-200 focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%237a6890' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 14px center'
                                }}
                                value={marketplace}
                                onChange={(e) => setMarketplace(e.target.value)}
                            >
                                <option>StoryHut.com (Global)</option>
                                <option>StoryHut.in (India)</option>
                                <option>StoryHut.uk (United Kingdom)</option>
                                <option>StoryHut.eu (Europe)</option>
                            </select>
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.13] m-0" />

                    {/* ── Pricing, Royalty & Distribution ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-1.5">Pricing, Royalty &amp; Distribution</h2>
                        <p className="text-[0.8rem] text-muted leading-[1.6] mb-3.5">
                            Choose a royalty plan and set your list prices for each marketplace.
                        </p>
                        <div className="bg-[#faf8fd] border-l-[3px] border-plum p-[14px_16px] rounded-r-lg mb-[18px] text-[0.8rem] text-text leading-[1.6]">
                            Choose a royalty plan based on your list price. The 70% plan is available for stories within specific price brackets, while the 35% plan applies to all prices.{" "}
                            <Link href="#" className="text-plum font-medium no-underline hover:underline">How do pricing and royalties work?</Link>
                        </div>

                        {/* Royalty tabs */}
                        <div className="inline-flex rounded-xl overflow-hidden border-[1.5px] border-plum/[0.13] bg-[#faf8fd] mb-[18px] w-fit">
                            <button
                                className={`p-[9px_24px] font-sans text-[0.875rem] font-medium transition-all duration-200 flex items-center gap-1.5 ${royaltyPlan === "35" ? "bg-plum text-white font-bold" : "text-muted hover:text-plum"}`}
                                onClick={() => setRoyaltyPlan("35")}
                            >
                                <div className={`w-3.5 h-3.5 rounded-full border border-white/40 flex items-center justify-center shrink-0 ${royaltyPlan === "35" ? "bg-white" : "bg-transparent"}`} />
                                35% Royalty
                            </button>
                            <button
                                className={`p-[9px_24px] font-sans text-[0.875rem] font-medium transition-all duration-200 flex items-center gap-1.5 ${royaltyPlan === "70" ? "bg-plum text-white font-bold" : "text-muted hover:text-plum"}`}
                                onClick={() => setRoyaltyPlan("70")}
                            >
                                <div className={`w-3.5 h-3.5 rounded-full border border-white/40 flex items-center justify-center shrink-0 ${royaltyPlan === "70" ? "bg-white" : "bg-transparent"}`} />
                                70% Royalty
                            </button>
                        </div>

                        {/* Pricing table */}
                        <div className="border border-plum/[0.13] rounded-xl overflow-hidden mt-1">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#faf8fd] border-b border-plum/[0.13]">
                                        <th className="text-left p-3 px-4 text-[0.78rem] font-bold text-muted uppercase tracking-wider">Marketplace</th>
                                        <th className="text-left p-3 px-4 text-[0.78rem] font-bold text-muted uppercase tracking-wider">List Price</th>
                                        <th className="text-left p-3 px-4 text-[0.78rem] font-bold text-muted uppercase tracking-wider hidden sm:table-cell">Delivery</th>
                                        <th className="text-left p-3 px-4 text-[0.78rem] font-bold text-muted uppercase tracking-wider hidden sm:table-cell">Rate</th>
                                        <th className="text-left p-3 px-4 text-[0.78rem] font-bold text-muted uppercase tracking-wider">Royalty</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-plum/[0.05]">
                                    {MARKETPLACES.map((row) => (
                                        <tr key={row.name} className="transition-colors hover:bg-[#faf8fd]">
                                            <td className="p-[13px_16px] text-sm text-text">{row.name}</td>
                                            <td className="p-[13px_16px] text-sm text-text">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-muted text-[0.8rem]">{row.currency}</span>
                                                    <input
                                                        className="w-[90px] font-sans text-[0.84rem] text-text border-[1.5px] border-plum/[0.13] rounded-lg p-[6px_10px] outline-none transition-all duration-200 focus:border-plum-light focus:shadow-[0_0_0_2px_rgba(123,76,184,0.1)]"
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value={prices[row.name]}
                                                        onChange={updatePrice(row.name)}
                                                    />
                                                </div>
                                            </td>
                                            <td className="p-[13px_16px] text-sm text-muted hidden sm:table-cell">{row.delivery}</td>
                                            <td className="p-[13px_16px] text-sm text-text hidden sm:table-cell">{royaltyPlan}%</td>
                                            <td className="p-[13px_16px] text-[0.84rem] font-bold text-plum">{calcRoyalty(row)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.13] m-0" />

                    {/* ── Terms & Conditions ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-3.5">Terms &amp; Conditions</h2>
                        <div className="bg-[#faf8fd] border border-plum/[0.13] rounded-xl p-[18px_20px] text-[0.82rem] text-text leading-[1.65] flex gap-3.5 items-start">
                            <input
                                type="checkbox"
                                className="w-[18px] h-[18px] rounded border-2 border-plum/[0.13] mt-[1px] shrink-0 accent-plum cursor-pointer"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                id="tc-accept"
                            />
                            <label htmlFor="tc-accept" className="cursor-pointer">
                                I confirm that I have all rights necessary to make the content I am uploading available for marketing, distribution, and sale in each territory I have indicated above. I agree to the{" "}
                                <Link href="#" className="text-plum font-medium no-underline hover:underline">Story Hut Terms &amp; Conditions</Link>{" "}
                                and understand that it can take up to 72 hours for my story to be available for purchase.
                            </label>
                        </div>
                    </div>

                    {/* ── Actions ── */}
                    <div className="flex items-center justify-between gap-3 pt-5 border-t border-plum/[0.13]">
                        <button className="bg-transparent border-[1.5px] border-plum/[0.13] rounded-xl p-[11px_22px] font-sans text-[0.875rem] font-medium text-text cursor-pointer transition-all duration-200 hover:border-plum hover:text-plum whitespace-nowrap" onClick={() => window.history.back()}>
                            ← Back to Content
                        </button>
                        <div className="flex items-center gap-3">
                            <button className="bg-transparent border-[1.5px] border-plum/[0.13] rounded-xl p-[11px_22px] font-sans text-[0.875rem] font-medium text-plum cursor-pointer transition-all duration-200 hover:border-plum hover:bg-[#ede5f8] whitespace-nowrap">
                                Save as Draft
                            </button>
                            <button
                                className="bg-plum text-white border-none rounded-xl p-[11px_28px] font-sans text-[0.875rem] font-bold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.3)] flex items-center gap-2 hover:bg-plum-light hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                disabled={!termsAccepted || publishing}
                                onClick={handlePublish}
                            >
                                {publishing ? (
                                    <><span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin shrink-0" /> Publishing…</>
                                ) : (
                                    <>
                                        Publish Story
                                        <ArrowRight size={14} strokeWidth={2.5} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-ink p-[52px_20px_28px] sm:p-[52px_48px_28px] mt-12 shrink-0">
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-12 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 font-playfair text-[1rem] font-bold text-white/90 no-underline mb-3">
                            <Image src="/logo.png" alt="Story Hut" width={28} height={28} className="rounded-md bg-white object-contain" />
                            Story Hut
                        </Link>
                        <p className="text-[0.82rem] text-white/40 leading-[1.65] max-w-[200px]">Empowering storytellers worldwide to publish, share, and grow.</p>
                    </div>
                    {[
                        { title: "Platform", links: ["Dashboard", "Publishing Guide", "Pricing", "Story Hut Select"] },
                        { title: "Resources", links: ["Help Center", "Community", "Story Hut Academy", "Marketing Tools"] },
                        { title: "Company", links: ["About Us", "Terms of Service", "Privacy Policy", "Contact Us"] },
                    ].map((col) => (
                        <div key={col.title} className="flex flex-col">
                            <h4 className="text-[0.75rem] font-bold text-white/70 uppercase tracking-widest mb-3.5">{col.title}</h4>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link}><Link href="#" className="text-[0.82rem] text-white/40 no-underline transition-colors hover:text-white/85">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-[1200px] mx-auto border-t border-white/[0.06] pt-[22px] flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.77rem] text-white/30">
                    <span>© 2025 Story Hut. All rights reserved.</span>
                    <div className="flex gap-3">
                        <Link href="#" className="w-8 h-8 rounded-lg bg-white/[0.07] grid place-items-center text-[0.8rem] text-white/50 no-underline transition-all hover:bg-plum hover:text-white">𝕏</Link>
                        <Link href="#" className="w-8 h-8 rounded-lg bg-white/[0.07] grid place-items-center text-[0.8rem] text-white/50 no-underline transition-all hover:bg-plum hover:text-white">📷</Link>
                    </div>
                </div>
            </footer>

        </div>
    );
}
