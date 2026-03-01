"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Filter, CheckCircle2, MoreVertical, Eye, PenBox, PenTool } from "lucide-react";

const BOOKS = [
    {
        id: 1,
        title: "Whispers of the Eternal Woods",
        author: "Elena Thorne",
        formats: ["eBook", "Paperback", "Hardcover"],
        price: "$14.99",
        status: "Live",
        updated: "Updated 2 days ago",
        views: "1.2k Views",
        color: "#b8d8d0",
        coverBg: "#5a9e94",
    },
    {
        id: 2,
        title: "Neon Horizons",
        author: "Marcus Vane",
        formats: ["eBook", "Paperback", "Hardcover"],
        price: "$0.00",
        status: "In Review",
        updated: "Saved 5 hours ago",
        views: "Draft",
        color: "#f2e0b0",
        coverBg: "#3a7a6a",
    },
    {
        id: 3,
        title: "The Alchemist's Legacy",
        author: "Elena Thorne",
        formats: ["eBook", "Paperback", "Hardcover"],
        price: "$29.99",
        status: "Live",
        updated: "Updated 1 month ago",
        views: "4.8k Views",
        color: "#e8e0cc",
        coverBg: "#c8b89a",
    },
];

const NAV_LINKS = ["Bookshelf", "Reports", "Community", "Marketing", "Story Hut Academy"];

