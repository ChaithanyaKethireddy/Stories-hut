"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!form.fullName.trim()) errs.fullName = "Full name is required.";
        if (!form.email.includes("@")) errs.email = "Enter a valid email address.";

        if (form.password.length < 8) {
            errs.password = "Password must be at least 8 characters.";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password) || !/\d/.test(form.password)) {
            errs.password = "Must include a symbol and a number.";
        }

        if (form.confirmPassword !== form.password) {
            errs.confirmPassword = "Passwords do not match.";
        }

        return errs;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setLoading(true);
        // Replace with your auth/registration logic
        setTimeout(() => {
            setLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    const passwordStrength = () => {
        const p = form.password;
        if (!p) return 0;
        let score = 0;
        if (p.length >= 8) score++;
        if (/\d/.test(p)) score++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(p)) score++;
        if (p.length >= 12) score++;
        return score; // 0–4
    };

    const strength = passwordStrength();
    const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
    const strengthColor = ["", "#e8a830", "#e8a830", "#6bcb77", "#5c2d8f"][strength];

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
            <div className="bg-white rounded-[24px] pt-11 px-6 pb-8 md:px-10 md:pb-10 w-full max-w-[460px] shadow-[0_2px_4px_rgba(92,45,143,0.04),0_12px_40px_rgba(92,45,143,0.10),0_32px_80px_rgba(92,45,143,0.06)] border border-plum/5 animate-[fadeUp_0.55s_0.1s_ease_both] relative z-10 my-8">
                <h1 className="font-playfair text-[1.55rem] md:text-[1.85rem] font-black text-ink text-center leading-[1.2] mb-8">
                    Create Your Story Hut Account
                </h1>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>

                    {/* Full Name */}
                    <div className="flex flex-col gap-[7px]">
                        <label className="text-[0.82rem] font-medium text-text tracking-[0.01em]" htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            className={`w-full py-[13px] px-4 border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] text-text bg-[#fdfcff] outline-none transition-all duration-200 appearance-none placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_4px_rgba(123,76,184,0.1)] focus:bg-white ${errors.fullName ? "border-[#c4687a] focus:shadow-[0_0_0_4px_rgba(196,104,122,0.1)]" : ""}`}
                            placeholder="Jane Doe"
                            value={form.fullName}
                            onChange={update("fullName")}
                            autoComplete="name"
                        />
                        {errors.fullName && <span className="text-[0.76rem] text-[#c4687a] -mt-1 flex items-center gap-1 before:content-['⚠'] before:text-[0.7rem]">{errors.fullName}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-[7px]">
                        <label className="text-[0.82rem] font-medium text-text tracking-[0.01em]" htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            className={`w-full py-[13px] px-4 border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] text-text bg-[#fdfcff] outline-none transition-all duration-200 appearance-none placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_4px_rgba(123,76,184,0.1)] focus:bg-white ${errors.email ? "border-[#c4687a] focus:shadow-[0_0_0_4px_rgba(196,104,122,0.1)]" : ""}`}
                            placeholder="jane@example.com"
                            value={form.email}
                            onChange={update("email")}
                            autoComplete="email"
                        />
                        {errors.email && <span className="text-[0.76rem] text-[#c4687a] -mt-1 flex items-center gap-1 before:content-['⚠'] before:text-[0.7rem]">{errors.email}</span>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-[7px]">
                        <label className="text-[0.82rem] font-medium text-text tracking-[0.01em]" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className={`w-full py-[13px] pl-4 pr-12 border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] text-text bg-[#fdfcff] outline-none transition-all duration-200 appearance-none placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_4px_rgba(123,76,184,0.1)] focus:bg-white ${errors.password ? "border-[#c4687a] focus:shadow-[0_0_0_4px_rgba(196,104,122,0.1)]" : ""}`}
                                placeholder="Min. 8 characters"
                                value={form.password}
                                onChange={update("password")}
                                autoComplete="new-password"
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

                        {/* Strength bar */}
                        {form.password && (
                            <div className="flex flex-col gap-1.5 -mt-1">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="flex-1 h-[3px] rounded-sm bg-plum/10 transition-colors duration-300"
                                            style={{ background: strength >= i ? strengthColor : undefined }}
                                        />
                                    ))}
                                </div>
                                <span className="text-[0.72rem] font-medium transition-colors duration-300" style={{ color: strengthColor }}>
                                    {strengthLabel}
                                </span>
                            </div>
                        )}

                        {errors.password
                            ? <span className="text-[0.76rem] text-[#c4687a] -mt-1 flex items-center gap-1 before:content-['⚠'] before:text-[0.7rem]">{errors.password}</span>
                            : <span className="text-[0.76rem] text-muted -mt-1">Must include a symbol and a number</span>
                        }
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-[7px]">
                        <label className="text-[0.82rem] font-medium text-text tracking-[0.01em]" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className={`w-full py-[13px] px-4 border-[1.5px] border-plum/[0.18] rounded-xl font-sans text-[0.9rem] text-text bg-[#fdfcff] outline-none transition-all duration-200 appearance-none placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_4px_rgba(123,76,184,0.1)] focus:bg-white ${errors.confirmPassword ? "border-[#c4687a] focus:shadow-[0_0_0_4px_rgba(196,104,122,0.1)]" : ""}`}
                            placeholder="Repeat your password"
                            value={form.confirmPassword}
                            onChange={update("confirmPassword")}
                            autoComplete="new-password"
                        />
                        {errors.confirmPassword && (
                            <span className="text-[0.76rem] text-[#c4687a] -mt-1 flex items-center gap-1 before:content-['⚠'] before:text-[0.7rem]">{errors.confirmPassword}</span>
                        )}
                    </div>

                    {/* Submit */}
                    <button type="submit" className="w-full py-3.5 px-4 mt-1 bg-plum text-white border-none rounded-xl font-sans text-[0.95rem] font-semibold cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(92,45,143,0.35)] flex items-center justify-center gap-2 hover:not(:disabled):bg-plum-light hover:not(:disabled):-translate-y-[1px] hover:not(:disabled):shadow-[0_8px_24px_rgba(92,45,143,0.4)] disabled:opacity-70 disabled:cursor-not-allowed" disabled={loading}>
                        {loading ? (
                            <><div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-[spin_0.7s_linear_infinite]" /> Creating account…</>
                        ) : (
                            "Join the Hut"
                        )}
                    </button>

                    {/* Legal */}
                    <p className="text-[0.78rem] text-muted text-center leading-[1.6]">
                        By creating an account, you agree to our{" "}
                        <Link href="/terms" className="text-plum font-medium no-underline hover:underline">Terms of Service</Link> and{" "}
                        <Link href="/privacy" className="text-plum font-medium no-underline hover:underline">Privacy Policy</Link>.
                    </p>

                    {/* Divider + Sign in */}
                    <div className="flex items-center gap-3 text-[#c8bdd8] text-[0.78rem] before:content-[''] before:flex-1 before:h-[1px] before:bg-plum/10 after:content-[''] after:flex-1 after:h-[1px] after:bg-plum/10" />
                    <p className="text-center text-[0.875rem] text-muted">
                        Already have an account?
                        <Link href="/signin" className="text-plum font-semibold no-underline ml-1 hover:underline">Sign In</Link>
                    </p>

                </form>
            </div>

            {/* Footer */}
            <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 w-full max-w-[960px] pt-5 animate-[fadeUp_0.5s_0.3s_ease_both] relative z-10 text-center sm:text-left">
                <Link href="/" className="flex items-center gap-2 font-playfair text-[0.95rem] font-bold text-plum no-underline">
                    <Image src="/logo.png" alt="Story Hut" width={28} height={28} className="rounded-[7px] bg-white object-contain" />
                    Story Hut
                </Link>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    <Link href="/terms" className="text-[0.8rem] text-muted no-underline transition-colors duration-200 hover:text-plum">Terms</Link>
                    <Link href="/privacy" className="text-[0.8rem] text-muted no-underline transition-colors duration-200 hover:text-plum">Privacy</Link>
                    <Link href="/help" className="text-[0.8rem] text-muted no-underline transition-colors duration-200 hover:text-plum">Help</Link>
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
