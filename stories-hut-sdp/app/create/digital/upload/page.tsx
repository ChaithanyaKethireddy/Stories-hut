"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Upload, PenTool, Image as ImageIcon, MonitorSmartphone, Check, FileText } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];
const STEPS = ["1. Story Details", "2. Upload Content", "3. Publishing Settings"];

export default function UploadContentPage() {
    const [activeNav, setActiveNav] = useState("Bookshelf");
    const [drm, setDrm] = useState("enable");
    const [aiDisclosure, setAiDisclosure] = useState("no");
    const [accessibility, setAccessibility] = useState("standard");
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isbn, setIsbn] = useState("");
    const [publisher, setPublisher] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) setUploadedFile(file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setUploadedFile(file);
    };

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans text-text relative pb-0">
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
            <div className="bg-white border-b border-plum/[0.15] px-5 sm:px-12 flex items-stretch justify-center overflow-x-auto no-scrollbar">
                {STEPS.map((step, i) => (
                    <div
                        key={step}
                        className={`flex items-center gap-2.5 py-4 px-4 sm:px-8 text-[0.83rem] font-medium border-b-[2.5px] transition-colors duration-200 whitespace-nowrap ${i === 1
                            ? "text-plum font-semibold border-plum"
                            : i < 1
                                ? "text-[#3a9a48] border-transparent"
                                : "text-muted border-transparent"
                            }`}
                    >
                        <div className={`w-[22px] h-[22px] rounded-full grid place-items-center text-[0.7rem] font-bold shrink-0 ${i === 1 ? "bg-plum text-white" : i < 1 ? "bg-[#3a9a48] text-white" : "bg-plum/10 text-muted"
                            }`}>
                            {i < 1 ? <Check size={12} strokeWidth={3} /> : i + 1}
                        </div>
                        {step.replace(/^\d+\.\s/, "")}
                    </div>
                ))}
            </div>

            {/* ── MAIN ── */}
            <main className="flex-1 w-full max-w-[860px] mx-auto pt-9 pb-12 px-5 sm:px-12 animate-[fadeUp_0.5s_ease_both]">

                <div className="bg-white rounded-[16px] border border-plum/[0.15] p-6 sm:p-9 shadow-[0_4px_24px_rgba(92,45,143,0.05)] flex flex-col gap-7">

                    {/* ── Manuscript Upload ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-3.5">Manuscript Upload</h2>
                        <div
                            className={`border-2 border-dashed rounded-xl p-6 sm:py-9 sm:px-6 flex flex-col items-center text-center gap-4 transition-all duration-200 cursor-pointer ${isDragging ? "border-plum bg-[#ede5f8]" : "border-plum/25 hover:border-plum-light"
                                }`}
                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".docx,.epub,.pdf,.doc,.txt"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            {uploadedFile ? (
                                <div className="text-[0.82rem] font-semibold text-[#3a9a48] flex items-center gap-1.5">
                                    <Check size={16} strokeWidth={2.5} />
                                    {uploadedFile.name}
                                </div>
                            ) : (
                                <p className="text-[0.875rem] text-muted">
                                    Upload your story file (.docx, .epub, or .pdf recommended)
                                </p>
                            )}
                            <button
                                className="bg-plum text-white border-none rounded-xl py-3 px-7 font-sans text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.28)] flex items-center gap-2 hover:bg-plum-light hover:-translate-y-[1px]"
                                onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                            >
                                <Upload size={15} strokeWidth={2} />
                                Upload Manuscript
                            </button>
                            <div className="flex items-center gap-4 text-[0.8rem]" onClick={(e) => e.stopPropagation()}>
                                <Link href="#" className="text-plum font-medium no-underline hover:underline">See all supported file types</Link>
                                <span className="text-plum/20">|</span>
                                <Link href="#" className="text-plum font-medium no-underline hover:underline">Formatting Guide</Link>
                            </div>
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* ── DRM + AI ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* DRM */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-1">
                                <h2 className="text-[1rem] font-bold text-ink">Digital Content Protection</h2>
                                <Link href="#" className="text-[0.78rem] text-plum font-medium no-underline hover:underline">Learn more</Link>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-2">
                                <label className="flex items-start gap-2.5 text-[0.875rem] text-text cursor-pointer">
                                    <input type="radio" name="drm" value="enable" className="w-4 h-4 mt-0.5 accent-plum cursor-pointer shrink-0" checked={drm === "enable"} onChange={() => setDrm("enable")} />
                                    <span className="pt-px">Enable Content Protection (DRM)</span>
                                </label>
                                <label className="flex items-start gap-2.5 text-[0.875rem] text-text cursor-pointer">
                                    <input type="radio" name="drm" value="disable" className="w-4 h-4 mt-0.5 accent-plum cursor-pointer shrink-0" checked={drm === "disable"} onChange={() => setDrm("disable")} />
                                    <span className="pt-px">Disable Content Protection</span>
                                </label>
                            </div>
                        </div>

                        {/* AI Disclosure */}
                        <div className="flex flex-col">
                            <h2 className="text-[1rem] font-bold text-ink mb-2.5">AI Usage Disclosure</h2>
                            <p className="text-[0.8rem] text-muted leading-[1.6] mb-2.5">
                                Story Hut is collecting information about the use of Artificial Intelligence (AI) tools in creating content.{" "}
                                <Link href="#" className="text-plum font-medium no-underline hover:underline">What is AI-generated content?</Link>
                            </p>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2.5 text-[0.875rem] text-text cursor-pointer">
                                    <input type="radio" name="ai" value="yes" className="w-4 h-4 accent-plum cursor-pointer shrink-0" checked={aiDisclosure === "yes"} onChange={() => setAiDisclosure("yes")} />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center gap-2.5 text-[0.875rem] text-text cursor-pointer">
                                    <input type="radio" name="ai" value="no" className="w-4 h-4 accent-plum cursor-pointer shrink-0" checked={aiDisclosure === "no"} onChange={() => setAiDisclosure("no")} />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* ── Story Cover Design ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-3.5">Story Cover Design</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">

                            {/* Design Online */}
                            <div className="border-[1.5px] border-plum/[0.15] rounded-xl p-5 sm:p-6 flex flex-col gap-2.5 transition-all duration-200 cursor-pointer relative overflow-hidden group hover:border-plum/30 hover:shadow-[0_8px_28px_rgba(92,45,143,0.1)] hover:-translate-y-1">
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-plum to-plum-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                                <div className="w-11 h-11 rounded-xl bg-[#ede5f8] text-plum grid place-items-center shrink-0">
                                    <PenTool size={20} strokeWidth={1.7} />
                                </div>
                                <div className="text-[0.9rem] font-bold text-ink">Design Online</div>
                                <p className="text-[0.8rem] text-muted leading-[1.5] flex-1">Use Story Hut's Cover Creator to design your masterpiece.</p>
                                <button className="bg-transparent border-[1.5px] border-plum/[0.15] rounded-lg py-2 px-4 font-sans text-[0.82rem] font-semibold text-plum cursor-pointer transition-all duration-200 w-fit hover:border-plum hover:bg-[#ede5f8]">
                                    Launch Cover Creator
                                </button>
                            </div>

                            {/* Upload Cover */}
                            <div className="border-[1.5px] border-plum/[0.15] rounded-xl p-5 sm:p-6 flex flex-col gap-2.5 transition-all duration-200 cursor-pointer relative overflow-hidden group hover:border-plum/30 hover:shadow-[0_8px_28px_rgba(92,45,143,0.1)] hover:-translate-y-1">
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-plum to-plum-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                                <div className="w-11 h-11 rounded-xl bg-[#ede5f8] text-plum grid place-items-center shrink-0">
                                    <ImageIcon size={20} strokeWidth={1.7} />
                                </div>
                                <div className="text-[0.9rem] font-bold text-ink">Upload Cover</div>
                                <p className="text-[0.8rem] text-muted leading-[1.5] flex-1">Already have a cover? Upload your JPG or TIFF file here.</p>
                                <Link href="#" className="text-[0.78rem] font-medium text-plum no-underline hover:underline mt-auto pt-1">
                                    Required cover specifications
                                </Link>
                            </div>

                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* ── Online Preview ── */}
                    <div className="bg-[#faf8fd] border border-plum/[0.15] rounded-xl p-5 sm:p-[20px_24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
                        <div className="flex flex-col">
                            <div className="text-[0.9rem] font-bold text-ink mb-1">Online Preview and Quality Check</div>
                            <p className="text-[0.8rem] text-muted">Check how your story looks on different devices before proceeding.</p>
                        </div>
                        <button className="bg-transparent border-[1.5px] border-plum/[0.15] rounded-lg py-2.5 px-5 font-sans text-[0.83rem] font-semibold text-plum cursor-pointer transition-all duration-200 whitespace-nowrap shrink-0 hover:border-plum hover:bg-[#ede5f8]">
                            Launch Previewer
                        </button>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* ── ISBN & Publisher ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-3.5">
                            ISBN &amp; Publisher <span className="font-normal text-muted">(Optional)</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-1">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.8rem] font-semibold text-text flex items-center gap-2">
                                    ISBN <Link href="#" className="font-medium text-[0.75rem] text-plum no-underline hover:underline">What is an ISBN?</Link>
                                </label>
                                <input
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder="e.g. 978-3-16-148410-0"
                                    value={isbn}
                                    onChange={(e) => setIsbn(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.8rem] font-semibold text-text flex items-center gap-2">
                                    Publisher <Link href="#" className="font-medium text-[0.75rem] text-plum no-underline hover:underline hidden sm:inline">Publisher info</Link>
                                </label>
                                <input
                                    className="w-full font-sans text-[0.875rem] text-text border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-3.5 bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)] focus:bg-white"
                                    type="text"
                                    placeholder="Your Publishing House"
                                    value={publisher}
                                    onChange={(e) => setPublisher(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="border-t border-plum/[0.15] border-x-0 border-b-0 m-0" />

                    {/* ── Accessibility ── */}
                    <div className="flex flex-col">
                        <h2 className="text-[1rem] font-bold text-ink mb-1.5">Accessibility</h2>
                        <Link href="#" className="text-[0.8rem] font-medium text-plum no-underline hover:underline mb-3.5 block">
                            Learn what it means to have accessible images
                        </Link>
                        <div className="flex flex-col gap-3.5 mt-1">
                            <label className="flex items-start gap-2.5 cursor-pointer group">
                                <input
                                    type="radio" name="accessibility" value="standard"
                                    className="w-4 h-4 mt-0.5 accent-plum cursor-pointer shrink-0"
                                    checked={accessibility === "standard"}
                                    onChange={() => setAccessibility("standard")}
                                />
                                <div className="flex flex-col">
                                    <span className="text-[0.875rem] font-semibold text-text">Standard formatting</span>
                                    <span className="text-[0.78rem] text-muted mt-0.5 leading-[1.5]">Includes basic accessibility features for maximum device compatibility.</span>
                                </div>
                            </label>
                            <label className="flex items-start gap-2.5 cursor-pointer group">
                                <input
                                    type="radio" name="accessibility" value="enhanced"
                                    className="w-4 h-4 mt-0.5 accent-plum cursor-pointer shrink-0"
                                    checked={accessibility === "enhanced"}
                                    onChange={() => setAccessibility("enhanced")}
                                />
                                <div className="flex flex-col">
                                    <span className="text-[0.875rem] font-semibold text-text">Enhanced Accessibility with Image Descriptions</span>
                                    <span className="text-[0.78rem] text-muted mt-0.5 leading-[1.5]">Optimized for screen readers with support for alternative text descriptions for all images and high-contrast rendering.</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* ── Bottom Actions ── */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-1 pt-5 border-t border-plum/[0.15]">
                        <button className="w-full sm:w-auto bg-transparent border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-5 font-sans text-[0.875rem] font-medium text-text cursor-pointer transition-all duration-200 hover:border-plum hover:text-plum order-2 sm:order-1" onClick={() => window.history.back()}>
                            ← Back to Details
                        </button>
                        <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
                            <button className="flex-1 sm:flex-none bg-transparent border-[1.5px] border-plum/[0.15] rounded-xl py-2.5 px-5 font-sans text-[0.875rem] font-medium text-plum cursor-pointer transition-all duration-200 hover:border-plum hover:bg-[#ede5f8]">
                                Save as Draft
                            </button>
                            <Link href="/create/digital/publish" className="flex-1 sm:flex-none text-center bg-plum text-white border-none rounded-xl py-2.5 px-6 font-sans text-[0.875rem] font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.28)] no-underline hover:bg-plum-light hover:-translate-y-[1px]">
                                Save &amp; Continue
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-ink py-6 px-5 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0 mt-12">
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

        </div>
    );
}
