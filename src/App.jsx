import { useEffect, useRef, useState } from "react";
import logo from "./assets/logo.png";
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
                  Our Projects & Success
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

      {/* Our Clients */}
<section className="mx-auto max-w-6xl px-4 py-14">
  <h2 className="text-2xl font-bold md:text-3xl">
    Trusted By Businesses
  </h2>

  <p className="mt-2 text-zinc-300">
    Worked with growing brands across entertainment,
    education, technology and service industries.
  </p>

  <div className="mt-8 grid gap-4 md:grid-cols-3">
    {[
      {
        name: "Gem Tunes",
        work: "YouTube Content Operations, Upload Management, Metadata Optimization",
      },
      {
        name: "Gem Records",
        work: "Content Management & Digital Publishing",
      },
      {
        name: "Blue Moon Animation",
        work: "Digital Content Support & Channel Operations",
      },
      {
        name: "LIPMT",
        work: "Website & Digital Presence Support",
      },
      {
        name: "Crystal Smart Solution",
        work: "Business Website & Digital Services",
      },
      {
        name: "Unity Lift Solution",
        work: "Website & Lead Generation Support",
      },
    ].map((client) => (
      <div
        key={client.name}
        className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6"
      >
        <h3 className="text-xl font-semibold text-yellow-400">
          {client.name}
        </h3>

        <p className="mt-3 text-sm text-zinc-300">
          {client.work}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* =======================================================
PROJECTS & CLIENT SUCCESS
======================================================= */}

<section id="work" className="mx-auto max-w-7xl px-4 py-20">
  <div className="text-center">
    <h2 className="text-3xl md:text-5xl font-bold">
      Projects & Client Success
    </h2>


<p className="mt-4 max-w-3xl mx-auto text-zinc-300">
  Delivering digital growth solutions across content management,
  YouTube operations, website development, branding, SEO,
  automation and business growth strategies.
</p>


  </div>

{/* ================= CLIENTS ================= */}

  {/* <div className="mt-16">
    <h3 className="text-2xl font-semibold text-center">
      Brands We Have Worked With
    </h3>


<div className="mt-8 grid gap-4 md:grid-cols-3">
  {[
    "Gem Tunes",
    "Gem Records",
    "Blue Moon Animation",
    "LIPMT",
    "Crystal Smart Solution",
    "Unity Lift Solution",
  ].map((brand) => (
    <div
      key={brand}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 text-center hover:border-yellow-500/40 transition"
    >
      <h4 className="text-xl font-semibold text-yellow-400">
        {brand}
      </h4>
    </div>
  ))}
</div>


  </div> */}

{/* ================= PROJECTS ================= */}

  <div className="mt-20 grid gap-6 md:grid-cols-2">


{/* PROJECT 1 */}
<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
  <div className="flex justify-between items-center">
    <span className="text-zinc-400 text-sm">
      Digital Marketing & Local SEO
    </span>

    <span className="rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs text-yellow-300">
      Business Growth
    </span>
  </div>

  <h3 className="mt-4 text-2xl font-semibold">
    Google Business Profile Optimization
  </h3>

  <p className="mt-3 text-zinc-300">
    Improved local visibility and customer engagement through
    profile optimization, local SEO implementation and review management.
  </p>

  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
    <li>✓ Google Business Profile Optimization</li>
    <li>✓ Local SEO Strategy</li>
    <li>✓ Review Management</li>
    <li>✓ Competitor Analysis</li>
    <li>✓ Weekly Posts & Updates</li>
  </ul>
</div>

{/* PROJECT 2 */}
<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
  <div className="flex justify-between items-center">
    <span className="text-zinc-400 text-sm">
      Social Media Management
    </span>

    <span className="rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs text-yellow-300">
      Brand Growth
    </span>
  </div>

  <h3 className="mt-4 text-2xl font-semibold">
    Social Media Growth Management
  </h3>

  <p className="mt-3 text-zinc-300">
    Strategic content planning, reels creation, audience engagement
    and consistent branding across social platforms.
  </p>

  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
    <li>✓ Content Strategy</li>
    <li>✓ Reels & Short Form Content</li>
    <li>✓ Creative Design Support</li>
    <li>✓ Audience Engagement</li>
    <li>✓ Monthly Performance Tracking</li>
  </ul>
</div>

{/* PROJECT 3 */}
<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
  <div className="flex justify-between items-center">
    <span className="text-zinc-400 text-sm">
      YouTube Management
    </span>

    <span className="rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs text-yellow-300">
      Content Operations
    </span>
  </div>

  <h3 className="mt-4 text-2xl font-semibold">
    YouTube Channel Operations & SEO
  </h3>

  <p className="mt-3 text-zinc-300">
    Managing large-scale YouTube publishing workflows,
    metadata optimization and channel performance growth.
  </p>

  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
    <li>✓ Video Publishing</li>
    <li>✓ SEO Titles & Descriptions</li>
    <li>✓ Thumbnail Optimization</li>
    <li>✓ Playlist Management</li>
    <li>✓ Analytics & Performance Tracking</li>
  </ul>
</div>

{/* PROJECT 4 */}
<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
  <div className="flex justify-between items-center">
    <span className="text-zinc-400 text-sm">
      Software Development
    </span>

    <span className="rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs text-yellow-300">
      Automation
    </span>
  </div>

  <h3 className="mt-4 text-2xl font-semibold">
    Bulk Reminder Management System
  </h3>

  <p className="mt-3 text-zinc-300">
    Custom software solution designed to automate reminders,
    customer communication and campaign management.
  </p>

  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
    <li>✓ Campaign Management</li>
    <li>✓ CSV Upload System</li>
    <li>✓ Customer Database</li>
    <li>✓ Automated Reminder Flow</li>
    <li>✓ Reporting Dashboard</li>
  </ul>
</div>


  </div>

{/* ================= STATS ================= */}

  <div className="mt-20 grid gap-4 md:grid-cols-4">


<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
  <div className="text-4xl font-bold text-yellow-400">6+</div>
  <div className="mt-2 text-sm text-zinc-400">
    Brands Worked With
  </div>
</div>

<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
  <div className="text-4xl font-bold text-yellow-400">4+</div>
  <div className="mt-2 text-sm text-zinc-400">
    Years Experience
  </div>
</div>

<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
  <div className="text-4xl font-bold text-yellow-400">1000+</div>
  <div className="mt-2 text-sm text-zinc-400">
    Content Assets Managed
  </div>
</div>

<div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
  <div className="text-4xl font-bold text-yellow-400">100%</div>
  <div className="mt-2 text-sm text-zinc-400">
    Dedicated Support
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
            ["Starter", "₹8500/mo", ["8 posts", "4 reels", "Captions + hashtags", "Basic reporting"]],
            ["Growth", "₹10500/mo", ["10 posts", "8 reels", "Google profile optimization", "On Page SEO", "Off Page SEO", "Monthly Reports"]],
            ["Premium", "₹18500/mo", ["20 posts", "15 reels", "Ads setup + funnel", "On Page SEO", "Off Page SEO","GEO Targeting","Backlinks", "Weekly Reports"]],
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
