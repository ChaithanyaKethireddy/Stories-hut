"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, UserCheck, ShieldCheck, HelpCircle, ChevronRight, FileText, Camera, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

export default function IdentityVerificationPage() {
    const [activeNav] = useState("Your Account");
    const [step, setStep] = useState(1);
    const [verified, setVerified] = useState(false);

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
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

            <main className="flex-1 w-full max-w-[1000px] mx-auto p-5 sm:p-10 animate-[fadeUp_0.5s_ease_both]">

                <div className="flex flex-col gap-6 mb-10">
                    <Link href="/dashboard" className="flex items-center gap-2 text-plum font-bold text-[0.85rem] no-underline hover:underline">
                        <ArrowLeft size={16} />
                        Back to Dashboard
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-plum/5 text-plum grid place-items-center shrink-0 border border-plum/[0.1]">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <h1 className="font-playfair text-[2rem] font-black text-ink mb-1.5 leading-tight">Identity Verification</h1>
                                <p className="text-muted text-[1rem]">To comply with international regulations and ensure secure payments, please verify your author identity.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">

                    <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-plum/[0.12] shadow-[0_8px_32px_rgba(92,45,143,0.03)] flex flex-col items-center">

                        {!verified ? (
                            <>
                                <div className="flex items-center gap-4 mb-10 w-full max-w-[400px]">
                                    <div className={`flex-1 h-1.5 rounded-full ${step >= 1 ? "bg-plum" : "bg-plum/10"}`} />
                                    <div className={`flex-1 h-1.5 rounded-full ${step >= 2 ? "bg-plum" : "bg-plum/10"}`} />
                                    <div className={`flex-1 h-1.5 rounded-full ${step >= 3 ? "bg-plum" : "bg-plum/10"}`} />
                                </div>

                                {step === 1 && (
                                    <div className="w-full max-w-[500px] flex flex-col items-center text-center animate-[fadeUp_0.4s_ease_both]">
                                        <div className="text-[1.3rem] font-black text-ink mb-3">Confirm Legal Identity</div>
                                        <p className="text-[0.9rem] text-muted mb-8 leading-[1.6]">Please ensure the name you provide matches your government-issued ID exactly.</p>

                                        <div className="w-full flex flex-col gap-5 text-left mb-8">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[0.82rem] font-bold text-ink">Full Legal Name</label>
                                                <input className="w-full bg-[#faf8fd] border border-plum/[0.12] rounded-xl p-3.5 font-sans text-[0.9rem] outline-none focus:border-plum transition-all" placeholder="Enter full legal name" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[0.82rem] font-bold text-ink">Country of Residence</label>
                                                <select className="w-full bg-[#faf8fd] border border-plum/[0.12] rounded-xl p-3.5 font-sans text-[0.9rem] outline-none focus:border-plum transition-all cursor-pointer">
                                                    <option>United States</option>
                                                    <option>United Kingdom</option>
                                                    <option>India</option>
                                                    <option>Canada</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full bg-plum text-white border-none rounded-xl py-4 font-black shadow-[0_8px_24px_rgba(92,45,143,0.3)] hover:bg-plum-light hover:-translate-y-px transition-all"
                                        >
                                            Next: Upload Documents
                                        </button>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="w-full max-w-[500px] flex flex-col items-center text-center animate-[fadeUp_0.4s_ease_both]">
                                        <div className="text-[1.3rem] font-black text-ink mb-3 text-center">Upload Photo ID</div>
                                        <p className="text-[0.9rem] text-muted mb-8 text-center leading-[1.6]">Upload a clear photo of your Pasport, Driver's License, or National ID.</p>

                                        <div className="w-full h-[220px] rounded-2xl border-2 border-dashed border-plum/20 bg-plum/5 flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-plum/10 transition-all mb-8 group">
                                            <div className="w-14 h-14 rounded-full bg-white text-plum grid place-items-center mb-4 shadow-sm group-hover:scale-110 transition-all">
                                                <Camera size={24} />
                                            </div>
                                            <div className="text-[0.9rem] font-bold text-plum mb-1">Click to Capture or Upload</div>
                                            <div className="text-[0.75rem] text-muted">Supports JPG, PNG up to 10MB</div>
                                        </div>

                                        <div className="flex gap-4 w-full">
                                            <button
                                                onClick={() => setStep(1)}
                                                className="flex-1 bg-transparent border-[1.5px] border-plum text-plum font-black py-4 rounded-xl hover:bg-[#ede5f8] transition-all"
                                            >
                                                Back
                                            </button>
                                            <button
                                                onClick={() => setStep(3)}
                                                className="flex-1 bg-plum text-white border-none rounded-xl py-4 font-black shadow-[0_8px_24px_rgba(92,45,143,0.3)] hover:bg-plum-light hover:-translate-y-px transition-all"
                                            >
                                                Submit for Review
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="w-full max-w-[500px] flex flex-col items-center text-center animate-[fadeUp_0.4s_ease_both]">
                                        <div className="w-16 h-16 rounded-full bg-plum/5 text-plum grid place-items-center mb-6">
                                            <Clock size={32} />
                                        </div>
                                        <div className="text-[1.4rem] font-black text-ink mb-3 text-center">Verification in Progress</div>
                                        <p className="text-[0.9rem] text-muted mb-10 text-center leading-[1.7]">
                                            Thank you for submitting your identity documents. Our security team will review them within <strong className="text-ink">24-48 hours</strong>. You'll receive an email notification once your verification is complete.
                                        </p>

                                        <button
                                            onClick={() => setVerified(true)}
                                            className="w-full bg-[#fdfcff] border border-plum/10 text-plum font-bold py-4 rounded-xl hover:bg-[#ede5f8] transition-all"
                                        >
                                            Close Identity Manager
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="w-full max-w-[500px] flex flex-col items-center text-center animate-[fadeUp_0.4s_ease_both]">
                                <div className="w-20 h-20 rounded-full bg-[#6bcb77]/10 text-[#3a9a48] grid place-items-center mb-6 shadow-sm">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div className="text-[1.8rem] font-black text-ink mb-2">Author Verified</div>
                                <p className="text-[0.95rem] text-muted mb-8 leading-[1.6]">Your identity has been successfully verified. You are now eligible for all premium marketplace features and payouts.</p>
                                <div className="bg-[#faf8fd] border border-plum/10 rounded-2xl p-6 w-full text-left mb-8 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-plum/5 text-ink grid place-items-center shrink-0">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[0.85rem] font-bold text-ink">Verification Report</div>
                                        <div className="text-[0.72rem] text-muted">ID #92183-SH Verified on Feb 27, 2026</div>
                                    </div>
                                    <ChevronRight size={18} className="ml-auto text-muted" />
                                </div>
                                <Link href="/dashboard" className="w-full bg-plum text-white border-none rounded-xl py-4 font-black shadow-[0_8px_24px_rgba(92,45,143,0.35)] hover:bg-plum-light hover:-translate-y-px transition-all no-underline inline-block">Return to Dashboard</Link>
                            </div>
                        )}
                    </div>

                    <aside className="flex flex-col gap-6 ">
                        <div className="bg-ink rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-plum/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                            <h3 className="text-[1.1rem] font-bold mb-4 relative z-10">Why Verify?</h3>
                            <ul className="space-y-4 list-none m-0 p-0 relative z-10">
                                {[
                                    { text: "Secure payments to your bank." },
                                    { text: "Prevent fraudulent account use." },
                                    { text: "Comply with tax regulations." },
                                    { text: "Gain trust badges on profile." },
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-[0.82rem] text-white/50 leading-relaxed">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e8a830] shrink-0" />
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white border border-plum/[0.12] rounded-3xl p-8 shadow-sm">
                            <h4 className="text-[1rem] font-bold text-ink mb-6 flex items-center gap-2">
                                <HelpCircle size={20} className="text-plum" /> Verification Help
                            </h4>
                            <div className="space-y-5">
                                {[
                                    "Accepted document types",
                                    "Issues with photo quality",
                                    "Verification timeline",
                                    "Privacy of your data",
                                ].map((q) => (
                                    <Link key={q} href="#" className="flex items-center justify-between group no-underline">
                                        <span className="text-[0.82rem] text-muted group-hover:text-plum transition-colors">{q}</span>
                                        <ChevronRight size={14} className="text-muted group-hover:text-plum" />
                                    </Link>
                                ))}
                            </div>
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
