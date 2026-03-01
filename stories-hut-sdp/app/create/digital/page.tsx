"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, PlusCircle, Grid } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];
const STEPS = ["1. Story Details", "2. Upload Content", "3. Publishing Settings"];
const LANGUAGES = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Japanese", "Chinese", "Korean", "Arabic"];

export default function StoryDetailsPage() {
    const [activeNav, setActiveNav] = useState("Bookshelf");
    const [currentStep] = useState(0);

    const [form, setForm] = useState({
        language: "English",
        title: "",
        subtitle: "",
        firstName: "",
        lastName: "",
        penName: "",
        description: "",
        rights: "",
        keywords: Array(7).fill(""),
    });

    const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const updateKeyword = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const kw = [...form.keywords];
        kw[i] = e.target.value;
        setForm((prev) => ({ ...prev, keywords: kw }));
    };

    const descLength = form.description.length;

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-text relative pb-[76px]">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* ── UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.15] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <div className="flex items-center gap-1 text-[0.78rem] text-muted cursor-pointer hover:text-plum transition-colors">
                    English
                    <ChevronDown size={10} strokeWidth={2} />
                </div>
                <Link href="/help" className="hidden sm:inline text-[0.78rem] text-muted no-underline font-normal transition-colors hover:text-plum">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline font-normal transition-colors hover:text-plum">Sign Out</Link>
            </div>

            {/* ── NAV ── */}
            <nav className="bg-white border-b border-plum/[0.15] px-5 sm:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-40 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 sm:mr-12 shrink-0">
                    <img src="/logo.png" alt="Story Hut" className="w-[30px] h-[30px] rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>
                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar hidden md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Marketing" ? "/marketing" : "#"}
                            className={`px-3 md:px-[18px] h-[60px] flex items-center justify-center font-sans text-[0.82rem] md:text-[0.875rem] font-normal no-underline border-b-2 transition-all duration-200 cursor-pointer bg-transparent whitespace-nowrap ${activeNav === link
                                ? "text-plum font-semibold border-plum"
                                : "text-muted border-transparent hover:text-plum"
                                }`}
                            onClick={() => setActiveNav(link)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
                <Link href="/create" className="ml-auto bg-plum text-white border-none cursor-pointer font-sans text-[0.875rem] font-semibold px-4 md:px-[22px] py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 no-underline whitespace-nowrap hover:bg-plum-light hover:-translate-y-[1px] shrink-0">
                    <span>Create New Story</span>
                </Link>
            </nav>

            {/* ── STEPPER ── */}
            <div className="bg-white border-b border-plum/[0.15] px-5 sm:px-12 flex items-stretch overflow-x-auto no-scrollbar">
                {STEPS.map((step, i) => (
                    <div
                        key={step}
                        className={`flex items-center gap-2.5 py-4 pr-7 text-[0.83rem] font-medium border-b-[2.5px] transition-colors duration-200 whitespace-nowrap ${i === currentStep
                            ? "text-plum font-semibold border-plum"
                            : i < currentStep
                                ? "text-plum-light border-transparent"
                                : "text-muted border-transparent"
                            }`}
                    >
                        <div className={`w-[22px] h-[22px] rounded-full grid place-items-center text-[0.7rem] font-bold shrink-0 ${i === currentStep ? "bg-plum text-white" : i < currentStep ? "bg-plum-light text-white" : "bg-plum/10 text-muted"
                            }`}>
                            {i + 1}
                        </div>
                        {step.replace(/^\d+\.\s/, "")}
                    </div>
                ))}
            </div>

            {/* ── MAIN ── */}
            <main className="flex-1 w-full max-w-[820px] mx-auto pt-9 pb-12 px-5 sm:px-12 animate-[fadeUp_0.5s_ease_both]">
                <h1 className="font-playfair text-[1.9rem] font-black text-ink mb-1.5">
                    Digital Story Details
                </h1>
                <p className="text-[0.83rem] text-muted mb-7">
                    <strong className="text-plum font-semibold">Step 1 of 3:</strong> Provide the essential information for your story.
                </p>

                <div className="bg-white rounded-[16px] border border-plum/[0.15] p-6 sm:p-9 shadow-[0_4px_24px_rgba(92,45,143,0.05)] flex flex-col gap-8">

                    {/* Story Language */}
                    <div className="flex flex-col gap-2.5">
                        <div className="text-[0.95rem] font-bold text-ink mb-0.5">Story Language</div>
                        <p className="text-[0.8rem] text-muted leading-[1.55]">
                            Choose the primary language in which your story is written.{" "}
                            <Link href="#" className="text-plum font-medium no-underline hover:underline">Supported languages</Link>
                        </p>
                        <div className="relative max-w-[260px]">
                            <select
                                className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 pl-3.5 pr-10 bg-[#fdfcff] outline-none transition-all duration-200 appearance-none focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white relative z-10 cursor-pointer"
                                value={form.language}
                                onChange={update("language")}
                            >
                                {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
                            </select>
                            <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted z-20 pointer-events-none" />
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* Title + Subtitle */}
                    <div className="flex flex-col gap-2.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.8rem] font-semibold text-text flex items-center gap-2">
                                    Story Title <span className="text-plum">*</span>
                                    <Link href="#" className="hidden sm:inline text-plum font-medium text-[0.72rem] no-underline hover:underline ml-auto">Story title guidelines</Link>
                                </label>
                                <input
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder="Enter your story's title"
                                    value={form.title}
                                    onChange={update("title")}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.8rem] font-semibold text-text flex items-center gap-2">
                                    Subtitle <span className="font-normal text-muted text-[0.75rem]">(Optional)</span>
                                </label>
                                <input
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder="Add an optional subtitle"
                                    value={form.subtitle}
                                    onChange={update("subtitle")}
                                />
                            </div>
                        </div>

                        <p className="text-[0.8rem] text-muted leading-[1.55] mt-1">
                            Enter your title as it appears on the story cover. Subtitles should provide additional context.
                        </p>
                        <p className="text-[0.8rem] text-muted leading-[1.55]">
                            If your story is part of a series (or will eventually be), you can add it now. Alternatively, you can add it later using the options on the Bookshelf.{" "}
                            <Link href="#" className="text-plum font-medium no-underline hover:underline">Learn how to start a series</Link>
                        </p>

                        <button className="flex items-center gap-2 bg-transparent border-[1.5px] border-plum/[0.15] rounded-xl py-2 px-4 mt-2 font-sans text-[0.83rem] font-medium text-plum cursor-pointer transition-all duration-200 w-fit hover:border-plum hover:bg-[#ede5f8]">
                            <PlusCircle size={14} />
                            Add to Collection
                        </button>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* Author name */}
                    <div className="flex flex-col gap-2.5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.8rem] font-semibold text-text flex items-center gap-2">First Name</label>
                                <input
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder=""
                                    value={form.firstName}
                                    onChange={update("firstName")}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.8rem] font-semibold text-text flex items-center gap-2">Last Name</label>
                                <input
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder=""
                                    value={form.lastName}
                                    onChange={update("lastName")}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.8rem] font-semibold text-text flex items-center gap-2">Pen Name</label>
                                <input
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder=""
                                    value={form.penName}
                                    onChange={update("penName")}
                                />
                            </div>
                        </div>
                        <p className="text-[0.8rem] text-muted leading-[1.55] mt-1">
                            Enter the primary author or contributor. Pen names are allowed. To include a middle name or prefix, add it to the first name field.{" "}
                            <Link href="#" className="text-plum font-medium no-underline hover:underline">Author guidelines</Link>
                        </p>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* Story Description */}
                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                            <div>
                                <div className="text-[0.95rem] font-bold text-ink mb-0.5">Story Description</div>
                                <p className="text-[0.8rem] text-muted leading-[1.55] max-w-[200px] sm:max-w-[400px]">
                                    Summarize your story for potential readers. This will be your product description.{" "}
                                    <Link href="#" className="text-plum font-medium no-underline hover:underline">How do I format the description?</Link>
                                </p>
                            </div>
                            <span className="text-[0.73rem] text-muted shrink-0 mt-1 sm:mt-0 font-medium">
                                {descLength} / 4000 characters
                            </span>
                        </div>
                        <textarea
                            className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-3 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white min-h-[130px] leading-[1.6] resize-y mt-1.5"
                            placeholder="Describe your story to potential readers..."
                            value={form.description}
                            onChange={(e) => {
                                if (e.target.value.length <= 4000) {
                                    setForm((prev) => ({ ...prev, description: e.target.value }));
                                }
                            }}
                            maxLength={4000}
                        />
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* Publishing Rights */}
                    <div className="flex flex-col gap-2.5">
                        <div className="text-[0.95rem] font-bold text-ink mb-0.5">Publishing Rights</div>
                        <p className="text-[0.8rem] text-muted leading-[1.55]">
                            Confirm if you own the necessary rights or if the work is in the public domain.{" "}
                            <Link href="#" className="text-plum font-medium no-underline hover:underline">What are publishing rights?</Link>
                        </p>
                        <div className="flex flex-col gap-3 mt-1.5">
                            <label className="flex items-start gap-2.5 text-[0.875rem] text-text cursor-pointer leading-[1.4]">
                                <input
                                    type="radio"
                                    name="rights"
                                    value="own"
                                    className="w-4 h-4 mt-0.5 accent-plum cursor-pointer shrink-0"
                                    checked={form.rights === "own"}
                                    onChange={update("rights")}
                                />
                                <span className="pt-px">I own the copyright and I hold the necessary publishing rights.</span>
                            </label>
                            <label className="flex items-start gap-2.5 text-[0.875rem] text-text cursor-pointer leading-[1.4]">
                                <input
                                    type="radio"
                                    name="rights"
                                    value="public"
                                    className="w-4 h-4 mt-0.5 accent-plum cursor-pointer shrink-0"
                                    checked={form.rights === "public"}
                                    onChange={update("rights")}
                                />
                                <span className="pt-px">This story is a public domain work.</span>
                            </label>
                        </div>

                        <p className="text-[0.8rem] text-muted leading-[1.55] mt-1.5">
                            Choose up to three categories that describe your story. Note: You must select your primary marketplace and audience first.{" "}
                            <Link href="#" className="text-plum font-medium no-underline hover:underline">What are categories?</Link>
                        </p>

                        <button className="flex items-center gap-2 bg-transparent border-[1.5px] border-plum/[0.15] rounded-xl py-2 px-4 font-sans text-[0.83rem] font-medium text-plum cursor-pointer mt-1 transition-all duration-200 w-fit hover:border-plum hover:bg-[#ede5f8]">
                            <Grid size={14} />
                            Choose Categories
                        </button>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* Keywords */}
                    <div className="flex flex-col gap-2.5">
                        <div className="text-[0.95rem] font-bold text-ink mb-0.5">Keywords</div>
                        <p className="text-[0.8rem] text-muted leading-[1.55]">
                            Confirm if you own the necessary rights or if the work is in the public domain.
                        </p>
                        <p className="text-[0.8rem] text-muted leading-[1.55]">
                            Enter up to 7 keywords that describe your story to help readers find it.{" "}
                            <Link href="#" className="text-plum font-medium no-underline hover:underline">How do I choose keywords?</Link>
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                            {Array.from({ length: 7 }).map((_, i) => (
                                <input
                                    key={i}
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder={`Keyword ${i + 1}`}
                                    value={form.keywords[i] || ""}
                                    onChange={updateKeyword(i)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer (above sticky actions) */}
            <footer className="bg-ink py-6 px-5 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0 relative">
                <Link href="/" className="flex items-center gap-2.5 font-playfair text-[1rem] font-bold text-white/90 no-underline">
                    <img src="/logo.png" alt="Story Hut" className="w-7 h-7 rounded-md bg-white object-contain" />
                    Story Hut
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <Link href="#" className="font-sans text-[0.78rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Terms of Service</Link>
                    <Link href="#" className="font-sans text-[0.78rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Privacy Policy</Link>
                    <Link href="#" className="font-sans text-[0.78rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Contact Us</Link>
                    <Link href="#" className="font-sans text-[0.78rem] text-white/45 no-underline transition-colors duration-200 hover:text-white/85">Support Center</Link>
                </div>
                <span className="text-[0.75rem] text-white/30 text-center sm:text-left">© 2024 Story Hut. All rights reserved.</span>
            </footer>

            {/* Sticky action bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-plum/[0.15] py-3.5 px-5 sm:px-12 flex items-center justify-end gap-3 z-50 shadow-[0_-4px_24px_rgba(92,45,143,0.07)]">
                <button className="bg-transparent border-[1.5px] border-plum/[0.15] rounded-xl py-[11px] px-6 font-sans text-[0.9rem] font-medium text-plum cursor-pointer transition-all duration-200 hover:border-plum hover:bg-[#ede5f8]">
                    Save as Draft
                </button>
                <Link href="/create/digital/upload" className="bg-plum text-white border-none rounded-xl py-[12px] px-7 font-sans text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.3)] no-underline hover:bg-plum-light hover:-translate-y-[1px]">
                    Save & Continue
                </Link>
            </div>

        </div>
    );
}
