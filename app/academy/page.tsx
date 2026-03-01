"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlayCircle, GraduationCap, ChevronRight, Star, Clock, Sparkles } from "lucide-react";

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

const COURSES = [
    { id: "C1", title: "Mastering the Digital Story: From Draft to Live", author: "Elena Vance", duration: "4h 25m", rating: "4.9", students: "1.2k", level: "Beginner", thumb: "📔" },
    { id: "C2", title: "Marketing Strategies for Modern Authors", author: "Marcus Kales", duration: "6h 12m", rating: "4.8", students: "850", level: "Intermediate", thumb: "📈" },
    { id: "C3", title: "Formatting Masterclass: Print & Hardcover", author: "Sarah Jenkins", duration: "3h 45m", rating: "4.7", students: "2.1k", level: "Intermediate", thumb: "✒️" },
];

export default function AcademyHubPage() {
    const [activeNav] = useState("Story Hut Academy");

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans">
            <div className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="/account" className="text-[0.78rem] text-plum font-bold no-underline">Your Account</Link>
                <Link href="/help" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Sign Out</Link>
            </div>
            <nav className="bg-white border-b border-plum/[0.12] px-5 mobile:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 md:mr-10 shrink-0">
                    <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>
                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Reports" ? "/reports" : link === "Marketing" ? "/marketing" : link === "Story Hut Academy" ? "/academy" : "#"}
                            className={`px-4 h-[60px] flex items-center justify-center font-sans text-[0.85rem] no-underline border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap ${activeNav === link ? "text-plum font-bold border-plum" : "text-muted border-transparent hover:text-plum"}`}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>

            <main className="flex-1 w-full max-w-[1240px] mx-auto p-5 mobile:p-10">

                <section className="bg-ink rounded-[2.5rem] p-10 md:p-16 mb-12 text-white relative overflow-hidden flex flex-col items-center text-center animate-[fadeUp_0.6s_ease_both]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-plum/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-plum/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="w-16 h-16 rounded-[22px] bg-plum text-white grid place-items-center mb-8 shadow-[0_0_40px_rgba(92,45,143,0.5)] relative z-10 scale-110">
                        <GraduationCap size={40} />
                    </div>
                    <h1 className="font-playfair text-[2.5rem] md:text-[3.5rem] font-black mb-4 relative z-10 leading-tight">Story Hut <span className="text-plum">Academy</span></h1>
                    <p className="text-[1.1rem] text-white/50 max-w-[600px] mb-10 leading-relaxed relative z-10">The ultimate learning playground for independent authors to master publishing, writing, and growth.</p>

                    <div className="flex max-w-[500px] w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md relative z-10 focus-within:border-plum transition-all shadow-2xl">
                        <input className="flex-1 bg-transparent border-none outline-none py-4 px-6 text-[1rem] text-white placeholder:text-white/30" placeholder="Search for courses, guides..." />
                        <button className="bg-plum text-white border-none py-3 px-8 font-black text-[0.95rem] m-1.5 rounded-xl hover:bg-plum-light transition-all shadow-lg">Start Learning</button>
                    </div>
                </section>

                {/* Course Grid */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-playfair text-[1.8rem] font-bold text-ink m-0">Explore Featured Courses</h2>
                    <div className="flex gap-3">
                        {["All", "Writing", "Publishing", "Marketing"].map((cat) => (
                            <button key={cat} className={`px-4 py-2 rounded-xl text-[0.85rem] font-bold border-none cursor-pointer transition-all ${cat === "All" ? "bg-plum text-white shadow-lg" : "bg-white border border-plum/[0.12] text-muted hover:text-plum"}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {COURSES.map((course) => (
                        <div key={course.id} className="bg-white rounded-3xl border border-plum/[0.12] overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(92,45,143,0.08)] transition-all cursor-pointer group animate-[fadeUp_0.5s_ease_both]">
                            <div className="h-[200px] bg-[#faf8fd] flex items-center justify-center text-[5rem] group-hover:scale-110 transition-transform duration-500">
                                {course.thumb}
                            </div>
                            <div className="p-7">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[0.65rem] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-plum/5 text-plum">{course.level}</span>
                                    <div className="flex items-center gap-1 text-[0.75rem] font-bold text-[#e8a830]">
                                        <Star size={14} fill="currentColor" /> {course.rating}
                                    </div>
                                </div>
                                <h3 className="text-[1.1rem] font-black text-ink mb-3 leading-[1.4] group-hover:text-plum transition-colors line-clamp-2">{course.title}</h3>
                                <div className="text-[0.8rem] text-muted mb-6">By <span className="font-bold text-ink">{course.author}</span></div>
                                <div className="flex items-center justify-between pt-5 border-t border-plum/[0.05]">
                                    <div className="flex items-center gap-4 text-muted text-[0.78rem] font-bold">
                                        <span className="flex items-center gap-1.5"><Clock size={14} /> {course.duration}</span>
                                        <span className="flex items-center gap-1.5"><PlayCircle size={14} /> {course.students}</span>
                                    </div>
                                    <ChevronRight size={18} className="text-plum opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-plum/5 border border-plum/10 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-[500px] text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum/10 text-plum font-black text-[0.65rem] uppercase tracking-widest mb-4">
                            <Sparkles size={12} /> Personalized Learning
                        </div>
                        <h2 className="font-playfair text-[2rem] font-black text-ink mb-4 leading-tight">Can&apos;t decide where to begin?</h2>
                        <p className="text-[1rem] text-muted leading-relaxed">Take our 2-minute &quot;Author Path&quot; quiz and get a customized learning roadmap tailored to your specific publishing goals.</p>
                    </div>
                    <button className="bg-plum text-white border-none rounded-[1.5rem] py-5 px-12 font-black text-[1.1rem] shadow-[0_12px_32px_rgba(92,45,143,0.3)] hover:bg-plum-light hover:-translate-y-1 transition-all shrink-0">Take Author Path Quiz</button>
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