export default function DashboardPage() {
    const [activeNav, setActiveNav] = useState("Bookshelf");
    const [viewFilter, setViewFilter] = useState("All Books");
    const [sortFilter, setSortFilter] = useState("Recently Modified");
    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const filtered = BOOKS.filter((b) => {
        const q = search.toLowerCase();
        return (
            b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
        );
    });

    return (
        <div className="min-h-screen bg-[#f5f0fc] flex flex-col font-sans mb-0">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* ── TOP UTILITY BAR ── */}
            <div className="bg-white border-b border-plum/[0.12] px-5 sm:px-12 h-9 flex items-center justify-end gap-6 shrink-0 z-50">
                <Link href="/account" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Your Account</Link>
                <div className="flex items-center gap-1 text-[0.78rem] text-muted cursor-pointer hover:text-plum transition-colors">
                    English
                    <ChevronDown size={10} strokeWidth={1.5} />
                </div>
                <Link href="/help" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Help</Link>
                <Link href="/" className="text-[0.78rem] text-muted no-underline hover:text-plum transition-colors">Sign Out</Link>
            </div>

            {/* ── MAIN NAV ── */}
            <nav className="bg-white border-b border-plum/[0.12] px-5 md:px-12 h-[60px] flex items-center gap-0 sticky top-0 z-50 shadow-[0_1px_12px_rgba(92,45,143,0.05)] shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 no-underline mr-4 md:mr-12 shrink-0">
                    <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg shadow-[0_4px_12px_rgba(92,45,143,0.25)] object-contain" />
                    <span className="font-playfair text-[1.1rem] font-bold text-ink hidden sm:block">
                        Story Hut
                    </span>
                </Link>

                <div className="flex items-center gap-0 flex-1 overflow-x-auto no-scrollbar">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            href={link === "Community" ? "/community" : link === "Bookshelf" ? "/dashboard" : link === "Marketing" ? "/marketing" : link === "Reports" ? "/reports" : link === "Story Hut Academy" ? "/academy" : "#"}
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
                    <PenTool size={14} />
                    <span className="hidden sm:inline">Create New Story</span>
                    <span className="sm:hidden">Create</span>
                </Link>
            </nav>

            {/* ── HERO SECTION ── */}
            <section className="bg-white py-9 px-5 md:pt-[52px] md:pr-[48px] md:pb-[48px] md:pl-[48px] grid md:grid-cols-2 gap-8 md:gap-[48px] items-center animate-[fadeUp_0.6s_ease_both] shrink-0">
                <div>
                    <div className="text-[0.75rem] font-semibold text-plum tracking-[0.12em] uppercase mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[2px] before:bg-plum before:block">
                        Author Dashboard
                    </div>
                    <h1 className="font-playfair text-[clamp(2.2rem,4vw,3.2rem)] font-black text-ink leading-[1.1] mb-5">
                        Create. Manage.<br />Publish.
                    </h1>
                    <p className="text-[0.95rem] text-muted leading-[1.7] max-w-[400px] mb-8">
                        Bring your stories to life and reach readers worldwide. Your journey from draft to bestseller starts here with our comprehensive publishing tools.
                    </p>
                    <Link href="/create" className="inline-flex items-center gap-2.5 bg-plum text-white border-none cursor-pointer font-sans text-[0.9rem] font-semibold px-7 py-[13px] rounded-[40px] transition-all duration-200 no-underline shadow-[0_4px_20px_rgba(92,45,143,0.3)] hover:bg-plum-light hover:-translate-y-[2px] group">
                        Start Writing
                        <ChevronDown size={14} className="-rotate-90 transition-transform duration-200 group-hover:translate-x-[3px]" />
                    </Link>
                </div>

                <div className="hidden md:flex rounded-[20px] overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#c5e8e2] to-[#7ec8bc] items-end justify-center relative shadow-[0_20px_60px_rgba(92,45,143,0.12)]">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-[40px] px-3.5 py-1.5 text-[0.72rem] font-semibold text-plum flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#6bcb77] before:block">
                        3 books live
                    </div>
                    <div className="w-[55%] aspect-[3/4] bg-gradient-to-b from-[#7ec8bc] to-[#5aada0] rounded-t-[12px] flex items-center justify-center overflow-hidden relative mb-0">
                        <div className="w-[70%] aspect-square rounded-full bg-white/15 grid place-items-center text-[3.5rem]">
                            📚
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOOKSHELF PANEL ── */}
            <div
                className="mx-5 my-6 md:mx-[48px] md:mt-[32px] md:mb-12 bg-white rounded-[20px] border border-plum/[0.12] shadow-[0_4px_24px_rgba(92,45,143,0.06)] overflow-hidden animate-[fadeUp_0.6s_0.15s_ease_both] fill-mode-both"
                onClick={() => setOpenMenu(null)}
            >
                {/* Controls */}
                <div className="p-4 md:py-5 md:px-7 border-b border-plum/[0.12] flex items-center gap-3 flex-wrap">
                    <div className="relative">
                        <select
                            className="appearance-none bg-white border border-plum/[0.12] rounded-lg py-2 pl-3.5 pr-8 font-sans text-[0.8rem] text-text font-medium cursor-pointer outline-none transition-colors duration-200 hover:border-plum-light focus:border-plum-light"
                            value={viewFilter}
                            onChange={(e) => setViewFilter(e.target.value)}
                        >
                            <option>All Books</option>
                            <option>Published</option>
                            <option>Drafts</option>
                            <option>In Review</option>
                        </select>
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                            <ChevronDown size={14} strokeWidth={2} />
                        </span>
                    </div>

                    <div className="relative">
                        <select
                            className="appearance-none bg-white border border-plum/[0.12] rounded-lg py-2 pl-3.5 pr-8 font-sans text-[0.8rem] text-text font-medium cursor-pointer outline-none transition-colors duration-200 hover:border-plum-light focus:border-plum-light"
                            value={sortFilter}
                            onChange={(e) => setSortFilter(e.target.value)}
                        >
                            <option>Recently Modified</option>
                            <option>Title A–Z</option>
                            <option>Price</option>
                            <option>Views</option>
                        </select>
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                            <ChevronDown size={14} strokeWidth={2} />
                        </span>
                    </div>

                    <button className="flex items-center gap-1.5 bg-transparent border border-plum/[0.12] rounded-lg py-2 px-3.5 font-sans text-[0.8rem] text-plum font-medium cursor-pointer transition-all duration-200 hover:bg-[#ede5f8] hover:border-plum-light">
                        <Filter size={12} strokeWidth={2.5} />
                        Filter
                    </button>

                    <div className="relative w-full md:w-auto md:ml-auto mt-2 md:mt-0">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none leading-none">
                            <Search size={14} strokeWidth={2.5} />
                        </span>
                        <input
                            className="w-full md:w-[220px] bg-[#faf8fd] border border-plum/[0.12] rounded-lg py-2 pl-9 pr-3.5 font-sans text-[0.8rem] text-text outline-none transition-all duration-200 placeholder:text-[#b9aec9] focus:border-plum-light focus:shadow-[0_0_0_3px_rgba(123,76,184,0.1)]"
                            type="text"
                            placeholder="Search your bookshelf..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Book list */}
                <div className="py-2">
                    {filtered.map((book, idx) => (
                        <div
                            key={book.id}
                            className="flex items-center gap-4 md:gap-5 py-4 px-4 md:py-5 md:px-7 border-b border-plum/[0.05] transition-colors duration-150 relative cursor-pointer hover:bg-[#faf8fd] last:border-b-0"
                            style={{ animation: `fadeUp 0.5s ${0.2 + idx * 0.07}s both` }}
                        >
                            {/* Cover */}
                            <div
                                className="w-[60px] h-[80px] md:w-[72px] md:h-[96px] rounded-md shrink-0 flex items-end justify-center overflow-hidden shadow-[2px_4px_12px_rgba(0,0,0,0.12)] relative"
                                style={{ background: book.color }}
                            >
                                <div
                                    className="w-full h-full flex flex-col p-1.5 md:p-2 md:px-1.5"
                                    style={{ background: `linear-gradient(160deg, ${book.coverBg}ee, ${book.coverBg}99)` }}
                                >
                                    <div className="flex flex-col gap-[3px] flex-1">
                                        {[80, 60, 90, 45, 70].map((w, i) => (
                                            <div key={i} className="h-1 md:h-[5px] rounded-sm bg-white/40" style={{ width: `${w}%` }} />
                                        ))}
                                    </div>
                                    <div className="text-[0.4rem] md:text-[0.45rem] font-bold text-white/85 text-center leading-[1.2] mt-auto">
                                        BOOK COVER
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="font-playfair text-[0.95rem] md:text-[1.05rem] font-bold text-ink mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                                    {book.title}
                                </div>
                                <div className="text-[0.75rem] md:text-[0.8rem] text-muted mb-2.5">
                                    by {book.author}
                                </div>
                                <div className="flex gap-2 flex-wrap mb-2.5 hidden sm:flex">
                                    {book.formats.map((f, i) => (
                                        <span
                                            key={f}
                                            className={`px-3 py-[3px] rounded-full border text-[0.72rem] font-medium ${i === 0
                                                ? "border-plum-light bg-[#ede5f8] text-plum"
                                                : "border-plum/[0.12] text-text"
                                                }`}
                                        >
                                            {f}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                                    <span className="flex items-center gap-1.5 text-[0.7rem] md:text-[0.73rem] text-muted">
                                        <CheckCircle2 size={12} strokeWidth={2} />
                                        {book.updated}
                                    </span>
                                    {book.views !== "Draft" ? (
                                        <span className="flex items-center gap-1.5 text-[0.7rem] md:text-[0.73rem] text-muted">
                                            <Eye size={12} strokeWidth={2} />
                                            {book.views}
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-[0.7rem] md:text-[0.73rem] text-muted">
                                            <PenBox size={12} strokeWidth={2} className="opacity-50" />
                                            Draft
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Price + Status */}
                            <div className="text-right shrink-0 min-w-[75px] md:min-w-[90px]">
                                <div className="font-playfair text-[1.1rem] md:text-[1.15rem] font-bold text-plum mb-1">
                                    {book.price}
                                </div>
                                <span
                                    className={`text-[0.65rem] md:text-[0.72rem] font-semibold px-2 md:px-2.5 py-0.5 md:py-[3px] rounded-[20px] inline-block ${book.status === "Live"
                                        ? "bg-[#6bcb77]/15 text-[#3a9a48]"
                                        : book.status === "In Review"
                                            ? "bg-[#e8a830]/15 text-[#a07010]"
                                            : "bg-[#7a6890]/15 text-muted"
                                        }`}
                                >
                                    {book.status}
                                </span>
                            </div>

                            {/* More menu */}
                            <div className="relative">
                                <button
                                    className="bg-transparent border-none cursor-pointer text-muted p-1.5 rounded-md grid place-items-center shrink-0 transition-colors duration-150 hover:bg-[#ede5f8] hover:text-plum"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenMenu(openMenu === book.id ? null : book.id);
                                    }}
                                    aria-label="More options"
                                >
                                    <MoreVertical size={18} strokeWidth={2.5} />
                                </button>

                                {openMenu === book.id && (
                                    <div
                                        className="absolute right-7 top-[calc(100%-8px)] bg-white rounded-lg border border-plum/[0.12] shadow-[0_8px_32px_rgba(92,45,143,0.12)] z-50 min-w-[160px] overflow-hidden animate-[dropIn_0.15s_ease_both]"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {["Edit", "View Analytics", "Duplicate", "Unpublish"].map((action) => (
                                            <div
                                                key={action}
                                                className={`py-2.5 px-4 text-[0.82rem] cursor-pointer transition-colors duration-150 flex items-center gap-2 ${action === "Unpublish"
                                                    ? "text-[#c4687a] hover:bg-[#c4687a]/5"
                                                    : "text-text hover:bg-[#faf8fd]"
                                                    }`}
                                                onClick={() => setOpenMenu(null)}
                                            >
                                                {action}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="p-12 text-center text-muted text-[0.9rem]">
                            No books match your search.
                        </div>
                    )}
                </div>

                {/* View more */}
                <div className="p-4 md:p-5 text-center border-t border-plum/[0.12]">
                    <Link href="#" className="font-sans text-[0.85rem] md:text-[0.875rem] font-medium text-plum no-underline inline-flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5 group">
                        View more from your library
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="transition-transform group-hover:translate-x-1">
                            <path d="M3 7h8M7 3l4 4-4 4" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* ── FOOTER ── */}
            <footer className="mt-auto bg-ink pt-[40px] px-5 pb-6 md:pt-[56px] md:px-[48px] md:pb-[28px] text-white/50 shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 font-playfair text-[1.05rem] font-bold text-white/90 no-underline mb-3.5">
                            <Image src="/logo.png" alt="Story Hut" width={30} height={30} className="rounded-lg bg-white object-contain" />
                            Story Hut
                        </Link>
                        <p className="text-[0.83rem] leading-[1.65] text-white/45 max-w-[220px]">
                            Empowering authors to share their voices with the world. Your story, your way.
                        </p>
                    </div>

                    {[
                        {
                            title: "Platform",
                            links: ["Bookshelf", "Analytics", "Community", "Global Distribution"],
                        },
                        {
                            title: "Support",
                            links: ["Help Center", "Contact Us", "Writing Guides", "Tutorials"],
                        },
                        {
                            title: "Legal",
                            links: ["Terms of Service", "Privacy Policy", "Copyright Info"],
                        },
                    ].map((col) => (
                        <div key={col.title}>
                            <h4 className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white/70 mb-4">{col.title}</h4>
                            <ul className="list-none flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="font-sans text-[0.83rem] text-white/40 no-underline transition-colors duration-200 hover:text-white/85">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-[0.78rem] gap-4 md:gap-0">
                    <span>© 2024 Story Hut Publishing. All rights reserved.</span>
                    <div className="flex gap-3.5">
                        <Link href="#" className="text-white/40 no-underline transition-colors duration-200 hover:text-white/85">Facebook</Link>
                        <Link href="#" className="text-white/40 no-underline transition-colors duration-200 hover:text-white/85">Twitter</Link>
                        <Link href="#" className="text-white/40 no-underline transition-colors duration-200 hover:text-white/85">Instagram</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
