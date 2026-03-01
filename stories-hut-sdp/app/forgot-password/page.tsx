"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, ChevronRight } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#ede5f8] flex flex-col items-center justify-between py-10 px-4 relative overflow-hidden">
            {/* subtle radial glow in bg */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_15%_20%,rgba(123,76,184,0.12)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_85%_80%,rgba(92,45,143,0.1)_0%,transparent_55%)]"></div>

            {/* Logo */}
            <Link href="/" className="flex flex-col items-center gap-2 no-underline animate-[fadeDown_0.5s_ease_both] relative z-10">
                <img src="/logo.png" alt="Story Hut" className="w-14 h-14 rounded-2xl shadow-[0_8px_24px_rgba(92,45,143,0.3)] object-contain bg-white" />
                <span className="font-playfair text-[0.78rem] font-bold tracking-[0.18em] uppercase text-plum">
                    Story Hut
                </span>
            </Link>

            {/* Card */}
            <div className="bg-white rounded-[24px] pt-11 px-6 pb-8 md:px-10 md:pb-10 w-full max-w-[440px] shadow-[0_2px_4px_rgba(92,45,143,0.04),0_12px_40px_rgba(92,45,143,0.10),0_32px_80px_rgba(92,45,143,0.06)] border border-plum/5 animate-[fadeUp_0.55s_0.1s_ease_both] relative z-10 my-8">
                {!sent ? (
                    <>
                        <h1 className="font-playfair text-[1.55rem] md:text-[1.85rem] font-black text-ink text-center leading-[1.15] mb-1.5">
                            Forgot Password?
                        </h1>
                        <p className="text-[0.88rem] text-muted text-center mb-8 leading-[1.5]">
                            No worries! Enter your email and we'll send you reset instructions.
                        </p>

                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-[7px]">
                                <label className="text-[0.82rem] font-medium text-text tracking-[0.01em]" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full py-[13px] px-4 border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] text-text bg-[#fdfcff] outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_4px_rgba(123,76,184,0.1)] focus:bg-white"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 px-4 mt-1 bg-plum text-white border-none rounded-xl font-sans text-[0.95rem] font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.35)] flex items-center justify-center gap-2 hover:not(:disabled):bg-plum-light hover:not(:disabled):-translate-y-[1px] hover:not(:disabled):shadow-[0_8px_24px_rgba(92,45,143,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-[spin_0.7s_linear_infinite]" />
                                        Sending Instructions…
                                    </>
                                ) : (
                                    "Send Instructions"
                                )}
                            </button>

                            <Link href="/signin" className="flex items-center justify-center gap-2 text-[0.85rem] font-medium text-plum no-underline mt-2 transition-opacity hover:opacity-75">
                                <ArrowLeft size={16} />
                                Back to Sign In
                            </Link>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <div className="w-16 h-16 bg-[#6bcb77]/10 rounded-full grid place-items-center mx-auto mb-6 text-[#3a9a48]">
                            <Mail size={32} />
                        </div>
                        <h1 className="font-playfair text-[1.55rem] md:text-[1.85rem] font-black text-ink mb-1.5">
                            Check Your Email
                        </h1>
                        <p className="text-[0.88rem] text-muted mb-8 leading-[1.5]">
                            We've sent reset instructions to <strong className="text-ink">{email}</strong>.
                        </p>
                        <button
                            onClick={() => setSent(false)}
                            className="w-full py-3.5 px-4 bg-plum text-white border-none rounded-xl font-sans text-[0.95rem] font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.35)] hover:bg-plum-light hover:-translate-y-[1px]"
                        >
                            Resend Email
                        </button>
                        <Link href="/signin" className="flex items-center justify-center gap-2 text-[0.85rem] font-medium text-plum no-underline mt-6 transition-opacity hover:opacity-75">
                            <ArrowLeft size={16} />
                            Back to Sign In
                        </Link>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 w-full max-w-[960px] pt-5 animate-[fadeUp_0.5s_0.3s_ease_both] relative z-10 text-center sm:text-left text-white/40">
                <Link href="/" className="flex items-center gap-2 font-playfair text-[0.95rem] font-bold text-plum no-underline">
                    <img src="/logo.png" alt="Story Hut" className="w-7 h-7 rounded-[7px] bg-white object-contain" />
                    Story Hut
                </Link>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    <Link href="/terms" className="text-[0.8rem] text-muted no-underline transition-colors duration-200 hover:text-plum">Terms of Service</Link>
                    <Link href="/privacy" className="text-[0.8rem] text-muted no-underline transition-colors duration-200 hover:text-plum">Privacy Policy</Link>
                    <Link href="/help" className="text-[0.8rem] text-muted no-underline transition-colors duration-200 hover:text-plum">Help Center</Link>
                </div>
                <span className="text-[0.78rem] text-[#b9aec9]">© 2025 Story Hut. All rights reserved.</span>
            </footer>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}} />
        </div>
    );
}
