import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardList,
  Plane,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { processSteps } from "@/data/mock";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  MessageCircle,
  ClipboardList,
  Plane,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay },
});

const bannerHighlights = [
  "No IELTS Required",
  "Admission in 2–4 Weeks",
  "95% VISA Success Rate",
  "Offices in Rawalpindi & Lahore",
];

export default function CTASection() {
  return (
    <section
      id="apply"
      className="py-24 bg-white overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-4">
            <span
              className="w-1.5 h-1.5 rounded-full bg-blue-700"
              aria-hidden="true"
            />
            Simple 3-Step Process
          </span>
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4"
          >
            From Rawalpindi to <span className="text-blue-700">China</span> — In
            3 Steps
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Our streamlined process takes the complexity out of studying abroad.
            Most students receive their admission letter within 2–4 weeks.
          </p>
        </motion.div>

        {/* ── 3-step process ── */}
        <div className="relative mb-20">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 hidden lg:block"
            aria-hidden="true"
          />

          <ol
            className="grid sm:grid-cols-3 gap-6 lg:gap-10"
            aria-label="Admission process steps"
          >
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? MessageCircle;
              return (
                <motion.li
                  key={step.step}
                  {...fadeUp(i * 0.12)}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-blue-100 group-hover:border-blue-400 shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center mb-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-700 group-hover:bg-blue-800 transition-colors flex items-center justify-center">
                      <Icon
                        size={24}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-amber-400 text-slate-900 text-xs font-black flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-slate-900 font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* ── Main CTA Banner ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, #0d2255 0%, #1a3a8f 50%, #0d2255 100%)",
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          {/* Glow blobs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{ background: "#3b82f6", transform: "translate(30%, -30%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "#f59e0b", transform: "translate(-30%, 30%)" }}
            aria-hidden="true"
          />

          <div className="relative px-8 sm:px-12 py-14 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
                  <span
                    className="w-2 h-2 rounded-full bg-amber-400"
                    aria-hidden="true"
                  />
                  <span className="text-amber-300 text-xs font-bold tracking-wide uppercase">
                    2025 September Intake — Open Now
                  </span>
                </div>

                <h3 className="text-white font-black text-3xl sm:text-4xl leading-tight mb-4">
                  Start Your Medical Journey{" "}
                  <span className="text-amber-400">Today</span>
                </h3>
                <p className="text-blue-200 text-base leading-relaxed mb-6">
                  Over 5,000 Pakistani students have trusted NRZ International
                  for their MBBS admissions in China and Kyrgyzstan. Seats fill
                  up fast — apply now to secure your place.
                </p>

                {/* Highlights */}
                <ul
                  className="grid grid-cols-2 gap-2.5 mb-8"
                  aria-label="Key benefits"
                >
                  {bannerHighlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-blue-100 text-sm"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-amber-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/apply"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-xl group"
                  >
                    Apply Now — It's Free
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                  <a
                    href="tel:+923115171597"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-xl border border-white/20 transition-all"
                  >
                    <Phone size={18} aria-hidden="true" />
                    051 848 277
                  </a>
                </div>
              </div>

              {/* Right — Quick eligibility checklist */}
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-7">
                <p className="text-amber-300 text-xs font-bold uppercase tracking-widest mb-5">
                  Basic Eligibility Checklist
                </p>
                {[
                  ["Age", "17 – 25 years at the time of admission"],
                  [
                    "Qualification",
                    "FSc Pre-Medical (completed or awaiting results)",
                  ],
                  ["Minimum Grades", "55%+ in Biology, Chemistry & Physics"],
                  ["IELTS / TOEFL", "Not required for English-medium programs"],
                  [
                    "MDCAT",
                    "Not required before admission (required for licensing later)",
                  ],
                  ["Passport", "Valid Pakistani passport or CNIC"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 mb-3.5 last:mb-0"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-amber-400 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="text-white text-xs font-bold">
                        {label}:{" "}
                      </span>
                      <span className="text-blue-200 text-xs">{value}</span>
                    </div>
                  </div>
                ))}

                <div className="border-t border-white/10 mt-5 pt-5">
                  <a
                    href={`https://wa.me/923005050789?text=Hi NRZ, I'd like to know more about MBBS admissions`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    {/* WhatsApp text icon */}
                    <span
                      className="text-base"
                      role="img"
                      aria-label="WhatsApp"
                    >
                      💬
                    </span>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
