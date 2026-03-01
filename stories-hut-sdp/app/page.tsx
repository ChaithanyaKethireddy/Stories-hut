"use client";

import { useEffect } from "react";
import Link from "next/link";
import { BookOpen, Zap } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${i * 0.05}s`;
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => io.observe(el));

    // Cleanup
    return () => io.disconnect();
  }, []);

  const handleGenreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const allTags = document.querySelectorAll(".genre-tag");
    allTags.forEach((t) => t.classList.remove("active", "bg-plum", "text-white", "border-plum"));
    allTags.forEach((t) => t.classList.add("text-text", "border-plum/20"));

    target.classList.remove("text-text", "border-plum/20");
    target.classList.add("active", "bg-plum", "text-white", "border-plum");
  };

  return (
    <div className="min-h-screen">
      <style dangerouslySetInnerHTML={{
        __html: `
        .reveal {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .hero-bg {
          background: radial-gradient(ellipse 60% 70% at 80% 40%, rgba(184,201,176,0.35) 0%, transparent 60%),
                      radial-gradient(ellipse 40% 50% at 10% 80%, rgba(92,45,143,0.07) 0%, transparent 50%);
        }
        .tools-bg {
          background: radial-gradient(ellipse 50% 80% at 90% 50%, rgba(92,45,143,0.4) 0%, transparent 60%);
        }
        .testi-quotes::before {
          content: '\\201C';
          font-family: var(--font-playfair), serif;
          font-size: 5rem; line-height: 1;
          color: rgba(92,45,143,0.1);
          position: absolute; top: 8px; left: 20px;
          pointer-events: none;
        }
      `}} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 h-[68px] bg-cream/90 backdrop-blur-md border-b border-plum/10">
        <Link href="/" className="flex items-center gap-2.5 font-playfair text-xl font-bold text-plum no-underline">
          <img src="/logo.png" alt="Story Hut" className="w-[30px] h-[30px] rounded-lg object-contain" />
          Story Hut
        </Link>
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><Link href="#" className="font-sans text-[0.9rem] text-muted font-normal transition-colors duration-200 hover:text-plum">How It Works</Link></li>
          <li><Link href="#" className="font-sans text-[0.9rem] text-muted font-normal transition-colors duration-200 hover:text-plum">Publish</Link></li>
          <li><Link href="#" className="font-sans text-[0.9rem] text-muted font-normal transition-colors duration-200 hover:text-plum">Earn</Link></li>
          <li><Link href="/help" className="font-sans text-[0.9rem] text-muted font-normal transition-colors duration-200 hover:text-plum">Help</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <Link href="/signin" className="bg-transparent border-none cursor-pointer font-sans text-[0.9rem] text-muted font-normal py-2 transition-colors duration-200 hover:text-plum no-underline">Sign In</Link>
          <Link href="#" className="btn-primary px-[22px] py-2.5 text-[0.875rem]">Join Story Hut</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-[68px] grid md:grid-cols-2 items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hero-bg"></div>
        <div className="p-12 md:py-20 md:pr-12 md:pl-20 animate-[fadeUp_0.8s_ease_both]">
          <div className="inline-flex items-center gap-2 bg-plum/10 border border-plum/15 rounded-full px-4 py-1.5 text-[0.78rem] font-medium text-plum mb-7 tracking-wider uppercase before:content-['✦'] before:text-[0.6rem]">
            The Independent Author's Platform
          </div>
          <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] leading-[1.1] text-ink mb-6">
            Self-publish your stories, <em className="italic text-plum">your way.</em>
          </h1>
          <p className="text-[1.05rem] leading-[1.7] text-muted max-w-[420px] mb-10">
            Turn your manuscript into a masterpiece. Reach millions of readers globally with our intuitive publishing suite designed for independent authors.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="btn-primary px-7 py-[13px] text-[0.95rem]">Start Publishing</Link>
            <Link href="#" className="btn-outline">Learn More</Link>
          </div>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-plum/10">
            <div>
              <div className="font-playfair text-[1.6rem] font-bold text-ink">2.4M+</div>
              <div className="text-[0.78rem] text-muted mt-0.5">Authors worldwide</div>
            </div>
            <div>
              <div className="font-playfair text-[1.6rem] font-bold text-ink">70%</div>
              <div className="text-[0.78rem] text-muted mt-0.5">Royalty on sales</div>
            </div>
            <div>
              <div className="font-playfair text-[1.6rem] font-bold text-ink">48h</div>
              <div className="text-[0.78rem] text-muted mt-0.5">Time to market</div>
            </div>
          </div>
        </div>

        <div className="p-12 md:pt-[100px] md:pr-20 md:pb-20 md:pl-5 flex justify-center items-center animate-[fadeUp_0.8s_0.2s_ease_both]">
          <div className="relative w-full max-w-[440px]">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#d4e8cc] to-sage rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_40px_80px_rgba(26,16,37,0.15),0_8px_24px_rgba(26,16,37,0.08)]">
              <div className="w-[76%] h-[76%] bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col">
                <div className="h-7 bg-[#f5f3f0] flex items-center px-3 gap-1.5 border-b border-[#e8e4de]">
                  <div className="w-2 h-2 rounded-full bg-[#ff6b6b]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#ffd93d]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#6bcb77]"></div>
                </div>
                <div className="flex-1 p-4">
                  <div className="h-2 rounded bg-plum/50 w-[60%] mb-2"></div>
                  <div className="h-2 rounded bg-[#eee] w-[90%] mb-2"></div>
                  <div className="h-2 rounded bg-[#eee] w-[75%] mb-2"></div>
                  <div className="h-2 rounded bg-sage w-[45%] mb-2 mt-4"></div>
                  <div className="h-2 rounded bg-[#eee] w-[80%] mb-2"></div>
                  <div className="h-2 rounded bg-[#eee] w-[60%] mb-2"></div>
                  <div className="mt-4 h-1 bg-[#eee] rounded overflow-hidden">
                    <div className="h-full w-[68%] bg-plum rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-7 bg-white rounded-xl py-3 px-4 shadow-[0_8px_32px_rgba(26,16,37,0.12)] text-[0.8rem] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#fef3e2] grid place-items-center text-base shrink-0 text-amber">
                <BookOpen size={16} />
              </div>
              <div>
                <div className="font-semibold text-ink text-[0.82rem]">Live on 12 markets</div>
                <div className="text-muted text-[0.72rem] mt-[1px]">US, UK, Germany & more</div>
              </div>
            </div>
            <div className="absolute top-5 -right-7 bg-white rounded-xl py-3 px-4 shadow-[0_8px_32px_rgba(26,16,37,0.12)] text-[0.8rem] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#edf5ea] grid place-items-center text-base shrink-0 text-sage">
                <Zap size={16} className="text-emerald-500 fill-emerald-500" />
              </div>
              <div>
                <div className="font-semibold text-ink text-[0.82rem]">Published in 2 days</div>
                <div className="text-muted text-[0.72rem] mt-[1px]">Fast-track distribution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-cream py-24 px-12 md:px-20 reveal">
        <div className="text-center mb-16">
          <div className="text-[0.78rem] font-medium text-plum tracking-widest uppercase mb-3">Why Story Hut</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-tight">Empowering Voices Worldwide</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-plum/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(92,45,143,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-plum to-plum-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-xl bg-plum/10 grid place-items-center text-[1.3rem] mb-5">⚡</div>
            <div className="font-playfair text-[1.1rem] font-bold text-ink mb-2.5">Fast to Market</div>
            <p className="text-[0.875rem] leading-[1.65] text-muted">Publish your ebook and paperback in minutes. Your story can be available to readers globally within 48 hours.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-plum/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(92,45,143,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-plum to-plum-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-xl bg-plum/10 grid place-items-center text-[1.3rem] mb-5">💰</div>
            <div className="font-playfair text-[1.1rem] font-bold text-ink mb-2.5">Earn More</div>
            <p className="text-[0.875rem] leading-[1.65] text-muted">Keep control of your rights and set your own list prices. Earn up to 70% royalty on sales to customers globally.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-plum/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(92,45,143,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-plum to-plum-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-xl bg-plum/10 grid place-items-center text-[1.3rem] mb-5">🌐</div>
            <div className="font-playfair text-[1.1rem] font-bold text-ink mb-2.5">Global Reach</div>
            <p className="text-[0.875rem] leading-[1.65] text-muted">Distribute your work across major international markets including the US, UK, Canada, Germany, and beyond.</p>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="bg-ink py-24 px-12 md:px-20 relative overflow-hidden reveal">
        <div className="absolute inset-0 pointer-events-none tools-bg"></div>
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-5xl mx-auto relative z-10">
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 overflow-hidden">
            <div className="flex items-center gap-3 py-3 border-b border-white/[0.06]">
              <div className="w-2 h-2 rounded-full shrink-0 bg-[#7b4cb8]"></div>
              <div className="h-2 rounded bg-[#7b4cb8]/40 w-[50%]"></div>
              <div className="ml-auto text-[0.7rem] py-[3px] px-2.5 rounded-full font-medium bg-[#7b4cb8]/20 text-[#c49ef0]">Cover Design</div>
            </div>
            <div className="flex items-center gap-3 py-3 border-b border-white/[0.06]">
              <div className="w-2 h-2 rounded-full shrink-0 bg-[#6bcb77]"></div>
              <div className="h-2 rounded bg-[#6bcb77]/30 w-[68%]"></div>
              <div className="ml-auto text-[0.7rem] py-[3px] px-2.5 rounded-full font-medium bg-[#6bcb77]/15 text-[#6bcb77]">Formatting ✓</div>
            </div>
            <div className="flex items-center gap-3 py-3 border-b border-white/[0.06]">
              <div className="w-2 h-2 rounded-full shrink-0 bg-[#e8a830]"></div>
              <div className="h-2 rounded bg-[#e8a830]/30 w-[40%]"></div>
              <div className="ml-auto text-[0.7rem] py-[3px] px-2.5 rounded-full font-medium bg-[#e8a830]/15 text-[#e8a830]">Analytics</div>
            </div>
            <div className="flex items-center gap-3 py-3 border-b border-white/[0.06]">
              <div className="w-2 h-2 rounded-full shrink-0 bg-[#c4687a]"></div>
              <div className="h-2 rounded bg-[#c4687a]/30 w-[80%]"></div>
              <div className="ml-auto text-[0.7rem] py-[3px] px-2.5 rounded-full font-medium bg-[#c4687a]/15 text-[#e8a8b5]">Distribution</div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="w-2 h-2 rounded-full shrink-0 bg-[#7b4cb8]"></div>
              <div className="h-2 rounded bg-[#7b4cb8]/40 w-[30%]"></div>
              <div className="ml-auto text-[0.7rem] py-[3px] px-2.5 rounded-full font-medium bg-[#7b4cb8]/20 text-[#c49ef0]">Pre-orders</div>
            </div>
          </div>
          <div>
            <div className="text-[0.78rem] font-medium tracking-widest uppercase mb-3 text-sage">Everything In One Place</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] text-white leading-tight">Everything you need to succeed as an author.</h2>
            <div className="text-base italic text-white/50 border-l-2 border-plum-light pl-4 my-6 leading-[1.6]">
              "The simplest way to go from document to shelf."
            </div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex items-start gap-3 text-[0.9rem] text-white/75 leading-[1.5] before:content-['→'] before:text-plum-light before:shrink-0 before:mt-[1px]">Professional cover design templates and tools.</li>
              <li className="flex items-start gap-3 text-[0.9rem] text-white/75 leading-[1.5] before:content-['→'] before:text-plum-light before:shrink-0 before:mt-[1px]">Automated interior formatting for Kindle and Print.</li>
              <li className="flex items-start gap-3 text-[0.9rem] text-white/75 leading-[1.5] before:content-['→'] before:text-plum-light before:shrink-0 before:mt-[1px]">Detailed real-time sales reporting and analytics.</li>
              <li className="flex items-start gap-3 text-[0.9rem] text-white/75 leading-[1.5] before:content-['→'] before:text-plum-light before:shrink-0 before:mt-[1px]">Pre-order capabilities to build buzz before launch.</li>
              <li className="flex items-start gap-3 text-[0.9rem] text-white/75 leading-[1.5] before:content-['→'] before:text-plum-light before:shrink-0 before:mt-[1px]">Integrated marketing tools and community reviews.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-warm py-24 px-12 md:px-20 reveal">
        <div className="text-center mb-12">
          <div className="text-[0.78rem] font-medium text-plum tracking-widest uppercase mb-3">Author Stories</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-tight">From Our Author Community</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-7 relative border border-plum/5 transition-transform duration-200 hover:-translate-y-[3px] testi-quotes">
            <p className="text-[0.9rem] leading-[1.7] text-text mb-6 relative z-10 mt-4">
              "Story Hut transformed my publishing experience. I went from feeling overwhelmed to having my book live in just three days. The royalty rates are unbeatable."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full grid place-items-center text-[0.85rem] font-semibold text-white shrink-0 bg-gradient-to-br from-[#7b4cb8] to-[#5c2d8f]">EL</div>
              <div>
                <div className="text-[0.85rem] font-semibold text-ink">Elena Larsson</div>
                <div className="text-[0.75rem] text-muted">Thriller Author</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-7 relative border border-plum/5 transition-transform duration-200 hover:-translate-y-[3px] testi-quotes">
            <p className="text-[0.9rem] leading-[1.7] text-text mb-6 relative z-10 mt-4">
              "The formatting tools alone are worth it. My paperback looks professional and polished, just like a Big Five publication."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full grid place-items-center text-[0.85rem] font-semibold text-white shrink-0 bg-gradient-to-br from-[#e8a830] to-[#c4687a]">MK</div>
              <div>
                <div className="text-[0.85rem] font-semibold text-ink">Marcus Knight</div>
                <div className="text-[0.75rem] text-muted">Sci-Fi Writer</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-7 relative border border-plum/5 transition-transform duration-200 hover:-translate-y-[3px] testi-quotes">
            <p className="text-[0.9rem] leading-[1.7] text-text mb-6 relative z-10 mt-4">
              "The community feedback loop helped me refine my cover before I even hit publish. Story Hut truly cares about author success."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full grid place-items-center text-[0.85rem] font-semibold text-white shrink-0 bg-gradient-to-br from-[#6bcb77] to-[#b8c9b0]">SJ</div>
              <div>
                <div className="text-[0.85rem] font-semibold text-ink">Sarah Jenkins</div>
                <div className="text-[0.75rem] text-muted">Romance Novelist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GENRES */}
      <section className="py-20 px-12 md:px-20 bg-cream text-center reveal">
        <div className="text-[0.78rem] font-medium text-plum tracking-widest uppercase mb-4">Browse by Category</div>
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-tight mb-10">Popular Genres on Story Hut</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mt-9">
          <button onClick={handleGenreClick} className="genre-tag active bg-plum border-plum text-white px-7 py-3 rounded-full text-[0.9rem] font-medium border-[1.5px] cursor-pointer transition-all duration-200">Fiction</button>
          <button onClick={handleGenreClick} className="genre-tag text-text border-plum/20 hover:bg-plum hover:text-white hover:border-plum px-7 py-3 rounded-full text-[0.9rem] font-medium border-[1.5px] cursor-pointer transition-all duration-200">Non-Fiction</button>
          <button onClick={handleGenreClick} className="genre-tag text-text border-plum/20 hover:bg-plum hover:text-white hover:border-plum px-7 py-3 rounded-full text-[0.9rem] font-medium border-[1.5px] cursor-pointer transition-all duration-200">Children's Books</button>
          <button onClick={handleGenreClick} className="genre-tag text-text border-plum/20 hover:bg-plum hover:text-white hover:border-plum px-7 py-3 rounded-full text-[0.9rem] font-medium border-[1.5px] cursor-pointer transition-all duration-200">Comics & Manga</button>
          <button onClick={handleGenreClick} className="genre-tag text-text border-plum/20 hover:bg-plum hover:text-white hover:border-plum px-7 py-3 rounded-full text-[0.9rem] font-medium border-[1.5px] cursor-pointer transition-all duration-200">Romance</button>
          <button onClick={handleGenreClick} className="genre-tag text-text border-plum/20 hover:bg-plum hover:text-white hover:border-plum px-7 py-3 rounded-full text-[0.9rem] font-medium border-[1.5px] cursor-pointer transition-all duration-200">Sci-Fi & Fantasy</button>
          <button onClick={handleGenreClick} className="genre-tag text-text border-plum/20 hover:bg-plum hover:text-white hover:border-plum px-7 py-3 rounded-full text-[0.9rem] font-medium border-[1.5px] cursor-pointer transition-all duration-200">Mystery & Thriller</button>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="py-20 px-12 md:px-20 bg-warm text-center reveal">
        <div className="text-[0.78rem] font-medium text-plum tracking-widest uppercase mb-3">Join the Circle</div>
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-tight mb-3">Find Your Creative Circle</h2>
        <p className="text-muted max-w-[480px] mx-auto mb-9 text-[0.95rem] leading-[1.65]">
          Writing is better together. Share ideas, ask questions & learn from authors who are building their stories on Story Hut.
        </p>
        <Link href="#" className="btn-outline text-[0.95rem] px-8 py-[13px]">Join the Community</Link>
      </section>

      {/* CTA BAND */}
      <div className="mx-8 md:mx-20 mb-20 bg-plum rounded-3xl p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden reveal">
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full -right-20 -top-24 pointer-events-none"></div>
        <div className="mb-8 md:mb-0 relative z-10 text-center md:text-left">
          <h2 className="text-white text-3xl font-playfair mb-2">Ready to publish your story?</h2>
          <p className="text-white/70 text-base">Join over 2.4 million independent authors on Story Hut today.</p>
        </div>
        <div className="flex gap-3 items-center shrink-0 relative z-10">
          <Link href="#" className="bg-white text-plum border-none px-7 py-3 rounded-full font-sans text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 inline-block hover:bg-cream hover:-translate-y-[1px]">Start Publishing</Link>
          <Link href="#" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white">Learn More</Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-ink pt-16 pb-8 px-12 md:px-20 text-white/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <Link href="#" className="flex items-center gap-2.5 font-playfair text-xl font-bold text-white/90 no-underline mb-3.5">
              <img src="/logo.png" alt="Story Hut" className="w-[30px] h-[30px] rounded-lg object-contain bg-white" />
              Story Hut
            </Link>
            <p className="text-[0.85rem] leading-[1.65] max-w-sm">
              The ultimate platform for independent authors to write, publish, and sell their work globally.
            </p>
          </div>
          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider text-white/70 mb-4">Publish</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><Link href="#" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Getting Started</Link></li>
              <li><Link href="#" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Book Templates</Link></li>
              <li><Link href="#" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Royalty Calculator</Link></li>
              <li><Link href="#" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Formatting Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider text-white/70 mb-4">Support</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><Link href="/help" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Help Center</Link></li>
              <li><Link href="#" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Contact Us</Link></li>
              <li><Link href="#" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Terms of Service</Link></li>
              <li><Link href="#" className="text-[0.85rem] text-white/45 no-underline transition-colors hover:text-white/85">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider text-white/70 mb-4">Connect</h4>
            <div className="flex gap-3">
              <Link href="#" className="w-[34px] h-[34px] rounded-lg bg-white/5 grid place-items-center cursor-pointer transition-colors duration-200 text-white/60 text-[0.85rem] no-underline hover:bg-plum hover:text-white">f</Link>
              <Link href="#" className="w-[34px] h-[34px] rounded-lg bg-white/5 grid place-items-center cursor-pointer transition-colors duration-200 text-white/60 text-[0.85rem] no-underline hover:bg-plum hover:text-white">t</Link>
              <Link href="#" className="w-[34px] h-[34px] rounded-lg bg-white/5 grid place-items-center cursor-pointer transition-colors duration-200 text-white/60 text-[0.85rem] no-underline hover:bg-plum hover:text-white">in</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-[0.8rem]">
          <span>© 2025 Story Hut Publishing. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Made with ♥ for independent authors</span>
        </div>
      </footer>
    </div>
  );
}
