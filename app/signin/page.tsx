"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Replace with your auth logic
        setTimeout(() => {
            setLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#ede5f8] flex flex-col items-center justify-between py-10 px-4 relative overflow-hidden">
            {/* subtle radial glow in bg */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_15%_20%,rgba(123,76,184,0.12)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_85%_80%,rgba(92,45,143,0.1)_0%,transparent_55%)]"></div>

            {/* Logo */}
            <Link href="/" className="flex flex-col items-center gap-2 no-underline animate-[fadeDown_0.5s_ease_both] relative z-10">
                <Image src="/logo.png" alt="Story Hut" width={56} height={56} className="rounded-2xl shadow-[0_8px_24px_rgba(92,45,143,0.3)] object-contain bg-white" />
                <span className="font-playfair text-[0.78rem] font-bold tracking-[0.18em] uppercase text-plum">
                    Story Hut
                </span>
            </Link>

            {/* Card */}
            <div className="bg-white rounded-[24px] pt-11 px-6 pb-8 md:px-10 md:pb-10 w-full max-w-[440px] shadow-[0_2px_4px_rgba(92,45,143,0.04),0_12px_40px_rgba(92,45,143,0.10),0_32px_80px_rgba(92,45,143,0.06)] border border-plum/5 animate-[fadeUp_0.55s_0.1s_ease_both] relative z-10 my-8">
                <h1 className="font-playfair text-[1.55rem] md:text-[1.85rem] font-black text-ink text-center leading-[1.15] mb-1.5">
                    Sign in to Story Hut
                </h1>
                <p className="text-[0.88rem] text-muted text-center mb-8 leading-[1.5]">
                    Welcome back to your world of imagination.
                </p>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="flex flex-col gap-[7px]">
                        <label className="text-[0.82rem] font-medium text-text tracking-[0.01em]" htmlFor="email">
                            Email or Mobile Number
                        </label>
                        <div className="relative">
                            <input
                                id="email"
                                type="text"
                                className="w-full py-[13px] px-4 border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] text-text bg-[#fdfcff] outline-none transition-all duration-200 appearance-none placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_4px_rgba(123,76,184,0.1)] focus:bg-white"
                                placeholder="Enter your email or phone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-[7px]">
                        <label className="text-[0.82rem] font-medium text-text tracking-[0.01em]" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="w-full py-[13px] pl-4 pr-12 border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] text-text bg-[#fdfcff] outline-none transition-all duration-200 appearance-none placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_4px_rgba(123,76,184,0.1)] focus:bg-white"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-muted grid place-items-center transition-colors duration-200 leading-none hover:text-plum"
                                onClick={() => setShowPassword((v) => !v)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff size={18} strokeWidth={1.8} /> : <Eye size={18} strokeWidth={1.8} />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot */}
                    <div className="text-right -mt-2">
                        <Link href="/forgot-password" id="forgot-password-link" className="text-[0.8rem] font-medium text-plum no-underline transition-opacity duration-200 hover:opacity-75">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3.5 px-4 mt-1 bg-plum text-white border-none rounded-xl font-sans text-[0.95rem] font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.35)] flex items-center justify-center gap-2 hover:not(:disabled):bg-plum-light hover:not(:disabled):-translate-y-[1px] hover:not(:disabled):shadow-[0_8px_24px_rgba(92,45,143,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-[spin_0.7s_linear_infinite]" />
                                Signing in…
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 text-[#c8bdd8] text-[0.78rem] my-1 before:content-[''] before:flex-1 before:h-[1px] before:bg-plum/10 after:content-[''] after:flex-1 after:h-[1px] after:bg-plum/10">
                        New to Story Hut?
                    </div>

                    {/* Create account */}
                    <Link href="/signup" className="w-full p-[13px] bg-transparent border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] font-medium text-plum cursor-pointer transition-all duration-200 no-underline block text-center hover:border-plum hover:bg-plum/5">
                        Create Account
                    </Link>
                </form>
            </div>

            {/* Footer */}
            <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 w-full max-w-[960px] pt-5 animate-[fadeUp_0.5s_0.3s_ease_both] relative z-10 text-center sm:text-left">
                <Link href="/" className="flex items-center gap-2 font-playfair text-[0.95rem] font-bold text-plum no-underline">
                    <Image src="/logo.png" alt="Story Hut" width={28} height={28} className="rounded-[7px] bg-white object-contain" />
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
      `}} />
        </div>
    );
}
