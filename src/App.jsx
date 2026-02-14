import { useEffect, useRef, useState } from "react";
import logo from "./assets/VisionX-Logo.png";

// ✅ Case Study Images (assets me rakhna)
import caseGmb from "./assets/case_gmb.png";
import caseInsta from "./assets/case_instagram.png";
import caseYt1 from "./assets/case_youtube_blurred.png";

import {
  Megaphone,
  MapPin,
  LayoutTemplate,
  Palette,
  Youtube,
  LineChart,
  Radio,
  Camera,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // ====== Active nav (scroll spy) ======
  useEffect(() => {
    const ids = ["home", "services", "work", "pricing", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { root: null, threshold: 0.5 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ====== Services data (icons included) ======
  const services = [
    [
      "Social Media Management",
      "Reels + posts + captions + strategy for consistent engagement.",
      Megaphone,
    ],
    [
      "Google Business Optimization",
      "Ranking boost, reviews plan, photos, weekly posts, competitor analysis.",
      MapPin,
    ],
    [
      "Paid Ads & Lead Generation",
      "Meta/Google ads setup, creatives, lead tracking & reporting.",
      LineChart,
    ],
    [
      "Website & Landing Pages",
      "Fast, modern pages that convert visitors into enquiries.",
      LayoutTemplate,
    ],
    [
      "Branding & Creatives",
      "Logos, posters, thumbnails, premium design system.",
      Palette,
    ],
    [
      "YouTube Growth",
      "Channel setup, thumbnails, SEO, consistency plan.",
      Youtube,
    ],
    [
      "Studio on Rent",
      "Professional studio setup available for shoots, podcast, product videos & recordings.",
      Camera,
    ],
    [
      "YouTube Live Streaming",
      "Live streaming for matches, events, programs with high-quality production.",
      Radio,
    ],
  ];

  // ====== 0 -> 100k scroll animation (Case Study Growth) ======
  const growthRef = useRef(null);
  const [growthOn, setGrowthOn] = useState(false);
  const [countSubs, setCountSubs] = useState(0);

  const currentSubs = 29437;
  const targetSubs = 100000;
  const progress = Math.min(100, Math.round((currentSubs / targetSubs) * 100));

  useEffect(() => {
    if (!growthRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setGrowthOn(true);
      },
      { threshold: 0.35 }
    );

    obs.observe(growthRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!growthOn) return;

    const target = currentSubs;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCountSubs(Math.floor(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [growthOn, currentSubs]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-5">
          {/* LEFT SIDE – Logo + Name */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="VisionX Media Logo" className="h-14 md:h-16 w-auto object-contain" />
            <div>
              <div className="text-xl font-semibold leading-5">VisionX Media</div>
              <div className="text-sm text-zinc-400">Digital Growth Agency</div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8 md:gap-10">
            {/* Navbar */}
            <nav className="hidden items-center gap-8 text-base font-medium text-zinc-300 md:flex">
              {[
                ["home", "Home"],
                ["services", "Services"],
                ["work", "Work"],
                ["pricing", "Pricing"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={
                    "transition " +
                    (activeSection === id
                      ? "text-yellow-400"
                      : "text-zinc-300 hover:text-yellow-400")
                  }
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Button */}
            <a
              href="#contact"
              className="rounded-xl bg-yellow-500 px-5 py-3 text-sm md:text-base font-semibold text-black hover:bg-yellow-400"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden scroll-mt-24">
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-yellow-500/15 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 animate-[fadeInUp_.7s_ease-out]">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="max-w-xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                Free audit delivery in 24 hours
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                We Turn Local Businesses Into{" "}
                <span className="text-yellow-400">Lead Machines</span>
              </h1>

              <p className="mt-4 text-base text-zinc-300 md:text-lg">
                Social Media • Google Business Profile • Paid Ads • Website • YouTube Growth
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
                >
                  Get Free Audit (24 hrs)
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500"
                >
                  View Case Studies
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-zinc-300">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-3">
                  <div className="text-lg font-bold text-white">30 Days</div>
                  Growth Plan
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-3">
                  <div className="text-lg font-bold text-white">10+</div>
                  Deliverables / mo
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-3">
                  <div className="text-lg font-bold text-white">1:1</div>
                  Support
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-300">Quick Audit Preview</div>
                  <div className="mt-1 text-xl font-semibold">What you’ll receive</div>
                </div>
                <div className="rounded-2xl bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200 ring-1 ring-yellow-500/20">
                  PDF Report
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                {[
                  "Google Profile score + quick fixes",
                  "Instagram content + reels improvement plan",
                  "Top competitors comparison (why they rank higher)",
                  "30-day action plan to increase leads",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/30 p-3"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4">
                <div className="text-xs text-zinc-400">Typical results (30–60 days)</div>
                <div className="mt-2 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-3">
                    <div className="text-lg font-bold text-white">+30%</div>
                    <div className="text-xs text-zinc-400">Leads</div>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-3">
                    <div className="text-lg font-bold text-white">+2x</div>
                    <div className="text-xs text-zinc-400">Reach</div>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-3">
                    <div className="text-lg font-bold text-white">+50%</div>
                    <div className="text-xs text-zinc-400">Calls</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="flex-1 rounded-2xl bg-yellow-500 px-5 py-3 text-center text-sm font-semibold text-black hover:bg-yellow-400"
                  href="#contact"
                >
                  Request Free Audit
                </a>
                <a
                  className="flex-1 rounded-2xl border border-zinc-700 px-5 py-3 text-center text-sm font-semibold text-zinc-100 hover:border-zinc-500"
                  href="#pricing"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Services</h2>
            <p className="mt-2 text-zinc-300">Simple, clean, and focused on leads.</p>
          </div>
          <div className="text-sm text-zinc-400">Monthly plans • No long lock-in</div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map(([title, desc, Icon]) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-yellow-500/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center gap-4">
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-yellow-500/10 ring-1 ring-yellow-500/25">
                  <Icon className="h-6 w-6 text-yellow-400 transition group-hover:scale-110" />
                  <span className="pointer-events-none absolute -left-14 top-0 h-full w-14 rotate-12 bg-white/30 blur-md opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                </div>

                <h3 className="text-lg font-semibold">{title}</h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{desc}</p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-yellow-200/90">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                Included in monthly plans
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
            </div>
          ))}
        </div>
      </section>

      {/* Work / Case Studies */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold md:text-3xl">Case Studies</h2>
        <p className="mt-2 text-zinc-300">
          Real work I do for clients: GMB SEO, Instagram handling, and YouTube management.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Case 1 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-400">Gym • Google Business Profile</div>
              <div className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">
                GMB SEO
              </div>
            </div>

            <img
              src={caseGmb}
              alt="GMB Case Study"
              className="mt-3 aspect-video w-full rounded-2xl object-cover border border-white/10"
              loading="lazy"
            />

            <h3 className="mt-4 text-lg font-semibold">Gym Growth via GMB Optimization</h3>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>Profile optimization: categories, services, keywords, and business info</li>
              <li>Weekly posts + photo updates for freshness</li>
              <li>Review strategy + professional replies</li>
              <li>Competitor analysis + local ranking improvements</li>
            </ul>
          </div>

          {/* Case 2 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-400">Gym • Instagram Management</div>
              <div className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">
                Social Growth
              </div>
            </div>

            <img
              src={caseInsta}
              alt="Instagram Case Study"
              className="mt-3 aspect-video w-full rounded-2xl object-cover border border-white/10"
              loading="lazy"
            />

            <h3 className="mt-4 text-lg font-semibold">Instagram Reels + Content Handling</h3>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>Reels strategy: hooks, captions, trending audio, and CTA</li>
              <li>Posting schedule + story highlights setup</li>
              <li>Professional design: posters, offers, transformations</li>
              <li>Engagement: comments & DM response support</li>
            </ul>
          </div>

          {/* Case 3 */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 md:col-span-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-400">YouTube • Channel Management</div>
              <div className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">
                Since last month
              </div>
            </div>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <img
                src={caseYt1}
                alt="YouTube Case Study 1"
                className="aspect-video w-full rounded-2xl object-cover border border-white/10"
                loading="lazy"
              />
              {/* ✅ Same image use kiya (caseYt2 error fix) */}
              <img
                src={caseYt1}
                alt="YouTube Case Study 2"
                className="aspect-video w-full rounded-2xl object-cover border border-white/10"
                loading="lazy"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">YouTube Uploads + SEO + Thumbnails</h3>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>Video uploading + titles, tags, descriptions (SEO)</li>
              <li>Thumbnail design + branding consistency</li>
              <li>Playlist organization + channel optimization</li>
              <li>Weekly performance tracking (views, CTR, retention)</li>
            </ul>

            <div
              ref={growthRef}
              className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_25px_rgba(234,179,8,0.18)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-sm text-zinc-300">Subscriber Growth</div>
                  <div className="mt-1 text-xl font-semibold">0 → 100K Subscribers</div>
                </div>

                <div className="text-sm text-zinc-300">
                  <span className="font-semibold text-yellow-300">
                    {countSubs.toLocaleString()}
                  </span>{" "}
                  / {targetSubs.toLocaleString()} •{" "}
                  <span className="text-yellow-300">{progress}%</span>
                </div>
              </div>

              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-zinc-800/70">
                <div
                  className="h-full rounded-full bg-yellow-500 transition-[width] duration-[1200ms] ease-out"
                  style={{ width: `${growthOn ? progress : 0}%` }}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-zinc-400">Last 28 days</div>
                  <div className="mt-1 text-lg font-semibold text-white">69.0K Views</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-zinc-400">Watch time</div>
                  <div className="mt-1 text-lg font-semibold text-white">442 hrs</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-zinc-400">New subs</div>
                  <div className="mt-1 text-lg font-semibold text-white">+5.1K</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-300">
                Scroll-triggered proof section. Replace numbers with your exact analytics screenshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold md:text-3xl">Pricing</h2>
        <p className="mt-2 text-zinc-300">Start small. Scale fast.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Starter", "₹3000/mo", ["8 posts", "4 reels", "Captions + hashtags", "Basic reporting"]],
            ["Growth", "₹7000/mo", ["12 posts", "8 reels", "Google profile optimization", "Monthly strategy call"]],
            ["Premium", "₹12000/mo", ["20 posts", "12 reels", "Ads setup + funnel", "Lead tracking support"]],
          ].map(([name, price, items]) => (
            <div key={name} className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
              <div className="text-sm text-zinc-300">{name}</div>
              <div className="mt-2 text-3xl font-bold text-white">{price}</div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    {i}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 block rounded-2xl bg-yellow-500 px-5 py-3 text-center text-sm font-semibold text-black hover:bg-yellow-400"
              >
                Choose {name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10">
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-yellow-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Get a Free Audit in 24 Hours</h2>
              <p className="mt-2 text-zinc-200/80">
                Send your business name + city + Instagram/Google link. We’ll reply with a short action report.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  className="rounded-2xl bg-yellow-500 px-5 py-3 text-center text-sm font-semibold text-black hover:bg-yellow-400"
                  href="https://wa.me/918700116436?text=Hi%20VisionX%2C%20I%20want%20a%20free%20digital%20audit.%20Business%20Name%3A%20%0ACity%3A%20%0AInstagram%20Link%3A%20%0AGoogle%20Link%3A%20"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Now
                </a>

                <a
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-zinc-100 hover:bg-white/10"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=visionxmediasolution@gmail.com&su=Free%20Digital%20Audit%20Request&body=Hi%20VisionX%2C%0A%0ABusiness%20Name%3A%0ACity%3A%0AInstagram%20Link%3A%0AGoogle%20Business%20Link%3A%0AWebsite%20(If%20any)%3A%0A%0AThanks"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email via Gmail
                </a>

                <a
                  className="group relative overflow-hidden rounded-2xl border border-yellow-500/40 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                  href="https://calendar.app.google/ekaRPseDvRD3yKoK9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative z-10">Schedule Strategy Call</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-400/30 to-yellow-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-full" />
                </a>
              </div>

              <p className="mt-4 text-xs text-zinc-200/70">
                Tip: For fastest response, message on WhatsApp with your Google Business + Instagram link.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm font-semibold">Fast Response</div>
                <div className="mt-1 text-sm text-zinc-200/80">Audit delivered within 24 hours.</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm font-semibold">Clear Action Plan</div>
                <div className="mt-1 text-sm text-zinc-200/80">What to do in the next 30 days.</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm font-semibold">Lead Focused</div>
                <div className="mt-1 text-sm text-zinc-200/80">Visibility + enquiries + calls.</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm font-semibold">What we need</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-200/80">
                  <li>Business name + city</li>
                  <li>Google Business link</li>
                  <li>Instagram / Website link</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} VisionX Media Solutions. All rights reserved.
      </footer>
    </div>
  );
}
